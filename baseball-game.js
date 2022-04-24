/*
Baseball Game 

You are keeping score for a baseball game wilh strange rules. The game consists of several rounds, where the scoresof past rounds may affect future rounds scores.

At the beggining of the game, you start with an empty record. You are given a list of strings `input`, where `input[i]` is the `ith` operation you must apply to the record and is one of the following:

1. An integer "x" - Record a new score of x.
2. "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
3. "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
4. "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.

Return the sum of all the scores on the record.
*/

var calcPoints = function (input) {
  var result = null;
  var previousScores = [];

  input.map((char) => {
    var charCode = char.charCodeAt();

    // Characters: +
    if (charCode < 48) {
      var numOne = parseInt(previousScores.slice(-1));
      var numTwo = parseInt(previousScores.slice(-2));
      previousScores.push(numOne + numTwo);
    }

    // Characters: 1-9
    else if (charCode >= 40 && charCode <= 57) {
      previousScores.push(parseInt(char));
    }

    // Characters: a-z
    else if ((charCode) => 65 && charCode <= 90) {
      // d
      if (charCode === 68) {
        var lastElement = previousScores.slice(-1);
        previousScores.push(lastElement * 2);
      }

      // c
      else if (charCode === 67) {
        previousScores.pop();
      }
    }
  });

  previousScores.map((score) => {
    result += score;
  });

  return result;
};

const input = "5 2 C D +".split(" ");
console.log(calcPoints(input));
