import React, { Component } from 'react';
import firebase from '../firebase';

class AddFavorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.isActive,
    };
  }

  handleClick = e => {
    console.log('click')
    const db = firebase.firestore();

    this.props.toggleFavorite(e, e.target.id);
    if (this.props.isActive) {
      db.collection('favorites')
        .doc(e.target.id)
        .delete();

      this.setState({
        isActive: false,
      });
    } else {
      db.collection('favorites')
        .doc(e.target.id)
        .set({ id: e.target.id });

      this.setState({
        isActive: true,
      });
    }
  };
  
  render() {
    return (
      <img
        id={this.props.id}
        className={
          this.props.isActive
            ? 'product__isFavorite isActive'
            : 'product__isFavorite isNotActive'
        }
        onClick={this.handleClick}
        alt="Add to favorite"
        src="../assets/heart1.png"
      ></img>
    );
  }
}

export default AddFavorite;
