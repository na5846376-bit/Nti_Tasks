
// 1) Create Custom Module

import {
    name,
    age,
    greet,
    add
} from "./module1.js";

import person from "./module1.js";

console.log("Name:", name);
console.log("Age:", age);

console.log(greet("Sara"));

console.log("Add:", add(5, 3));

console.log("Person:", person);