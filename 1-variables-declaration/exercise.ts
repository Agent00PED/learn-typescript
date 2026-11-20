/*
// 1. Variables & Declaration  |  ข้อ 1 - 4  |  Session 1
//
// let เปลี่ยนค่าทีหลังได้ / const เปลี่ยนไม่ได้
// ชนิดพื้นฐาน 3 อย่าง: string, number, boolean

// ข้อ 1: ประกาศตัวแปรพร้อมระบุชนิด
// TODO: Implement ข้อ 1
// 1. let nameStudent: string = ...
// 2. let age: number = ...
// 3. let isStudent: boolean = ...
// คำใบ้: colon หลังชื่อตัวแปรคือการบอก TypeScript ตรงๆ ว่าตัวแปรนี้เก็บอะไร
let studentName: string = "Wongsathon U-kaew";
let age: number = 20;
let isStudent: boolean = true;

// ข้อ 2: print ออกมาดู
// TODO: Implement ข้อ 2
// 1. console.log("Name: " + nameStudent);
// 2. print age และ isStudent ด้วย
console.log("Name: " + studentName);
console.log("Age: " + age);
console.log("Is Student: " + isStudent);

// ข้อ 3: const เปลี่ยนค่าไม่ได้ (ทำแล้วลบทิ้ง)
// TODO: Implement ข้อ 3
// 1. const birthYear: number = 1815;
// 2. ลองเขียน birthYear = 1816;  <- จะมีเส้นแดง อ่าน error แล้วลบทิ้ง
const birthYear: number = 1815;
console.log("Birth Year: " + birthYear);

// ข้อ 4: ใส่ผิดชนิด (ทำแล้วลบทิ้ง)
// TODO: Implement ข้อ 4
// 1. ลองเขียน age = "thirty";
// 2. อ่าน error: Type 'string' is not assignable to type 'number'.
// 3. สังเกตว่าโค้ดยัง "รันได้" เพราะ tsx ไม่เช็ค type -- เส้นแดงต่างหากที่เตือนเรา
// 4. ลบทิ้ง

// ✅ CHECKPOINT: ประกาศตัวแปรครบ 3 ชนิด print ได้ และเคยเห็น error จากการใส่ผิดชนิด 1 ครั้ง

const a:number = 20
const b:number = 30

const result = a+b
console.log(result)

console.log(sum(20,30))

console.log(sum(30,60))

console.log(sum(92.684521684891526864615896541,12356.5194654189546188965894589541894))

function sum(a:number,b:number):number{
return a+b
}

console.log(sum(4.982e+21,3.682e+21))

function grade(score:number):void{
    if (score >= 80){
        console.log("A")
        if(score == 100){
            console.log("Excellent")
        }
    }else if (score >= 70){
        console.log("B")
    }else if (score >= 60){
        console.log("C")
    }else{
        console.log("F")
    }
return 
}

console.log(grade(100))
*/

/*
const apple = "apple"
const banana = "banana"
const orange = "orange"
*/


/*
const fruits = ["apple", "banana", "orange", "cherry", "lynchee"]

console.log(fruits)
*/

/*
console.log("This is", fruits[0])
console.log("This is", fruits[1])
console.log("This is", fruits[2])
*/

/*

for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    console.log("This is", fruit)
}

*/
 