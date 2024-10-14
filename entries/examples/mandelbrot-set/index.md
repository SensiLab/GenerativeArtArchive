---
title: Mandelbrot Set

type: example

description: The Mandelbrot Set is one of the most famous examples of mathematical beauty. It’s a complex fractal that reveals infinite detail the more you zoom in, creating mesmerizing patterns.

creator: Cristian Rojas Cardenas

rights: Public Domain (CC0)

tags: self-similarity, artist-friendly, fractals

thumbnail: imgs/Mandel_zoom_00_mandelbrot_set.jpeg
---

# Mandelbrot Set

![Mandelbrot Set](imgs/Mandel_zoom_00_mandelbrot_set.jpeg)

Image Credit: [Wolfgang Beyer](https://commons.wikimedia.org/wiki/User:Wolfgangbeyer)

The Mandelbrot Set is a visual representation of a mathematical formula, but it looks more like a work of art. At its core, it’s a fractal, meaning it has patterns that repeat at every scale, no matter how far you zoom in. Each part of the Mandelbrot Set is made by taking complex numbers, running them through a simple equation, and seeing how they behave. The result? A stunning, infinitely detailed pattern that starts with a recognizable shape — a "bulb" surrounded by intricate spirals, branches, and shapes that look like galaxies, flowers, or waves. As you explore deeper into the Mandelbrot Set, new patterns emerge, each more complex and unexpected than the last, making it a favorite source of inspiration for generative artists.

## How it works

The Mandelbrot Set is the set of complex numbers c for which the sequence of numbers obtained by iteratively calculating the quadratic function

$$
Z_{n} = Z_{n-1}^2 + C
$$

where $C$ is a constant and $Z$ starts at zero, does not escape to infinity, no matter how many iterations you apply. If, after many iterations, the value of $Z$ remains bounded (doesn't grow without limit), then the corresponding value of $C$ is part of the Mandelbrot Set.

Visually, this creates a fascinating, infinitely detailed fractal pattern. When plotted, the Mandelbrot Set reveals intricate, self-similar shapes. These shapes appear at different scales, no matter how deeply you zoom into the fractal, and provide endless inspiration for generative art and mathematical exploration.

## A live example

<iframe height="500" style="width: 100%" scrolling="no" title="Mandelbrot Set" src="https://codesandbox.io/embed/github/GenArtRepo/mandelbrot-set/tree/main/?fontsize=14&hidenavigation=1&theme=dark&module=sketch.js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
