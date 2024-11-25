import React from 'react';

interface CardProps {
  name: string;
  type: string;
  rarity: string;
  imageUrl: string;
}

const CardDetail: React.FC<CardProps> = ({ name, type, rarity, imageUrl }) => {
  return (
    <div className="card-detail">
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Rarity: {rarity}</p>
      <img src={imageUrl} alt={name} />
    </div>
  );
};

export default CardDetail;
