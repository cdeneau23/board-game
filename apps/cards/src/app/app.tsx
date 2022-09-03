import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './navigation-bar/navigation-bar';
import HomePage from './home-page/home-page';
import CardPage from './card-page/card-page';
import GamePage from './game-page/game-page';

export function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cards" element={<CardPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
