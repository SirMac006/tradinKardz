import React, { useState, useEffect } from 'react';
import { getDeck, addCardToDeck, removeCardFromDeck } from '../api'; // API functions for deck management

interface Card {
  id: number;
  name: string;
  type: string;
  rarity: string;
  imageUrl: string;
}

const Deck: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>([]);

  useEffect(() => {
    const fetchDeck = async () => {
      const userDeck = await getDeck();
      setDeck(userDeck);
    };

    fetchDeck();
  }, []);

  const handleAddCard = async (cardId: number) => {
    await addCardToDeck(cardId);
    setDeck((prevDeck) => [...prevDeck, { id: cardId, name: 'New Card', type: 'Unknown', rarity: 'Common', imageUrl: '' }]); // Update the deck state (example)
  };

  const handleRemoveCard = async (cardId: number) => {
    await removeCardFromDeck(cardId);
    setDeck((prevDeck) => prevDeck.filter((card) => card.id !== cardId)); // Remove card from deck
  };

  return (
    <div className="deck">
      <h2>Your Card Deck</h2>
      {deck.length === 0 ? (
        <p>Your deck is empty.</p>
      ) : (
        deck.map((card) => (
          <div key={card.id} className="card">
            <h3>{card.name}</h3>
            <p>Type: {card.type}</p>
            <p>Rarity: {card.rarity}</p>
            <img src={card.imageUrl} alt={card.name} />
            <button onClick={() => handleRemoveCard(card.id)}>Remove from Deck</button>
          </div>
        ))
      )}
      <button onClick={() => handleAddCard(123)}>Add New Card</button> {/* Example to add a card */}
    </div>
  );
};

export default Deck;
