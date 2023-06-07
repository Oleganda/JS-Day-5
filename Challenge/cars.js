const allCars = []; 
class Car {
    constructor(brand, model, color, price, year, img){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
        this.year = year;
        this.img = img;
        allCars.push(this);
    }
    printInfo () {
        return `<div class="card" style="width: 18rem;">
  <img src="${carsMainInfo.img}" class="card-img-top allimg" style="width: 300px; height: 200px" alt="...">
  <div class="card-body">
    <h5 class="card-title">${carsMainInfo.brand}</h5>
    <p class="card-text">${carsMainInfo.brand} ${carsMainInfo.model} 
    in ${carsMainInfo.color} color, ${carsMainInfo.year} year and it costs ${carsMainInfo.price}. </p>
    <a href="#" class="btn btn-primary gobtn">More Info</a>
  </div>
</div>`
    }
}
class Motorbike extends Car {
    numberOfWheels; 
            constructor(brand, model, color, price, year, img, numberOfWheels) {
            super(brand, model, color, price, year, img);
            this.numberOfWheels = numberOfWheels;
    }

    printInfo () {
        return `<div class="card" style="width: 18rem;">
  <img src="${carsMainInfo.img}" class="card-img-top allimg" style="width: 300px; height: 200px" alt="...">
  <div class="card-body">
    <h5 class="card-title">${carsMainInfo.brand}</h5>
    <p class="card-text">${carsMainInfo.brand} ${carsMainInfo.model} 
    in ${carsMainInfo.color} color, ${carsMainInfo.year} year and it costs ${carsMainInfo.price}. 
         Number of wheels is ${carsMainInfo.numberOfWheels}</p>
   <a href="#" class="btn btn-primary gobtn">More Info</a>
  </div>
</div>`
    } 

    //click event. need to improve
     biggerImg() {
        return `<div class="card" style="width: 36rem;">
  <img src="${carsMainInfo.img}" class="card-img-top allimg" style="width: 500px; height: 350px" alt="...">
  <div class="card-body">
    <p class="card-text">${carsMainInfo.brand} ${carsMainInfo.model} 
    in ${carsMainInfo.color} color, ${carsMainInfo.year} year and it costs ${carsMainInfo.price}. 
         Number of wheels is ${carsMainInfo.numberOfWheels}</p>
   
  </div>
</div>`
    }
}

const auto1 = new Car("Toyota", "Land Cruiser", "golden", "90000", "2024", "photos/LC.jpg");
const auto2 = new Car("BMW", "M3", "blue", "50000", "2004", "photos/BMW.jpg");
const auto3 = new Car("Volvo", "XC90", "black", "60000", "2023","photos/Volvo.jpg");
const auto4 = new Car("Volkswagen", "Beetle", "orange", "10000", "2015","photos/VW.jpg");
const moto1 = new Motorbike("BMW", "1000", "blue", "15000", "2020", "photos/MB.jpg","2");
const moto2 = new Motorbike("BMW", "Scrambler", "orange", "12000", "2021", "photos/BMWMB.jpg", "2");

let carsGrid = document.getElementById("main");
for (carsMainInfo of allCars){
     carsGrid.innerHTML += carsMainInfo.printInfo();
}


//for click event. need to study and improve
const btns = document.getElementsByClassName('gobtn');
let carsGridBig = document.getElementById("bigImage");
for(let x in Array.from(btns)){
    btns[x].addEventListener('click', function(){
    carsGridBig.innerHTML = allCars[x].biggerImg();
    })
}

//img.style.transform = "scale(1.5)";
//img.style.transition = "transform 0.25s ease";