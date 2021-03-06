import React from 'react';
import Favorites from '../components/Favorites';

const FavoritePage = ({ favorites, items, favoriteBeers, toggleFavorite }) => {
  return (
    <div id="favpage">
      <Favorites
        items={items}
        favorites={favorites}
        favoriteBeers={favoriteBeers}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default FavoritePage;
