// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

function getPower(numOne, numTwo){
    if(!isNaN(numOne) && !isNaN(numTwo)) {
     const result= numOne ** numTwo
     console.log(result)
  
    }else{
      console.log("Enter a valid number")
    }
  }
  
  
  getPower(2,3)
  //use readline-sync for user input