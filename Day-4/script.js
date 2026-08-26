//Part A — Objects
// task1
var car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "White"
};
console.log(car);
// task2
console.log(car.brand);
console.log(car["year"]);
// task3
car.color = "black";
car.price = 250000;
console.log(car);
// task4
delete car.year;
console.log(car.year);
// task5
var student = {
  "student-name": "Sara",
  age: 20
};
console.log(student["student-name"]);
// task6
var book = {
  title: "JavaScript Basics",
  author: {
    firstName: "John",
    lastName: "Doe"
  }
};
console.log(book.author.lastName);
// task7
var person = { name: "Ali", age: 25, city: "Cairo" };

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty("job"));
// task8
var settings = {
  theme: "dark",
  lang: "en"
};

Object.freeze(settings);

settings.theme = "light";
settings.fontSize = 16;

console.log(settings);
//Part B — Arrays Basics
// task9
var cities = ["Cairo", "Alexandria", "Giza", "Aswan", "Luxor"];
console.log(cities);
console.log("Length:", cities.length);
// task10
console.log("First city:", cities[0]);
console.log("Second city:", cities[1]);
console.log("Last city:", cities[cities.length - 1]);
// task11
cities.push("Hurghada");
console.log("After push:", cities);

cities.unshift("Mansoura");
console.log("After unshift:", cities);
// task12
cities.pop();
console.log("After pop:", cities);

cities.shift();
console.log("After shift:", cities);
// task13
var tech = ["HTML", "CSS", "JS", "React"];
console.log("Index of JS:", tech.indexOf("JS"));
console.log("Does Python exist?:", tech.includes("Python"));
// task14
var items = ["pen", "book", "bag"];

items.forEach(function (item, index) {
  console.log(`Index ${index}: ${item}`);
});
// task15
var colors = ["red", "green", "blue", "yellow"];

for (var color of colors) {
  if (color === "blue") {
    break;
  }
  console.log(color);
}
// task16
var letters = ["A", "B", "C"];
letters.push("D", "E");
letters.shift();

console.log(letters);
console.log("Length:", letters.length);
//Part C — Array Methods
// task17
var fruits = ["apple", "banana", "cherry"];
var upperFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});

console.log("New array:", upperFruits);
console.log("Original array:", fruits);
// task18
var nums = [10, 55, 30, 80, 45, 90];
var filteredNums = nums.filter(function (num) {
  return num > 50;
});

console.log(filteredNums);
// task19
var cityList = ["Cairo", "Giza", "Alex", "Aswan"];

var foundCity = cityList.find(function (c) {
  return c.startsWith("A");
});

var foundIndex = cityList.findIndex(function (c) {
  return c.startsWith("A");
});

console.log("First city starting with A:", foundCity);
console.log("Its index:", foundIndex);
// task20
var originalArr = ["a", "b", "c", "d", "e"];
var copiedArr = originalArr.slice(1, 4);

console.log("Copy:", copiedArr);
console.log("Original:", originalArr);
// task21
var wordList = ["one", "two", "three", "four", "five"];
var removedItems = wordList.splice(1, 2);

console.log("Removed items:", removedItems);
console.log("Array after change:", wordList);
// task22
var numbers = [40, 100, 1, 5, 25];
numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);
// task23
var ages = [16, 21, 17, 19];

var isSome = ages.some(function (age) {
  return age >= 18;
});

var isEvery = ages.every(function (age) {
  return age >= 18;
});

console.log("Some >= 18:", isSome);
console.log("Every >= 18:", isEvery);
// task24
var values = [5, 10, 15, 20];
var totalSum = values.reduce(function (acc, val) {
  return acc + val;
}, 0);

console.log("Total:", totalSum);
//Part D — Mix (Objects + Arrays)
// task25
var students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 }
];

for (var student of students) {
  console.log(`Name: ${student.name}, Grade: ${student.grade}`);
}
// task26
var topStudents = students.filter(function (s) {
  return s.grade >= 80;
});

var topStudentNames = topStudents.map(function (s) {
  return s.name;
});

console.log(topStudentNames);
// task27
var products = [
  { name: "Laptop", price: 15000 },
  { name: "Mouse", price: 300 },
  { name: "Keyboard", price: 700 }
];

var totalPrice = products.reduce(function (acc, p) {
  return acc + p.price;
}, 0);

console.log("Total price:", totalPrice);
// task28
var tags = ["js", "html", "css", "js", "react", "js"];
var jsCount = 0;

for (var tag of tags) {
  if (tag === "js") {
    jsCount++;
  }
}

console.log('Times "js" appears:', jsCount);
// task29
var classroom = {
  teacher: "Mr. Ahmed",
  students: ["Sami", "Sara", "Nour", "Kareem"]
};

console.log("Teacher:", classroom.teacher);
console.log("Number of students:", classroom.students.length);
console.log("Last student:", classroom.students[classroom.students.length - 1]);
// task30
var itemsList = [
  { id: 1, title: "Pen", price: 10 },
  { id: 2, title: "Book", price: 50 },
  { id: 3, title: "Bag", price: 25 }
];

var uppercaseTitles = itemsList.map(function (item) {
  return item.title.toUpperCase();
});

var cheapProducts = itemsList.filter(function (item) {
  return item.price < 30;
});

var totalAllPrices = itemsList.reduce(function (acc, item) {
  return acc + item.price;
}, 0);

console.log("Uppercase Titles:", uppercaseTitles);
console.log("Products < 30:", cheapProducts);
console.log("Total of all prices:", totalAllPrices);