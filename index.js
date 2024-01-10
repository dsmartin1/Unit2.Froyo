
const userInputString = prompt(
    "Welcome! Please input the froyo flavors you wish to order, separated by commas. If you wish to order the same flavor multiple times, please enter the flavor once for each time.",
    "vanilla,vanilla,vanilla,strawberry,coffee"
  );
  
// Split the string of user-inputted numbers into an array of strings.
const order = userInputString.split(",");

// Create empty object for iteration.
const flavorCounts = {};

// Loop a ternary operator expression to add flavors to the object while incrementing their values.
for (const flavor of order) {
    flavorCounts[flavor] = flavorCounts[flavor] ? flavorCounts[flavor] + 1 : 1;
}

console.table(flavorCounts);
