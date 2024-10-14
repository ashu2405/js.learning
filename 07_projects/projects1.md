## Project1 Solution code ##

 ```javascript 

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 solution

``` javascript

const form = document.querySelector('form');
// this use case will give you empty value
//  const height = parseInt(document.querySelector('#height').value);

const form = document.querySelector('form');
// this use case will give you empty value
//  const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
    // bmi weight guide
    if (bmi < 18.6) {
      results.innerHTML = `<span>Under weigth :${bmi}</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.textContent = `Normal Weight:${bmi}`;
    } else {
      results.textContent = `Over Weight : ${bmi}`;
    }
  }
});


```

## Project 3 solution

``` javascript

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## Project 4 solution

``` javascript

// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Select all required DOM elements
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowORHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// Create an empty paragraph element for later use
const p = document.createElement('p');

// Track previous guesses and number of guesses
let prevGuess = [];
let numGuess = 1;

// Game state tracker
let playGame = true;

// Add event listener to the submit button
if (playGame) {
  submit.addEventListener('click', function (e) {
    // Prevent form submission and page reload
    e.preventDefault();

    // Parse the user's input as an integer
    const guess = parseInt(userInput.value);

    // Call the function to validate and process the guess
    validateGuess(guess);
  });
}

// Validate the user's guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    // Check if the input is not a valid number
    alert('Please enter a valid number');
  } else if (guess < 1) {
    // Ensure the guess is at least 1
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    // Ensure the guess is at most 100
    alert('Please enter a number less than 100');
  } else {
    // Store the valid guess
    prevGuess.push(guess);

    // Check if the game is over (maximum of 10 guesses)
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      // Otherwise, process and display the guess
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Check the guess against the random number
function checkGuess(guess) {
  if (guess === randomNumber) {
    // If the guess is correct, end the game
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    // If the guess is too low, inform the user
    displayMessage('Number is too low');
  } else if (guess > randomNumber) {
    // If the guess is too high, inform the user
    displayMessage('Number is too high');
  }
}

// Display the user's guess and update the number of remaining guesses
function displayGuess(guess) {
  // Clear the input field after each guess
  userInput.value = '';

  // Append the current guess to the guesses list
  guessSlot.innerHTML += `${guess} `;

  // Increment the number of guesses
  numGuess++;

  // Update the remaining guesses display
  remaining.innerHTML = `${11 - numGuess}`;
}

// Display messages to the user
function displayMessage(message) {
  lowORHi.innerHTML = `<h2>${message}</h2>`;
}

// End the game and provide an option to start over
function endGame() {
  // Disable the input field
  userInput.value = '';
  userInput.setAttribute('disabled', '');

  // Create a "Start new game" button
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`;
  startOver.appendChild(p);

  // Change the game state to prevent further input
  playGame = false;

  // Call the function to handle starting a new game
  newGame();
}

// Start a new game
function newGame() {
  const newGameButton = document.querySelector('#newGame');

  // Add event listener to the "Start new game" button
  newGameButton.addEventListener('click', function (e) {
    // Reset the random number, guesses, and game state
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;

    // Clear the previous guesses display
    guessSlot.innerHTML = '';

    // Reset the remaining guesses display
    remaining.innerHTML = `${11 - numGuess}`;

    // Enable the input field for new guesses
    userInput.removeAttribute('disabled');

    // Remove the "Start new game" button
    startOver.removeChild(p);

    // Change the game state to allow new guesses
    playGame = true;
  });
}


``` 

## project 5 solution 

``` javascript

// Select the HTML element with the ID 'insert' to display key information
const insert = document.getElementById('insert');

// Add an event listener to the window object that listens for keydown events
window.addEventListener('keydown', (e) => {
  // When a key is pressed, update the 'insert' element's innerHTML with a table
  // displaying information about the key pressed, keycode, and code.

  insert.innerHTML = `
    <div class='color'>  <!-- Wrapper for styling -->
      <table>  <!-- Table to display key info -->
        <tr>
          <th>Key</th>
          <th>Keycode</th>
          <th>Code</th>
        </tr>
        <tr>
          <!-- Show the pressed key, handle 'Space' key as a special case -->
          <td>${e.key === ' ' ? 'Space' : e.key}</td>
          
          <!-- Display the numerical keyCode of the pressed key -->
          <td>${e.keyCode}</td>
          
          <!-- Display the string representation (code) of the pressed key -->
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});


```

## project 6 solution

``` javascript

// Generate random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]; // Use hex[] to index the string
  }
  return color;
};

let intervalId;

// Start changing background color every second
const startchangingColor = function () {
  if (!intervalId) {
    // Prevent multiple intervals
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

// Stop changing background color
const stopchangeColor = function () {
  clearInterval(intervalId);
  intervalId = null; // Reset intervalId so it can be restarted
};

// Add event listeners for start and stop buttons
document.querySelector('#start').addEventListener('click', startchangingColor);
document.querySelector('#stop').addEventListener('click', stopchangeColor);
