// Challenge 6
/*const numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);

we can not re-assign variables from const keyword
*/

let numberVariable = 10;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);

//Challenge 7

/*
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber;

console.log(result);

----------------------------------------------

const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber == secondNumber;

console.log(result);

 */
const firstNumber = 20;
const secondNumber = 20;

const result = firstNumber === secondNumber;

console.log(result);

//Challenge 8
/*
const expression1 = 100%50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 ===305
const expression5 =  !expression4;
 */

console.log(!((100%50 < 100/50)&& 300+5===305));

//Challenge 9

/*
const myObj = {
    prop1: 'first value'
    prop2: 20
};

const myArray = [40,50,2];

const result = myObj.prop2 === (myArray[0] / myArray[2]);

Results in true;
*/

//Challenge 10


const myObj = {
    nestedObject1:{
        price : 100,
        quantity : 5,
       },
    nestedObject2: {
        price: 150,
        quantity: 2,
        }
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result1 = (myArray[0].price * myArray[0].quantity) >
               (myArray[1].price * myArray[1].quantity);

/*This would result in True
 */