// Step 1: Write a random number function that returns a value between 1 and 100. Call this function: randomNumber
function randomNumber() 
{ // Begin randomNumber
    return Math.floor(Math.random() * 100) + 1;
} // End randomNumber

// Step 2: Store the following 5 elements using the correct visibility scope and selector
// a) Score element
scoreEle = document.querySelector("div#score");

// b) Guess Limit element
guessLimitEle = document.querySelector("span#guessLimit");

// c) Message elemetns
message = document.querySelector("section#message");

// d) Input element
input = document.querySelector("input#guessInput");

// e) Button element
button = document.querySelector("button#guessBtn");

// Step 3: Initialize the following variables using the correct visibililty scope
// a) guessLimit (the number of attempts that can be guessed)
guessLimit = 10;

// b) currentNumber (a random number generated using the randomNumber function)
currentNumber = randomNumber();

// c) score (the starting score)
score = 0;

// Step 4: Create a function that compares the user's guess to the current number and returns a boolean value. Name this function: evaluateGuess
function evaluateGuess() 
{ // Begin evaluateGuess
  // a) Compare the guess to the current number. If the guess is correct, return true, otherwise return false.
    if(Number(input.value) === currentNumber)
    {
        return true;
    }
    else
    {
        return false;
    }
    
} // End of evaluateGuess

// Step 5: Create a function that resets the game board. Call it: resetBoard
function resetBoard(){ // Begin resetBoard
    // a) Reset the guessLimit
    guessLimit = 10;

    // b) reset the currentNumber
    currentNumber = randomNumber();

    // c) reset the input value
    input.value = 0;
} // End resetBoard

// Step 6: Create a function that will provide a user a hint if they get the answer wrong. Call this function: hint
function hint(){ // Begin hint
    // a) Store the input value in the following variable. REMEMBER, you will need casting as input values are always strings
    guess = Number(input.value);

    // d) Compare guess to current number
    if(guess < currentNumber)
    { // if guess is less than currentNumber
        // e) Set the message text to say '{guess} is lower than the secret number.' using string interpolation (templates)
        message.textContent = `${guess} is lower than the secret number.`;
    } 
    else 
    { // otherwise...
        // f) Set the message text to say '{guess} is higher than the secret number.' using string interpolation (templates)
        message.textContent = `${guess} is higher than the secret number.`;
    }

    // TAKE IT FURTHER: Don't keep this if it doesn't work!)
    // tf a) Using the math absolute function, find the difference between the guess and the current number
    diff = Math.abs(guess - currentNumber);

    // tf b) Create a for loop that starts at 0, checks to see if it's less than 100, and increments by 10
    for(i = 0; i < 100; i += 10){ // Begin loop
    // tf c) if the diff is less than your loop initializer variable (usually it's i) AND diff is NOT less than 5
        if(diff < i && diff >= 5)
        { // if diff...
            // tf d) Set message with the following test:
            // `\nYou are within ${i} of the secret number.`
            message.textContent += `\nYou are within ${i} of the secret number.`;
            
            // tf e) Exit the loop if this condition is true
            break;
        } // ...end if
    } // End loop

    // tf f) If diff is less than 5
    if(diff < 5)
    { // Begin if
        // g) Append to the message text:
        // `\nYou are within 5 of the secret number.`
        message.textContent += `\nYou are within 5 of the secret number.`;
    } // End if
    // END OF TAKE IT FURTHER
} // End hint

// Step 7: Create a function that processes the user's guess. Name it: processGuess
function processGuess() 
{ // Begin processGuess
    // Step 8: Check if the guess is correct using your evaluateGuess function
    if(evaluateGuess())
    { // If the guess is correct
        // a) Set the message text to a success message
        message.textContent = `Good job. You wasted your time to get the secret number.`;

        // b) Append on a message that tells them to guess the new number
        message.textContent += `\nWaste more time by guessing the new number.`;

        // c) Increment the score by adding the guessLimit value to score
        score += guessLimit;
    
        // d) Reset your board using your resetBoard function
        resetBoard();
    }  
    else
    { // Guess is incorrect
        // d) Call your hint function
        hint();

        // e) Decrement the score and guess limit
        guessLimit--;
        score--;

    
    } // End of if condition

    // Step 9: Change the score element's text to be the new score
    scoreEle.innerHTML = score;

    // Step 10: Change the guess limit element's text to be the new guess limit
    guessLimitEle.innerHTML = guessLimit;
} // End processGuess