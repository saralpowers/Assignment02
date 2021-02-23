// //Sara Powers
// //COMM644, Assignment 2
// //February 24, 2021


// //STEP THREE: The "Coin Flip" Game
// //This application uses nested conditional statements to create a coin flip game.

// //assign a random number to the variable coinFlip
// let randomNum = Math.round(Math.random());
// let coinFlip = randomNum;
// let coinResult;

// //prompt user to select heads or tails
// let choice = window.prompt("Select coin side (heads/tails): ");

// //use conditional to check result of coin flip
// if (coinFlip < 0.5) {
//     coinResult = "heads";
// } else if (coinFlip > 0.5) {
//     coinResult = "tails";
// }

// //display results to user
// if (coinResult === "heads") {
//     if (choice === "heads") {
//         window.alert("The flip was heads and you chose heads...you win!");
//     }
//     else if (choice === "tails") {
//         window.alert("The flip was heads and you chose tails...you lose!");
//     }
// } else if (coinResult === "tails") {
//     if (choice === "heads") {
//        window.alert("The flip was tails and you chose heads...you lose!");
//     }
//     else if (choice === "tails") {
//         window.alert("The flip was tails and you chose tails...you win!");
//     }
// }

