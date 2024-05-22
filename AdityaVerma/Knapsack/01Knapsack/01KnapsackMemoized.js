/*
    wt: weight array
    val: value array
    W: total capacity
    n: size of wt & val array
    t: memoized matrix
*/

// pick max value of W & n from contraints.

const WMax = 1000;
const nMax = 100;
const t = new Array(nMax);
for (let i = 0; i < nMax; i++) {
  const arr = new Array(WMax);
  arr.fill(-1);
  t[i] = arr;
}
console.log(t);

function knapsack01(wt, val, W, n) {
  if (W === 0 || n === 0) return 0;
  if (t[n][W] !== -1) return t[n][W];
  if (wt[n - 1 <= W])
    return (t[n][W] = Math.max(
      wt[n - 1] + knapsack01(wt, val, W - wt[n - 1], n - 1),
      knapsack01(wt, val, W, n - 1)
    ));
  else return (t[n][W] = knapsack01(wt, val, W, n - 1));
}
