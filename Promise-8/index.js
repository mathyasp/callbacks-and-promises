// Promise.all()

// 
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Second promise rejected");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third promise resolved");
  }, 3000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Fourth promise resolved");
  }, 10);
});

Promise.all([promise1, promise2, promise3, promise4]).then(results => {
  console.log(results);
}).catch(err => {
  console.error(err);
});


// Challenges:

// Test the code above. What happened? Explain below: 
// There's a delay while all the promises resolve, and then the results are logged to the console in an array.

// Add another Promise to the Array of promises (line 22)
// make your promise resolve in 10ms. Test your work. 
// How long did it take for all of the promises to resolve?
// It took as long as the longest promise to resolve.

// Make one of the Promises fail by calling reject. What happens? 
// Theres an error in the console for an unhandled promise rejection.

// Add a catch() block to the end of `Promise.all().then()`. 
// Handle your error here.

// What happens when one Promise fails? 
// The catch block is executed.