'use strict';

// Array🤗

// 1. 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits =['🧉','🍏'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
console.log(fruits[3]); //-> undefined
console.log(fruits[fruits.length-1]); // 배열 마지막 인덱스 접근 법

// 3. Looping over an array
// a. for
for(let i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i]);
};
// b. for of
for(let fruit of fruits){
    console.log(fruit);
}
// c. forEach
fruits.forEach(function(fruit, index, array){
    console.log('he');
    console.log(fruit, index);
});
fruits.forEach((fruit, index, array) => console.log(fruit));

// 4. Addition, deletion, copy
// add, remove
// 제일 뒤에 push, 제일 뒤에 빼는 거 pop
fruits.push('사과', '딸기');
console.log(fruits);
fruits.pop();
console.log(fruits);

// 제일 앞에 unshift, 제일 앞에 빼는 거 shift
fruits.unshift('레몬','파인애플');
console.log(fruits);
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop, push

// │───│ 위에 넣고 빼고 push/ pop 빨라
// │───│ 밑에 꺼 넣고 빼고? 그러면 2, 3, 4, 5... 다 다시 작업해줘야해
// └───┘ -> unshift, shift보단 push, pop을 쓰세요.


//splice : remove an item by index position
fruits.push('바나나','메론','포도');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1,1,'🍕','🍔');
console.log(fruits);

//splice 꼬아서 잇다

// combine two arrays
const fruits2 = ['🍖','🥗'];
const newFruits = fruits2.concat(fruits);
console.log(newFruits);


// 5. Searching
// find the index
// indexOf
console.clear();
console.log(fruits);
console.log(fruits.indexOf('메론'));
console.log(fruits.indexOf('사과'));    // 없을 땐 -1 반환
// includes
console.log(fruits.includes('바나나')); // 있냐 ? false, true로 반환해줌

// lastIndexOf
console.log(fruits.lastIndexOf('메론')); // 뒤에서 indexOf 읽어옴!


