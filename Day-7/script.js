
// Part A — "use strict"


// Task 1


function withoutStrict() {
    implicitGlobal = "I am global!";
    console.log("Inside function:", implicitGlobal);
}

withoutStrict();

console.log("Outside function:", implicitGlobal);



// Output:
// Inside function: I am global!
// Outside function: I am global!
//
// Reason:
// Without strict mode, a variable that is not declared with
// var / let / const becomes a global variable in non-strict code.



// Task 2


function withStrict() {
    "use strict";

    try {
        strictVariable = "test";
        console.log(strictVariable);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

withStrict();

// Output:
// Error: strictVariable is not defined
//
// Reason:
// Strict mode does not allow assigning a value to an undeclared variable.







// Task 3


function strictDelete() {
    "use strict";

    var localVar = "test";

    try {
        // Direct: delete localVar;
        // In strict mode this is a SyntaxError.
        // eval allows us to catch the error at runtime.
        eval("delete localVar");
    } catch (error) {
        console.log("Delete error:", error.message);
    }

    var obj = {
        name: "Ali"
    };

    delete obj.name;

    console.log("After deleting object property:", obj);
}

strictDelete();

// Output:
// Delete error: Delete of an unqualified identifier in strict mode.
// After deleting object property: {}
//
// Reason:
// Strict mode does not allow deleting a local variable.
// But deleting an object property is allowed.




// Part B — Hoisting




// Task 4


console.log(x);

var x = 10;

console.log(x);

// Output:
// undefined
// 10
//
// Reason:
// var declaration is hoisted and initialized with undefined.
// The value 10 is assigned only when execution reaches x = 10.




// Task 5


// Case 1

sayHi();

function sayHi() {
    console.log("Hi");
}

// Output:
// Hi
//
// Reason:
// Function declarations are fully hoisted.


// Case 2

try {
    sayBye();
} catch (error) {
    console.log("Case 2:", error.message);
}

var sayBye = function () {
    console.log("Bye");
};

// Output:
// Case 2: sayBye is not a function
//
// Reason:
// var is hoisted as undefined, but the function value is not hoisted.
// So sayBye() tries to call undefined.




// Task 6


// The following code would stop the script because of ReferenceError:
//
// console.log(a);
// let a = 5;
//
// Output:
// ReferenceError: Cannot access 'a' before initialization
//
// Reason:
// let is hoisted but stays inside the Temporal Dead Zone (TDZ)
// until the declaration is reached.




// Task 7


var n = 1;

function demo() {
    console.log(n);

    var n = 2;

    console.log(n);
}

demo();

console.log(n);

// Output:
// undefined
// 2
// 1
//
// Reason:
// The local var n is hoisted inside demo() as undefined.
// It shadows the global n.




// Part C — var vs let vs const




// Task 8


function varScopeExample() {

    if (true) {
        var message = "Hello from if";
    }

    console.log(message);
}

varScopeExample();

// Output:
// Hello from if
//
// Reason:
// var is function-scoped, so it is accessible outside the if block
// as long as it is inside the same function.




// Task 9


function blockScopeExample() {

    if (true) {
        let letMessage = "Hello from let";
        const constMessage = "Hello from const";

        console.log(letMessage);
        console.log(constMessage);
    }

    // console.log(letMessage);   // ReferenceError
    // console.log(constMessage); // ReferenceError
}

blockScopeExample();

// Reason:
// let and const are block-scoped.
// They only exist inside the { } where they were declared.




// Task 10


// var allows re-declaration

var userName = "Ali";
var userName = "Ahmed";

console.log("var:", userName);

// Output:
// var: Ahmed


// let does NOT allow re-declaration in the same scope

let userAge = 20;

// let userAge = 25; // SyntaxError

console.log("let:", userAge);

// Reason:
// var allows re-declaration.
// let does not allow re-declaration in the same scope.




// Task 11


const student = {
    name: "Sara",
    age: 22,
    city: "Assiut"
};

console.log("Original student:", student);

// Change age
student.age = 23;
console.log("After changing age:", student);

// Add grade
student.grade = "A";
console.log("After adding grade:", student);

// Delete city
delete student.city;
console.log("After deleting city:", student);

// Try to reassign the whole object
try {
    student = {
        name: "Mona"
    };
} catch (error) {
    console.log("Reassign error:", error.message);
}

// Reason:
// const prevents reassigning the variable itself,
// but properties inside the object can still be changed.




// Task 12


const nums = [1, 2, 3];

console.log("Original:", nums);

// push
nums.push(4);
console.log("After push:", nums);

// change index 0
nums[0] = 100;
console.log("After changing index 0:", nums);

// try to reassign
try {
    nums = [5, 6, 7];
} catch (error) {
    console.log("Reassign error:", error.message);
}

// Allowed:
// push()
// changing an index
//
// Not allowed:
// reassigning the whole array
//
// Reason:
// const protects the reference, not the contents of the array.




// Task 13


// var a;
// Valid → undefined

var a;
console.log("var a:", a);


// let b;
// Valid → undefined

let b;
console.log("let b:", b);


// const c;
// Invalid → SyntaxError
//
// const c;
//
// Reason:
// const must be initialized when it is declared.




// Task 14


// Run this part in the Browser Console.

var g1 = "var global";
let g2 = "let global";
const g3 = "const global";

console.log("window.g1:", window.g1);
console.log("window.g2:", window.g2);
console.log("window.g3:", window.g3);

// Output:
// window.g1: "var global"
// window.g2: undefined
// window.g3: undefined
//
// Reason:
// Global var declarations become properties of window.
// Global let and const do not.




// Task 15


const handlers = {};

for (let i = 0; i < 3; i++) {

    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}

console.log(handlers.fn0());
console.log(handlers.fn2());

// Output:
// index: 0
// index: 2
//
// Reason:
// let creates a new binding for i in every loop iteration.
// Each function keeps its own value of i.




// Part D — Arrow Functions & Template Literals




// Task 16


const welcome = (name) => `Welcome, ${name}!`;

console.log(welcome("Ali"));

// Output:
// Welcome, Ali!




// Task 17


const fullInfo = (first, last, age) =>
    `${first} ${last} is ${age} years old`;

console.log(fullInfo("Ali", "Hassan", 25));

// Output:
// Ali Hassan is 25 years old




// Task 18


// Arrow function with one-line body

const multiply = (a, b) => a * b;

console.log("Multiply:", multiply(5, 4));


// Arrow function with block body

const sumNumbers = (a, b) => {
    console.log("First number:", a);
    console.log("Second number:", b);

    return a + b;
};

console.log("Sum:", sumNumbers(5, 4));

// Output:
// Multiply: 20
// First number: 5
// Second number: 4
// Sum: 9




// Part E — Destructuring, Default, Rest, Spread




// Task 19


const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};

const {
    title,
    price,
    inStock
} = product;

console.log("Title:", title);
console.log("Price:", price);
console.log("In Stock:", inStock);

// Output:
// Title: Laptop
// Price: 15000
// In Stock: true




// Task 20


const skills = ["HTML", "CSS", "JS", "React"];

const [firstSkill, secondSkill] = skills;

console.log("First:", firstSkill);
console.log("Second:", secondSkill);

// Output:
// First: HTML
// Second: CSS




// Task 21


const greet = (name = "Guest", message = "Hello") => {
    return `${message}, ${name}!`;
};

console.log(greet("Ali", "Hi"));
console.log(greet("Sara"));
console.log(greet());

// Output:
// Hi, Ali!
// Hello, Sara!
// Hello, Guest!

//
// Reason:
// Default values are used when an argument is not provided
// or its value is undefined.




// Task 22


const sumAll = (...numbers) => {

    return numbers.reduce((acc, num) => acc + num, 0);
};

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

// Output:
// 6
// 100
//
// Reason:
// Rest parameter collects all arguments into an array.




// Task 23


// Merge arrays

const array1 = [1, 2];
const array2 = [3, 4, 5];

const merged = [...array1, ...array2];

console.log("Merged:", merged);


// Copy array

const originalArray = [10, 20, 30];

const copiedArray = [...originalArray];

copiedArray.push(40);

console.log("Original:", originalArray);
console.log("Copy:", copiedArray);

// Output:
// Merged: [1, 2, 3, 4, 5]
// Original: [10, 20, 30]
// Copy: [10, 20, 30, 40]
//
// Reason:
// Spread creates a shallow copy of the array.




// Task 24


const user = {
    name: "Sara",
    age: 22
};

const contact = {
    email: "sara@nti.com",
    age: 23
};

const mergedUser = {
    ...user,
    ...contact
};

console.log(mergedUser);

// Output:
// {
//     name: "Sara",
//     age: 23,
//     email: "sara@nti.com"
// }
//
// Which age wins?
// 23
//
// Reason:
// When the same property exists, the later spread overwrites
// the previous value.




// Task 25


const values = [2, 4, 6, 8];

function total(a, b, c, d) {
    return a + b + c + d;
}

const totalResult = total(...values);

console.log(totalResult);

// Output:
// 20
//
// Reason:
// Spread converts the array elements into separate arguments:
// total(2, 4, 6, 8)




// Part F — Memory & Copying




// Task 26


let person1 = {
    name: "Ali",
    child: {
        age: 5
    }
};

let person2 = person1;

person2.name = "Omar";

console.log(person1.name);

// Output:
// Omar
//
// Reason:
// person2 = person1 means both variables point to the same object
// in memory.
// Changing person2 also changes person1.




// Task 27


const original = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};

