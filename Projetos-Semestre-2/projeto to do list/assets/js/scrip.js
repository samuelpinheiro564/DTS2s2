/*const names = ["Winds","Breks","chocolates"];

names.forEach((name) =>{
    console.log(`Hi, ${name}!`)
});*/

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number, index) => {
    if (number % 2 == 0) {

        console.log(`O numero ${number} esta na posição ${index}`)
    }

});

class Car {
    constructor(param1, param2) {
        this.brand = param1;
        this.model = param2;
    };
    getModel(){
 document.getElementById('Model').value;
    }
    getMarca(){
      document.getElementById('Marca').value;
            }
} 
class CarsList {
    constructor() {
        this.cars = [];

    }
    addCar(param) {
        this.cars.push(param);
    }
  
}

const list = new CarsList();

function Automove(){

const brand = document.getElementById("BrandInput").value;
const model= document.getElementById("ModelInput").value;

console.log(brand,model);

const hotwhells = new Car(brand,model);

list.addCar(hotwhells);
console.log(list)

list.cars.forEach((car)=>{
    console.log(`Marca: ${car.brand} e a Modelo: ${car.model} `)
});
}*/
class Category{
constructor(id,name){
    this.id= id;
    this.name = name;
    this.productors =[];
}

}
class Product{
    constructor(id,name,price,category){
        this.id = id;
        this.name = name;
        this.price =price;
        this.category = category
    }
}
class CategoryService{
    constructor(){
        this.categories=[];
        this.nextCategoryId = 1;
    }
    addCategory(){
        const id = this.nextCategoryId;
        this.nextCategoryId ++;
    
        const category = new Category(id, Category.name);
        this.categories.push(category);
    }
}
const createdCategory =new CategoryService()

function CreatedCategory(){
    
}