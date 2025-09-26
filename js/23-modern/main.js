let name = "홍길동"
let age = 20

const user = {
    name : name,
    age: age
}

console.log(user)

const user2 = {
    name,
    age
}
console.log(user2)

let key = "name"
const user3 = {
    key: "홍길동"
    // 의도 : user["name"] = "홍길동"
    // 실제 : user["key"] = "홍길동"
}

console.log(user3)

const user4 = {
    [key]: "홍길동"
    // 의도 : user["name"] = "홍길동"
    // 실제 : user["name"] = "홍길동"
}

console.log(user4)

const obj1 = {
    name : "홍길동",
    age: 20,
    job: "학생",
    location : "서울",
    country: "대한민국"
}

const obj2 = obj1
console.log(obj2 === obj1) // True

const obj3 = {...obj1} //obj1의 모든 속성을 펼쳐서 새로운 객체 생성
console.log(obj3 === obj1) // False

let obj4 = {...obj1, job: "프로그래머"}
obj4.age = 22

console.log(obj4)

let arra1=[1,2,3,4,5]
let arra2 = arra1
console.log(arra2 === arra1) // True

let arra3 = [...arra1]
console.log(arra3 === arra1) // False

const obj5 = {
    name: "홍길동",
    age: 20,
    job: "학생",
    name2: "김철수",
    age2: 30,
    job2: "프로그래머"
}

//구조 분해 할당 x
const name1 = obj5.name
const age1 = obj5.age
const job1 = obj5.job

console.log(name1, age1, job1)

//구조 분해 할당 o
const {name: name2, age: age2, job: job2} = obj5 // 홍길동, 20, 학생
// const {name2, age2, job2} = obj5  // 김철수, 30, 프로그래머
console.log(name2, age2, job2)

const arr = [1,2,3,4,5]

const [a,b,c,d,e] = arr
console.log(a,b,c,d,e)

function func(object) {
    const {name, age, job} = object
    console.log(name, age, job)
}

func(obj5)

function func2({name, age, job}) {
    console.log(name, age, job)
}

func2(obj5)


const user5 = {
    name: "홍길동",
    address: {
        city: "서울",
    },
};

console.log(user5?.address?.city) // 서울
console.log(user5?.job?.title) // undefined

const value1 = null
const defaultValue = "defaultValue"

let variable = value1 ?? defaultValue

console.log(variable)