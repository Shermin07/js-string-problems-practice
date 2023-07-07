function reverseString(text){
    for(i = text.length; i>=0; i--){
        const element = text[i];
        console.log(i, element);

    }
}
const myString = "i am a good boy"
const reversed = reverseString(myString);
