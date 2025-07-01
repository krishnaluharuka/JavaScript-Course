const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(`The word ${word} ${sentence.includes(word) ? 'is':'isnot'} in the sentence`); //.includes return true or false.