//simple object

// var cars = {
//     brand: "Volvo",
//     model: "XC90",
//     color: "silver",
//     price: 60000,
//     year: 2023,
    
//     carType: function(){
//        return `This is ${this.brand} ${this.model} in ${this.color} color. This car was produced in ${this.year} and costs ${this.price}`;
//     }
// }
// var animals = {
//     animal: "dog",
//     type: "pet",
//     color: "black",
//     age: "3",
//     size: "big",

// animalsInfo: function() {
//     return `This ${this.animal} is ${this.type}, it is ${this.color} and ${this.age} years old, size of this ${this.animal} is ${this.size}`;
// }
// }


//array of object
// var person = [{
//     name: "Anna",
//     age: 20,
//     job: "Teacher"
// },
// {
//     name: "Elena",
//     age: 24,
//     job: "Housewife"},
// {
//     name: "Inna",
//     age: 34,
//     job: "Freelancer"},
// ]

// var animals = [{
//     animal: "dog",
//     type: "pet",
//     color: "black",
//     age: "3",
//     size: "big"
// },
// {
//     animal: "cat",
//     type: "pet",
//     color: "white",
//     age: "5",
//     size: "small"
// },
// {
//     animal: "wolf",
//     type: "wild",
//     color: "grey",
//     age: "n/a",
//     size: "middle"
// }]

// var cars = [{
//     brand: "Volvo",
//     model: "XC90",
//     color: "silver",
//     price: 60000,
//     year: 2023},

//     {
//     brand: "BMW",
//     model: "M3",
//     color: "blue",
//     price: 40000,
//     year: 2003},

//     {
//     brand: "Toyoya",
//     model: "Land Cruiser",
//     color: "gold",
//     price: 90000,
//     year: 2023}
// ]
// let carsGrid = document.getElementById("main");
// for (carsMainInfo of cars){
//     carsGrid.innerHTML += `<p>This is ${carsMainInfo.brand} ${carsMainInfo.model} in ${carsMainInfo.color} color from ${carsMainInfo.year} and it costs ${carsMainInfo.price}</p>` 
// }



//global Array and classes

// const allCars = []; 
// class Car {
//     constructor(brand, model, color, price, year){
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//         this.price = price;
//         this.year = year;
//         allCars.push(this);
//     }
// }
// class Motorbike extends Car {
//     numberOfWheels; 

//             constructor(brand, model, color, price, year, numberOfWheels) {
//             super(brand, model, color, price, year);
//             this.numberOfWheels = numberOfWheels;
//     }
// }

// const auto1 = new Car("Toyota", "Land Cruiser", "gold", "90000", "2024");
// const auto2 = new Car("BMW", "M3", "blue", "50000", "2004");
// const auto3 = new Car("Volvo", "XC90", "black", "60000", "2023");
// const moto1 = new Motorbike("BMW", "GS1200", "white and blue", "15000", "2020", "2");


// let carsGrid = document.getElementById("main");
// for (carsMainInfo of allCars){
//      carsGrid.innerHTML += `<p>This is ${carsMainInfo.brand} ${carsMainInfo.model} 
//      in ${carsMainInfo.color} color from ${carsMainInfo.year} and it costs ${carsMainInfo.price}. 
//      Number of wheels is ${carsMainInfo.numberOfWheels}</p>` 
// }


// console.log(allCars);

