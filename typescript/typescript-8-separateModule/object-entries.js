// * Object.entries 이해하기
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const entries = Object.entries(person);

// console.log(entries);


// * for of/for in 이해하기
// for(let [key,value] of entries){
//   console.log(key,value)
// }

const objKey = { a: 1, b: 2, c: 3 };

// for (let key in objKey) {
//   console.log(key, objKey[key]);
// }

// * value라고 변수지정한다고 value가 나오는 것이 아님 
// * 위의 let[key,value]를 사용하거나 key,변수[key]로 값을 가져와야한다?
// ? 객체[key]를 사용하는 것이아니면 바로 value값은 불러올 수 없나?
for (let value in objKey) {
  console.log(value);
}