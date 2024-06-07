
// Some try and catch examples
try {
  // No errors were thrown
  console.log('Hello World') // 'Hello World'
} catch(err) {
  // Catch block only happens if an error is thrown
  console.log(err) 
}


try {
  // Generate an error
  const error = new Error('Oopsy!')
  throw error // Throw an error
  console.log('Hello World') // Never happens because of error
} catch(err) {
  // Catch block happens because the error was thrown! 
  console.log(err) 
}

// When using async and await use try and catch to handle errors
async function fetchTodos() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await res.json()
    return json
  } catch(err) {
    console.log(err)
  }
}

const p = fetchTodos()


// Challenges 

// Run the code and observe what happens. 
// "Hello World" is logged to the console twice.

// Uncomment line 15. This activates the catch block. What happens? 
// "Hello World" is logged to the console once, and the error is logged to the console once.






