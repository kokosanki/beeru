import React from 'react';
import Product from './Product';

const Products = ({ favorites, items, toggleFavorite, db }) => {
  const allFavorites = []
  favorites.map(fav => allFavorites.push(fav.id))
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
          isActive={allFavorites.includes(item.id.toString()) ? true : false}
        />
      ))}
    </ul>
  );
};

export default Products;
