import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardList from './components/CardList';
import Register from './components/Register';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Deck from './components/Deck';
import CardDetails from './components/CardDetails';

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="/CardDetails" element={<CardDetails name="Sample Name" type="Sample Type" rarity="Common" imageUrl="sample-url.jpg" />} />
      </Routes>
    </div>
  );
};

export default App;