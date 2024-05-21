/*
    wt: weight array
    val: value array
    W: total capacity
    n: size of wt & val array
*/
function knapsack01(wt, val, W, n) {
  if (W === 0 || n === 0) return 0;
  if (wt[n - 1 <= W])
    return Math.max(
      wt[n - 1] + knapsack01(wt, val, W - wt[n - 1], n - 1),
      knapsack01(wt, val, W, n - 1)
    );
  else return knapsack01(wt, val, W, n - 1);
}
