type Age = number | string;

function admitAge (age: Age): string {
  return `I am ${age}, alright?!`;
}

let myAge: Age = 50;
let yourAge: Age = 'One Hundred';
console.log("1. Type as Union ")
console.log(admitAge(yourAge)); // 'I am One Hundred, alright?!'
console.log(admitAge(myAge));
console.log("--------------------")

type PartyZone = "pizza hut" | "waterpark" | "bowling alley" | "abandoned warehouse";

function goToParty (place: PartyZone): string {
  return `lets go to the ${place}`;
}


goToParty("chuck e. cheese");
console.log("2. Type as enum ")
console.log(goToParty("pizza hut")); // 'I am One Hundred, alright?!'
console.log("--------------------")


