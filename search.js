// search 

const lyrics = "bismillahir rahmanir rahim, kulhu allahu ahad,allahu samad, lam iyalid walad."
//1 way
console.log(lyrics.includes("rahim"));
//2
const doesExists = lyrics.includes("kulhu");
console.log(doesExists);
//3
const isAvailable = "karim";
const isAvailableWord = lyrics.includes(isAvailable);
console.log(isAvailableWord);

//tolowercase
const searchString = "ahad"
const doesExistsOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExistsOneLine);

// true false ase ans oporergulir

//indexOf

console.log(lyrics.indexOf("allahu"));
//ans: 34

if(lyrics.indexOf("samad") !== -1){
console.log("exists")
}
else{
    console.log("dose not exists")
}
// ans : exists

// startsWith
console.log(lyrics.startsWith("bismillahir"));
//ans: trur

// endsWith same