const shallowCopy = {
    ...original
};

shallowCopy.name = "Sara";
shallowCopy.details.city = "Assiut";

console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);

// Output:
// Original:
// {
//     name: "Mona",
//     details: { city: "Assiut" }
// }
//
// Shallow Copy:
// {
//     name: "Sara",
//     details: { city: "Assiut" }
// }
//
// Reason:
// Spread creates a shallow copy.
// The first-level property name is copied independently.
// But details is a nested object, so both objects share the same
// reference to details.




// Task 28


const deepOriginal = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.details.city = "Assiut";

console.log("Original:", deepOriginal);
console.log("Deep Copy:", deepCopy);

// Output:
// Original:
// {
//     name: "Mona",
//     details: { city: "Cairo" }
// }
//
// Deep Copy:
// {
//     name: "Mona",
//     details: { city: "Assiut" }
// }
//
// Reason:
// structuredClone creates a completely independent copy,
// including nested objects.




// Task 29


const userData = {
    name: "Ahmed",
    age: 26,
    city: "Alex"
};

localStorage.setItem(
    "userdata",
    JSON.stringify(userData)
);

const storedData = localStorage.getItem("userdata");

const parsedData = JSON.parse(storedData);

console.log("Type:", typeof parsedData);
console.log("Values:", parsedData);

