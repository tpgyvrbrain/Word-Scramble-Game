# Word Scramble Game

This is a simple "Word Scramble" game implemented in JavaScript. The user is presented with a scrambled version of a randomly chosen word and must guess the original word.

## How to Play

1. Run the `word-scramble.js` script in your browser's console, or include it in an HTML file inside a `<script>` tag.
2. Call the function `playScrambleGame();` to start the game.
3. The game will show a scrambled word using a browser prompt. Enter your guess to try to unscramble it.
4. The game keeps asking for guesses until you get the correct word or cancel.

## Example

```
Unscramble this word: tsvripaajc
Your guess: javascript
Correct! The word was "javascript". Attempts: 1
```

## Features

- Random word selection from a predefined list.
- Ensures scrambled word is never the same as the original.
- Tracks number of attempts.
- Simple browser-based prompts for input and output.

## Customization

- You can edit the `words` array in `word-scramble.js` to use your own set of words.
- For a more advanced interface, consider adapting this for HTML/CSS with buttons and input fields.

## License

MIT
