//* Object.entries 이해하기
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const entries = Object.entries(person);

// console.log(entries);

for(let [key,value] of entries){
  console.log(key,value)
}

//* for of/for in 이해하기