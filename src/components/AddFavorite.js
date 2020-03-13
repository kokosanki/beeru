import React, { Component } from 'react';

class AddFavorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.isActive,
    };
  }

  handleClick = e => {
    this.props.toggleFavorite(e, e.target.id);
    console.log('click');
    if (this.state.isActive) {
      this.setState({
        isActive: false,
      });
    } else {
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
          this.state.isActive
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
