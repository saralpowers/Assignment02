//Sara Powers
//COMM644, Assignment 2
//February 24, 2021


//STEP TWO: The Word Translator
//This application prompts the user for a language code based on four choices.
//Based on the user's choice, it then translates "Hello World" and outputs
//the translation to the browser window.

//Prompt user to enter a language code
languageCode = window.prompt("Enter a language code (es, de, en, or fr): ");

//use simple conditional statements to translate and display "Hello World" message
if (languageCode === "es") {
    window.document.write("Hello World translated in Spanish is Hola Mundo.");
} else if (languageCode === "de") {
    window.document.write("Hello World translated in German is Hallo Welt.");
} else if (languageCode === "fr") {
    window.document.write("Hello World translated in French is Bonjour le Monde.");
} else {
    window.document.write("Hello World is in English.");
}