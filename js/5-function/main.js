// 함수 선언식
function add(number1, number2, number3) {
    return number1 + number2 + number3;
}

// 함수 표현식
const sub = function (number1, number2) {
    return number1 - number2;
}

// 화살표 함수
const multiply = (number1, number2) => {
    return number1 * number2;
}

// 매개변수 x, 반환값 x
function sayHello() {
    console.log("Hello world");
}
// 매개변수 x, 반환값 o
function createOne() {
    return 1;
}

// 매개변수 o, 반환값 x
function determine(number) {
    if (number > 0) {
        console.log("양수");
    } else if (number < 0) {
        console.log("음수");
    } else {
        console.log("0");
    }
}

const determine2 = (number) => {
    if (number > 0) {
        console.log("양수");
    } else if (number < 0) {
        console.log("음수");
    } else {
        console.log("0");
    }
}


// 매개변수 o, 반환값 o
function getLength(text) {
    return console.log(text.length)
}

function oddOrEven(number) {
    return number % 2 === 0 ? "true" : "false"
}

const oddOrEven2 = (number) => {
    return number % 2 === 0 ? "true" : "false"
}

console.log(add(1, 2, 3))
console.log(add(10, 20, 30))
console.log(sub(10, 5))
console.log(multiply(5, 5))
console.log(sayHello())
console.log(createOne())
determine(3)
determine(-3)
determine2(0)
determine2(3)
getLength("hi")
getLength("hello world")
console.log(oddOrEven(3))
console.log(oddOrEven2(4))

