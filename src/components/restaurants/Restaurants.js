import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const renderRestaurants = this.props.restaurants.map((rest) => {
      return (
        <Restaurant 
            restaurant={rest} 
            key={rest.id} 
            deleteRestaurant={this.props.deleteRestaurant} 
          />
      )
    })
    return(
      <ul>
        { renderRestaurants }
      </ul>
    );
  }
};

export default Restaurants;