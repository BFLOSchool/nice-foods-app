/* eslint-disable */
import React, { Component } from 'react';
import Nav from './Components/Nav';
import axios from 'axios'

import './App.css';

class Item extends Component {
  constructor(props) {
    super(props)

    this.addToCart = this.addToCart.bind(this);
    this.state = {
      cart: [],
      item: {}
    }
    this.getItemDetails();
  }
  addToCart() {
    this.setState({
      cart: this.state.cart.concat(this.state.item)
    })
  }
  getItemDetails() {
    axios.get('https://dev-curriculum.bfloschool.com/api/marketplace/'+this.props.match.params.itemId)
    .then(response => {
      console.log(response.data.item)
      this.setState({
        item: response.data.item
      })
    }).catch((error) => {
      console.log(error);
    });
  }
  render() {
    if (this.state.item && this.state.item.ingredients) {
      return (
        <div style={{backgroundColor: '#FAFAFA'}}>
          <Nav />
           <div>
             <div className="container-fluid">
               <div className="row">
                 <div className="col-md-12">
                   <img src={this.state.item.image} className="image-cover" alt="cover image" />
                 </div>
               </div>
             </div>
             <div className="container">
               <br /><br />
               <div className="row">
                 <div className="col-8">
                   <h2>{this.state.item.name}</h2>
                   <p className="gray">
                     {this.state.item.description}
                    </p>
                    <b><span className="orange pointer" onClick={this.addToCart}><i className="fas fa-check"></i>Add to Cart</span></b>
                 </div>
                 <div className="col-4" style={{borderRadius: 5}}>
                    <div style={{backgroundColor: 'white', padding: 20}}>
                      <a href="/checkout">
                        <button className="add"><b>Checkout</b></button>
                      </a>
                      <hr style={{marginBottom: 10, marginTop: 10}} />
                      <div className="row">
                        <div className="col-sm-9">
                          <b className="charcoal">Subtotal ({this.state.cart.length} items)</b>
                        </div>
                        <div className="col-sm-3">
                          <span>$5</span>
                        </div>
                      </div>
                      <hr style={{marginBottom: 10, marginTop: 10}} />
                      <div className="row">
                        <div className="col-sm-9">
                          <b className="charcoal">Tax</b>
                        </div>
                        <div className="col-sm-3">
                          <span>$0.87</span>
                        </div>
                      </div>
                      <hr style={{marginBottom: 10, marginTop: 10}} />
                      <div className="row">
                        <div className="col-sm-9">
                          <b className="black">Grand Total</b>
                        </div>
                        <div className="col-sm-3">
                          <span>$5.87</span>
                        </div>
                      </div>
                    </div>
                 </div>
               </div>
                <br /><hr /><br />
                <h2>Other Foods</h2>
                <div className="row">
                  <div className="col-4 ">
                    <img src="https://cdn.bfloschool.com/projects/marketplace/images/hamburger.jpg" className="cover" /><br />
                    <span><b>Grilled Cheese</b> $20</span><br />
                    <small className="gray">This is a cheap grilled cheese</small><br />
                  </div>
                  <div className="col-4 ">
                    <img src="https://cdn.bfloschool.com/projects/marketplace/images/grilled-cheese.jpg" className="cover" /><br />
                    <span><b>Grilled Cheese</b> $20</span><br />
                    <small className="gray">This is a cheap grilled cheese</small><br />
                  </div>
                </div><br /><br />
             </div>
           </div>
        </div>
      );
    }
  }
}

export default Item;
