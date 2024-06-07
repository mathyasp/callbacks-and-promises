const tortise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Tortise Wins!");
  }, 1000);
});

const hare = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Hare looses!");
  }, 2000);
});

const frog = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Frog looses!");
  }, 500);
});

const squirrel = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Squrrel wins!");
  }, 1500);
});

Promise.race([tortise, hare, frog, squirrel]).then(result => {
  console.log(result);
}).catch(err => {
  console.error(err);
});


// Challenge!

// Test the code above. Explain what happens below:
// The tortise is resolved first and therefore wins.

// Add two more racers. Give one a time of 500 and the other a 
// time of 1500. Who wins now? 
// The frog wins (500ms) because it has the shortest time to resolve.

// Make Promise of the Hare reject. What happens? Who wins? 
// The frog still wins because it resolves first.

// Make the fastest racer reject? What happens? 
// There is an error in the console for an unhandled promise rejection. If the catch block is added, the frog looses because it rejects first.