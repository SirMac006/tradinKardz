import React, { useState, useEffect } from 'react';
import { getFavoriteCards } from '../api'; // Assuming this is an API call to get favorite cards

interface Card {
  id: number;
  name: string;
  type: string;
  rarity: string;
  imageUrl: string;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Card[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoriteCards = await getFavoriteCards();
      setFavorites(favoriteCards);
    };

    fetchFavorites();
  }, []);

  return (
    <div className="favorites">
      <h2>Your Favorite Cards</h2>
      {favorites.length === 0 ? (
        <p>No favorite cards found.</p>
      ) : (
        favorites.map((card) => (
          <div key={card.id} className="card">
            <h3>{card.name}</h3>
            <p>Type: {card.type}</p>
            <p>Rarity: {card.rarity}</p>
            <img src={card.imageUrl} alt={card.name} />
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
