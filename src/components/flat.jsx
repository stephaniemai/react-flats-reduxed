import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const bckimg = `url('${this.props.flat.imageUrl}')`;
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2)), ${bckimg}`
    };
    return (
      // <div className="flat card-container">
      <div className="card flat" style={style}>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
          <p>{this.props.flat.priceCurrency} {this.props.flat.price} per night</p>
        </div>
      </div>
      // </div>
    );
  }
}

export default Flat;
