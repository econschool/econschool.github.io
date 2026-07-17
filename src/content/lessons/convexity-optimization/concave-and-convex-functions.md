---
title: Concave and convex functions
order: 2
summary: Convexity carried from sets over to functions — the shapes that make maximisation and minimisation behave.
youtube: NSkV2IOCSPw
draft: false
---

## Definition

Let $S \subseteq \mathbb{R}^n$ be convex and $f : S \to \mathbb{R}$. Then $f$ is **concave** if for all $x, x' \in S$ and all $\lambda \in [0, 1]$,

$$f\big(\lambda x + (1-\lambda)x'\big) \ge \lambda f(x) + (1-\lambda) f(x').$$

$f$ is **convex** if the reverse inequality ($\le$) holds, and **strictly** concave or convex if the inequality is strict whenever $x \ne x'$ and $\lambda \in (0, 1)$.

Read geometrically: the chord joining two points on the graph lies *below* a concave function and *above* a convex one. The domain must be convex so that $\lambda x + (1-\lambda)x'$ lies in $S$ and $f$ of it is defined — exactly the segment condition from Lesson 1.

<!-- FIGURE: concave vs convex — chord below graph (concave), chord above graph (convex). Brand palette, TikZ. -->

## Key properties

**Sign symmetry.** $f$ is convex if and only if $-f$ is concave. 

**Upper contour sets.** If $f$ is concave, then for every $c$ the set $\{x \in S : f(x) \ge c\}$ is convex (proved below). This is the bridge back to Lesson 1: concave utility produces convex preferences.

## In economics

**First-order conditions become sufficient.** The result the course is built toward: if $f$ is concave and $S$ is convex, any interior point $x^*$ with $\nabla f(x^*) = 0$ is a global maximum — no second-order test, no comparison of candidates. 


## Worked examples

**Example 1 — an affine function is both concave and convex.** Let $f(x) = a \cdot x + b$. Then

$$f\big(\lambda x + (1-\lambda)x'\big) = \lambda\,(a \cdot x) + (1-\lambda)\,(a \cdot x') + b = \lambda f(x) + (1-\lambda) f(x').$$

The defining inequality holds with equality, so both the concave ($\ge$) and convex ($\le$) conditions hold. Affine functions are the only functions that are simultaneously concave and convex.

**Example 2 — a concave function's upper contour sets are convex.** Let $f : S \to \mathbb{R}$ be concave on a convex set $S$, fix $c$, and set $U = \{x \in S : f(x) \ge c\}$. Take $x, x' \in U$, so $f(x) \ge c$ and $f(x') \ge c$. For $\lambda \in [0, 1]$, concavity gives

$$f\big(\lambda x + (1-\lambda)x'\big) \ge \lambda f(x) + (1-\lambda) f(x') \ge \lambda c + (1-\lambda) c = c,$$

so $\lambda x + (1-\lambda)x' \in U$. Hence $U$ is convex — which is precisely why concave utility gives convex preferences.

## Exercises

1. Show directly from the definitions that $f$ is convex if and only if $-f$ is concave.
2. Show that if $f$ and $g$ are concave and $\alpha, \beta \ge 0$, then $\alpha f + \beta g$ is concave.
3. Show that if $f$ is convex then each lower contour set $\{x \in S : f(x) \le c\}$ is convex.
4. Show that the pointwise minimum $\min\{f, g\}$ of two concave functions is concave.