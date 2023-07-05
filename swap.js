//swap mane position odol-bodol:

let first = 5;
let second = 7;
////console.log(first, second);

let third = 8;
let fourth = 9;
const temp = third;
third = fourth;
fourth = temp;
console.log(third, fourth);

//2 no way:destructing
[first, second] = [second, first];
console.log(first,second);