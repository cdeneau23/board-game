// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import NavigationBar from './navigation-bar/navigation-bar';
import HomePage from './home-page/home-page';
import CardPage from './card-page/card-page';
import GamePage from './game-page/game-page';
import { Box } from '@mui/material';

export function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Box>
        <HomePage></HomePage>
        <CardPage></CardPage>
        <GamePage></GamePage>
      </Box>
    </>
  );
}

export default App;
