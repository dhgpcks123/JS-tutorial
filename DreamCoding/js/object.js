'use strict'

//Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

// 1. Literals and properties
// object는 {key와 value}; 의 집합체
const obj1 = {}; // 'object literal'
const obj2 = new Object(); //'object constructor'

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name : 'ellie', age: 4};
print(ellie);


// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);
// 이렇게 할 수 있어.. ㅎㄷㄷ 근데 유지보수 힘드니까 웬만하면 굳이...

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);


// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// .을 쓰는 경우 -> 해당 값을 받아올 때 (보통 이렇게 써)
// computed(계산된) properties. -> 실시간으로 원하는 키 값을 받아올 때

function printValue(obj, key){
    console.log(obj.key);
    console.log(obj[key]);
    //키를 사용자에게 받는다면?
}
printValue(ellie, 'name');
printValue(ellie, 'age');


// 3. Property value shorthand
const person1 = {name:'bob',age:2};
const person2 = {name:'steve',age:3};
const person3 = {name:'dave',age:4};
const person4 = MakePerson('ellie',30);
console.log(person4);
//pserson4만드려면 또 다시??
//예전에 클래스 없었으면 이렇게 많이 썼음.
// 다른 계산 안하고 순수하게 Object생성하는 함수 대문자로 시작
function MakePerson(name, age){
    return{
        // name: name,
        // age : age
        //자바 스크립트에서는 key, value값 동일하면 생략가능!
        //-->
        name,
        age
    };
}
//== 같은 기능
// 4. Constructor Function
const person5 = new Person('ellie',10);
console.log(person5);
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator : property existence check ( key in obj);
// 키 있는지 없는지 확인해주는 예약어?
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);


// 6. for..in vs for..of
// for(key in obj)      --> 객체
console.clear(); //이전 console 값들 지워짐
const chan = {name:'chan', age:15};
chan.height = 165;
for(let key in chan){
    console.log(key);
}
// for .. in 쓸 때 key에도 let이나 const같은 값을 주어야 함.

// for(value of iterable)
const array = [1, 2, 3, 4, 5];
for(let i = 0 ; i <array.length; i ++){
    console.log(array[i]);
}
//--> 손 쉽게 작성해보자! for .. of     --> 배열
for(let value of array){
    console.log(value);
}

console.clear();
// 7. Fun Cloning
// Ojbect.assign(dest, [obj1, obj2, obj, ...])
const user = {name:'blee', age: '20'};
const user2 = user;

// 얕은 복사
//         ┌───┐
// user->  │ref│ ─ ┌ellie┐
//         ├───┤   └20───┘
// user2-> │ref│ ─┘
//         └───┘
user2.name = 'coder';
console.log(user);

// 깊은 복사
// old way
const user3 = {};
for(let key in user){
    user3[key] = user[key];
}
user.name = 'hello';
console.log(user);
console.log(user3);
// 깊은 복사!! assign
const user4 = {};
Object.assign(user4, user);
console.log(user4);
// 똑같은 말
// const user4 = Object.assign({}, user);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);  // blue // scrip언어니까요~
console.log(mixed.size);    // big 


