export const sketch = (p5) => {
  // Initial dimensions which will be updated on render
  let parentWidth = 720;
  let parentHeight = 400;

  // Sketch-specific variables
  let play;
  let rope;
  const nodesStart = 20;
  const r = 10;
  const maxForce = 0.9;
  const maxSpeed = 1;
  const desiredSeparation = 72;
  const maxEdgeLen = 10;
  const growthThreshold = 3000;

  let settings = {
    Sep: 1,
    Coh: 0.9,
  };

  p5.setup = () => {
    p5.createCanvas(parentWidth, parentHeight);

    // Sketch-specific code
    p5.strokeWeight(2);
    init();
    rope.render();
  };

  p5.draw = () => {
    p5.clear();

    // Sketch-specific code
    p5.stroke("darkslategrey");

    if (play) {
      rope.run();

      if (rope.getSize() >= growthThreshold) {
        play = false;
      }
    }

    rope.render();
  };

  // If window is resized, the sketch will be resized accordingly
  p5.updateWithProps = (props) => {
    if (
      props.parentWidth !== parentWidth ||
      props.parentHeight !== parentHeight
    ) {
      parentWidth = props.parentWidth;
      parentHeight = props.parentHeight;
      p5.resizeCanvas(parentWidth, parentHeight);

      // Sketch-specific code
      init();
    }
  };

  // Sketch-specific code
  const init = () => {
    rope = new Rope(maxForce, maxSpeed, desiredSeparation, maxEdgeLen);

    const angInc = p5.TWO_PI / nodesStart;
    let initial_rope = [];
    for (var a = 0; a < p5.TWO_PI; a += angInc) {
      var x = p5.width / 2 + r * p5.cos(a);
      var y = p5.height / 2 + r * p5.sin(a);
      initial_rope.push([x, y, false]);
    }

    initial_rope.forEach((attrs) => {
      for (let i in initial_rope) {
        const node = new Node(
          attrs[0],
          attrs[1],
          maxForce,
          maxSpeed,
          desiredSeparation,
          attrs[2]
        );
        rope.addNode(node);
      }
    });

    play = true;
  };

  class Node {
    constructor(x, y, mF, mS, dS, gS) {
      this.position = p5.createVector(x, y);
      this.velocity = p5.createVector(0, 0);
      this.acceleration = p5.createVector(0, 0);
      this.maxForce = mF;
      this.maxSpeed = mS;
      this.desiredSeparation = p5.sq(dS);
      this.dontGrow = gS;
    }

    applyForce(force) {
      this.acceleration.add(force);
    }

    update() {
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.maxSpeed);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }

    seek(target) {
      var desired = target.sub(this.position);
      desired = desired.setMag(this.maxSpeed);
      var steer = desired.sub(this.velocity);
      steer = steer.limit(this.maxForce);
      return steer;
    }

    separate(nodes) {
      var steer = p5.createVector(0, 0);
      var count = 0;

      for (let other of nodes) {
        var distance =
          p5.sq(this.position.x - other.position.x) +
          p5.sq(this.position.y - other.position.y);
        if (distance > 0 && distance < this.desiredSeparation) {
          var diff = p5.createVector(this.position.x, this.position.y);
          diff = diff.sub(other.position);
          diff.normalize();
          diff.div(p5.sqrt(distance));
          steer.add(diff);
          count++;
        }
      }
      if (count > 0) {
        steer.div(count);
      }
      if (steer.mag() > 0) {
        steer.setMag(this.maxSpeed);
        steer.sub(this.velocity);
        steer.limit(this.maxForce);
      }
      return steer;
    }

    cohesion(nodes) {
      var sum = p5.createVector(0, 0);

      var this_index = nodes.indexOf(this);

      if (this_index !== 0 && this_index !== nodes.length - 1) {
        sum = sum.add(nodes[this_index - 1].position);
        sum = sum.add(nodes[this_index + 1].position);
      } else if (this_index === 0) {
        sum = sum.add(nodes[nodes.length - 1].position);
        sum = sum.add(nodes[this_index + 1].position);
      } else if (this_index === nodes.length - 1) {
        sum = sum.add(nodes[this_index - 1].position);
        sum = sum.add(nodes[0].position);
      }

      sum = sum.div(2);

      return this.seek(sum);
    }

    display() {
      p5.point(this.x, this.y);
    }
  }

  class Rope {
    constructor(mF, mS, dS, eL) {
      this.nodes = [];
      this.maxSpeed = mF;
      this.maxForce = mS;
      this.desiredSeparation = dS;
      this.maxEdgeLen = eL;
    }

    addNode(node) {
      this.nodes.push(node);
    }

    addNodeAt(node, idx) {
      this.nodes.splice(idx, 0, node);
    }

    differentiate() {
      for (let node of this.nodes) {
        var separation = node.separate(this.nodes);
        var cohesion = node.cohesion(this.nodes);

        separation.mult(settings.Sep);
        cohesion.mult(settings.Coh);

        node.applyForce(separation);
        node.applyForce(cohesion);
        node.update();
      }
    }

    growth() {
      for (let i = 0; i < this.nodes.length - 1; i++) {
        var n1 = this.nodes[i];
        var n2 = this.nodes[i + 1];
        var d = n1.position.dist(n2.position);
        if (d > this.maxEdgeLen) {
          var middlePosition = n1.position.add(n2.position).div(2);
          const node = new Node(
            middlePosition.x,
            middlePosition.y,
            this.maxForce,
            this.maxSpeed,
            this.desiredSeparation,
            true
          );
          this.addNodeAt(node, i + 1);
        }
      }
    }

    getSize() {
      return this.nodes.length;
    }

    run() {
      this.differentiate();
      this.growth();
    }

    render() {
      for (let i = 0; i < this.nodes.length; i++) {
        let p1 = this.nodes[i].position;
        let p2;
        if (i === this.nodes.length - 1) p2 = this.nodes[0].position;
        else p2 = this.nodes[i + 1].position;
        p5.line(p1.x, p1.y, p2.x, p2.y);
      }
    }
  }
};
