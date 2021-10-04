import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  render() {
    state = {
      text: '',
    }
    handleOnChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    handleOnSubmit = (e) => {
      e.preventDefault()
      this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId })
      this.setState({
        text: '',
      })
    }
    return (
      <div>
       <form onSubmit={this.handleOnSubmit}>
        <label htmlFor='review-content'>Review: </label>
        <input type="text" name="text" value={this.state.text} onChange={this.handleOnChange} />
        <input type='submit' />
       </form>
      </div>
    );
  }
};

export default ReviewInput;
