import { randomInt } from '../utils/math';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';
export const difficulties: DifficultyLevel[] = ['easy', 'medium', 'hard'];

export const MAX_CHANCES = 6;

export const getRandomDifficulty = (): DifficultyLevel => difficulties[randomInt(difficulties.length)];;

export const WORDS_BY_DIFFICULTY: Record<DifficultyLevel, string[]> = {
  easy: [
    'cat',
    'dog',
    'cow',
    'fox',
    'rat',
    'bat',
    'pig',
    'ant',
    'bee',
    'owl'
  ],
  medium: [
    'zebra',
    'horse',
    'tiger',
    'snake',
    'sheep',
    'eagle',
    'camel',
    'goose',
    'monkey',
    'panda',
  ],
  hard: [
    'chameleon',
    'hippopotamus',
    'orangutan',
    'porcupine',
    'armadillo',
    'caterpillar',
    'rhinoceros',
    'platypus',
    'albatross',
    'salamander'
  ]
};

export const getRandomWord = (difficulty?: DifficultyLevel): string => {
  if (!difficulty) {
    difficulty = getRandomDifficulty();
  }
  const words = WORDS_BY_DIFFICULTY[difficulty];
  if (!words) {
    throw new Error(`No words found for difficulty level: ${difficulty}`);
  }
  return words[randomInt(words.length)];
};

export const getDisplayedWord = (word: string, guessedLetters: string[]): string => {
  return word
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');
};

export const isGameOver = (chances: number) => chances >= MAX_CHANCES;
export const isWon = (word: string, guessedLeters: string[]) => word.split('').every(letter => guessedLeters.includes(letter));