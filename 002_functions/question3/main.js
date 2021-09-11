// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3



function countNumberOfWords(wordsString){
    const result =  wordsString.split(" ").length
    
console.log(result + " words are there in the sentence" );
}

countNumberOfWords("alright we should check the words")