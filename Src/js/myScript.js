"use strict"
let type_price;
let device_price;
let design_price;
let type = prompt("Какой сайт вы хотите заказать?   ( Возможные варианты: 1 - сайт визитка, 2 - корпоративный сайт, 3 - интернет магазин )");
console.log(type);

let device = prompt("Для каких устройств вам нужен сайт?   ( Возможные варианты: 1 - смартфоны, 2 - планшеты, 3 - компьютеры и ноутбуки )");
console.log(device);

let design = prompt("В каком дизайне вам нужен сайт?   ( Возможные варианты: 1 - минимализм, 2 - современный, 3 - индивидуальный )");
console.log(design);

let Array = [ 
    type, 
    device, 
    design 
];
console.log(Array);

let matrix = [
    [10000,15000,20000],
    [5000,3000,1000],
    [6000,12000,18000]
]
if (type == "1"){ 
     type_price = matrix[0][0];
    console.log(type_price);
}

 else if  (type == "2"){
         type_price = matrix[0][1];
        console.log(type_price);
    }
else{
      type_price = matrix[0][2];
    console.log(type_price);
}
 console.log(type_price);

if (device == "1"){ 
     device_price = matrix[1][0];
    console.log(device_price);
}

 else if  (device == "2"){
         device_price = matrix[1][1];
        console.log(device_price);
    }
else{
      device_price = matrix[1][2];
    console.log(device_price);
}
 console.log(device_price);

if (design == "1"){ 
     design_price = matrix[1][0];
    console.log(design_price);
}

 else if  (design == "2"){
         design_price = matrix[1][1];
        console.log(design_price);
    }
else{
      design_price = matrix[1][2];
    console.log(design_price);
}
 console.log(design_price);
let summ = type_price + device_price + design_price;
alert("Стоимость сайта составит " + summ);