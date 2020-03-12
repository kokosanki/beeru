import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavLink from './Navigation';
import Logo from './Logo';
import Page from './Page';
import '../styles/components/App.scss';
import '../styles/index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav className="nav">
            <Logo />
            {<NavLink />}
          </nav>
        </header>
        <main>{<Page />}</main>
      </div>
    </BrowserRouter>
  );
};

export default App;
