'use strict';

// 자바스크립트에서 함수 지정하기
// function name(param1, parem2) {body ... return;}
// 하나의 함수는 하나의 기능만!
// 함수는 무언가를 동작하는 거기 때문에 동사형태로 이름을 지정하는 게 좋다.
// 함수 이름 정하기 어렵다면? 이 함수 안에서 너무 많은 걸 하는 게 아닐까.. 생각해보자.
// function is object in JS

function printHello(){
   console.log('Hello');
}

printHello();

function log(message){
   console.log(message);
}

log('Hello@');
log(1234);