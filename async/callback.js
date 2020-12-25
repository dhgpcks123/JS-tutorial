'use strict';

// JavaScript is synchronous.
// Excute the code block by order after hoisting
// 하나하나씩 동기적으로 실행 된다.
// hoisting : var, function declaration
console.log('1');
console.log('2');
console.log('3');

console.clear();

// 비동기? 언제 실행 할지 모른다는 건데
// 그걸 잘 볼 수 있는 게 setTimeout.
console.log('1');
setTimeout(()=>{console.log('setTimeout : 3')} //브라우저에서 제공
, 1000);
console.log('3');


// Synchronous callback
function printImmediately(print){
   print();
} //함수의 선언은 호이스팅 됩니다

printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWidthDelay(print, timeout){
   setTimeout(print, timeout);
}
printWidthDelay(()=>console.log('async callback'), 2000);

//* 모든 함수의 선언은 호이스팅 된다


//----------------------------------------------------------------------
// CallBack hell ex
class UserStorage{
   loginUser(id, password, onSuccess, onError){
      setTimeout(()=>{
         if(
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
         ){
            onSuccess(id);
         } else{
            onError(new Error('not found'));
         }
      }, 2000);
   }

   getRoles(user, onSuccess, onError){
      setTimeout(()=>{
         if(user === 'ellie'){
            onSuccess({name:'ellie', role:'admin'});
         }else{
            onError(new Error('no access'));
         }
      }, 1000);
   }
}



const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password,
   (user)=>{
      userStorage.getRoles(user, 
         (userWithRole) =>{
            alert(`hello ${userWithRole.name}, you have a ${user.role} role`);
         },
         (error)=>{console.log(error);}
      )
   },
   (error)=>{console.log(error);}
)


// 콜백지옥? 콜백함수 - > 콜백함수 - > 콜백함수
// 한 눈에 이해가 안 돼.