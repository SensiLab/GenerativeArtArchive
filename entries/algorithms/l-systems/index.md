---
title: L-Systems

type: algorithm

description: L-systems are used to create natural-looking patterns like trees and plants. Starting with a simple string of symbols and repeatedly applying rules to grow more complex shapes, they are inspired by how plants grow.

creator: Aristide Lindenmayer

author: Camilo Cruz Gambardella

rights: Public Domain (CC0)

tags: complex-systems, shape-grammar, complexity, artist-friendly, map-generation, fractals, self-similarity

thumbnail: imgs/l-system.png
---

# L-Systems

L-systems are a type of formal grammar that generate fractal patterns and shapes through parallel re-writing and recursion. They were invented by Hungarian theoretical biologist, Aristid Lindenmayer, in 1968 as a way to model the growth of plants and the development of organisms [1](#1). L-systems can generate a variety of complex patterns and shapes, including fractals, which is why they are widely used in computer graphics, generative art, and algorithmic design. The recursive nature of L-systems allows for infinite variations and customizations, making them a versatile tool for creative exploration.

## How they work

L-systems work by defining a set of replacement rules. These rules are applied recursively to an initial string – the _axiom_ –, producing new strings that can be interpreted as instructions for drawing patterns or shapes. The characters in the string represent actions or commands, such as moving forward, turning, or drawing a line.

As an example, let's use the following rules:

- A -> AB
- B -> A

If these rules are recursively applied to the axiom A:

- Iteration 1: A -> AB
- Iteration 2: AB -> ABA
- Iteration 3: ABA -> ABAAB

## A live example

<iframe height="500" style="width: 90%" scrolling="no" title="L-System" src="https://codesandbox.io/embed/github/GenArtRepo/l-systems/tree/main/?fontsize=14&hidenavigation=1&theme=dark&module=sketch.js&hidedevtools=1" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

## Applications and examples

- Jon McCormack's 7 sisters?

## References

<a name="1"></a>1. Lindenmayer, A. (1968). [Mathematical models for cellular interactions in development I. Filaments with one-sided inputs.](http://www0.cs.ucl.ac.uk/staff/p.bentley/teaching/L6_reading/lsystems.pdf) Journal of theoretical biology, 18(3), 280-299.

<a name="2"></a>2.