localStorage.removeItem("userdata");

// Output:
// Type: object
// Values: { name: "Ahmed", age: 26, city: "Alex" }
//
// Reason:
// localStorage stores data as strings.
// JSON.stringify converts object → string.
// JSON.parse converts string → object.




// Part G — Challenge Mix




// Task 30


const APP_CONFIG = {

    name: "MyApp",

    version: "1.0.0",

    api: {
        baseUrl: "https://api.example.com",
        timeout: 30000
    },

    features: []
};

console.log("Initial config:", APP_CONFIG);


// Change timeout

APP_CONFIG.api.timeout = 60000;

console.log("After changing timeout:", APP_CONFIG);


// Add feature

APP_CONFIG.features.push("dark-mode");

console.log("After adding feature:", APP_CONFIG);


// Try to reassign APP_CONFIG

try {

    APP_CONFIG = {
        name: "NewApp"
    };

} catch (error) {

    console.log("Reassign error:", error.message);
}

// Reason:
// const allows modifying properties inside the object,
// but does not allow reassigning the whole object.




// Task 31


const createCard = (title, price = 0, ...tags) => {

    return {

        title: title,

        price: price,

        tags: tags,

        label: `${title} - ${price} EGP`
    };
};


const card1 = createCard(
    "Laptop",
    15000,
    "Electronics",
    "Computer"
);

const card2 = createCard(
    "Mouse",
    500,
    "Electronics",
    "Accessory"
);

console.log(card1);
console.log(card2);

// Output:
// {
//     title: "Laptop",
//     price: 15000,
//     tags: ["Electronics", "Computer"],
//     label: "Laptop - 15000 EGP"
// }
//
// {
//     title: "Mouse",
//     price: 500,
//     tags: ["Electronics", "Accessory"],
//     label: "Mouse - 500 EGP"
// }
//
// Used:
// Default parameter → price = 0
// Rest parameter → ...tags
// Template literal → label




// Task 32


const students = [

    {
        name: "Omar",
        grade: 80
    },

    {
        name: "Mona",
        grade: 90
    },

    {
        name: "Ali",
        grade: 70
    }

];


for (const { name, grade } of students) {

    console.log(`${name} scored ${grade}`);

}

// Output:
// Omar scored 80
// Mona scored 90
// Ali scored 70
//
// Reason:
// Object destructuring is used directly inside the for...of loop
// to extract name and grade from each student object.



