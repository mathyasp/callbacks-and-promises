const tortise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Tortise Wins!");
  }, 1000);
});

const hare = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hare wins!");
  }, 2000);
});

Promise.race([tortise, hare]).then(result => {
  console.log(result);
});


// Challenge!

// Test the code above. Explain what happens below:


// Add two more racers. Give one a time of 500 and the other a 
// time of 1500. Who wins now? 


// Make Promise of the Hare reject. What happens? Who wins? 


// Make the fastest racer reject? What happens? 