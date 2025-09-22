let emptyArray = [];
let oneItemArray = [42];
let multiItemArray = [1, 2, 3, 4, 5];

console.log("Empty Array:", emptyArray);
console.log("One Item Array:", oneItemArray);
console.log("Multi Item Array:", multiItemArray);

console.log(multiItemArray[3]);
console.log(multiItemArray[1]);
console.log(multiItemArray.length);
console.log(multiItemArray.push(6));
console.log("Multi Item Array:", multiItemArray);
console.log(multiItemArray.pop());
console.log("Multi Item Array:", multiItemArray);

for (let i = 0; i < multiItemArray.length; i++) {
    console.log(multiItemArray[i]);
}

let object = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

console.log(object.key1)
object.key3 = "value5"
console.log(object)
delete object.key2
console.log(object)

// 모든 key를 배열로 반환
console.log(Object.keys(object))

// 모든 value를 배열로 반환
console.log(Object.values(object))

// key-value 쌍을 배열로 반환
console.log(Object.entries(object))

for (let key in object) {
    console.log(key, object[key])
}