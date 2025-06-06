'use client'

import React from 'react';
import {
  MAX_CHANCES,
  getDisplayedWord,
} from '../core/hangman';
import { useHangman } from '../hooks/useHangman';

export const Game = () => {
  const {
    word, guessedLetters, wrongLetters, attempts, gameOver, won, guess
  } = useHangman();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const letter = event.key.toLowerCase();
    if (/^[a-z]$/.test(letter) && !guessedLetters.includes(letter)) {
      guess(letter);
    }
    event.preventDefault(); // Prevent default behavior to avoid input value to be displayed
    (event.target as HTMLInputElement).value = '';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Hangman Game</h1>
      <p className="text-lg mb-2">Guess the word by selecting letters!</p>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          {/* handle the hangman figure here */}
        </div>
        <p className="text-xl font-mono mb-4">
          {getDisplayedWord(word, guessedLetters)}
        </p>
        {gameOver && (
          <p className="text-red-500 mb-4 ">
            Game Over! The word was {word}.
          </p>
        )}
        {won && (
          <p className="text-green-500 mb-4 ">
            Congratulations! You guessed the word
          </p>
        )}

        {( gameOver || won ) && (<button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mt-4 mb-4 block center"
          onClick={() => window.location.reload()}
        >
          Reset Game
        </button>
        )}
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
        <div className="bg-gray-200 p-4 rounded mb-4">
          <h2 className="text-lg font-semibold mb-2">Wrong Letters ({attempts} out of {MAX_CHANCES})</h2>
          {wrongLetters.length > 0 && (
            <p className="text-red-600">{wrongLetters.join(', ')}</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default Game;