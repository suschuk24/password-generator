// var declarations for prompt options
var chooseCharLength
var yesUpperCase
var yesLowerCase
var yesNumbers
var yesSpecialChars

// var setup for Arrays in future reference for ACSII translation
var upperCase = charLoop(65, 90);
var lowerCase = charLoop(97, 112);
var numbers =  charLoop(48, 57);
//special characters not in order on ASCII table
var special = charLoop(33, 47).concat(
  charLoop(58, 64)
).concat(
  charLoop(91, 96)
).concat(
  charLoop(123, 126)
);

//creates loop low to high of ASCII vars
function charLoop(low, high) {
  var characterLoop = [];
  for (let i = low; i <= high; i++) {
    characterLoop.push(i);
  }
  return characterLoop;
}

// prompt options for generator
function generatePassword() {

  //character length
  chooseCharLength = parseInt(prompt("How many characters would you like your password to be? Please choose a value betwen 8 and 128."));

  //invalid response option
  while (!chooseCharLength || chooseCharLength < 8 || chooseCharLength > 128) {
    window.alert ("You did not pick a valid number. Please try again!");
    chooseCharLength = parseInt(prompt("Please choose a value between 8 and 128 for your password's length."))
  };
  //prompts for character usage
  if (chooseCharLength) {
    yesUpperCase = window.confirm("Would you like to use upper case letters?");
    yesLowerCase = window.confirm("Would you like to use lower case letters?");
    yesNumbers = window.confirm("Would you like to use numbers?");
    yesSpecialChars = window.confirm("Would you like to use special characters?");
  };

  
  // to do, this is for refacotring in the future.
  var options = [yesUpperCase, yesLowerCase, yesNumbers, yesSpecialChars]
  var selection = options.filter(option => option === true )

  if (yesUpperCase) selection = [...selection, ...upperCase];
  if (yesLowerCase) selection = [...selection, ...lowerCase];
  if (yesNumbers) selection = [...selection, ...numbers];
  if (yesSpecialChars) selection = [...selection, ...special];
  
  //create arry for password based on user input length
  var passwordGenerate = []

  //randomize ASCII selection options
  for (var i=0; i < chooseCharLength; i++) {
    var charArray = selection[Math.floor(Math.random()* selection.length)];
    passwordGenerate.push(String.fromCharCode(charArray));
  } return passwordGenerate.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("writing password")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

