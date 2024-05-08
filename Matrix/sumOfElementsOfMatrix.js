function sumOfMatrixElements(matrix) {
  return matrix.reduce((rowSum, row) => {
    return (rowSum += row.reduce((arrSum, element) => (arrSum += element), 0));
  }, 0);
}

console.log(
  sumOfMatrixElements([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 45
