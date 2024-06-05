// Promise.all()

// 
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second promise resolved");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third promise resolved");
  }, 3000);
});

Promise.all([promise1, promise2, promise3]).then(results => {
  console.log(results);
});


// Challenges:

// Test the code above. What happened? Explain below: 


// Add another Promise to the Array of promises (line 22)
// make your promise resolve in 10ms. Test your work. 
// How long did it take for all of the promises to resolve?


// Make one of the Promises fail by calling reject. What happens? 


// Add a catch() block to the end of `Promise.all().then()`. 
// Handle your error here.

// What happens when one Promise fails? 