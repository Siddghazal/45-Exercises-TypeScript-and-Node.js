/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing
code that will print a greeting to each user after they log in to a website. Loop through the array, and
print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
var userName = ["admin", "simply sara", "pretty happy", "joyfull mood", "lady in black"];
for (var _i = 0, userName_1 = userName; _i < userName_1.length; _i++) {
    var user = userName_1[_i];
    if (user == "admin") {
        console.log("Hello ".concat(user, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
}
