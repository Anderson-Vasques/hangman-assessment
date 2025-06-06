'use client'

import { getDisplayedWord } from "../core/hangman";

interface GameProps {
  word: string;
  guessedLetters: string[];
  attempts: number;
  isGameOver: boolean;
  isWon: boolean;
  guess: (letter: string) => void
}

export const Game = (config: GameProps) => {
  const { attempts, guess , guessedLetters, isGameOver, isWon, word } = config;
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('handle here')
};
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Hangman Game</h1>
      <p className="text-lg mb-2">Guess the word by selecting letters!</p>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <p className="text-xl font-mono mb-4">
          {getDisplayedWord(word)}
        </p>
        <p className="text-red-500 mb-4 ">
            {isGameOver ? `Game Over! The word was "${word}".` : ''}
            {isWon ? `Congratulations! You guessed the word "${word}"!` : ''}
            {(isGameOver || isWon) && (<button // the button should be in a new line or have a tailwind class to make it look like a button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mt-4 block"
              onClick={() => window.location.reload()}
            >
              Reset Game
            </button>)}
        </p>
        <div className="flex flex-wrap justify-center mb-4">
            <input
              type="text"
              maxLength={1}
              className="border border-gray-300 rounded p-2 mr-2 mb-2"
              onKeyDown={handleKeyDown}
              placeholder="Guess a letter"
              autoFocus
            />
        </div>
      </div>
    </div>
  );
};
