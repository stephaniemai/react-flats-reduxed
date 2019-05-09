import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {

  renderFlats = () => {
    return this.props.flatList.map(flat => (
      <Flat
        name={flat.name}
        key={flat.lat}
        imageURL={flat.imageUrl}
        price={flat.price}
        priceCurrency={flat.priceCurrency}
        lat={flat.lat}
        lng={flat.lng}
        selectFlat={this.props.selectFlat}
      />
    ));
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderFlats()}
      </div>
    );
  }
}


export default FlatList;
