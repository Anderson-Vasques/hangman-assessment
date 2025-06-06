import { getRandomWord, difficulties } from '../core/hangman';


export const Game = () => {
  return <div> { getRandomWord(difficulties[2])} </div>;
};
