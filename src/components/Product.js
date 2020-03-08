import React from 'react';

const Product = ({ name, tagline, description, id, src }) => {
  return (
    <article className="Products__product">
      <div class="product__presentation">
        <div className="product__left">
          <img className="product__image" alt={id} src={src} />
        </div>
        <div className="product__right">
          <h2 className="product__tag">{tagline}</h2>
          <p className="product__description">{description}</p>
        </div>
      </div>
      <div className="product__favorite">
        <h1 className="product__title">{name}</h1>
        <div className="product__isFavorite">Like</div>
      </div>
    </article>
  );
};

export default Product;
