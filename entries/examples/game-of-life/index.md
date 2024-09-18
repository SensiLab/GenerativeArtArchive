---
title: Conway's Game of Life

type: example

description: Conway's Game of Life simulates how simple rules can create complex patterns. Despite its simplicity, the Game of Life has been used to explore complex behaviors in art, science, and nature.

creator: Cristian Rojas Cardenas

rights: Public Domain (CC0)

tags: dynamic-systems, complex-systems, cellular-automata

thumbnail: imgs/gol_thumbnail.png
---

# Conway's Game of Life

![Game of Life example](imgs/Conways-Game-of-Life2-small.jpg)

Conway's Game of Life, created by mathematician John Conway in 1970 [1], is a type of [cellular automaton](../../algorithms/cellular-automata/), where cells in a grid follow a set of simple rules. Each cell is either "alive" or "dead," and its state in the next generation depends on the number of alive neighbors it has.

The rules are simple: if a cell has two or three live neighbors, it stays alive, otherwise it dies. If a dead cell has exactly three live neighbors, it becomes alive. These simple rules can lead to surprisingly complex and beautiful patterns as the grid evolves over time, including stable formations, oscillating structures, and patterns that seem to move across the grid.

The Game of Life has fascinated artists and scientists alike because of its ability to simulate complex behaviors from simplicity, and it remains a popular tool for creating generative art today.

## How it works

As suggested by the name, _life_ draws concepts from naturally occurring phenomena to define the behaviour of _organisms_ living on a grid that is updated in discrete time steps. On the grid, each cell has eight neighbours, and can be either dead or alive. The state of the cells are updated syncronously based on the following rules:

```
For each cell in the grid:
    Count the number of alive neighbors (adjacent cells)

    If the cell is alive:
        If the number of alive neighbors is less than 2:
            The cell dies (underpopulation)
        Else if the number of alive neighbors is 2 or 3:
            The cell stays alive
        Else if the number of alive neighbors is greater than 3:
            The cell dies (overpopulation)

    If the cell is dead:
        If the number of alive neighbors is exactly 3:
            The cell becomes alive (reproduction)
```

## A live example

<iframe height="500" style="width: 900px" scrolling="no" title="Game of Life" src="https://codepen.io/crarojasca/embed/gOoXraW" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

## References

1. Gardner, M. (1970) Mathematical Games, The fantastic combinations of John Conway's new solitaire game _"life"_.
