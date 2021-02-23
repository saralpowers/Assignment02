// //Sara Powers
// //COMM644, Assignment 2
// //February 24, 2021


// //STEP FIVE: The "Hitchhiker's Guide to the Galaxy" Game
// //This application takes a user on a journey where the path they take can determine
// //the outcome of the player.

// //prompt uer to start the game
// let gameChoice = window.prompt("Are you ready for an epic journey? (yes/no): ");
// if (gameChoice === "yes") {
//     window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry, and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.");

//     //prompt user for direction and use a switch statement to evaluate direction selected
//     let direction = window.prompt("Which direction would you like to head? (please enter forward, left, or right): ");
//     switch (direction) {
//         case 'forward':
//             window.alert("You walk 100 yards and safely make your way out of the cave.");
//             break;
//         case 'left':
//             window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
//             break;
//         case 'right':
//             window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
//             break;
//         default:
//             window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
//     }

//     //get feedback from the user about game operation
//     let feedback = window.prompt("Thanks for playing. Please rate the game from 1 to 10: ");
//     if (feedback >= 6 && feedback <= 10) {
//         window.document.write("Thanks. Please come back and play again.");
//     } else if (feedback >= 1 && feedback <= 5) {
//         window.document.write("Thanks. I am working hard to improve the game.");
//     } else {
//         window.document.write("Thanks. Game over.");    
//     }

// } else {
//     window.document.write("Thanks. Come back and try again when you're ready.");
// }

