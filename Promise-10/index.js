const lion = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Lion sleeps through race");
  }, 1000);
});

const hare = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Hare is too busy eating and misses race");
  }, 2000);
});

const tortise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Tortise Wins!");
  }, 3000);
});


Promise.any([lion, hare, tortise]).then(result => {
  console.log(result);
});


// Challenge!

// Test the code above. Explain what happens below:


// Notice this example is the same as the last with the difference
// that this time you are using Promise.any() instead of Promise.race()
// Also notice that the first two racers should reject and should 
// do that before the last racer (Tortise resolves at 3000ms, while the 
// first two reslove in 1000ms, and 200ms)

