// Task 1

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2

for (var i = 2; i <= 20; i += 2) {
  console.log(i);
}
// Task 3
var totalSales = 0;
for (var i = 1; i <= 15; i++) {
  totalSales += i;
}
console.log("Total sales =", totalSales);
// Task 4

var ticket = 1;
while (ticket <= 7) {
  console.log(ticket);
  ticket++;
}
// Task 5

var countdown = 8;
while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}
// Task 6

var count = 1;
do {
  console.log("Welcome message #", count);
  count++;
} while (count <= 5);
// Task 7

var itemsInCart = 10;

// while loop: الشرط خاطئ (10 ليس أقل من 5) ولن ينفّذ أي كود
while (itemsInCart < 5) {
  console.log("while loop runs:", itemsInCart);
}

// do...while loop: هينفذ الكود مرة واحدة على الأقل بالرغم من أن الشرط خاطئ 
do {
  console.log("ابدأ التسوق (do...while runs at least once)");
} while (itemsInCart < 5);
// Task 8

var userName = "Ali";
var userAge = 22;
var isStudent = true;

console.log(userName, typeof userName);
console.log(userAge, typeof userAge);
console.log(isStudent, typeof isStudent);
// Task 9

var dbPrice = 10;
var inputPrice = "10";

console.log(dbPrice == inputPrice);  // true: تقارن القيمة فقط مع تحويل النوع
console.log(dbPrice === inputPrice); // false تقارن القيمة والنوع
// Task 10

var name = prompt("Enter your name:");
var welcomeMessage = "Welcome, " + name;

alert(welcomeMessage);
console.log(welcomeMessage);
// Task 11

var inputQty = prompt("Enter quantity:");

var qty1 = Number(inputQty);
console.log(qty1, typeof qty1);

var qty2 = parseInt(inputQty);
console.log(qty2, typeof qty2);

var qty3 = +inputQty;
console.log(qty3, typeof qty3);
// Task 12

var a = 10;
var b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b); 
// Task 13

var age = Number(prompt("Enter your age:"));

if (age >= 18) {
  console.log("You can enter");
} else {
  console.log("Sorry, underage");
}
// Task 14

var grade = Number(prompt("Enter your grade:"));

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("F");
}
// Task 15

var userAgeInput = Number(prompt("Enter your age:"));
var label = userAgeInput >= 18 ? "Adult" : "Minor";

console.log(label);
// Task 16

var day = prompt("Enter today's day:");

switch (day) {
  case "Monday":
  case "Friday":
    console.log("Workday Message!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day!");
}
// Task 17

var unitPrice = Number(prompt("Enter unit price:"));

for (var qty = 1; qty <= 10; qty++) {
  console.log(qty + " x " + unitPrice + " = " + (qty * unitPrice));
}
// Task 18

var fileSize = Number(prompt("Enter file size:"));

if (fileSize > 0) {
  for (var i = 1; i <= fileSize; i++) {
    console.log(i);
  }
} else {
  console.log("Invalid file size");
}
// Task 19

var start = Number(prompt("Enter start order ID:"));
var end = Number(prompt("Enter end order ID:"));

for (var orderId = start; orderId <= end; orderId++) {
  if (orderId % 2 === 0) {
    console.log(orderId + " - express");
  } else {
    console.log(orderId + " - normal");
  }
}
// Task 20

var students = ["Ahmed", "Sara", "Ali"];

for (var i = 0; i < students.length; i++) {
  console.log("Student " + (i + 1) + ": " + students[i]);
} 
// Task 21

var totalExpense = 0;

for (var i = 1; i <= 5; i++) {
  var expense = Number(prompt("Enter expense for day " + i + ":"));
  totalExpense += expense;
}

console.log("Total Expense =", totalExpense);
console.log("Average Expense =", totalExpense / 5);
// Task 22

var correctPin = "1234";
var attempts = 0;
var pinMatched = false;

while (attempts < 3) {
  var userPin = prompt("Enter your PIN:");
  attempts++;
  
  if (userPin === correctPin) {
    pinMatched = true;
    break;
  }
}

if (pinMatched) {
  console.log("Login successful!");
} else {
  console.log("Account locked. Too many failed attempts.");
}
// Task 23

var hasAccount = true;
var isVerified = false;

console.log("AND (&&):", hasAccount && isVerified);
console.log("OR (||):", hasAccount || isVerified);
console.log("NOT (!hasAccount):", !hasAccount);

if (hasAccount && isVerified) {
  console.log("Welcome back");
} else if (hasAccount && !isVerified) {
  console.log("Please verify your account");
} else {
  console.log("Please sign up");
}
// Task 24

var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;

var total = a + b + Number(c) + d + e; 
console.log("Fixed Total =", total);

if (total >= 200) {
  console.log("Too big to print line by line");
} else {
  for (var i = 1; i <= total; i++) {
    console.log(i);
  }
}
// Task 25

var n = Number(prompt("Enter number n:"));

if (n < 0 || isNaN(n)) {
  console.log("Error: Please enter a non-negative number.");
  alert("Error: Please enter a non-negative number.");
} else {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial *= i;
  }
  var resultText = n + "! = " + factorial;
  console.log(resultText);
  alert(resultText);
}