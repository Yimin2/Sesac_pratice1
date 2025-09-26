const obj = {
    name: "홍길동",
    age: 20,

    //함수 표현식
    func() {
        console.log("메서드")
        console.log(this); //this는 obj를 가리킨다.
    }
}


obj.func()

const user = {
    name: "홍길동",
    age: 20,

    greet: () => {
        console.log(this); //화살표 함수에서의 this는 상위 스코프를 가리킨다. (전역객체)
    }
}

user.greet() //this는 user를 가리키지 않는다. (화살표 함수에서는 this가 다르게 동작한다.)

const user2 = {
    name: "홍길동",
    age: 20,

    greet() {
        const arrowFunc = () => {
            console.log(this);
        }
        arrowFunc()
    }
}

user2.greet()

