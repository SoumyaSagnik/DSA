/*
Given a matrix of n * n, find the sum of upper & lower triangles formed by cutting the matrix diagonally from left to right.

Eg: [[1,2,3],
     [4,5,6],
     [7,8,9]]

Upper triangle:
1,2,3
  5,6
    9
Lower triangle:
1
4,5
7,8,9
*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function upperTriangleSum(matrix) {
  const matrixDimension = matrix.length;
  let sum = 0;
  for (let i = 0; i < matrixDimension; i++) {
    for (let j = i; j < matrixDimension; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

function lowerTriangleSum(matrix) {
  const matrixDimension = matrix.length;
  let sum = 0;
  for (let i = 0; i < matrixDimension; i++) {
    for (let j = 0; j <= i; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

console.log(upperTriangleSum(matrix)); // 26
console.log(lowerTriangleSum(matrix)); // 34
