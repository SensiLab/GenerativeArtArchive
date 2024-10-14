---
title: Flocking

type: example

description: Flocking algorithms simulate the collective movement of groups, like birds in flight or fish in a school. They are used to create dynamic, lifelike patterns and behaviors.

creator: Craig Reynolds

author: Cristian Rojas Cardenas

rights: Public Domain (CC0)

tags: cellular-automata, complexity, flocking

thumbnail: ./imgs/flocking.png
---

# Flocking

![A flock of starlings with a nearby predator](imgs/flocking1.jpeg)

Image credit: [Mostafa Meraji (Mostafameraji)](https://commons.wikimedia.org/wiki/File:Starling_flock_with_nearby_predator.jpg)

The flocking algorithm is a behaviour model that has been used in computer graphics, robotics, and artificial life simulations. This algorithm simulates the coordinated movement of a flock of birds, where each bird follows three simple rules: alignment, cohesion, and separation. The flocking algorithm was first introduced by Craig Reynolds in 1986 ([1](#1)) and has since been widely used in various fields.

## How it works

The flocking algorithm is based on three simple rules that each boid, – the represntation of a bird – in the flock follows to achieve a coordinated movement. These rules include:

### Alignment:

Each boid tends to steer towards the average heading of its neighbors.

### Cohesion:

Each boid tends to steer towards the average position of its neighbors.

### Separation:

Each boid tends to steer away from its neighbors to avoid collisions.

By following these rules, the flock of boids can achieve a coordinated movement that mimics the movement of natural flocks.

## A live example

In the example shown below, different weights can be assigned to each individual behaviour, to create variation in the overall behaviour of the flock.

<iframe height="500" style="width: 100%" scrolling="no" title="Slime Mould Simulations" src="https://codesandbox.io/embed/github/GenArtRepo/flocking/tree/main/?fontsize=14&hidenavigation=1&theme=dark&module=sketch.js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

## Applications and examples

The flocking algorithm has been used in generative art to create unique and dynamic visual representations of natural phenomena. One example of this is [Generative Boids](https://tholman.com/post/generative-boids/), in which Tim Holman combines autonomous agents with digital painting to produce visualizations that display organic shapes and patterns such as the movement of schools of fish or the flocking of birds.

Another example of the use of the flocking algorithm in creative applications is [Swarm Urbanism](https://www.kokkugia.com/swarm-urbanism) by Kokkugia. This project uses the flocking algorithm to simulate the movement of people in urban spaces, with the aim of creating more efficient and dynamic urban environments.

## References

<a name="1"></a>1. Reynolds, C. W. (1999, March). [Steering behaviors for autonomous characters.](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.86.636&rep=rep1&type=pdf) In Game developers conference (Vol. 1999, pp. 763-782).

<a name="2"></a>2. Reynolds, C. W. (1987, August). [Flocks, herds and schools: A distributed behavioral model.](http://www.naturewizard.at/papers/flocks%20-%20p25-reynolds.pdf) In Proceedings of the 14th annual conference on Computer graphics and interactive techniques (pp. 25-34).
