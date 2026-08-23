// Task 1
console.log("JS is running successfully");

// Task 2
alert("Ready to practice!");


// Task 3

var productName = "Laptop";
var price = 15000;
var isAvailable = true;

console.log(productName, typeof productName);
console.log(price, typeof price);
console.log(isAvailable, typeof isAvailable);

// Task 4

document.getElementById("mainTitle").innerText = "Time Practice";
// Task 5

var city = "Cairo";
var country = "Egypt";

console.log("Location: " + city + " - " + country);
// Task 6

console.log(`Location: ${city} - ${country}`);

// Task 7

var itemPrice = 120;
var quantity = 3;

console.log("Total:", itemPrice * quantity);
console.log("Difference:", 400 - itemPrice * quantity);
console.log("Multiplication:", itemPrice * quantity);
console.log("Division:", itemPrice / quantity);
console.log("Modulus:", itemPrice % quantity);
console.log("Power:", 2 ** quantity);
// Task 8

var color = prompt("What is your favorite color?");

console.log("Your favorite color is:", color);
// Task 9

var score = 20;
var textScore = "20";

console.log(score == textScore);
console.log(score === textScore);

// Task 10

var value = prompt("Enter quantity:");

var number1 = Number(value);
var number2 = parseInt(value);
var number3 = +value;

console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);
// Task 11

var fruits = ["apple", "banana", "mango"];

console.log(fruits[1]);

fruits[1] = "orange";

fruits.push("grape");

console.log(fruits);

// Task 12

var course = {
    title: "JavaScript",
    hours: 30,
    level: "Beginner"
};

course.title = "JavaScript Basics";

console.log(course.hours);
console.log(course);

// Task 13

var hasAccount = true;
var isVerified = false;

console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!isVerified);
// Task 14

var balance = 50;

balance += 30;
balance *= 2;
balance -= 20;

console.log(balance);
// Task 15

var hotelName = prompt("Enter hotel name:");
var nights = prompt("Enter number of nights:");
var confirmed = confirm("Is the booking confirmed?");

var bookingMessage = `Hotel: ${hotelName}, Nights: ${nights}, Confirmed: ${confirmed}`;

alert(bookingMessage);
console.log(bookingMessage);
// Task 16

// Prediction: 100
console.log(2 + 8 + "0");

// Prediction: 280
console.log("2" + 8 + 0);

// Prediction: 280
console.log(2 + "8" + 0);
// Task 17 - A

var city1 = "Alex";
var city2 = city1;

city2 = "Giza";

console.log(city1, city2);

// city1 stays "Alex" because strings are copied by value.

// Task 17 - B

var car1 = { brand: "Toyota" };
var car2 = car1;

car2.brand = "Honda";

console.log(car1, car2);
// Task 17 - C

var car1 = { brand: "Toyota" };
var car2 = Object.assign({}, car1);

car2.brand = "Honda";

console.log(car1);
console.log(car2);
// Task 18

var mixedBag = [
    "hello",
    25,
    true,
    null,
    undefined,
    { name: "Nour" },
    [1, 2, 3]
];

console.log(typeof mixedBag[0]);
console.log(typeof mixedBag[1]);
console.log(typeof mixedBag[2]);
console.log(typeof mixedBag[3]);
console.log(typeof mixedBag[4]);
console.log(typeof mixedBag[5]);
console.log(typeof mixedBag[6]);

// typeof null returns "object" because of a historical behavior in JavaScript.
// Task 19

var customerName = prompt("Enter customer name:");
var orderPrice = prompt("Enter order price:");
var paymentDone = confirm("Is the payment done?");

orderPrice = Number(orderPrice);

var orderMessage = `Customer: ${customerName}, Price: ${orderPrice}, Paid: ${paymentDone}`;

console.log(orderMessage);
alert(orderMessage);

document.getElementById("result").innerText = orderMessage;
// Task 20

var firstNumber = Number(prompt("Enter first number:"));
var secondNumber = Number(prompt("Enter second number:"));

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);
// Task 21

var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;

console.log(a + b + c + d + e);

// c is a string, so + starts concatenating strings.
// Fix:
c = Number(c);

console.log(a + b + c + d + e);
// Task 24

var a = "15";
var b = 15;
var c = null;
var d;
var e = [15];
var f = { value: 15 };

console.log(a, typeof a, a == 15, a === 15);
console.log(b, typeof b, b == 15, b === 15);
console.log(c, typeof c, c == 15, c === 15);
console.log(d, typeof d, d == 15, d === 15);
console.log(e, typeof e, e == 15, e === 15);
console.log(f, typeof f, f == 15, f === 15);