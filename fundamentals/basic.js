// console.log(Boolean(undefined))l
const prompt= require('prompt-sync')();
let fav= prompt("whats your makfitness teams score :")
console.log(`the team score is `,fav)
const[first,second,third]=fav.split(' ').map(Number);
console.log(`your first participant score is ${first} `)
console.log(`your second participant score  is ${second}`)
console.log(`the third participant score is ${third}`)
let fav2=prompt("whats your madyfitness team score :")
let [forth,fifth,sixth]= fav2.split(" ").map(Number);
console.log(`your first participant score is ${forth} `)
console.log(`your second participant score  is ${fifth}`)
console.log(`the third participant score is ${sixth}`)
const array1=[]
array1.push(first + second +third)
const makfitness= array1[0] / 3;
console.log( "your score is ",makfitness);
const array2=[];
array2.push(forth + fifth + sixth )
const madyfitness= array2[0]/3
console.log( "your score is",madyfitness);
if(madyfitness>=100 && makfitness >=100){
    if(madyfitness>makfitness){
    console.log(`madyfitness win the championship with a score of${madyfitness}`)
}
else if(makfitness==madyfitness){
    console.log(`both the teams are worth for the championship the championship result is draw `)
}
else{
    console.log(`makfitness win the championship with a score of  ${ makfitness}`)
}
}








