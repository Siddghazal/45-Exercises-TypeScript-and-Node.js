/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase.*/
var personName = "ImRan Khan";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", personName.split(' ').map(function (words) { return words.charAt(0).toUpperCase() +
    words.slice(1).toLowerCase(); }).join(' '));
