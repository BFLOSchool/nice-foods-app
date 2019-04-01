import React, { Component } from 'react';
import Nav from './Components/Nav';

import './App.css';

class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "Jane",
      lastName: "Jenkins",
      age: 25,
      attributes: [
        "funny",
        "kind",
        "nice",
        "caring"
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.state.firstName}</h1>
        <h3>Age: {this.state.age}</h3>
      </div>
    );
  }
}

export default Example;
