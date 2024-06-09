/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with each array
to show that you have one array of the original names and one array with the Great added to
each magician’s name.*/
var magician_name = ["Harry Potter", "David Copper", "Paul Daniels", "Chris Angel"];
function show_magicians(magicians) {
    magicians.forEach(function (names) {
        console.log(names);
    });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//making a copy of orignal array
var copyMagician = magician_name.slice();
//modify the copied array
var copy_greatMagician = make_great(copyMagician);
console.log("\nOrignal Array\n");
show_magicians(magician_name);
console.log("\nCopied array\n");
show_magicians(copy_greatMagician);
