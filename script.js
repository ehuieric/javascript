// Assignment Code
var generateBtn = document.querySelector("#pswd-gen-btn");

// Lowercase charset
var lowercaseCharset =  "abcdefghijklmnopqrstuvwxyz";

//Mixed type charset
var mixedtype = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'$%&*+-<=?@~";

// uppercase charset
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Generate password
function generatePassword(length, charset) {
     // Initialize value of retValue
    let retVal = "";

    // Length of character Set
    const charSetLength = charset.length;

    // Loop from 0 to the lenth of the password to randomly create password
    for(var i = 0; i < length; i++) {
     // Reassign value
     retVal += charset.charAt(Math.floor(Math.random() * charSetLength))
    }

    return retVal;
}

// Write password to the #password input
function writePassword() {
   let password;

  // get the password's length
  var length = prompt("How many characters would you like the passWord to be ?");

    if(length < 8 || length > 128) {
        alert("please enter an integer between 8 and 128");
    }

    if(isNaN(length)) {
        alert("Please enter an integer ");
    }

   
    //get the password type
    //check if the user wants all lowercase
    var lowercase = confirm("Would you like the password to be all lowercase?");
     
    // In case user selects all lowercase, generate a password from the lowercase set
    if(lowercase) {
      password = generatePassword(length, lowercaseCharset);
    }

    // In case user does not want all lower case check what character type he/she would like to include 
    if(!lowercase) {
        var mixedcase = confirm("Would you like the password to include uppercase, numeric and/or special characters?");
        
        if(mixedcase) {
            password = generatePassword(length, mixedtype)
        }
        
    // in case user does not select mixedcase he will get all uppercase password
        if(!mixedcase) {
            password = generatePassword(length, uppercase)
        }
        
    }

  

  // var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
