/*checking Usernames: Do the following to create a program that simulates how websites ensure that everyone
has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in
 the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message
  that the person will need to enter a new username. If a username has not been used, print a message saying
  that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
var current_user = ["Shama", "Hina", "afia", "fozia", "shazia"];
var new_user = ["shama", "hina", "fiza", "nida", "sara"];
var currentUser = current_user.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_user_1 = new_user; _i < new_user_1.length; _i++) {
    var users = new_user_1[_i];
    if (currentUser.includes(users.toLowerCase())) {
        console.log("sorry ".concat(users, " is not availale"));
    }
    else {
        console.log("yes ".concat(users, " is available"));
    }
}
