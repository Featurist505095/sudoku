module.exports = function solveSudoku(matrix) {
  // your solution
  let story = [];
  let i = 0;
  let j = 0;
  let checkLocal = 0;
  let guess = 1;
  let lastPush;

  while (i < 9) {
    guess = 1;
    while (j < 9) {
      if (matrix[i][j] == 0) {
        for (; guess < 10; guess++) {
          checkLocal = 0;

          if (matrix[i].indexOf(guess) < 0) {
            for (let k = 0; k < 9; k++) {
              if (matrix[k][j] == guess) {
                checkLocal++;
                break;
              }
              else {
                if (matrix[Math.floor(i / 3) * 3][Math.floor(j / 3) * 3] == guess || matrix[Math.floor(i / 3) * 3 + 1][Math.floor(j / 3) * 3] == guess || matrix[Math.floor(i / 3) * 3 + 2][Math.floor(j / 3) * 3] == guess ||
                    matrix[Math.floor(i / 3) * 3][Math.floor(j / 3) * 3 + 1] == guess || matrix[Math.floor(i / 3) * 3 + 1][Math.floor(j / 3) * 3 + 1] == guess || matrix[Math.floor(i / 3) * 3 + 2][Math.floor(j / 3) * 3 + 1] == guess ||
                    matrix[Math.floor(i / 3) * 3][Math.floor(j / 3) * 3 + 2] == guess || matrix[Math.floor(i / 3) * 3 + 1][Math.floor(j / 3) * 3 + 2] == guess || matrix[Math.floor(i / 3) * 3 + 2][Math.floor(j / 3) * 3 + 2] == guess) {
                      checkLocal++;
                }
              }
            }
          }
          else {
            checkLocal++;
          }

          if (checkLocal == 0) {
            story.push([i, j]);
            matrix[i][j] = guess;
            guess = 1;
            break;
          }
        }
      }

      if (matrix[i][j] == 0) {
        lastPush = story.pop();
        i = lastPush[0];
        j = lastPush[1];
        guess = matrix[i][j] + 1;
        matrix[i][j] = 0;
        j--;
      }

      j++;
    }

    i++;
    j = 0;
  }

  return matrix;
}
