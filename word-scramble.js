// Word Scramble Game in JavaScript

const words = [
  "javascript", "function", "variable", "object", "array", "promise", "callback", "closure", "prototype", "asynchronous"
];

// Utility to scramble a word
function scrambleWord(word) {
  const arr = word.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    // Swap current with random earlier index
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Ensure the scrambled word isn't the same as the original
  return arr.join('') === word ? scrambleWord(word) : arr.join('');
}

// Main Game Function
function playScrambleGame() {
  const word = words[Math.floor(Math.random() * words.length)];
  const scrambled = scrambleWord(word);

  alert("Welcome to Word Scramble!");
  let guess = prompt(`Unscramble this word: ${scrambled}`);
  let attempts = 1;

  while (guess !== word) {
    guess = prompt("Incorrect! Try again:\n" + scrambled);
    attempts++;
    if (guess === null) {
      alert("Game cancelled.");
      return;
    }
  }

  alert(`Correct! The word was "${word}". Attempts: ${attempts}`);
}

// To play, call playScrambleGame()
// Uncomment below line to start in browser
// playScrambleGame();
