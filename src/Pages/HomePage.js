import React from 'react';
import Products from '../components/Products';

const HomePage = ({ ...props }) => {
  return <Products {...props} />;
};

export default HomePage;
