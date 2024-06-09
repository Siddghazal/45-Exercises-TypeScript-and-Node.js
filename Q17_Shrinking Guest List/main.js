/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and
you have space for only two guests.
•Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only
two people for dinner.

•Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
 from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

•Print a message to each of the two people still on your list, letting them know they’re still invited.

•Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
 have an empty list at the end of your program.*/
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
console.log(" ".concat(absent_guest, " is not comming for dinner.\n"));
console.log(" we found a bigger dinner table, so we are inviting 3 more guest for dinner.\n\n");
//added 3 guest in an array
guest_name.unshift("shazia");
guest_name.splice(2, 0, "iqra");
guest_name.push("samina");
// printed 6 guest in an array
for (var _i = 0, guest_name_1 = guest_name; _i < guest_name_1.length; _i++) {
    var guestList = guest_name_1[_i];
    console.log(" Dear ".concat(guestList, ", \n I would like to invite you tomorrow for dinner. \n Thank you! \n"));
}
// sorry massage to guest
console.log("\nsorry we can not arrange big table, only two people will be invited.\n");
// guest removed
while (guest_name.length > 2) {
    var remove_guest = guest_name.pop();
    console.log(" sorry ".concat(remove_guest, ", \n you are not invited for dinner. \n"));
}
// 2 invited guest
for (var _a = 0, guest_name_2 = guest_name; _a < guest_name_2.length; _a++) {
    var guestList = guest_name_2[_a];
    console.log(" Dear ".concat(guestList, ", \n you are still invited for dinner. \n Thank you! \n"));
}
//removed all guest from array
guest_name.splice(0, 2);
console.log(guest_name);
