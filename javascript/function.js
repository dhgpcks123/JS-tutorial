// Function
// -- fundamental building block 
// -- subprogram can be used multiple times
// -- performs a task or calculates a value

// 1. Function delaration
// function name(param1, param2) { body... reutn; }
// one function == one thing
// naming: doSomething, command, verb
// function is object in JS
function printHello(){
    console.log('Hello');
}

printHello();

function log(message){
    console.log(message);
}
log('HELLO@');
log(1234);
// -> 여기 message에 만약 문자만 넘겨야만 한다면??
// 그걸 사용자가 모른다면?? 내용 많아지면?? 다른 사람이 만들었으면??
// 이걸 해결 위해 TypeScript를 같이..(자바스크립트 보완) 타입!이네 ㅎㅎ
/*
    function log(message : string): number{
        console.log(message);
        return 0;
    }
*/


// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name:'ellie'};
// 객체 obj도 넣을 수 있네.
changeName(ellie);
console.log(ellie);


// 3. Default parameters (added in ES6)
// 와 기본 값을 저렇게 주는구나
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    /*
    for(let i = 0 ; i< args.length ; i++){
        console.log(args[i]);
    }
    */
    for(const arg of args){
        console.log(arg);
    }   // 확인할 때 쓰겠네.... ? 
}
printAll('dream', 'coding', 'ellie');
var array = ['dream', 'coding', 'ellie'];
printAll(array);

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(meesage);
        let childMessage = 'hello';
    }
    // console.log(childMessage); error 지역변수니까
    return undefined //생략 가능
}
printMessage();

// 6. Return
function sum(a, b){
    return a+b;
}
console.log(sum(3, 5));


// 7. Early return, early exit
//bad
function upgradeUser(user){
    if(user.point> 10){
    // long upgrade logic...
    }
}
//good
function upgradeUser(user){
    if(user.point<= 10){
        return;
    }
    // long upgrade logic...
}

//-----------------------------------------

// 1. function express
//print(); error 선언하기 전에 쓰려니까...
const print = function(){ //무명함수
    console.log(`1.function exrpess--------
                                    print`);
};
print();
const printAgain = print;
printAgain();
//변수에 할당 이후에 불러와야지 쓸 수 있음.

//근데 위에 했던 것들...
//hoisting 해서 그냥 쓸 수 있음.


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer == 'love you'){
        printYes();
    } else{
        printNo();
    }
}
// 콜백함수, 함수 넣어서
const printYes = function(){ // anonymous function 무명함수
    console.log('YES!');
};
const printNo = function print(){ // named function
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// 3 Arrow function
// always annoymous 항상 무명함수
const simplePrint = function (){
    console.log('simplePrint!');
};

const simplePrintArrow = () => console.log('simplePrint!');

const add = function (a,b) {
    return a+b;
};
const addArrow = (a,b) => a+b;
const simpleMultiply = (a,b) =>{
    return a*b;
};

//IIFE : Immediately Invoked function Expression
function hello(){
    console.log('IIFE');
};
hello();

// ->
    (function helloIIFE(){
        console.log('Hello IIFE');
    })();


// Fun quiz time★
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder;

function calculate(command, a, b){
    switch(command){
        case 'add' :
            result = a+b;
        break;
        case 'substract' :
            result = a-b;
        break;
        case 'divide' :
            result = a%b;
        break;
        case 'multiply' :
            result = a*b;
        break;
        case 'remainder' :
            result = a%b;
        break;
    }
    return result;
}

var result = calculate('substract', 65, 15);
console.log(result);