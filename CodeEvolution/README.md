# Notes

**1. What is an Algorithm?**

An algorithm is a set of well-defined instructions to solve a particular problem.

<hr />

**2. Characteristics of an algorithm**

- Well defiend `inputs` and `outputs`.
- Each step should be clear and unambiguous.
- Language independent.

<hr />

**3. Analysing an algorithm**

The absolute running time of an algorithm cannot be predicted, since it depends on a number of factors:

- Programming language used to implement the algorithm.
- The computer that the program runs on.
- Other programs running at the same time.
- Quality of the operating system, etc.

Hence we evaluate the performance of an algorithm based on its `input size`.

- `Time complexity`: Amount of time taken by an algorithm to run, as a function of input size.
- `Space complexity`: Amount of memory taken by an algorithm to run, as a function of input size.

By evaluating against the input size, the analysis is not only machine independent, but also more appropriate.

<hr />

**4. How to represent complexity?**

We represent complexity of an algorithm using `Asymptotic notations`.

Asymptotic notations are mathematical tools to represent `time` and `space` complexity.

- `Big-O Notation`: Worst case complexity
- `Omega Notation`: Best case complexity
- `Theta Notation`: Average case complexity

<hr />
