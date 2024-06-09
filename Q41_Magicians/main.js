/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/
var magician_names = ["Harry Potter", "David Copper", "Paul Daniels", "Chris Angel"];
function show_magicians(magicians) {
    magicians.forEach(function (names) {
        console.log(names);
    });
}
show_magicians(magician_names);
