// /*1. Write a function `rot13` to translate a string using the ROT13 algorithm
// 2. When the user clicks on Encrypt, take whatever is in the textarea and display an encrypted version in the `result` element
// 3. When the user clicks on Decrypt, take whatever is in the textarea and display a decrypted version in the `result` element
// */

const textarea = document.querySelector("textarea");
const encryptBtn = document.querySelector("#encrypt");
const decryptBtn = document.querySelector("#decrypt");
const result = document.querySelector(".result");
const btn = document.querySelector(".buttons");

const rot13 = (string) => {
  //transform string to array of letters, and declare new array to store encoded output
  const inputArray = string.split("");
  const arrayEncode = [];

  for (let i = 0; i < inputArray.length; i++) {
    // for each letter in the input array, find charCode value and add 13 to it
    let charIndex = inputArray[i].charCodeAt();

    // split alphabet in two from 'N' to avoid looping through charCode beyond 'Z'
    //use && operator to find either uppercase or lowercase letters from charCode table
    if ( (charIndex >= 97 && charIndex < 110) || (charIndex >= 65 && charIndex < 78)) {
      charIndex += 13;
    } else if (charIndex >= 110 || charIndex >= 78) {
      charIndex -= 13;
    }

    // push string of new letters to new array
    arrayEncode.push(String.fromCharCode(charIndex));
  }
  //..and join letters together to return words
  return arrayEncode.join("");
};


encryptBtn.addEventListener("click", () => {
  result.innerText = rot13(textarea.value);
});

decryptBtn.addEventListener("click", () => {
  result.innerText = rot13(textarea.value);
});
