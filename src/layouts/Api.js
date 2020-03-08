import React, { Component } from 'react';
import Product from '../components/Product';


class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          console.log(this.state.items)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Błąd: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Ładowanie...</div>;
    } else {
      return (
        <ul className="Products">
          {items.map(item => (
            <Product key={item.id} id={item.id} name={item.name} src={item.image_url} tagline={item.tagline} description={item.description} />
          ))}
        </ul>
      );
    }
  }
}

export default Api;
