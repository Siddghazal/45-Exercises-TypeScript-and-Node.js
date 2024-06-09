/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
 use your list to print a message to each person, inviting them to dinner.*/
var guest_name = ["Uzma", "Nida", "Naheed"];
for (var _i = 0, guest_name_1 = guest_name; _i < guest_name_1.length; _i++) {
    var guestList = guest_name_1[_i];
    console.log(" Dear ".concat(guestList, ", \n I would like to invite you tomorrow for dinner. \n Thank you! \n"));
}
