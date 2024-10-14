---
title: Reaction Diffusion

type: example

description: Reaction-diffusion algorithms simulate chemical reactions spreading over a surface, creating intricate, organic patterns. These algorithms are often used to produce textures resembling natural forms like animal skins or coral.

code: Cristian Rojas Cardenas

author: Camilo Cruz Gambardella

rights: Public Domain (CC0)

tags: physics-simulation, complexity, cellular-automata

thumbnail: ./imgs/rd_thumb.png
---

# Reaction Diffusion

Reaction-diffusion simulations are a class of mathematical models used to simulate complex system, such as the interactions between chemical components that react to each other and move in space via diffusion [1](#1), among others found in nature. One of the most intriguing applications of reaction-diffusion simulations is in generative art, where they can be used to create stunning visual representations of natural patterns and processes.

## How it works

At their core, reaction-diffusion simulations rely on two fundamental concepts: activators and inhibitors. Activators are substances that promote the formation of a pattern, while inhibitors are substances that suppress the formation of the pattern. These two substances interact with each other through a process known as diffusion, which describes how particles move from areas of high concentration to areas of low concentration. Through this interaction, complex patterns can emerge over time, creating a variety of mesmerizing visual effects.

For the implementation of a computational simulation of a reaction-diffusion system, the following steps are required:

- Defining the initial state of the system, including the concentration of the activator and inhibitor.
- Defining the reaction rules, including the rate at which the activator and inhibitor react with each other.
- Setting up diffusion rules, including the rate at which the activator and inhibitor diffuse through the system.
- Using a grid or mesh to represent the system and its boundaries.
  Using numerical methods to solve the equations that describe the behavior of the system over time.

## A live example

<iframe height="500" style="width: 90%" scrolling="no" title="Reaction Diffusion" src="https://codesandbox.io/embed/github/GenArtRepo/reaction-diffusion/tree/main/?fontsize=14&hidenavigation=1&theme=dark?module=sketch.js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

## Applications and examples

The applications of reaction-diffusion simulations in generative art are numerous and varied. Some artists use these simulations to create organic and abstract patterns, while others use them to simulate natural phenomena such as the growth of coral reefs or the formation of clouds. Karl Sims and Jared Tarbell are two notable artists who have used reaction-diffusion simulations in their work, creating stunning and dynamic visual representations of natural patterns and processes.

## References

<a name="1"></a>1. Nicolis, G. and De Wit, A. (2007) Reaction-diffusion systems. Scholarpedia, 2(9):1475. ([accessed here](http://www.scholarpedia.org/article/Reaction-diffusion_systems))
