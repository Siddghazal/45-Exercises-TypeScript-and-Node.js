/*Cars: Write a function that stores information about a car in a Object. The function should always receive 
a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an 
optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/



type Car ={
    manufacturer:string,
    model:string,
    [key:string]: any
}

function CarInfo(manufacturer:string,model:string,Optional: Record< string,any>):Car {

    return{
        manufacturer,
        model,
        ...Optional
    }
}



let storeCarInfo = CarInfo("toyota","corolla",{color:"silver",year:"2024"})

console.log(storeCarInfo);