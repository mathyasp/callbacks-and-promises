async function handleData() {
  return 42
}

const hello = async () => {
  return 'Hello World'
}

const data = handleData()
const greeting = hello()

console.log(data)
console.log(greeting)


// Challenges 

// Test the code here. Pay close attention to the return value. 
// What is returned? Is it the value returned by the function
// or something else? Write your answer below:
// The return value is a Promise object that include the value returned.

// An async function always wraps the value it returns in a Promise. 
// To get at the value you must resolve the Priomise. Do that here. 
// Use `.then()` to resolve the Promises `data` and `greeting`:

data.then(result => {
  console.log(result)
});

greeting.then(result => {
  console.log(result)
});