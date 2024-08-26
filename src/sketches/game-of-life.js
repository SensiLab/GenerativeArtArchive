export const sketch = (p5) => {
  // Initial dimensions which will be updated on render
  let parentWidth = 720;
  let parentHeight = 400;

  // Sketch-specific variables
  let columns;
  let rows;
  let board;
  let next;
  let cellSize = 25;

  p5.setup = () => {
    p5.createCanvas(parentWidth, parentHeight);

    // Sketch-specific code
    p5.frameRate(10);
    initializeGame();
  };

  p5.draw = () => {
    p5.clear();

    // Sketch-specific code
    generate();
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if (board[i][j] === 1) p5.fill(0);
        else p5.noFill();
        p5.noStroke();
        p5.rect(i * cellSize, j * cellSize, cellSize, cellSize);
      }
    }
  };

  // Sketch-specific code
  const createBoard = () => {
    return new Array(columns).fill().map(() => new Array(rows).fill(0));
  };

  // Sketch-specific code
  const init = () => {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if (i === 0 || j === 0 || i === columns - 1 || j === rows - 1)
          board[i][j] = 0;
        else board[i][j] = p5.floor(p5.random(2));
        next[i][j] = 0;
      }
    }
  };

  // Sketch-specific code
  const generate = () => {
    for (let x = 1; x < columns - 1; x++) {
      for (let y = 1; y < rows - 1; y++) {
        let neighbors = 0;
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            neighbors += board[x + i][y + j];
          }
        }
        neighbors -= board[x][y];

        if (board[x][y] === 1 && neighbors < 2) next[x][y] = 0;
        else if (board[x][y] === 1 && neighbors > 3) next[x][y] = 0;
        else if (board[x][y] === 0 && neighbors === 3) next[x][y] = 1;
        else next[x][y] = board[x][y];
      }
    }

    let temp = board;
    board = next;
    next = temp;
  };

  // Sketch-specific code
  const initializeGame = () => {
    columns = p5.floor(parentWidth / cellSize);
    rows = p5.floor(parentHeight / cellSize);
    board = createBoard();
    next = createBoard();
    init();
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
      initializeGame();
    }
  };
};
