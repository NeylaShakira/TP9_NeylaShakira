import React from 'react';
import Card from './Card';  // Pastikan file Card.jsx ada

const CardsContainer = () => {
  const products = [
    {
      title: "Product 1",
      description: "This is product 1 description.",
      image: "https://via.placeholder.com/200",
    },
    {
      title: "Product 2",
      description: "This is product 2 description.",
      image: "https://via.placeholder.com/200",
    },
    {
      title: "Product 3",
      description: "This is product 3 description.",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product, index) => (
        <Card
          key={index}
          title={product.title}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
