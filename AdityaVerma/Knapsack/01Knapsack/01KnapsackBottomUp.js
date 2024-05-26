let n = 100;
let W = 1000;

const t = new Array(n + 1);
for (let i = 0; i < t.length; i++) {
  t[i] = new Array(W + 1);
}

function knapsackBottomUp(wt, val, W, n) {
  for (let i = 0; i < n + 1; i++) {
    for (letj = 0; j < W + 1; j++) {
      if (i === 0 || j === 0) {
        t[i][j] = 0; // alteration of recursive base condition
        continue;
      } else if (wt[i - 1] <= j) {
        t[i][j] = Math.max(val[i - 1] + t[i - 1][j - wt[i - 1]], t[i - 1][j]);
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  return t[n][W];
}
