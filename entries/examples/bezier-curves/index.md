---
title: Bezier Curves

type: example

description:

creator: Camilo Cruz Gambardella

rights: Public Domain (CC0)

thumbnail:

tags: curves, line drawing
---

# Bezier Curves

Introduced by engineer Pierre Bezier in 1960, as a tool for automotive design, a Bezier curve is a mathematical representation of a smooth continuous curve, defined as a series of interpolations between control points. A more detailed account of their history can be found in [4](#4), and a more in-depth description of their mathematical characteristics is provided in [3](#3), but for the purpose of this repository, what is important is the fact that Bezier curves became a fundamental for the development of powerful computer graphics tools.

## How they work

Although the mathematics of Bezier curves are relatively simple, they can be intimidating for those of us  
For the example presented below, we have chosen the 'simple' way of constructing Bezier curves: linear interpolations ('lerps'). In essence, what *lerps* do is find values between two other values. For instance, a 3 step *lerp* between 0 and 3 should find the values at 33% and 66% of the way between the two values. This will return the series [0, 1, 2, 3], where 0 and 3 are the endpoints and 1 and 2 are the interpolation values.
To construct a Bezier curve we do recursive *lerps* between control points. So, if we have 2 control points – a linear Bezier – the curve is defined by the series of points between them, which returns a straight line. With three control points – quadratic Bezier – we first connect the series of interpolation points between  o picking a point between two other points.



## A live example

<iframe height="500" style="width: 90%" scrolling="no" title="Bezier Curve" src="https://codesandbox.io/embed/github/GenArtRepo/bezier-curve/tree/main/?fontsize=14&hidenavigation=1&theme=dark?module=sketch.js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"
></iframe>

## Related Entries

## References

1. <a name="1">[Heckel, M. (2021) Cubic Bezier: from math to motion](https://blog.maximeheckel.com/posts/cubic-bezier-from-math-to-motion/)</a>
2. <a name="2">[Wong, J. (2016) Bezier Curves from the ground up](https://jamie-wong.com/post/bezier-curves/)</a>
3. <a name="3">[Kamermans, M. (2020) A Primer on Bezier Curves](https://pomax.github.io/bezierinfo/)</a>
4. <a name="4">[Barnhart, B. (2022) The Birth of Bézier Curves & How It Shaped Graphic Design](https://www.vectornator.io/blog/bezier-curves/)</a>