// 1. String concatenation
console.log('my'+'cat');
console.log('\'1\'\n'+2);
console.log(`string literals: 1+2 =
    '${1+2}'`)

    
// 2. Numeric operatiors
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*2);
console.log(5%2);
console.log(2**3); //제곱승

// 3. Increment and Decrement Oprators
let counter = 2;
const preIncrement = ++counter;
console.log(preIncrement);

// 4. Assignmet opratiors;
let x = 3;
let y = 6;
x += y; // x= x + y;

// 5. Comparison
// < <= > >=

// 6. Logical operations : || && !

// false || false || true -> true
// true || ? || ? -> 맨 앞에 true면 뒤에는 그냥 연산 안함.
// ***함수 호출이나 복잡한 애를 제일 뒤쪽에 둬야지 좋음!

// &&도 마찬가지!
// * null -> false임


// 7. Equality
const stringFive = '5';
const numberFive = 5;
// == loose equality
console.log(`-----${stringFive == numberFive}`);
// == strict equality
console.log(`-----${stringFive === numberFive}`);

// object equality by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// test
console.log('##########test###########');
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); //falsex -> true이네... WOW
console.log(null === undefined); //false

// 8. Conditional operators :if
// if, else if, else
const id = 'chan';
if (id === 'chan'){
    console.log('Welcome chan');
}else if(id === coder){
    console.log('Welcome coder');
}else{
    console.log('unknown');
}

// 9.  삼항연산자 Teranry operator ?
console.log( id==='chan'?'yes':'no');

// 10. switch case 문
const browser ='IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'FireFox':
        console.log('love you!');
        break;
    default :
        console.log('and so on');
        break;
}

//11. 반복문
let i = 3;
while(i> 0){
    console.log(`while : ${i}`);
    i--;
}

do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);

for(let i = 0; i<3 ; i++){
    console.log(`inline variable for: ${i}`);
}

//break, continue
// break 멈춰
// continue 지금꺼 멈추고 다음 꺼 계속 해

// test
//Q1. iterate from 0 to 10 and print only even numbers (continue)
for(let i = 0 ; i<=10 ;i++){
    if(i%2 == 1) continue;
    console.log(i);
}
//Q2. iterate from 0 to 10 and print numbersuntil raching 8 (break)
for(let i = 0 ; i<=10 ; i++){
    console.log(i);
    if(i==8) break;
}
