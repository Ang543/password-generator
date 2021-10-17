var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", ";", ":", "{", "}", "[", "]", "?", "~"];

var numericCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var finalPassword = ""

  var passwordSize = prompt("Choose a number between 8 and 128 for the length of your password.");
  passwordSize = parseInt(passwordSize);
  if (passwordSize >= 8 && passwordSize <= 128) {
    var isNumeric = confirm("Do you want numbers?");
    var isLowercase = confirm("Do you want lowercase letters?");
    var isUppercase = confirm("Do you want uppercase letters?");
    var isSpecial = confirm("Do you want special characters?");

    if (isLowercase === false && isUppercase === false && isSpecial === false && isNumeric === false) {
      alert("You must choose at least one.");
      return "";
    }

    for (let i = 0; i < passwordSize && finalPassword.length < passwordSize; i++) {
      
      if (isNumeric && finalPassword.length < passwordSize) {
        var index = Math.floor(Math.random() * numericCharacter.length);
        finalPassword = finalPassword + numericCharacter[index];
      }
      
      if (isLowercase && finalPassword.length < passwordSize) {
        var index = Math.floor(Math.random() * lowerCaseArray.length);
        finalPassword = finalPassword + lowerCaseArray[index];
      }

      if (isUppercase && finalPassword.length < passwordSize) {
        var index = Math.floor(Math.random() * upperCaseArray.length);
        finalPassword = finalPassword + upperCaseArray[index];
      }

      if (isSpecial && finalPassword.length < passwordSize) {
        var index = Math.floor(Math.random() * specialCharacter.length);
        finalPassword = finalPassword + specialCharacter[index];
      }
    }
  }

  else {
    alert("Try again.")
  }

  return finalPassword;
};

//end