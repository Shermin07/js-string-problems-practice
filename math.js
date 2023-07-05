// power

const result = Math.pow(8,5);
console.log(result);

// gap:

const age1 = 30;
const age2= 55;
const gap = age1-age2;
console.log(gap);
if(gap < 10){
    console.log("you can be friends");
}
else{
    console.log("you can not be friends"); 
}
var age3 = 35;
var age4= 55;
var gap2 = Math.abs(age3 - age4);
console.log(gap);
if(gap < 15){
    console.log("you can be classmate");
}
else{
    console.log("you can not be classmate"); 
}

//decimal to integer
const num = 3.56789;
const fullNum = Math.round(num);
console.log(fullNum);
const num2 = 3.46789;
const fullNum2 = Math.round(num2);
console.log(fullNum2);


const number = 4.00023;
const fullNumber = Math.ceil(number);
console.log(fullNumber);
const number1 = 4.00023;
const fullNumber1 = Math.floor(number1);
console.log(fullNumber1);

//random:
console.log(Math.random());

const random1 = Math.random()*90;
console.log(random1);
const random2 = Math.round(Math.random()*50);
console.log(random2);