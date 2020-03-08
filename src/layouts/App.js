import React, { Component } from 'react';
import '../styles/components/App.scss';
import '../styles/index.scss';
import {BrowserRouter} from 'react-router-dom';
import NavLink from './Navigation';
import Logo from './Logo';

class App extends Component {
  render() { 
    return (
      <BrowserRouter>
      <div>
        <header>
          <nav className="nav">
            <Logo />
        {<NavLink />}
        </nav>
        </header>
        
      </div>
      </BrowserRouter> 
     );
  }
}
 
export default App;
