---
title: "Bank Runs as a Coordination Problem: Diamond–Dybvig (1983)"
summary: A research-to-problem entry — the Diamond–Dybvig model of bank runs reduced to a graduate-level problem with full working, from the 2022 Nobel-winning paper.
type: solved
topics: [research to problem, game theory, banking, multiple equilibria]
level: Advanced
source: "Diamond, D. and P. Dybvig (1983), “Bank Runs, Deposit Insurance, and Liquidity,” Journal of Political Economy 91(3)."
date: 2026-06-05
draft: false
---

*This entry is part of the **research-to-problem** series: a result from a major
paper, restated as a problem solvable with graduate-level tools, with full working. Read
the problem and attempt it before reading the solution.*

## Problem

There are three dates $t = 0, 1, 2$ and a continuum of consumers, each endowed with
$1$ unit at $t=0$. A technology returns $R > 1$ at $t=2$ per unit invested at $t=0$,
or $1$ if liquidated early at $t=1$.

At $t=1$, a fraction $\pi$ of consumers learn they are *impatient* (they value
consumption only at $t=1$); the rest are *patient* (they value consumption at
$t=2$). Type is private information. Preferences over own-type consumption are
$u(c) = 1 - 1/c$, i.e. relative risk aversion equal to $2$.

A bank offers a demand-deposit contract: deposit $1$ at $t=0$; withdraw $c_1$ at
$t=1$, or wait and receive a pro-rata share of what remains, invested to $t=2$.

1. Find the first-best insurance arrangement $(c_1^*, c_2^*)$ a planner who could
   observe types would offer, and show that $1 < c_1^* < c_2^* < R$.
2. Show that the deposit contract implementing $(c_1^*, c_2^*)$ has a good
   equilibrium in which only the impatient withdraw at $t=1$.
3. Show that the same contract also has a *bank-run* equilibrium in which every
   consumer withdraws at $t=1$, and the bank fails.

## Solution

**Part 1 — The planner's problem.** The planner liquidates $\pi c_1$ at $t=1$ for
the impatient and gives each patient consumer
$c_2 = \dfrac{(1 - \pi c_1) R}{1 - \pi}$ at $t=2$. The problem is

$$
\max_{c_1} \;\; \pi\, u(c_1) + (1-\pi)\, u\!\left( \frac{(1 - \pi c_1) R}{1 - \pi} \right).
$$

The first-order condition is $u'(c_1) = R\, u'(c_2)$. With $u'(c) = 1/c^2$:

$$
\frac{1}{c_1^2} = \frac{R}{c_2^2}
\;\;\Longrightarrow\;\;
c_2^* = \sqrt{R}\; c_1^*.
$$

Substituting into the resource constraint
$c_2 (1-\pi) = (1 - \pi c_1) R$ and solving:

$$
c_1^* = \frac{R}{\sqrt{R}\,(1-\pi) + \pi R}
= \frac{\sqrt{R}}{(1-\pi) + \pi \sqrt{R}}.
$$

Since $R > 1$, the denominator is a convex combination of $1$ and $\sqrt{R}$, so it
lies strictly between them. Hence $1 < c_1^* < \sqrt{R}$, and
$c_2^* = \sqrt{R}\, c_1^*$ gives $c_1^* < c_2^* < R$. The bank provides genuine
liquidity insurance: early consumers get more than autarky's $1$, funded by late
consumers accepting less than autarky's $R$.

**Part 2 — The good equilibrium.** Suppose every other patient consumer waits. A
patient consumer who waits receives $c_2^* > c_1^*$; deviating to withdraw early
yields only $c_1^*$. Waiting is a strict best response, so "impatient withdraw,
patient wait" is a Nash equilibrium, and it implements the first best.

**Part 3 — The run equilibrium.** Now suppose every consumer attempts to withdraw
at $t=1$. Total claims are $c_1^* > 1$ per depositor against assets worth $1$ if
fully liquidated, so the bank cannot pay everyone. Under sequential service, a
consumer who joins the run gets $c_1^*$ with probability $1/c_1^* < 1$ and zero
otherwise; a patient consumer who waits gets nothing, because liquidation is total.
Running yields a strictly positive expected payoff against waiting's zero, so
"everyone runs" is also a Nash equilibrium.

**The economic point.** The very contract that creates value — transforming
illiquid assets into liquid deposits — creates a second, self-fulfilling
equilibrium in which the transformation collapses. The run is not caused by bad
fundamentals; it is a coordination failure. This is why the paper's policy
discussion centres on deposit insurance, which removes the patient consumer's
incentive to run and selects the good equilibrium.

## Extensions

1. Show that a *suspension of convertibility* (the bank stops paying after serving
   a fraction $\pi$ of depositors at $t=1$) also eliminates the run equilibrium
   when $\pi$ is known. Why does it fail when $\pi$ is random?
2. Verify that with $u(c) = \ln c$ the first best sets $c_1^* = 1$: log utility is
   the knife-edge at which no liquidity insurance is provided. Relate this to the
   coefficient of relative risk aversion.
