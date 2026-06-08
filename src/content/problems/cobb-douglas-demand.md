---
title: "Cobb–Douglas demand"
summary: "Derive the Marshallian demands for a Cobb–Douglas consumer."
type: solved
topics: ["consumer theory", "optimisation"]
level: Beginner
date: 2026-06-08
---

A consumer has utility $u(x, y) = x^{\alpha} y^{1-\alpha}$ with $\alpha \in (0, 1)$, faces prices $p_x, p_y > 0$, and has income $m > 0$. Find the Marshallian demands.

## Solution

Maximise $u$ subject to $p_x x + p_y y = m$. The first-order conditions give

$$
\frac{\alpha\, u}{x} = \lambda p_x, \qquad \frac{(1-\alpha)\, u}{y} = \lambda p_y .
$$

Dividing one by the other, $\dfrac{\alpha}{1-\alpha}\cdot\dfrac{y}{x} = \dfrac{p_x}{p_y}$, so $p_y y = \dfrac{1-\alpha}{\alpha}\, p_x x$. Substituting into the budget constraint,

$$
x^\star = \frac{\alpha m}{p_x}, \qquad y^\star = \frac{(1-\alpha) m}{p_y}.
$$

The consumer spends a constant share $\alpha$ of income on $x$ and $1-\alpha$ on $y$.