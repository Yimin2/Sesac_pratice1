console.log('Hello from main.js');

// 주석
// typeof 자료형 확인 키워드

console.log(typeof "Hello"); // string
console.log(typeof 34);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

hello = "Hello";

let world = "World";

world = hello;

const welcome = "Welcome";
// welcome = "Hello"; // error

console.log(hello, world, welcome);

// camelCase
let helloMessage;

// template literal ${}
console.log(`Hello ${world}`);

