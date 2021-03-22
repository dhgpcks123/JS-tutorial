'use strict'

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// JSON.stringify
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);
// => ["apple","banana"] 이거 json입니다

const rabbit = {
   name: 'tori',
   color: 'white',
   size: null,
   birthDate: new Date(),
   symbol: Symbol('id'),
   jump: () =>{
      console.log(`${name} can jump!`);
   },
};
json = JSON.stringify(rabbit);
console.log(json);
// 함수는 json으로 안 바뀌네 ? 함수 안에 내용은 객체의 데이터가 아니라서
// 뭐 symbol같은 자바스크립트에만 있는 것도 json으로 안 바뀜

json = JSON,stringify(rabbit, ['name', 'color']);
console.log(json);
// -> 이름, 색깔만 포함

json = JSON,stringify(rabbit, (key, value)=>{
   console.log(`key : ${key}, value " ${value}`)
   return key === 'name' ? 'ellie' : value;
});
console.log(json);

//----------------------------------------------------------------------------


// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
// 이제 자바스크립트의 객체가 됐음.
rabbit.jump(); //--> 함수 있었는데?
// obj.jump(); //--> json됐다가 다시 객체로? 함수는 안 바뀌잖아. 없어. 에러남




console.log(rabbit.girthDate.getDate());
// console.log(obj.birthDate.getDate());
// 객체에서 쓸 때는 객체니까.getDate()쓸 수 있는데 ->json갈 때는
// string이 되거든. 다시 바꿔도 string이지

// so 어떻게 할거냐

const obj2 = JSON.parse(json, (key, value) =>{
   console.log(`key : ${key}, value " ${value}`)
   return key ==='birthDate' ? new Date(value) : value;
});
console.log(obj2.birthDate.getDate());
