 
/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.*/


let magician_names:string[]=["Harry Potter","David Copper","Paul Daniels","Chris Angel"];

function show_magicians(magicians:string[]){

    magicians.forEach(names =>{
        console.log(names);
    })
}

show_magicians(magician_names)