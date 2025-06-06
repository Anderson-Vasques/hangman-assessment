import React, { createContext, useState, ReactNode } from "react";
import {
  getRandomWord,
  isGameOver,
  isWon
} from '../core/hangman';

interface HangmanContextProps {
  word: string;
  guessedLetters: string[];
  wrongLetters: string[];
  attempts: number;
  gameOver: boolean;
  won: boolean;
  guess: (letter: string) => void;
}

export const HangmanContext = createContext<HangmanContextProps | undefined>(undefined);

export const HangmanProvider = ({ children }: { children: ReactNode }) => {
  const [word] = useState<string>(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(0);

  const wrongLetters = guessedLetters.filter((l) => !word.includes(l));
  const won = isWon(word, guessedLetters)
  const gameOver = isGameOver(attempts)

  const guess = (letter: string) => {
    if (guessedLetters.includes(letter) || gameOver || won) return;
    setGuessedLetters([...guessedLetters, letter]);
    if (!word.includes(letter)) {
      setAttempts(prev => prev + 1);
    }
  };

  return (
    <HangmanContext.Provider
      value={{ word, guessedLetters, wrongLetters, attempts, gameOver, won, guess }}>
      {children}
    </HangmanContext.Provider>
  );
};