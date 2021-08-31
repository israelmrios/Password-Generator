var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerAlphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperAlphaArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharArray = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ','];

//  WindowPrompts was created to collect the imput from the user 
function windowPrompts() {

  var passwordLegnth = prompt("Please choose a password with a length of at least 8 characters and no more than 128 characters.");

  //  parseInt was added to convert the number string imput into an integer
  var length = parseInt(passwordLegnth);

  if (isNaN(length)) {
    alert("Please enter a number between 8 and 128 for the password length.");
    return;
  } 

  if (length < 8) {
    alert("Please choose a password with at least 8 characters.");
    return;
  } 

  if (length > 128) {
    alert("Please choose a password with no more than 128 characters.");
    return;
  }

  var wantNumbers = confirm("Would you like to include numbers in your password?");

  var wantLowerAlpha = confirm("Would you like to include lower case letters in your password?");

  var wantUpperAlpha = confirm("Would you like to include upper case letters in your password?");

  var wantSepecialChar = confirm("Would you like to include special characters in your password?");
  
  if (!wantNumbers && !wantLowerAlpha && !wantUpperAlpha && !wantSepecialChar) {
    alert("Please choose at leaset one type of character.");
    return;
  }

  var wantObject = {
    length: length,
    wantNumbers: wantNumbers,
    wantLowerAlpha: wantLowerAlpha,
    wantUpperAlpha: wantUpperAlpha,
    wantSepecialChar: wantSepecialChar,
  }

  return wantObject;
};

//  This function was created to get a random character for any given array
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
};

//  This function will take the answers from the windowPrompts Object and generate the random password
function passwordGenerator() {

  //  Declared this variable to use the values of the object in the windowPrompts fuction
  var wantObject = windowPrompts();

  //  Created these empty arrays to concat and push the new arrays and chosen characters
  var mainArray = [];
  var chosenCharacters = [];
  var password = [];
  var finalPassword = [];

  if (wantObject.wantNumbers) {
    mainArray = mainArray.concat(numArray);
    chosenCharacters.push(getRandom(numArray));
  }

  if (wantObject.wantLowerAlpha) {
    mainArray = mainArray.concat(lowerAlphaArray);
    chosenCharacters.push(getRandom(lowerAlphaArray));
  }

  if (wantObject.wantUpperAlpha) {
    mainArray = mainArray.concat(upperAlphaArray);
    chosenCharacters.push(getRandom(upperAlphaArray));
  }

  if (wantObject.wantSepecialChar) {
    mainArray = mainArray.concat(specialCharArray);
    chosenCharacters.push(getRandom(specialCharArray));
  }

  //  Adding at least one of each character chosen in the windowsPrompts
  password = password.concat(chosenCharacters);

  //  Created this loop to randomly fill the remaining part of the chosen password length
  for (var i = 0; i < (wantObject.length - chosenCharacters.length); i++) {
    var randomizePassword = getRandom(mainArray);
    password.push(randomizePassword);
  }
  
  //  Created this loop to shuffle the finalPassword
  //  for (var j = 0; j < wantObject.length; j++) {
  //  var randomizePassword = getRandom(password);
  //  finalPassword.push(randomizePassword);
  //  }

  //  Added the .join method to remove the spaces and quotations from the password variable
  var finalPassword = password.join('');

  passwordText.value = finalPassword;

  return passwordText.value;
};

//  querySelectors to input and output the required data
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Event listener to generate button
generateBtn.addEventListener("click", passwordGenerator);