// Assignment code here
let passLength;
do{
     passLength = prompt("Choose 8 - 20 for your password length");
}while(passLength > 20 || passLength< 8)
console.log(passLength)


let choiceLower = confirm("Will your password include lowercase letters?");
console.log(choiceLower)
let choiceUpper = confirm("Will your password include uppercase letters?");
console.log(choiceUpper)
let choiceNumber = confirm("Will your password include numbers?");
console.log(choiceNumber)
let choiceSymbol = confirm("Will your password include symbols?");
console.log(choiceSymbol)
//filtering out values for password
const filterFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

function generatePassword(lower, upper, number, symbol, passLength) {
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArray = [{lower}, {upper}, {number}, {symbol},].filter(constraint => Object.values(constraint)[0]);

    if(typesCount === 0) {
		return '';
    }

    for(let i=0; i<passLength; i+=typesCount) {
		typesArray.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += filterFunc[funcName]();
		});
    }

    const finalPassword = generatedPassword.slice(0, passLength);

    return finalPassword;

}




//DOM elements
let resultEl = document.getElementById("password");



//Generator functions - http://www.net-comber.com/charset.html

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = "!@$().<>"
    return symbols[Math.floor(Math.random() * symbols.length)];
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword(choiceLower, choiceUpper, choiceNumber, choiceSymbol, passLength);
// console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return passwordText.value
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
    passLength
    choiceLower.checked;
    choiceUpper.checked;
    choiceNumber.checked;
    choiceSymbol.checked;

    resultEl.innerText =  writePassword()
});


