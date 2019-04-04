/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios'

import Nav from './Components/Nav';
import './App.css';

class MarketplaceItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="col-4">
        <a href={'/item/'+this.props.item._id}>
          <img src={this.props.item.image} className="cover" alt="image" /><br />
          <span><b>{this.props.item.name}</b> ${this.props.item.price}</span><br />
          <small className="gray">{this.props.item.description}</small><br />
        </a>
      </div>
    );
  }
}

export default MarketplaceItem;
