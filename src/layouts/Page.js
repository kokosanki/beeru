import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import FavoritePage from '../Pages/FavoritePage';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      favorites: [],
      favoriteBeers: [],
    };
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  getFavorites = () => {
    let items = this.state.items;
    let favorites = this.state.favorites;
    let res = items.filter(item => favorites.includes(item.id.toString()));
    console.log(res);
    this.setState({
      favoriteBeers: res,
    });
  };

  toggleFavorite = (e, id) => {
    e.target.classList.add('isActive');
    this.setState({
      favorites: [...this.state.favorites, id],
    });
    if (this.state.favorites.includes(id)) {
      e.target.classList.remove('isActive');
      this.setState({
        favorites: this.state.favorites.filter(item => item !== id),
      });
    }
    setTimeout(() => {
      this.getFavorites();
    }, 1000);
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <HomePage
                  toggleFavorite={this.toggleFavorite}
                  favorites={this.state.favorites}
                  items={items}
                  favoriteBeers={this.state.favoriteBeers}
                  {...props}
                />
              )}
            />
            <Route
              path="/favorites"
              exact
              render={props => (
                <FavoritePage
                  toggleFavorite={this.toggleFavorite}
                  favorites={this.state.favorites}
                  items={items}
                  favoriteBeers={this.state.favoriteBeers}
                  {...props}
                />
              )}
            />
          </Switch>
        </>
      );
    }
  }
}

export default Page;
