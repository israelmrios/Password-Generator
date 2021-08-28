 
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerAlphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperAlphaArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharArray = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ','];
var mainArray = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generator functions
function writePassword () {
  var passwordLegnth = prompt(
    "Please choose a password with a length of at least 8 characters and no more than 128 characters.");
  var length = parseInt(passwordLegnth);
  if (passwordLegnth === 0) {
    alert("Please enter a number for password length test 1.");
    return;
  } if (isNaN(passwordLegnth)) {
    alert("Please enter a number for password length test 2.");
    return;
  } if (passwordLegnth < 8) {
    alert("Please choose a password with at least 8 characters.");
    return;
  } if (passwordLegnth > 128) {
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

var selectPassword = {
  length: length,
  numArray: wantNumbers,
  lowerAlphaArray: wantLowerAlpha,
  upperAlphaArray: wantUpperAlpha,
  specialCharArray: wantSepecialChar,
};
passwordGenerator(length, numArray, lowerAlphaArray, upperAlphaArray, specialCharArray);
// console.log(selectPassword.numArray);
}
// // this is where i left off, add something to collect all the data from this option

// }
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function passwordGenerator(length, numArray, lowerAlphaArray, upperAlphaArray, specialCharArray) {
  var generatedPassword = "";

  var typesCount = numArray + lowerAlphaArray + upperAlphaArray + specialCharArray;

  console.log('typesCount: ', typesCount);

  // var typesArr = [{wantNumbers}, {wantLowerAlpha}, {wantUpperAlpha}, {wantSepecialChar}].filter(
  //   item => Object.values(item)[0]
  // );

  // console.log('typesArr: ', typesArr);

  // this is where i stopped 08/26 im trying to figure out what the cost portion is look at vid min. 28
  // for(let i = 0; i < length; i += typesCount) {
  //   typesArr.forEach(type => {
  //     var funcName = Object.keys(type)[0];

  //     console.log('funcName: ', funcName);

      // mainArray = funcName.split(" ");

      // console.log(typeof mainArray);
      // console.log(mainArray);

      // generatedPassword += getRandom[mainArray]();
      // getRandom(funcName) = generatedPassword
  //   });
  // }
  // console.log(generatedPassword);
// }
}