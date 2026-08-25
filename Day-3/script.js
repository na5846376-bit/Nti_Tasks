//Part A — Strings
// Task 1
var fullName = "Ahmed Ali";
console.log(fullName.length);
// Task 2
var sentence = "I am learning JavaScript";
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
// Task 3
var email = "student@nti.com";
console.log(email.includes("@"));
// Task 4
var word = "JavaScript";
console.log("First character:", word[0]);
console.log("Last character:", word[word.length - 1]);
// Task 5
var text = "This is a bad day";
var newText = text.replace("bad", "good");
console.log(newText);
// Task 6
var codingText = "I love coding";
var wordsArray = codingText.split(" ");
var joinedText = wordsArray.join("-");
console.log(joinedText);
// Task 7
var rawText = " nti egypt training ";
var result = rawText.trim().toUpperCase().replace("EGYPT", "CAIRO");
console.log(result);


//Part B — Numbers & Math
// Task 8
var strNum = "45.8";
var realNum = parseFloat(strNum);
console.log(realNum);
// Task 9
var num = 7.6;
console.log("Rounded:", Math.round(num));
console.log("Floor:", Math.floor(num));
console.log("Ceil:", Math.ceil(num));
// Task 10
console.log("Largest:", Math.max(12, 5, 28, 9));
console.log("Smallest:", Math.min(12, 5, 28, 9));
// Task 11
var randomInt = Math.floor(Math.random() * 20) + 1;
console.log(randomInt);
// Task 12
var price = 19.4567;
console.log(price.toFixed(2));
// Task 13
var randomNums = [];
var sum = 0;

for (var i = 0; i < 5; i++) {
  var rand = Math.floor(Math.random() * 50) + 1;
  randomNums.push(rand);
  sum += rand;
}

console.log("Generated numbers:", randomNums);
console.log("Largest:", Math.max(...randomNums));
console.log("Smallest:", Math.min(...randomNums));
console.log("Average:", (sum / 5).toFixed(2));
//Part C — Loops
// Task 14
for (var i = 1; i <= 20; i++) {
  console.log(i);
}
// Task 15
for (var i = 1; i <= 15; i += 2) {
  console.log(i);
}
// Task 16
var count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}
// Task 17
var names = ["Sara", "Omar", "Mona", "Youssef"];
for (var name of names) {
  console.log(name);
}
// Task 18
for (var i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
// Task 19
for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= 12; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
// Task 20
for (var i = 1; i <= 30; i++) {
  if (i === 25) {
    break;
  }
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
//Part D — Mix (Strings + Numbers + Loops)
// Task 21
var str = "HELLO";
for (var letter of str) {
  console.log(letter);
}
// Task 22
var numbers = [10, 20, 30, 40];
var total = 0;
for (var num of numbers) {
  total += num;
}
console.log("Total:", total);
// Task 23
var sentenceToCount = "JavaScript is amazing and awesome";
var countA = 0;

for (var char of sentenceToCount.toLowerCase()) {
  if (char === "a") {
    countA++;
  }
}
console.log('Count of "a" or "A":', countA);
// Task 24
var grades = [70, 85, 92, 60, 77, 88];
for (var grade of grades) {
  if (grade % 2 === 0) {
    console.log(grade);
  }
}
// Task 25
for (var row = 1; row <= 4; row++) {
  var line = "";
  for (var col = 1; col <= row; col++) {
    line += "*";
  }
  console.log(line);
}
// Task 26
var studentNames = ["ahmed", "sara", "omar", "laila", "hassan"];
var matchCount = 0;

for (var name of studentNames) {
  var upperName = name.toUpperCase();
  if (upperName.startsWith("A") || upperName.startsWith("S")) {
    console.log(upperName);
    matchCount++;
  }
}
console.log("Matched names count:", matchCount);