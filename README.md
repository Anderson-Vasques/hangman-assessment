# Hangman Game

This is a simple Hangman game built with React and TypeScript as part of a technical assessment. The user interacts with the game by typing letters to guess a hidden word. The game keeps track of correct and incorrect guesses and visually represents the progress.

## 🔗 Live Demo

You can try the game directly in your browser via StackBlitz:  
👉 [Play the Hangman Game](https://stackblitz.com/~/github.com/Anderson-Vasques/hangman-assessment?file=app/components/Game.tsx&view=editor)

## Features

🟢 The user can:
- Type letters to guess the hidden word
- See a list of letters they’ve guessed so far
- View underscores (`_`) representing each hidden letter
- Win the game by guessing all the correct letters
- Lose the game after 6 incorrect guesses

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
