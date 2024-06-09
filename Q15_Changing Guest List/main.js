/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a
new set of invitations. You’ll have to think of someone else to invite.

•Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of
the guest who can’t make it.

•Modify your list replacing the name of the guest who can’t make it with the name of the new person you are
inviting.,

•Print a second set of invitation messages, one for each person who is still in your list.*/
var guest_name = ["Uzma", "Nida", "Naheed"];
for (var _i = 0, guest_name_1 = guest_name; _i < guest_name_1.length; _i++) {
    var guestList = guest_name_1[_i];
    console.log(" Dear ".concat(guestList, ", \n I would like to invite you tomorrow for dinner. \n Thank you! \n"));
}
var absent_guest = "Uzma";
var new_guest = "Fatima";
guest_name[0] = new_guest;
console.log(" Modifying new guest list\n ");
for (var _a = 0, guest_name_2 = guest_name; _a < guest_name_2.length; _a++) {
    var guestList = guest_name_2[_a];
    console.log(" Dear ".concat(guestList, ", \n I would like to invite you tomorrow for dinner. \n Thank you! \n"));
}
console.log(" ".concat(absent_guest, " is not comming for dinner."));
