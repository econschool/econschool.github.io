---
title: Deriving Demand from Cobb–Douglas Preferences
summary: A complete derivation of Marshallian demand for Cobb–Douglas utility.
type: solved
topics: [consumer theory, demand]
level: Beginner
date: 2026-05-20
draft: false
---

## Problem

A consumer has utility $u(x, y) = x^{\alpha} y^{1-\alpha}$ with $\alpha \in (0,1)$,
prices $p_x, p_y > 0$, and income $M \geq 0$. Derive the Marshallian demand functions.

## Solution

The consumer solves

$$
\max_{x,\,y \ \geq\, 0} \; x^{\alpha} y^{1-\alpha}
\quad \text{subject to} \quad p_x x + p_y y = M.
$$

**Step 1 — The budget binds.** Utility is strictly increasing in both goods, so the
constraint holds with equality at any optimum.

**Step 2 — Tangency.** Preferences are strictly convex on the interior, so the
optimum is characterised by the tangency condition $MRS = p_x / p_y$:

$$
\frac{\partial u/\partial x}{\partial u/\partial y}
= \frac{\alpha\, x^{\alpha-1} y^{1-\alpha}}{(1-\alpha)\, x^{\alpha} y^{-\alpha}}
= \frac{\alpha}{1-\alpha}\cdot\frac{y}{x}
= \frac{p_x}{p_y}.
$$

**Step 3 — Solve the system.** From the tangency condition,
$p_y y = \frac{1-\alpha}{\alpha}\, p_x x$. Substituting into the budget constraint:

$$
p_x x + \frac{1-\alpha}{\alpha}\, p_x x = M
\;\;\Longrightarrow\;\;
p_x x \cdot \frac{1}{\alpha} = M.
$$

So the demand functions are

$$
x^d(p_x, p_y, M) = \frac{\alpha M}{p_x},
\qquad
y^d(p_x, p_y, M) = \frac{(1-\alpha)\, M}{p_y}.
$$

**Interpretation.** The consumer spends the fixed share $\alpha$ of income on $x$
and $1-\alpha$ on $y$, regardless of prices. Constant expenditure shares are the
signature of Cobb–Douglas preferences — worth recognising instantly in exams.

## Check your understanding

1. Verify that each demand function is homogeneous of degree zero in $(p_x, p_y, M)$.
2. Compute the indirect utility function $v(p_x, p_y, M)$ and verify Roy's identity.
