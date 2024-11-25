import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardList from './src/components/CardList';
import Register from './src/components/Register';
import Login from './src/components/Login';
import Favorites from './src/components/Favoites';
import Deck from './src/components/Deck';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Trading Cards App</h1>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/deck" element={<Deck />} />
      </Routes>
    </div>
  );
};

export default App;
