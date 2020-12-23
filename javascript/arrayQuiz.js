'use strict'
// Q1. make a string out of an array
{
    const fruits = ['애플', '바나나', '오렌지'];
    /** 엘리 풀이 */
    const result = fruits.join(' - ');
    console.log('ellie : ' + result);
    console.log(fruits.toString());
    console.log(fruits.length);
    // toString()은 함수고, reverse()도 함수고..
    // length는 속성이고... property.. 이걸 외워야해!?
    // 뭐 ctrl로 들어가서 보면 되겠지만...

}
  // ******못 풀었음 Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    /** 엘리 풀이 */
    //tokenizer처럼 쓸 수 있는 거 string에 split가 있다!
    const result = fruits.split(',', 3);
    console.log('ellie : ' + result);

}

  // Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    //그냥 뒤집기는?
    const revArr = array.reverse();
    console.log(revArr);
    console.log(array); // 배열 자체도 뒤집어져있음.
    // reverse는 배열 자체를 뒤집는 거다
    //이거는 비교해서 바꾸는거고
    console.log( array.sort (function(a,b){
        return b-a;
    }));
    console.log(array.sort((a,b) => b-a));
    
}

  // Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const newArray = array.splice(2);
    // console.log(newArray);
    // console.log('남은거 ' + array);
    // splice하면 원래 배열은 잘리고 남은 녀석만 가지고 있음...

    // new array 만들고 싶다?
    /** 엘리 풀이 */
    const result = array.slice(2, 5);
    console.log('ellie : ' + result);

    //읽어오는 건 let, js에서 지정하는 건 const.
    //const는 변하지 않아. let은 변할 수 있어.

    // splice는 원 배열을 변경시키고, slice는 그냥 뽑아서 새로운 배열 만듬
}

class Student {
    constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

  // Q5. find a student with the score 90
{
    for(let stu of students){
        if(stu.score == 90){
            console.log(stu);
        }
    }

    //오오미... 배열의 find 함수...(콜백함수)
    const result = students.find((items)=> items.score === 90);
    console.log(result);
}

  // Q6. make an array of enrolled students
{
    let enrolledStudents =[];
    for(let stu of students){
        if(stu.enrolled==true){
            enrolledStudents.push(stu);
        }
    }
    for(let estu of enrolledStudents){
        console.log(estu);
    }

    const result = students.filter((items)=> items.enrolled)
    console.log(result);
}

  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
{
    let scores = [];
    for(let stu of students){
        scores.push(stu.score);
    }
    console.log(scores);
    console.log(scores.reverse());
    console.log(scores.sort((a, b)=>b-a));

    const result = students.map((items) => items.socre);
    console.log(result);
    // value나 items넣으면.. 이게 문장이 길어지면 알아보기 힘들잖아.
    // 인자 이해하기 쉽게 넣어주도록 해줘.
    // 위와 같은 경우 student로 넣어주세요
}

  // Q8. check if there is a student with the score lower than 50
{
    const result = students.some((students) => students.score < 50);
    console.log(result);
    const result2 = students.every((student)=> student.score >= 50);
    console.log(result2);

    for(let stu of students){
        if(stu.score<50){
            console.log(`${stu.name}의 점수는 50보다 작다`);
        }
    }
}

  // Q9. compute students' average score
  // ??????????????? reduce 어렵네....
{
    let sum = 0;
    for(let stu of students){
        sum += stu.score;
    }
    console.log(sum/students.length);

    console.clear();
    const result = students.reduce((prev, curr) => {
        console.log('------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    // 거꾸로는 reduceRight라는데 어렵다..
}

  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
{
    
    
    let score =[];
    for(let i = 0 ; i <students.length; i++){
        score[i] = students[i].score;
    }
    let arr = score.sort((a, b) => a-b);
    console.log(arr.toString());
    //--
    const result = students
    .map(student => student.score)
    .filter(score => score >= 50)
    .join(', ');
    console.log(result);


}

  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score)
    .sort((a, b)=> a-b);
    console.log(result);
}