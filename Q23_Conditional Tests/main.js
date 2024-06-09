/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your
 prediction for the results of each test. Your code should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
// 5 true test//
// test 1
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
//test 2
console.log("Is car === subaru'? I predict True.");
console.log(car === 'subaru');
// test 3
console.log("Is car.length == 6 ? I predict True.");
console.log(car.length == 6);
// test 4
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');
//test 5
console.log("Is car !=='toyota? I predict True.");
console.log(car !== 'toyota');
/// 5 false test///
//test 6
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');
//test 7
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');
//test 8
console.log("Is car == 'SUBARU'? I predict false.");
console.log(car == 'SUBARU');
//test 9
console.log("Is car === 'Subaru'? I predict false.");
console.log(car === 'Subaru');
// test 10 
console.log("Is car.length == 8 ?'subaru'? I predict false.");
console.log(car.length == 8);
