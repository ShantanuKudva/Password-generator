const characterAmountRange = document.getElementById("NumberOfCharacters");
const characterLength = document.getElementById("characterLength");
const form = document.getElementById("passwordGenerationForm");
const includeUpperCaseElement = document.getElementById("UpperCase");
const includeNumbersElement = document.getElementById("Numbers");
const includeSymbolsElement = document.getElementById("Symbols");
const passwordDisplay = document.getElementById("password");
//password strength
const level1 = document.body.querySelector(".color-bars");
const level2 = document.body.querySelector(".level2");
const level3 = document.body.querySelector(".level3");
const level4 = document.body.querySelector(".level4");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = characterAmountRange.value;
  const includeUpperCase = includeUpperCaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;

  const password = generatePassword(
    characterAmount,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerHTML = password;
});

function generateArray(min, max) {
  let array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

const UPPER_CASE_CODES = generateArray(65, 90);
const LOWER_CASE_CODES = generateArray(97, 122);
const NUMBER_CHAR_CODES = generateArray(48, 57);
const SYMBOLS_CHAR_CODES = generateArray(33, 47)
  .concat(generateArray(58, 64))
  .concat(generateArray(91, 96))
  .concat(generateArray(123, 126));

let inputValue;
let getValue = () => {
  inputValue = characterAmountRange.value;
  characterLength.innerHTML = inputValue;
};

document.addEventListener("input", getValue);

function generatePassword(
  characterAmount,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  let charCodes = LOWER_CASE_CODES;

  if (includeUpperCase) {
    charCodes = charCodes.concat(UPPER_CASE_CODES);
  }
  if (includeNumbers) {
    charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  }
  if (includeSymbols) {
    charCodes = charCodes.concat(SYMBOLS_CHAR_CODES);
  }

  let passwordCharacter = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacter.push(String.fromCharCode(characterCode));
  }
  // if (passwordCharacter.length <= 10) {
  //   level1.style.backgroundColor = "red";
  //   level2.style.backgroundColor = "transparent";
  //   level3.style.backgroundColor = "transparent";
  //   level4.style.backgroundColor = "transparent";
  // } else if (
  //   passwordCharacter.length <= 10 &&
  //   (includeUpperCase || includeNumbers || includeSymbols)
  // ) {
  //   level1.style.backgroundColor = "yellow";
  //   level2.style.backgroundColor = "transparent";
  //   level3.style.backgroundColor = "transparent";
  //   level4.style.backgroundColor = "transparent";
  // } else if (
  //   passwordCharacter.length > 10 &&
  //   passwordCharacter.length <= 20 &&
  //   (includeUpperCase || includeNumbers || includeSymbols)
  // ) {
  //   level1.style.backgroundColor = "yellow";
  //   level2.style.backgroundColor = "yellow";
  //   level3.style.backgroundColor = "transparent";
  //   level4.style.backgroundColor = "transparent";
  // } else if (passwordCharacter.length > 10 && passwordCharacter.length <= 20) {
  //   level1.style.backgroundColor = "red";
  //   level2.style.backgroundColor = "red";
  //   level3.style.backgroundColor = "transparent";
  //   level4.style.backgroundColor = "transparent";
  // }
  return passwordCharacter.join("");
}
