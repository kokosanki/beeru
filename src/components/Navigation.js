import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/index.scss';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Favorites', path: '/favorites' },
];

const Navigation = () => {
  const menu = navItems.map(item => (
    <li className="nav__link" key={item.name}>
      <NavLink to={item.path} exact={item.exact || false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return <ul className="nav__links">{menu}</ul>;
};

export default Navigation;
