/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements
 that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/



let favoriteFruit: string[] = ["apple","mango","banana"];

if(favoriteFruit.includes('apple')){
    console.log(`I really like apple!`);
}

if(favoriteFruit.includes('mango')){
    console.log(`I really like mango!`);
}

if(favoriteFruit.includes('banana')){
   console.log(`I really like banana!`);


}if(favoriteFruit.includes('cherry')){
    console.log(`I really like cherry!`);

 }
 if(favoriteFruit.includes('orange')){
    console.log(`I really like orange!`);
 }


