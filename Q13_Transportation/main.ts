
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and 
make a list that stores several examples.Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”*/


let transportation: string[]=["Honda civic", "BMW","Suzuki swift",];


for(let fav_mode of transportation){
    console.log(`"I would like to own a ${fav_mode}."`);
}