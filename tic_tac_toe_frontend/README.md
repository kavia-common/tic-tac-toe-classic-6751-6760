# Tic Tac Toe Mobile App

A React Native mobile application that lets users play the classic Tic Tac Toe game. The app features both local multiplayer and AI opponent modes.

## Features

- Modern UI with Ocean Professional theme
- Local multiplayer mode
- AI opponent mode
- Score tracking
- Game status display
- Responsive design
- Clean and minimalist interface

## Theme Colors

- Primary (Blue): #2563EB
- Secondary (Amber): #F59E0B
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Run on Android:
   ```bash
   npm run android
   ```

4. Run on iOS:
   ```bash
   npm run ios
   ```

## Project Structure

```
src/
├── components/
│   ├── Board.tsx
│   ├── Square.tsx
│   ├── ScoreBoard.tsx
│   └── Button.tsx
└── utils/
    └── gameUtils.ts
```

## Game Modes

1. Local Multiplayer: Two players take turns playing on the same device
2. VS AI: Play against a computer opponent with strategic moves

## Building for Production

To create a production build:

```bash
npm run build
```

## Technology Stack

- React Native
- Expo
- TypeScript
