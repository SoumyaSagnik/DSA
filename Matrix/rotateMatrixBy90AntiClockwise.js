/*
  Given an n*n matrix, rotate it by 90 degrees in anti-clockwise direction without usiing any extra space
  1 2 3        3 6 9
  4 5 6   ->   2 5 8
  7 8 9        1 4 7
*/

// Approach: find transpose then rotate rows.

function n90degrees(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      let c = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = c;
    }
  }

  for (let i = 0, j = n - 1; i < j; i++, j--) {
    const c = matrix[i];
    matrix[i] = matrix[j];
    matrix[j] = c;
  }

  return matrix;
}

const mat3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const mat4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const mat5 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
const mat6 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
];
const mat7 = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42],
  [43, 44, 45, 46, 47, 48, 49],
];

console.log(n90degrees(mat3));
console.log(n90degrees(mat4));
console.log(n90degrees(mat5));
console.log(n90degrees(mat6));
console.log(n90degrees(mat7));
