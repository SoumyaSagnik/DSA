# Knapsack

## 0-1 Knapsack

In a knapsack problem, we have a bag (knapsack).

I/P contains:
weights[]
values[]
W (Capacity of bag)

Eg:
I1 I2 I3 I4
wt: 1 3 1 2
val: 3 3 9 1
W: 7

**We need to find the maximum value that can fit in this knapsack.**

Note: filling the bag completely is not priority, filling the bag with maximum value is. So if a combination is more valuable but it doesn't fill the bag, it will still be the required answer here.

## Fractional Knapsack

It is similar to 0-1 knapsack, just that here we can break an item and added the equivalent value in the bag if there isn't enough capacity left in the bag.

## Unbounded Knapsack

It is similar to 0-1 knapsack, but here we have unlimited supply of items. So an item can be filled n times in the knapsack if that makes the most value. In 0-1 each item can be filled only once.

## Types of Knapsack

- 0-1 Knapsack
- Unbounded Knapsack
- Fractional Knapsack (this is a greedy problem & not even dp)

## Problems that can be solved by applying 0-1 Knapsack

- Subset sum
- Equal sum partition
- Count of subset sum
- Minimum subset sum difference
- Target sum
- Number of subset with given difference

## Identifying DP

- Choice is available
- Optimal output is required

**Approach**: Recursive code -> Memoization/Top-down
