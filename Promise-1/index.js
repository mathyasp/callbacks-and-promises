// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("--- Oops ---");
    // reject("--- Oops ---");
    resolve('>>> Success! <<<');
    // resolve('>>> Success! <<<');
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// The promise fails, and passes the reason for the failure to the `catch` method.

// **2)** What happens when you call both `resolve` and `reject`? Test this.
// The reject method is used but not the resolve method.

// **3)** Does the order matter you call resolve and reject matter? Test this. 
// Yes, the order matters. Whichever is called first gets used and the other is skipped.

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// The first one called is used and the rest are ignored.