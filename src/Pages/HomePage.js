import React from 'react';
import Products from '../layouts/Products';

const HomePage = ({ favorites, items, favoriteBeers, toggleFavorite }) => {
  console.log(items);
  items.map(item => console.log(item.id));
  return (
    <Products
      items={items}
      favorites={favorites}
      favoriteBeers={favoriteBeers}
      toggleFavorite={toggleFavorite}
    />
  );
};

export default HomePage;
