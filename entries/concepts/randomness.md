---
title: Randomness
type: concept
description:
creator: Camilo Cruz
rights: Public Domain (CC0)
---

# Randomness

The intent of this article is to explore the concept of randomness and how it relates to creative generative systems. Here you will find a general definition of randomness, and overview of how it is useful in the context of computational generative methods, along with an interactive example of a simple (pseudo)random number generator, and references to generative artwork that makes use of randomness.

In the arts, randomness, understood as the apparent lack of pattern or order, has been used as inspiration for the generation of paintings, graphics and 3D art. Pervasive as randomness is in computer-based art, records of Leonardo daVinci using ,


## How Is Randomness Generated?

Even though the whole existence of randomness is the focus of an ongoing debate, natural phenomena all around us seem to exhibit random behaviours [thermal noise, atmospheric noise, and the photoelectric effect to name a few]. Some of these phenomena are harnessed to generate random numbers, which are in turn useful to simulate non-deterministic behaviour and phenomena.

Random generators are usually physical machines (hardware) that produce random output as a function of multiple environmental conditions that are statistically impossible to predict. For instance, random.org is a service that generates random numbers using atmospheric noise. Software solutions, on the other hand, are harder to achieve, as computers operate in a deterministic manner. The use of pseudo random number generators, which generate series of seemingly random numbers algorithmically, based on a given state of the generator, is the go-to solution. Even though the numbers produced using this approach are not truly random, they can still be used in various applications, like sampling and simulating natural phenomena. Additionally, these series of pseudo-random numbers are repeatable, which makes them useful in experimental settings.
To illustrate how pseudo-random numbers can be generated, here is an example of a Linear congruential generator (LCG), which uses a recursive linear function and the modulo operator to generate series of random numbers.

## Applied example(s) 
[Random Walk with no self intersection](/entries/examples/random-walk-no-self-intersection/)

## Definition

Randomness is a concept that is well integrated into our common speech, however it escapes unequivocal definitions. The word random is commonly used to describe either things that happen by chance –unexpectedly or with no discernible cause–, or to characterise collections or series of things that don’t seem to have any discernible pattern or order. In both cases randomness is associated with the apparent (or actual) lack of patterns, which in turn make their comprehension harder. An example that helps towards a definition are random numbers. A random number is one drawn from a pool of numbers in which each one of them has the same probability of being drawn (uniform distribution). In a sequence of random numbers, each draw is statistically independent from one another (random.org/randomness). However, the probability of obtaining the series
```
        a) 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1
```
after 20 coin tosses is the same as the probability of getting 

```
        b) 0 0 1 0 0 0 0 0 1 1 0 0 0 0 1 0 1 1 1 1
```
even though series a) does not look random.
Information theory provides a quantitative definition of randomness, which is associated with noise, understood as perturbations to a signal, which interferes with the decoding process (this concept has been used to generate ‘smooth randomness’ as in Perlin noise). Shannon’s entropy measures the ratio between the minimum amount of information required to transmit a message and the information contained in the message itself. For instance, a simple message –like a series of one hundred 1s– can be transmitted as a set of instructions that is much shorter than the message itself. Thus, the ratio between information required to send the message and information contained in the message itself is relatively small (close to 0). On the other end of the spectrum, the only way of transmitting a totally random combination of one hundred binary digits is by sending the message in full, in which case the ratio of information to message is 1.

## How is randomness used?
With the realisation that the world that surrounds us does not behave in deterministic ways, scientists have resorted to probability –chance– to develop models to enable its understanding. Sampling from large populations to This is how randomness is used in computational modelling, and consequently, how it seeps into generative systems, as a means to produce variation
- Probability
- Sampling (see this reference)
- Resource allocation (ethernet protocol)
- Making algorithm outputs non-deterministic
In generative systems for creativity, randomness plays a fundamental role. as the driver of agency (Barriere 2019). Accidentality/accident