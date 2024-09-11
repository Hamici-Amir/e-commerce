import { Clock, Diamond } from 'lucide-react';
import React from 'react';

const cardData = [
  { id: 1, title: 'Card 1', description: 'This is card 1.' },
  { id: 2, title: 'Card 2', description: 'This is card 2.' },
  { id: 3, title: 'Card 3', description: 'This is card 3.' },
  { id: 4, title: 'Card 4', description: 'This is card 4.' },
  
];

const Card = ({ title, description }) => (
  <div className=" bg-white shadow-lg rounded-xl overflow-hidden">
    <div className="flex justify-between p-4">
    <div>
      <h3 className="text-lg font-semibold mb-2">Amir Hamici</h3>
      <p className="text-gray-600">0667989956</p>

      </div>
      <div className=''>
        <button className='text-blue-400 bg-green-200 rounded-lg'>New Order</button>
      </div>
      
    </div>
    <hr className='h-3'/>
    <div className="flex items-center p-2">
  <Clock className="mr-2" />
  <span>11:00, 08 September, 2024</span>
</div>
      
      <div className="flex items-center  p-2">
        <Diamond className="mr-2"/>
        <span>Order 01  </span>
        </div>
      <hr className='h-3'/>
      <div className='flex justify-between p-2'>
        <h1>Totale items</h1>
        <p className='text-blue-500 font-bold mr-1'>50$</p>
      </div>
      <div className='flex justify-between p-2'>
        <h1 className='text-gray-500'>01 Spaghetti Bolonese </h1>
        <p className='mr-1'>12$</p>
      </div>
      <div className='flex justify-between p-2'>
        <h1 className='text-gray-500'>Garlic Bread</h1>
        <p className='mr-1'>07$</p>
      </div>
      <div className='flex justify-between p-2'>
        <h1 className='text-gray-500'>01 Salade</h1>
        <p className='mr-1'>4$</p>
      </div>
      
      
      
  </div>
);

export const CardGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {cardData.map(card => (
      <Card key={card.id} title={card.title} description={card.description} />
    ))}
  </div>
);

