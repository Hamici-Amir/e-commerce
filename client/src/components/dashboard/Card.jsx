import React from 'react';

// Example card data
const cardData = [
  { id: 1, title: 'Card 1', description: 'This is card 1.' },
  { id: 2, title: 'Card 2', description: 'This is card 2.' },
  { id: 3, title: 'Card 3', description: 'This is card 3.' },
  { id: 4, title: 'Card 4', description: 'This is card 4.' },
  // Add more cards as needed
];

const CardGrid = ({ title, description }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Card = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {cardData.map(card => (
      <CardGrid key={card.id} title={card.title} description={card.description} />
    ))}
  </div>
);

export default Card;