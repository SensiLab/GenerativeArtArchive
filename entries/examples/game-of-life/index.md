---
title: Conway's Game of Life

type: example

description: Game of Life is a 2D implementation of a cellular automaton in which complex behaviours emerge from a set of simple update rules. 

creator: Cristian Rojas Cardenas

rights: Public Domain (CC0)

keywords: cellular-automata, complexity, emergence

thumbnail: ./imgs/gol_thumbnail.png
---

# John Conway's Game of Life

![Conways Game of Life on a LED Matrix](./imgs/Conways-Game-of-Life2.jpg)

Image credit: [Simon Waldherr on commons.wikimedia.org](https://commons.wikimedia.org/wiki/User:SimonWaldherr)

Developed by John Conway as a mathematical game [1], _life_ is a [cellular automaton](../../algorithms/cellular-automata/index.md) that, despite its simple rules, is capable of producing a large variety of complex shapes and behaviours.

## How it works

As suggested by the name, _life_ draws concepts from naturally occurring phenomena to define the behaviour of _organisms_ living on a grid that is updated in discrete time steps. On the grid, each cell has eight neighbours, and can be either dead or alive. The state of the cells are updated syncronously based on the following rules:
- If a cell is alive:
  - and it has 2 or 3 live neighbours, the cell stays alive.
  - Otherwise, the cell dies.
- If a cell is dead, but has exactly 3 live neighbours, it'll come to life in the next time step.

## A live example

<iframe height="500" style="width: 100%" scrolling="no" title="Game of Life" src="https://codesandbox.io/embed/github/GenArtRepo/game-of-life/tree/main/?fontsize=14&hidenavigation=1&theme=dark&module=sketch.js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<!-- <iframe src="https://codesandbox.io/embed/github/GenArtRepo/game-of-life/tree/main/?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="GenArtRepo/game-of-life"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe> -->

## References

1. Gardner, M. (1970) Mathematical Games, The fantastic combinations of John Conway's new solitaire game _"life"_.