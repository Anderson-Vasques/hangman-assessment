import { useState } from "react";
import { getRandomWord, isGameOver, isWon } from "../core/hangman";
import { Game } from "./Game";

export const App = () => {
    const word = getRandomWord();
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [attempts, setAttempts] = useState(0);


    const guess = (letter: string) => {
      if (guessedLetters.includes(letter) || isGameOver(attempts)) return; // handle isWon scenario
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setAttempts(prev => prev + 1);
      }
    };

    return <Game attempts={attempts} guess={guess} word={word} guessedLetters={guessedLetters} isGameOver={isGameOver(attempts)} isWon={isWon(word, guessedLetters)}   />
}