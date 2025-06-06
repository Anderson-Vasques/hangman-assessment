import { useContext } from 'react';
import { HangmanContext } from '../context/HangmanContext';

export const useHangman = () => {
  const context = useContext(HangmanContext);
  if (!context) throw new Error('useHangman must be used within HangmanProvider');
  return context;
};