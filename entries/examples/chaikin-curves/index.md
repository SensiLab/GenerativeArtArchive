---
title: Chaikin Curves

type: example

description:

code: Camilo Cruz Gambardella

creator: Camilo Cruz Gambardella

rights: Public Domain (CC0)

thumbnail: 

tags: curves, line drawing
---

# Chaikin Curves

Presented by George Chaikin in 1974 [1], the Chaikin Curves algorithm is recognised as one of the first curve-refinement procedures [2]. The particularity of this approach is that it works directly with the control polygon by "cutting corners", rather than taking an analytical approach like Bezier Curves. Chaikin curves have become a popular tool for generative artists who want to create smooth, curved shapes and patterns in their artwork. This post will explain how the algorithm works and provide some examples of its applications in generative art.

## How it works

The Chaikin curve algorithm works by iteratively refining a line segment into a sequence of line segments that become progressively smoother and more curved. Here's how it works in detail:

- Start with a line segment defined by two endpoints.
- Subdivide the line segment into two smaller segments by finding the midpoint and connecting it to the endpoints.
- Move each endpoint slightly toward the midpoint to create a new set of endpoints.
- Connect the new endpoints to create a new set of line segments.
- Repeat the process for the new set of line segments, and continue iterating until the desired level of smoothness is achieved.

The amount of movement at each step and the number of iterations can be adjusted to control the level of smoothness and curvature in the resulting shape.

## A live example

  <iframe height="500" style="width: 90%" scrolling="no" title="Differential growth" src="https://codesandbox.io/embed/github/GenArtRepo/chaikin-curves/tree/main/?fontsize=14&hidenavigation=1&theme=dark?module=sketch.js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

## Applications and examples

Chaikin curves are a versatile tool for generative artists and can be used to create a wide range of shapes and patterns. Here are some examples:

- "Recreating the Noise Orbit" (tutorial) by Stevan Dedovic.
- "Chaikin" by Pedro Cacique is a live implementation of a Chaikin Curve framed like a picture.
  
Chaikin curves can be combined with other algorithms to create even more complex and visually striking shapes and patterns. By adjusting the parameters of the algorithm and experimenting with different combinations, generative artists can create truly unique and captivating pieces of art.

## References

1. <a name="1">Chaikin, G. M. (1974). An algorithm for high-speed curve generation. Computer graphics and image processing, 3(4), 346-349.</a>
2. <a name="2">Joy, K. I. (1999). Chaikin’s algorithms for curves. Visualization and Graphics Re.</a>
3. <a name="3">[Dedovic, S. (2021) Recreating the Noise Orbit](https://www.generativehut.com/post/recreating-the-noise-orbit)</a>