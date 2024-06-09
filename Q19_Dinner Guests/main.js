/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating
the number of people you are inviting to dinner.*/
var guest_name = ["Uzma", "Nida", "Naheed"];
/*for(let guestList of guest_name){
   console.log(` Dear ${guestList}, \n I would like to invite you tomorrow for dinner. \n Thank you! \n`)
} */
var absent_guest = "Uzma";
var new_guest = "Fatima";
guest_name[0] = new_guest;
/*for(let guestList of guest_name){
   console.log(` Dear ${guestList}, \n I would like to invite you tomorrow for dinner. \n Thank you! \n`)
} */
//console.log(` ${absent_guest} is not comming for dinner.\n`)
//console.log(" we found a bigger dinner table, so we are inviting 3 more guest for dinner.\n\n")
guest_name.unshift("shazia");
guest_name.splice(2, 0, "iqra");
guest_name.push("samina");
/*for(let guestList of guest_name){
  console.log(` Dear ${guestList}, \n I would like to invite you tomorrow for dinner. \n Thank you! \n`)
}*/
///console.log("\nsorry we can not arrange big table, only two people will be invited.\n")
while (guest_name.length > 2) {
    var remove_guest = guest_name.pop();
    //.log(` sorry ${remove_guest}, \n you are not invited for dinner. \n`)
}
/*for(let guestList of guest_name){
   console.log(` Dear ${guestList}, \n you are still invited for dinner. \n Thank you! \n`)
}*/
guest_name.splice(0, 2);
console.log(guest_name);
// print a message indicating the number of people you are inviting to dinner.
console.log("total number of guest are: ".concat(guest_name.length));
