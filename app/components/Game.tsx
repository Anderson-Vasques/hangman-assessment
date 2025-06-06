import { getRandomWord, getDisplayedWord } from '../core/hangman';


export const Game = () => {
  const wordToBeGuessed = getRandomWord('hard');
  const displayedWord = getDisplayedWord(wordToBeGuessed)


  return (<div> 
    <p>{ displayedWord }</p>
    <p>{ wordToBeGuessed.split('').join(' ') }</p>
    </div>
  );
};
