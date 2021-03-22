'use strict';
//  class : template
//  object : instance of a class
//  JavaScript classes
//  - introduced in ES6 (WOW)

// 1. Class declarations
class Person{
    //constructor //생성자함수네?
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20); //new 라는 예약어를 씀
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        // if(value< 0){
        //     throw Error('age can not be negative');
        // }
        this._age=value;
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve','job',-1);
console.log(user1.age);


// 3, 4. Fiels (public, private)
// Too Soon! 너무 최근에 추가되어져서 많이 쓰고 있진 않음.
class Experiment{
    publicField=2;
    // #privateField=0;    //#은 안에서만
    // static publisher = 'Dream Coding';
}
const experiment1 = new Experiment();
console.log(experiment1.publicField);
// console.log(experiment.privateField);
const experiment2 = new Experiment();
// console.log(experiment1.publisher); xxxxx 안 됨
// console.log(Experiment.publisher); //얘는 클래스에서 불러옴


// 5. 상속 Inheritance
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }
    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{};
class Triangle extends Shape{
    draw(){
        super.draw(); // 부모꺼 쓰면서
        console.log('▲'); // 이 내용도 추가
    }
    //오버라이딩
    getArea(){
        return (this.width * this.height)/2;
    }
    toString(){
        return `Triangle : color - ${this.color}`;
    }
};

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true

console.log(triangle.toString());