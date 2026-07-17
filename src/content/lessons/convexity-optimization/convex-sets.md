---
title: Convex sets
order: 1
summary: The segment condition, the intersection property, and the convex sets optimization relies on.
youtube: uzDtvgUcZj8
draft: false
---

## Definition

A set $S \subseteq \mathbb{R}^n$ is **convex** if for all $x, x' \in S$ and all $\lambda \in [0, 1]$,

$$\lambda x + (1 - \lambda)\, x' \in S.$$

The point $\lambda x + (1-\lambda)x'$ is a **convex combination** of $x$ and $x'$; as $\lambda$ runs from $0$ to $1$ it traces the segment from $x'$ to $x$. So: a set is convex when the segment joining any two of its points stays inside it.

To show a set is *not* convex, exhibit one pair whose segment leaves it. A disk and a half-space $\{x : a \cdot x \le b\}$ are convex; an annulus and the union of two disjoint disks are not.

<!-- FIGURE: convex vs non-convex — disk (convex), annulus (segment crosses hole). Brand palette, TikZ. -->

## Key properties

**Intersection.** If each $S_i$ is convex, so is $\bigcap_i S_i$. *Proof:* if $x, x' \in \bigcap_i S_i$ then both lie in every $S_i$, so for $\lambda \in [0,1]$ the point $\lambda x + (1-\lambda)x'$ lies in every $S_i$, hence in the intersection.

This is the property that does the work: most convex sets in economics are convex because they are intersections of convex sets. (The *union* of convex sets need not be convex — the two-disk example.)

## In economics

**Budget set.** $B = \{x \in \mathbb{R}^n : x \ge 0,\ p \cdot x \le M\}$ is an intersection of half-spaces ($x_i \ge 0$ for each $i$, and $p \cdot x \le M$), so it is convex. 

**Convex preferences.** Preferences are convex when each upper contour set $\{x' : x' \succeq x\}$ is convex — averages are weakly preferred to extremes.

## Worked examples

**Example 1 — a half-space is convex.** Let $H = \{x : a \cdot x \le b\}$. Take $x, x' \in H$, so $a \cdot x \le b$ and $a \cdot x' \le b$. For $\lambda \in [0,1]$,

$$a \cdot \big(\lambda x + (1-\lambda)x'\big) = \lambda\,(a \cdot x) + (1-\lambda)\,(a \cdot x') \le \lambda b + (1-\lambda) b = b,$$

so $\lambda x + (1-\lambda)x' \in H$. Hence $H$ is convex.

**Example 2 — the budget set is convex.** Write $B = \big(\bigcap_{i=1}^{n} \{x : x_i \ge 0\}\big) \cap \{x : p \cdot x \le M\}$. Each piece is a half-space, so convex by Example 1; $B$ is their intersection, so convex. 

## Exercises

1. Prove directly from the definition that the intersection of two convex sets is convex.
2. Give two convex sets whose union is not convex, and name the segment that escapes.
3. Show that the unit simplex $\Delta = \{x \in \mathbb{R}^n : x \ge 0,\ \sum_i x_i = 1\}$ is convex.
4. Show that if $S$ is convex then so are $tS = \{tx : x \in S\}$ for $t \ge 0$ and $S + v = \{x + v : x \in S\}$.