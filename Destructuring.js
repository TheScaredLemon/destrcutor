//Object D1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); 
console.log(yearNeptuneDiscovered); 

//numPlents = 8
//yearNeptuneDiscovered = 1846

//Object D2
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears);

//yearNeptuneDiscovered = 1846
//yearMarsDiscovered = 1659

//Object D3
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"})
getUserData({firstName: "Melissa", favoriteColor: "green"})
getUserData({firstName: "Kate", favoriteColor: "red"})

//Your name is Alejandro and you like purple.
//Your name is Melissa and you like green.
//Your name is Kate and you like red.

//Array D1
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); 
console.log(second); 
console.log(third); 

//first - Maya
//Second - Marisa
//third - Chi

//Array D2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); 
  console.log(whiskers); 
  console.log(aFewOfMyFavoriteThings);


  //raindrops = Raindrops on roses
  //whiskers = whiserks on kittens
  //afewofmyfavoritethigns = Bright copper kettles, warm woolen mittens, Brown paper packages tied up with strings

//Array D3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers)

//numbers = 10,30,20

//ES2015 Refactoring

//Object Destructuring
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers

  //Array Swap
  [arr[0], arr[1]] = [arr[1], arr[0]]
  
  //raceResults

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})

//first = Tom, Second = Margaret, Third = Allison, Rest = David, Pierre
