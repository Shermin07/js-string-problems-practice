function reverseString(text){
    for(i = 0; i< text.length; i++){
        const element = text[i];
        console.log(i, element);

    }
}
const myString = "i am a good boy"
const reversed = reverseString(myString);
//
function reverseString1(text){
    for(i = text.length-1 ; i>=0; i--){
        const element = text[i];
        console.log(i, element);

    }
}
const myString1 = "i am a good boy"
const reversed1 = reverseString1(myString1);
//
function reverseString2(text){
    let reversed = " ";
    for(i = text.length-1 ; i>=0; i--){
        const element = text[i];
        reversed = reversed + element;
        console.log(reversed, element);

    }
}
const myString2 = "i am a good boy"
const reversed2 = reverseString2(myString2);
