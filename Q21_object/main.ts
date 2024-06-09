  /*They think of something you could store in a TypeScript Object. Write a program that creates Objects 
  containing these items.*/




 interface objtype {
    fname: string;
    rollno:number;
    email:string;
    subject:string[];
    student:boolean;
    address:object

}

let person:objtype = {
    fname:"ghazal siddiqui",
    rollno: 11,
    email:"abc@hotmail.com",
    subject:["math","english","urdu"],
    student:true,
    address: {
        area:"clifton",
        flat: 607
}

}

console.log(person)
console.log(person.subject[1])


