function isPalindrome(word) {
//converted string into an array
  const arrValue = word.split (''); //   
  
//  reversed the array values (essentially reverse string) 
const reveArrVal = arrValue.reverse();   
  
//  mesh the array values into the string  
const revWord = reveArrVal.join('');  
  
if (word == revWord)  
{  
alert('It is a Palindrome '); 
}  
else {  
alert (' It is not a Palindrome' ); // if the condition is not true.  
}  
const string = prompt( ' Enter the string to check Palindrome ');  
const value = isPalindrome (word); // call the function to apply functionality to user input 
console.log(value);  
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
