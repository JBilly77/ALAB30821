//==================PART ONE=====================//
//Declarations
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const minSpace = 0.8;
let plantCount = 20;
let weeks = 1;

//Predict the plant growth after a specifi a number of weeks:
if (weeks == 1) {
  plantCount *= 2;
  if (plantCount * minSpace > 0.8 * area) {
    console.log("Prune");
  } else {
    console.log("No pruning needed");
  }
}

weeks = 2;
if (weeks == 2) {
  plantCount *= 2;
  if (plantCount * minSpace > 0.8 * area) {
    console.log("Prune");
  } else {
    console.log("No pruning needed");
  }
}

weeks = 3;
if (weeks == 3) {
  plantCount *= 2;
  if (plantCount * minSpace > 0.8 * area) {
    console.log("Prune");
  } else {
    console.log("No pruning needed");
  }
}

//========================PART TWO=========================//
plants = 100;
const week10 = 10;

//Calculate total plants after 10 weeks:
const totalPlants = plants * (2 ** weeks);

//Calculate the additional space needed to start 100 plants:
const addSpace = totalPlants * minSpace;

//Calculate the new space radius:
const newRadius = Math.sqrt(addSpace/ PI);

console.log(`Total plants in 10 weeks: ${totalPlants}`);
console.log(`Additional space needed: ${addSpace}`);
console.log(`The new space radius is: ${newRadius}`);


//======================PART THREE=========================//
//Errors in Judgement
try {
  plantCount = 100;
  if (plantCount * minSpace > area) {
    throw new Error("Insufficient space for plant growth");
  }
} catch (error) {
  console.log(error);
}
