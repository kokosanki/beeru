import React from 'react';
import Product from './Product';

const Favorites = ({ favorites, items, favoriteBeers, toggleFavorite }) =>
  (!favorites.length && (
    <div className="Favorites">
      <div className="Favorites__noFavorites">
        <p className="noFavorites__text">
          Your favorite beers will appear here:
        </p>
        <img
          className="noFavorites__img"
          alt="No favorite beers found"
          src="../assets/beer.jpg"
        ></img>
      </div>
    </div>
  )) || (
    <ul className="Products">
      {favoriteBeers.map(item => (
        <Product
          isActive={true}
          toggleFavorite={toggleFavorite}
          key={item.id}
          id={item.id}
          name={item.name}
          src={item.image_url}
          tagline={item.tagline}
          description={item.description}
          favorites={favorites}
          items={items}
        />
      ))}
    </ul>
  );

export default Favorites;
