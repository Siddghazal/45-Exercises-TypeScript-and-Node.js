
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a 
new set of invitations. You’ll have to think of someone else to invite.

•Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of 
the guest who can’t make it.

•Modify your list replacing the name of the guest who can’t make it with the name of the new person you are 
inviting.,

•Print a second set of invitation messages, one for each person who is still in your list.*/


let guest_name:string [] = ["Uzma","Nida","Naheed"];
    
for(let guestList of guest_name){
   console.log(` Dear ${guestList}, \n I would like to invite you tomorrow for dinner. \n Thank you! \n`)
}

 let absent_guest : string = "Uzma";

 let new_guest : string = "Fatima";

 guest_name[0] = new_guest;

 console.log(` Modifying new guest list\n `)

 for(let guestList of guest_name){
    console.log(` Dear ${guestList}, \n I would like to invite you tomorrow for dinner. \n Thank you! \n`)
 }

 console.log(` ${absent_guest} is not comming for dinner.`)



