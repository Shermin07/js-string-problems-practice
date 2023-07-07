const jim = 84;
const dela = 99;
const chinku = 77;
if(jim>dela && jim>chinku){
    console.log("jim will get the delicious cake");
}
else if(dela>jim && dela>chinku){
    console.log("dela will get the delicious cake");
}
else{
    console.log("chinku will get the delicious cake");
}
const jim1 = 69;
const dela1 = 97;
const chinku1 = 99;
if(jim1>dela1 && jim1>chinku1){
    console.log("jim will get the delicious cake");
}
else if(dela1>jim1 && dela1>chinku1){
    console.log("dela will get the delicious cake");
}
else{
    console.log("chinku will get the delicious cake");
}

// write a function using if else and get max-value and return

function maxNumbers (num1, num2, num3){
    if(num1>num2 && num1>num3){
        console.log("num1 will be the max number");
    }
    else if(num2>num1 && num2>num3){
        console.log("num2 wil be the max number");
    }
    else{
        console.log("num3 will be the max number");
    }
  return(num1, num2, num3) ; 
}
maxNumbers(32, 85, 60);

// using Math.max and Math.min...unsolved

function maximumNumbers (number1, number2, number3){
    Math.max(4, 5, 6);
    return maximumNumbers ;
}

