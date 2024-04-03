/*Prompt user for list of flavors.
Show a table in the console listing
how many of each flavor they have listed
Version 1
*/
const userInputString = prompt(
  "Please enter your favorite flavors",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
//Separating values via split method
const stringArray = userInputString.split(",");
//Empty object initialized
const flavorCounter = {};
/*Loop iterates over items,
each element during the loop uses a logical OR
operator. If value exists and has a value, use that value.
Otherwise, use 0 and hold the values
*/
for (const flavorVar of stringArray) {
  flavorCounter[flavorVar] = (flavorCounter[flavorVar] || 0) + 1;
}
//Console output as table
console.table(flavorCounter);

/*Prompt user for list of flavors.
Show a table in the console listing
how many of each flavor they have listed
Version 2
*/
//Empty dictionary for version 2 initialized
const flavorCounterVer2 = {};
/*Loop iterates over items,
each element during the loop add a counter
and holds the values
*/
for (i = 0; i < stringArray.length; i++) {
/*currentFlavor holds the flavor for each loop iteration,
stringArray[i] accesses each element of the array starting
at zero and for the length specified inside the for loop condition.
*/
  let currentFlavor = stringArray[i];

/*
if conditional initialized.
if current flavor is in the object using shorthand add one and store,
else only assign 1 to the counter
*/
  if (currentFlavor in flavorCounterVer2) {
    flavorCounterVer2[currentFlavor] += 1;
  } else {
    flavorCounterVer2[currentFlavor] = 1;
  }
}
//Console output as table
console.table(flavorCounterVer2);
