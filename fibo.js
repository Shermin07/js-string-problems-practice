 //const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
const fibo = [ 0, 1];
for( let i = 2; i <=10; i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
    fibo[4] = fibo[3]+fibo[2];
    console.log(fibo); 

}
for( let i = 2; i <=20; i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
    fibo[8] = fibo[7]+fibo[6];
    console.log(fibo); 

}