// if 조건문

if (5 > 1) {
    console.log("5는 1보다 크다.");
}

// if ~ else 조건문

if (5 < 1) {
    console.log("5는 1보다 작다.");
} else {
    console.log("5는 1보다 크다.");
}

// if ~ else if ~ else 조건문

let number = 1;

if (number> 0) {
    console.log("양수");
} else if (number < 0) {
    console.log("음수");
} else {
    console.log("0");
}

let number2= 0;

if (number2>0) {
    console.log("양수")
} else if (number2 <0) {
    cosole.log("음수")
} else {
    console.log("0")
}

// 중첩 조건문

let age = 20
let isStudent = true;

if (age >= 20) {
    if (isStudent == true) {
        console.log("성인 학생");
    } else {
        console.log("성인");
    }
} else if (age < 20) {
    if (isStudent == true) {
        console.log("청소년 학생");
    } else {
        console.log("청소년");
    }
}

// 변수 score를 선언하고, 숫자 75를 할당한다
// 만약 변수 socre가 90 이상이라면
// 그런데 만약 변수 score가 90 미만 그리고(&&), 80 이상이라면
// 그런데 만약 변수 score가 80 미만 그리고(&&), 70 이상이라면
// 그런데 만약 변수 score가 70 미만 그리고(&&), 60 이상이라면
// 그런데 모두 아니라면

let score = 75;

if (score >= 90) {
    console.log("A학점");
} else if (score < 90 && score >= 80) {
    console.log("B학점");
} else if (score < 80 && score >= 70) {
    console.log("C학점");
} else if (score < 70 && score >= 60) {
    console.log("D학점");
} else {
    console.log("F학점");
}