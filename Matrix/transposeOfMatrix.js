/*
    1 1 1 1        1 2 3
    2 2 2 2   ->   1 2 3        
    3 3 3 3        1 2 3
                   1 2 3 
*/

function transposeOfAMatrix(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let transpose = new Array(n);
  transpose = transpose.fill([]);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      transpose[i][j] = matrix[j][i];
    }
  }

  return transpose;
}

// optimized soln for n*n matrix
function optimizedSoln(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let c = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = c;
    }
  }

  return matrix;
}

// Explanation for optimized soln: diagonal elements remain same, need to swap lower with upper post diagonal cut.

console.log(
  transposeOfAMatrix([
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
  ])
);

console.log(
  optimizedSoln([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ])
);
