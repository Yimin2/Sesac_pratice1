// 타입 연산자
// typeof

// 산술 연사자
// + - * / % **

// 비교 연산자
// < > <= >= == != === !==

// 논리 연산자
// && || !
console.log(`true && true = ${true && true}`);
console.log(`true && false = ${true && false}`);

console.log(`true || true = ${true || true}`);
console.log(`true || false = ${true || false}`);

console.log(`!true = ${!true}`);
console.log(`!false = ${!false}`);

// == vs === != vs !==
const number = 1;
const string = '1';

console.log(`number: ${typeof number}, string: ${typeof string}`);
console.log(`number == string: ${number == string}`);
console.log(`number === string: ${number === string}`);
console.log(`number != string: ${number != string}`);
console.log(`number !== string: ${number !== string}`);

console.log(String(123)); // "123"

String(true);
String(undefined);
String(null);

console.log(`Number ${Number("123") == 123}`);
console.log(Number("123abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(`Boolean ${Boolean(1)}`); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean("      ")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

console.log(`암시적 형변환 ${!false}`); // true`
console.log(!0); // true
console.log(!""); // true
console.log(!1); // false

console.log(1 && 0);