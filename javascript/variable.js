// 1. Use strict
// added in ES5
// use this for Vanila JS
'use strict';

// 2. Variable (변수), rw(read/write)
// let (added in ES6)

let name = 'elie';
//  let -- > ㅁ 박스에게 이름을 주고, 값을 채우는 개념
console.log(name);
name = 'hello';
console.log(name);

//block Scope
{
    let blockScope = 'elie';
    console.log(blockScope);
    blockScope = 'hello';
    console.log(blockScope);
    console.log(name);
    // ▲ 얘는 글로벌 스코프임(블록 안밖 다 사용 가능)
    // 항상 메모리에 탑재되어있기 때문에 최소한으로 사용 권장
}
//console.log(blockScope); ->에러남
// 블록 스코프, {} 안에서 선언한 변수는 밖에서 사용할 수 없음

console.log('################################################');
//******var대신 let을 써주세요...... */
//var (don't ever use this!)
console.log(age);
{
    age =4;
    console.log(age);
    var age;
}
console.log(age);
// 선언하기도 전에 값을 써서 쓸 수 있음
// var hoisting 어디에 선언했냐에 상관없이 제일 위로 끌어올려주는 것
// + has no block scope (중요)
// 에엥? 큰 프로젝트에서 겹쳐도 몰라ㅋㅋ 분명 블록스코프 안에 선언했는데...
// ES5쓰면 어떡하냐고? BABEL이란 게 있음~

// 3. Constant(read only)
// use const whenever possibe
// only use let if variable needs to change.

// const -- > ㅁ 박스에게 이름과 값 주고 자물쇠 채우는 것임
// - security (누가 바꿀 수 없음)
// - thread safety (쓰레드 동시에 이 변수를 이용한다? ㅎㄷㄷ)
// - reduce human mistakes

const dayInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, ㅁ single itme : number, string, boolean, null, undefiend, symbol
// object, ㅁ=8 box container
// function, first-class function
    // short - 2bytes, int - 4bytes, long - 8bytes ... (적정한 메모리 사용)

const count = 17; //integer
const size = 17.1 // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
// 숫자 구분없이 type number임 ㅋㅋ 크기 var해줌

// number - special numberic values : infinity, -infinity, NaN
const infinity = 1 /0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const chan = 'chan';
const greeting = 'hello' + chan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
console.log(`value: ${char}, type: ${typeof char}`);
// 문자 관련 전부 type string임 ㅋㅋ

// template literals(string)
console.log(`hi ${greeting}!'/`);
console.log('hi '+ greeting +'!');
// 와 똑같은거임. 여러개가 되면 +해서 쓰기 귀찮으니까 
// '나 /도 그냥 넣으면 들어가짐ㅎㅎ

// boolean
// false : 0, null, undefined, NaN, ''

// null과 undefined
let nothing =null;
// null은 텅텅비어있다는 말.
let x;
let y = undefined;
// undefined는 아직 정해지지 않았단 말

// 4. symbol??

// 5. Dynamic typing : dynamically typed language
let text='hello';
console.log(text.charAt(0)); // h
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7' +5;
console.log(`value : ${text}, type : ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`);
// console.log(text.charAt(0)); //--> 에러남
// 실행하는 과정 중에 바꼈음;; 내가 만든 거 아니면??
// 나는 text로 이해하는데 알고보니 number가 된거지.
// -> TS라는 게 생김

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
// object는 박스임. 그 안에 이것저것 한꺼번에 담는거야.
console.log(ellie.name);
console.log(ellie.age);
ellie.age = 21;
console.log(ellie.age);