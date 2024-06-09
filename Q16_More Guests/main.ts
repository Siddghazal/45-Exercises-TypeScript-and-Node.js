/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests 
to invite to dinner.

•Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
that you found a bigger dinner table.

•Add one new guest to the beginning of your array.

•Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
•Print a new set of invitation messages, one for each person in your list.*/


let guest_name:string [] = ["Uzma","Nida","Naheed"];
    
/*for(let guestList of guest_name){
   console.log(` Dear ${guestList}, \n I would like to invite you tomorrow for dinner. \n Thank you! \n`)
} */

 let absent_guest : string = "Uzma";
 let new_guest : string = "Fatima";

 guest_name[0] = new_guest;

 for(let guestList of guest_name){
    console.log(` Dear ${guestList}, \n I would like to invite you tomorrow for dinner. \n Thank you! \n`)
 }

 console.log(` ${absent_guest} is not comming for dinner.\n`)

 console.log(" we found a bigger dinner table, so we are inviting 3 more guest for dinner.\n\n")

 guest_name.unshift("shazia");
 guest_name.splice(2 , 0,"iqra");
 guest_name.push("samina");


 for(let guestList of guest_name){
   console.log(` Dear ${guestList}, \n I would like to invite you tomorrow for dinner. \n Thank you! \n`)
}
