import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import FavoritePage from '../Pages/FavoritePage';
import firebase from '../firebase';

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

  async getFavoritesFirebase() {
    const favorites = [];
    await firebase
      .firestore()
      .collection('favorites')
      .get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          favorites.push(doc.data());
        });
      });
    this.setState({
      favorites: favorites,
    });
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(
        result => {
          this.getFavoritesFirebase();
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
    const { items } = this.state;
    const allFavorites = [];
    this.state.favorites.map(fav => allFavorites.push(fav.id));
    const res = items.filter(item => allFavorites.includes(item.id.toString()));

    this.setState({
      favoriteBeers: res,
    });
  };

  toggleFavorite = (e, id) => {
    e.target.classList.add('isActive');

    if (this.state.favorites.includes(id)) {
      e.target.classList.remove('isActive');

      this.setState({
        favorites: this.state.favorites.filter(item => item !== id),
      });
    } else {
      const db = firebase.firestore();
      db.collection('favorites').onSnapshot(snapshot => {
        const favoritesData = [];
        snapshot.forEach(doc =>
          favoritesData.push({ ...doc.data(), id: doc.id }),
        );

        this.setState({
          favorites: [...favoritesData],
        });
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favorites !== this.state.favorites) {
      this.getFavorites();
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="Loader__container">
          <img
            className="Loader__icon"
            alt="Beer"
            src="../assets/beer_i.png"
          ></img>
        </div>
      );
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
