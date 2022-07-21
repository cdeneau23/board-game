import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardPage from './app/card-page/card-page';
import GamePage from './app/game-page/game-page';
import HomePage from './app/home-page/home-page';
import NavigationBar from './app/navigation-bar/navigation-bar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<CardPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
