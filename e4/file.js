//задача 1
const obj = {
  name: 'maksim'
};
function task1(){
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key); // ownCity
    }
}
}
task1(obj)


//задача 2

const obj = {
  name: 'maksim'
};

function task2(){
  console.log('name'  in obj);
}
task2(obj)

//задача 3

function task3(){
  return Object.create(null);
}
task3()

// task 4



function electro(name,kolvoWt){
  this.name = name,
  this.powerUse = kolvoWt,
  this.power = false
}

electro.prototype.enable= function(name){
   this.power = true;
   console.log (`${this.name} включена в розетку`)
}

electro.prototype.disable= function(name){
  this.power = false;
  console.log (`${this.name} выключена из розетки`)
 }

electro.prototype.getPower= function(){
  console.log(`потребляемая мощность ${this.powerUse} Вт`)
}


function Lampa(name,kolvoWt,color){
  this.name = name,
  this.powerUse = kolvoWt,
  this.color = color
}

Lampa.prototype = new electro()

function Computer(name,kolvoWt,system){
  this.name = name,
  this.powerUse = kolvoWt,
  this.system = system
}

Computer.prototype = new electro()

const lamp = new Lampa('лампа', 5, "белый" );
const computer = new Computer('компьютер', 300, "MacOS" );


lamp.disable()
lamp.getPower()
console.log(lamp)
console.log(computer)


//task 5


class Electro{
  constructor(name,kolvoWt){
  this.name = name
  this.powerUse = kolvoWt
  this.power = false;
}

enable(){
   this.power = true;
   console.log (`${this.name} включена в розетку`)
}

disable(){
  this.power = false;
  console.log (`${this.name} выключена из розетки`)
 }

getPower(){
  console.log(`потребляемая мощность ${this.powerUse} Вт`)
}
}


class Lampa extends Electro{
  constructor(name, kolvoWt, color) {
  super()
  this.name = name
  this.powerUse = kolvoWt
  this.color = color
}
}



class Computer extends Electro{
  constructor(name, kolvoWt, system) {
  super()
  this.name = name
  this.powerUse = kolvoWt
  this.system = system
}
}



const lamp = new Lampa('лампа', 5, "белый" );
const computer = new Computer('компьютер', 300, "MacOS" );


lamp.disable()
  lamp.getPower()
  console.log(lamp)
  console.log(computer)



