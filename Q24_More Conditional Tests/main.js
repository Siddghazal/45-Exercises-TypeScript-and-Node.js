/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
//equality and inequality with strings
console.log("equality test with strings: ", "Aeroplane" === "Aeroplane");
//equality and inequality with strings
console.log("inequality test with strings: ", "aeroplane" != "aeroplane");
//Tests using the lower case function
console.log("lower case function test:", "HELLO".toLowerCase() == "hello");
console.log("lower case function test:", "HELLO".toLowerCase() != "hello");
//Numerical tests involving equality 
console.log("equality test with numbers:", 50 == 50);
//Numerical tests involving inequality 
console.log("inquality test with numbers:", 10 !== 10);
//greater than test
console.log("greater than test", 20 > 10);
//less than test
console.log("less than test", 40 < 30);
//greater than or equal to
console.log("greater than and equal to test:", 20 >= 20);
// less than or equal to
console.log("less than or equal to test", 40 <= 30);
//Tests using "and"  operators
console.log("and operator test", 2 == 2 && 8 > 4);
console.log("and operator test", 2 == 2 && 8 > 10);
//Tests using "or" operators
console.log("or operator test", 2 == 2 || 20 > 40);
console.log("or operator test", 2 != 2 || 20 > 40);
//Test whether an item is in a array
var fruits = ["apple", "mango", "cherry"];
console.log("test apple is in the array:", fruits.includes("apple"));
// whether an item is not in a arrayet 
console.log("test banana is not in the array:", fruits.includes("banana"));
