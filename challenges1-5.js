//Challenge 1

const myBoolean = true;
const myString = "hello world";
const firstNumber = 20;
let secondNumber = 40;
secondNumber = 80;
const myArray = [myBoolean,myString];
const myObject = {
    firstProperty: myArray,
    sumProperty:(firstNumber+secondNumber)
}
console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1]);

//Challenge 2
/* First being that a variable declared with const is being re-assigned
   Second the variable name has a space in the middle
   Third the re-assignment of the value does not have a semicolon to end.
 */

//Challenge 3
const variable1 = 20;
const variable2 = "40";

const resultVariable = variable1+variable2;

console.log(resultVariable);
/* This should result in "2040" due to implicit coercion
   Hence the data type of the output would be string
 */

//Challenge 4
/*const objectVariable = {
    property1: 'i am property 1';
    property2: 'i am property 2';
    property3: [20,30,40];
};
console.log(objectVariable.property3[2]);
*/
const objectVariable = {
    property1: 'i am property 1',
    property2: 'i am property 2',
    property3: [10,20,30]
};
console.log(objectVariable.property3[2]);

//Challenge 5
/*
const myArray = [20,30,40];
console.log(myArray[3]);
 */
const myArray = [20,30,40];
console.log(myArray[2]);