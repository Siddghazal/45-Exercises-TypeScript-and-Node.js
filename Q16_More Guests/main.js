/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.

•Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table.

•Add one new guest to the beginning of your array.

•Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
•Print a new set of invitation messages, one for each person in your list.*/
var guest_name = ["Uzma", "Nida", "Naheed"];
/*for(let guestList of guest_name){
   console.log(` Dear ${guestList}, \n I would like to invite you tomorrow for dinner. \n Thank you! \n`)
} */
var absent_guest = "Uzma";
var new_guest = "Fatima";
guest_name[0] = new_guest;
for (var _i = 0, guest_name_1 = guest_name; _i < guest_name_1.length; _i++) {
    var guestList = guest_name_1[_i];
    console.log(" Dear ".concat(guestList, ", \n I would like to invite you tomorrow for dinner. \n Thank you! \n"));
}
console.log(" ".concat(absent_guest, " is not comming for dinner.\n"));
console.log(" we found a bigger dinner table, so we are inviting 3 more guest for dinner.\n\n");
guest_name.unshift("shazia");
guest_name.splice(2, 0, "iqra");
guest_name.push("samina");
for (var _a = 0, guest_name_2 = guest_name; _a < guest_name_2.length; _a++) {
    var guestList = guest_name_2[_a];
    console.log(" Dear ".concat(guestList, ", \n I would like to invite you tomorrow for dinner. \n Thank you! \n"));
}
