import React from 'react';

const FeaturedCarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={car.image} alt={car.makeAndModel} className="w-full h-64 object-cover" />
      <div className="px-4 py-4">
        <h3 className="text-xl font-bold mb-2">{car.makeAndModel}</h3>
        <p className="text-gray-500">{car.description}</p>
        <button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded hover:bg-yellow-600 mt-4">Learn More</button>
      </div>
    </div>
  );
};

export default FeaturedCarCard