---
title: Competitive Equilibrium in an Exchange Economy
summary: Find the competitive equilibrium of a two-person Cobb–Douglas exchange economy, and verify the First Welfare Theorem directly.
type: solved
topics: [general equilibrium, Edgeworth box, welfare theorems]
level: Intermediate
date: 2026-06-01
draft: false
---

## Problem

Two consumers trade two goods. Consumer 1 has utility
$u_1(x_1, y_1) = x_1^{2/3} y_1^{1/3}$ and endowment $\omega_1 = (1, 0)$.
Consumer 2 has utility $u_2(x_2, y_2) = x_2^{1/3} y_2^{2/3}$ and endowment
$\omega_2 = (0, 1)$.

1. Find the competitive equilibrium prices and allocation.
2. Find the set of Pareto-efficient allocations, and verify that the equilibrium
   allocation belongs to it.

## Solution

**Step 1 — Demands.** Normalise $p_y = 1$ and write $p$ for the price of good $x$.
Each consumer has Cobb–Douglas preferences, so spends fixed budget shares.
Consumer 1's income is $p \cdot 1 + 1 \cdot 0 = p$, and consumer 2's is $1$:

$$
x_1 = \frac{2}{3}\cdot\frac{p}{p} = \frac{2}{3}, \qquad
y_1 = \frac{1}{3}\, p, \qquad
x_2 = \frac{1}{3}\cdot\frac{1}{p}, \qquad
y_2 = \frac{2}{3}.
$$

**Step 2 — Market clearing.** Clear the market for good $x$ (good $y$ then clears
by Walras's law):

$$
x_1 + x_2 = \frac{2}{3} + \frac{1}{3p} = 1
\;\;\Longrightarrow\;\;
p = 1.
$$

So the equilibrium price ratio is $p_x / p_y = 1$, and the allocation is

$$
(x_1^*, y_1^*) = \left(\tfrac{2}{3}, \tfrac{1}{3}\right), \qquad
(x_2^*, y_2^*) = \left(\tfrac{1}{3}, \tfrac{2}{3}\right).
$$

**Step 3 — The Pareto set.** Interior efficiency requires equal marginal rates of
substitution. With $x_2 = 1 - x_1$ and $y_2 = 1 - y_1$:

$$
2\,\frac{y_1}{x_1} = \frac{1}{2}\cdot\frac{1 - y_1}{1 - x_1}
\;\;\Longrightarrow\;\;
y_1 = \frac{x_1}{4 - 3x_1}.
$$

This is the contract curve. At $x_1 = \tfrac{2}{3}$ it gives
$y_1 = \tfrac{2/3}{4 - 2} = \tfrac{1}{3}$ — exactly the equilibrium allocation. The
equilibrium is Pareto efficient, as the First Welfare Theorem guarantees.

## Check your understanding

1. Each consumer ends up consuming more of the good they like more, despite owning
   none of it (consumer 2) or all of the other (consumer 1). Explain the trade.
2. Re-solve with endowments $\omega_1 = (1,1)$, $\omega_2 = (0,0)$. What happens,
   and what does it tell you about the role of endowments versus preferences?
