/* 1->2->3
         |
   4<-5<-6
   |
   7->8->9            
*/

function printSnakeMatrix(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let str = "";
  for (let i = 0; i < m; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < n; j++) {
        str += matrix[i][j] + " ";
      }
    } else {
      for (let j = n - 1; j >= 0; j--) {
        str += matrix[i][j] + " ";
      }
    }
  }
  console.log(str);
}

printSnakeMatrix([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
