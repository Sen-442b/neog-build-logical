// Write a program to take a number input from user and print multiplication table 12 times for that number.



const readLineSync = require("readline-sync")

const userIntInput = readLineSync.questionInt("Enter a number to get multiplication number\n")


for(let i =1 ;i<=12;i++){
    console.log(`${userIntInput}*${i} is ${userIntInput*i}`)
};
