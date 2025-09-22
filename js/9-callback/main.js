function multiTwo(num) {
    return num * 2;
}

function higherOrderFunction(num, callback) {
    for (let element of num) {
        const result = callback(element);

        console.log(result)
    }
}

let numbers = [1, 2, 3, 4, 5];
let numbers2 = [4, 5, 6, 7, 8];
let numbers3 = [1,2,3, 4, 5, 6, 7, 8,9,10];

higherOrderFunction(numbers, multiTwo);


//forEach
numbers.forEach(multiTwo);

numbers2.forEach((num) => console.log(num * 2))

numbers2.forEach((num) => console.log(num + 1))

numbers2.forEach((num) => {
    if (num % 2 !== 0) {
        console.log(num - 1)
    } else {
        console.log(num)
    }
})


//map
const newArray = []

numbers2.forEach((num) => {
    newArray.push(num * 2)
})

console.log(newArray)

const mapArray = numbers2.map((num) => {
    return num * 2
})
// 한 줄일 때 return, 중괄호 생략 가능

console.log(mapArray)

const mapArray2 = numbers2.map ((num) => {
    return num+1;
})
console.log(mapArray2)

// 새로운 데이터를 생성하면 표현식


function greetUser(name, callback) {
    callback(name); // 전달받은 함수 실행
}
greetUser("Mingu", function(name) {
    console.log("안녕하세요, " + name);
});

// filter
const filteredArray = numbers2.filter((num) => num % 2 === 0);
console.log(filteredArray)

// find
const foundElement = numbers2.find((num) => num > 5);
console.log(foundElement)

// reduce
const sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)

// sort
const sortedArray = numbers3.sort((a, b) => b - a);
console.log(sortedArray)

const fruits = ['banana', 'apple', 'orange', 'mango'];
const sortedFruits = fruits.sort();
console.log(sortedFruits);