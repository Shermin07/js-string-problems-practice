function reversedWord(str){
    const words = str.split(" ");
    const result = [];
    for(let i = words.length-1 ; i>=0; i--){
        const element = words[i];
        result.push(element);
    }
    console.log(result);
}
const myString = "i am a good girl";
reversedWord(myString);