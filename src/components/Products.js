import React from 'react';
import Product from './Product';

const Products = ({ favorites, items, favoriteBeers, toggleFavorite }) => {
  return (
    <ul className="Products">
      {items.map(item => (
        <Product
          toggleFavorite={toggleFavorite}
          key={item.id}
          id={item.id}
          name={item.name}
          src={item.image_url}
          tagline={item.tagline}
          description={item.description}
          favorites={favorites}
          items={items}
          isActive={favorites.includes(item.id.toString()) ? true : false}
        />
      ))}
    </ul>
  );
};

export default Products;
