// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

//steps:
//write a function taking in one param (an array)
//write a for loop iterating the array
//write a nested for loop iterating the array
//compare the indexes of each array and add them together to see if they equal zero
//if so, return true
//else, return false

// ----------This one gave me so much grief. I probably spent two hours on it. Boooooooo.

function addToZero(zeroArray) {

    let result = []

    for(let i = 0; i < zeroArray.length; i++) {
        for(let j = 0; j < zeroArray.length; j++) {
            if (zeroArray[i] + zeroArray[j] === 0) {
                result.push(true)
            } else {
                result.push(false)
            }
        }
    }
    return result.indexOf(true) >= 0
}

    
console.log(addToZero([2, 9, 6, -3, -8]))

// unique characters

// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

//write a function taking in one empty param
//create variable assigned to an empty new Set
//loop through string 
//add index of string to the new Set variable
//return size of new Set and compare it to length of string

//--------Did so much research on this one. Had no idea Set([]) existed. Infuriating. 


function hasUniqueCharacters (str) {
    let uniqueCharacters = new Set([])
    for(let i = 0; i < str.length; i++) {
            uniqueCharacters.add(str[i])
        }
        return uniqueCharacters.size === str.length
    }

console.log(hasUniqueCharacters('monday')) 

// PANGRAM SENTENCE
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function. Set a string equal to an empty string
//Lowercase the whole string
// assign string to an object
// create a variable of the alphabet
// split the alphabet
//for loop 
// good luck from there lololol


const isPangram = (str = '') => {
   str = str.toLowerCase();
   const { length } = str;
   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
   const alphabetArray = alphabet.split('');
   for(let i = 0; i < length; i++){
      const letter = str[i];
      const index = alphabetArray.indexOf(letter);
      if(index !== -1){
         alphabetArray.splice(index, 1);
      }
   }
   return !alphabetArray.length;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'))

//LONGEST WORD

//Write a function find_longerst_word that takes a list of words and returns the length of the longest one

function find_longest_word (str) {
    let strSplit = str.split(' ') 
    let biggestWord = 0;
    for(let i = 0; i < strSplit.length; i++) {
        if(strSplit[i].length > biggestWord) {
            biggestWord = strSplit[i].length;
        }
    }
    return biggestWord
}
console.log(find_longest_word("The man ate a pepperoni"))