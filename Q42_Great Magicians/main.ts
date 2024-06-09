
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/



let magician_name:string[]=["Harry Potter","David Copper","Paul Daniels","Chris Angel"];

function show_magicians(magicians:string[]){

    magicians.forEach(names =>{
        console.log(names);
    }
)
}
  
function make_great(magicians:string[]){

    return magicians.map(name =>`The Great ${name}`);
    
}
 let great_magicians = make_great(magician_name)

 show_magicians(great_magicians)

