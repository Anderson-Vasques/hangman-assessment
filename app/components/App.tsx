import { Game } from './Game';
import { HangmanProvider } from '../context/HangmanContext';
import React from 'react';

export const App = () => {
  return (
    <HangmanProvider>
      <Game />
    </HangmanProvider>
  )
}