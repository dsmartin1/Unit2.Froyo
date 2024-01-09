
const userInputString = prompt(
    "Welcome! Please input the froyo flavors you wish to order, separated by commas. If you wish to order the same flavor multiple times, please enter the flavor once for each time.",
    "vanilla,vanilla,chocolate,strawberry,coffee"
  );
  
// Split the string of user-inputted numbers into an array of strings.
const order = userInputString.split(",");
const flavorCounts = {};

for (const flavor of order) {
    flavorCounts[flavor] = flavorCounts[flavor] ? flavorCounts[flavor] + 1 : 1;
}

console.table(flavorCounts);
