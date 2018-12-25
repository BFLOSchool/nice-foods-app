import React, { Component } from 'react';
import Nav from './Components/Nav';

class Checkout extends Component {
  constructor(props) {
    super(props)

    this.addToCart = this.addToCart.bind(this);

    this.state = {
      cart: [],
      item: {
        name: "Smoothie",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac blandit diam, in posuere felis. Praesent volutpat, augue id vulputate fringilla, turpis metus ullamcorper elit, non bibendum turpis odio in nulla. Phasellus sed aliquam mauris. Donec nulla leo, congue sit amet aliquet non, aliquam nec eros. Nulla eget mi sed nisl hendrerit dapibus vitae aliquet neque. Etiam egestas turpis sit amet ornare auctor. Suspendisse ac tristique purus.\n\nProin imperdiet pulvinar sem, id porttitor enim tincidunt sed. Nulla id nisl eros. Nulla et elementum arcu. Etiam et elementum arcu. Mauris finibus egestas pulvinar. Pellentesque sagittis ultrices dui sed pellentesque. Mauris et varius libero, vel rutrum dui.",
        ingredients: ["Strawberries", "Blueberries", "Ice Cubes"],
        image: "https://cdn.bfloschool.com/projects/marketplace/images/smoothie.jpg",
        price: 5.00
      }
    }
  }
  addToCart() {
    this.setState({
      cart: this.state.cart.concat(this.state.item)
    })
  }
  render() {
    return (
      <div style={{backgroundColor: '#FAFAFA', height: 1000}}>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src={this.state.item.image} className="image-cover" alt="cover image" />
          </div>
        </div>
      </div>
      <br /><br />
        <div className="container">
          <div className="row">
            <div className="col-8" style={{backgroundColor: 'white', padding: 20}}>
            <h4><b>Complete your Purchase</b></h4>
            <p className="gray">Use the form below to complete your purchase. Thank you for shopping with us!</p>
              <form>
                <div className="row">
                  <div className="col-12">
                    <input type="text" placeholder="Name on Card" />
                  </div>
                  <div className="col-12">
                    <input type="text" placeholder="Card Number" type="number" />
                  </div>
                  <div className="col-6">
                  <select>
                    <option value="01">January</option>
                    <option value="02">February </option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                  </div>
                  <div className="col-6">
                  <select>
                    <option value="16"> 2016</option>
                    <option value="17"> 2017</option>
                    <option value="18"> 2018</option>
                    <option value="19"> 2019</option>
                    <option value="20"> 2020</option>
                    <option value="21"> 2021</option>
                </select>
                  </div>
                  <br /><br />
                  <div className="col-6">
                    <input type="text" placeholder="Card Expiration Date" />
                  </div><div className="col-6">
                    <input type="text" placeholder="Zip Code" />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-4" style={{borderRadius: 5}}>
               <div style={{backgroundColor: 'white', padding: 20}}>
                 <button className="add"><b>Purchase</b></button>
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
                     <span>$5</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
