import React, { useEffect, useState } from 'react';
import { getCards } from '../api';

interface Card {
  id: number;
  name: string;
  type: string;
  rarity: string;
  imageUrl: string;
}

const CardList: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const fetchedCards = await getCards();
        setCards(fetchedCards);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="card-list">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <h3>{card.name}</h3>
          <p>Type: {card.type}</p>
          <p>Rarity: {card.rarity}</p>
          <img src={card.imageUrl} alt={card.name} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
