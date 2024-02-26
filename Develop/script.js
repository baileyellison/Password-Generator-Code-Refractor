var passwordLength = 10;

var includedCharacters = []

var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolCharacters = [" ", "!", "@", "#", "$", "%", "&", "*", "'", "(", ")", "+", "-", ",", ".", "/", ":", ";", "<", ">", "=", "?", "{", "}", "[", "]", "~", "_", "`", "|"];
  

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatepassword() {


  return "Generated password!"
}

// All met criteria the user has to meet before the password is displayed
function getCriteria() {
  includedCharacters = []; 
  passwordLength = parseInt(prompt("Select a password length. Passwords must be between 8 and 128 numberCharacters."));
  
  // conditions that the password has to meet
  if(passwordLength <= 7) {
    alert("Password length must be between 8 and 128 characters.");
    return false;
  }

  if(passwordLength >= 129) {
    alert("Password length must be between 8 and 128 characters.");
    return false;
  }

  if(isNaN(passwordLength)) {
    alert("Password must be defined by numbers.");
    return false;
  }

  // Criteria the user can okay before generating the password
  if(confirm("This generator uses lowercase characters. Please select OK before receiving your password.")) {
    includedCharacters = includedCharacters.concat(lowercaseCharacters);
  }

  if(confirm("This generator uses uppercase characters. Please select OK before receiving your password.")) {
    includedCharacters = includedCharacters.concat(uppercaseCharacters);
  }

  if(confirm("This generator uses numbers. Please select OK before receiving your password.")) {
    includedCharacters = includedCharacters.concat(numberCharacters);
  }

  if(confirm("This generator uses symbols. Please select OK before receiving your password.")) {
    includedCharacters = includedCharacters.concat(symbolCharacters);
  }
  return true;
}


// write password to the #password input
function writePassword() {
  
  var password = generatepassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// // Arguments to pass
// const 
// const includeLowercase = true;
// const includeUppercase = true;
// const includeSymbols = true;
// const includeNumbers = true;

// lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
//     uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     
//     
//   }

//   const getTypes = {
//     function lowercaseCharacters() {
//       return includedCharacters.lowercaseCharacters[Math.floor(Math.random() * types.lowercaseCharacters.length)];
//     }
//   }

//   const getTypes = {
//     function uppercaseCharacters() {
//       return includedCharacters.uppercaseCharacters[Math.floor(Math.random() * types.uppercaseCharacters.length)];
//     }
//   }

//   const getTypes = {
//     function numberCharacters() {
//       return includedCharacters.numberCharacters[Math.floor(Math.random() * types.numberCharacters.length)];
//     }
//   }

//   const getTypes = {
//     function symbolCharacters() {
//       return includedCharacters.symbolCharacters[Math.floor(Math.random() * types.symbolCharacters.length)];
//     }
//   }

//   if(length <= 7 + length >= 129) {
//     window.alert("Password length must be between 8 and 128 characters.")
//   }

//   for(let i = 0; i < length; i++) {
//     const RandomIndex = Math.floor(Math.random() * includedCharacters.length)
//   }

//   let password = document.getElementById("password");
//   let length = document.getElementById("length");
//   let includedCharacters = "";