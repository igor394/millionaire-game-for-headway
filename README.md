# Who Wants to Be a Millionaire Game

A web-based implementation of the popular game show "Who Wants to Be a Millionaire" built with Next.js and TypeScript.

## Features

- 12 questions with 4 answer options each
- Responsive design that works on all devices (from iPhone 8 to 4K displays)
- Clean and modern UI
- Type-safe code with TypeScript
- ESLint configuration following Airbnb style guide

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/igor394/millionaire-game-for-headway.git
cd millionaire-game
```

2. Install dependencies:
```bash
npm install
```

## Running the Game

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

## Deployment

The game is configured for deployment on Vercel. To deploy:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Vercel will automatically deploy your application

## Project Structure

- `src/app/` - Next.js app directory
- `src/components/` - React components
- `src/config/` - Game configuration and types
- `public/` - Static assets
- `src/assets/` - Dynamic assets

## Game Configuration

The game questions and answers are stored in `src/config/gameConfig.ts`. You can modify this file to:
- Add more questions
- Change the number of answer options
- Modify the prize structure
- Add multiple correct answers


