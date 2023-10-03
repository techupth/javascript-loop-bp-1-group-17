// Exercise #9: Classroom Scores

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

// Start coding here
let totalScore = 0;
let lowestScore = Infinity; // Initialize to positive infinity
let highestScore = -Infinity; // Initialize to negative infinity
let i = 0;
for (let student in studentsScore) {
  let score = studentsScore[student];
  totalScore += score;

  if (score < lowestScore) {
    lowestScore = score;
  }

  if (score > highestScore) {
    highestScore = score;
  }
}

console.log("Average score is " + totalScore/6)
console.log(`${highestScore} has the highest score, which is ${highestScore} points.`);
console.log(`${lowestScore} has the lowest score, which is ${lowestScore} points.`);
