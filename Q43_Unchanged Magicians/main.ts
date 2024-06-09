/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() with each array
to show that you have one array of the original names and one array with the Great added to 
each magician’s name.*/


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
//making a copy of orignal array
let copyMagician = magician_name.slice()

//modify the copied array
let copy_greatMagician = make_great(copyMagician)

console.log(`\nOrignal Array\n`)
show_magicians(magician_name)

console.log(`\nCopied array\n`)
show_magicians(copy_greatMagician)

    

