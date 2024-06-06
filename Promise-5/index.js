function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    if (timeOfDay === 'breakfast') {
      resolve('Cereal');
    } else if (timeOfDay === 'lunch') {
      resolve('Sandwich');
    } else if (timeOfDay === 'dinner') {
      resolve('Pasta');
    } else {
      reject('I\'m not hungry right now.');
    }
  });
};

// whatToEat should return a promise. 
// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 
// If the `timeOfDay` is anything else reject the promise with 
// the the message: "I don't eat between meal snacks!"

// Handle the Promise returned from whatToEat here: 

whatToEat('lunch').then(food => console.log(food)).catch(error => console.log(error));

// Handle this Promise: 
whatToEat('elevens').then(food => console.log(food)).catch(error => console.log(error));
