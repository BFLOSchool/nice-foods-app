import React, { Component } from 'react';
import Nav from './Components/Nav';

import './App.css';

class Item extends Component {
  constructor(props) {
    super(props)
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
  render() {
    var imageUrl = 'url("https://cdn.bfloschool.com/projects/marketplace/images/smoothie.jpg")';
    return (
      <div style={{backgroundColor: '#FAFAFA'}}>
        <Nav />
         <div>
           <div  className="image-cover" style={{background: imageUrl, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center', color: '#fff', height: 200, paddingTop: 50}} >
            <div className="container">
              <div className="col-sm-3">
                <div className="row">

                  <div className="col-sm-3" style={{borderRadius: 10, padding: 20, float: 'right'}}>
                    <div className="row">
                      <span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div className="container">
             <br /><br />
             <div className="row">
               <div className="col-8">
                 <h2>Smoothie</h2>
                 <p className="gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac blandit diam, in posuere felis. Praesent volutpat, augue id vulputate fringilla, turpis metus ullamcorper elit, non bibendum turpis odio in nulla. Phasellus sed aliquam mauris. Donec nulla leo, congue sit amet aliquet non, aliquam nec eros. Nulla eget mi sed nisl hendrerit dapibus vitae aliquet neque. Etiam egestas turpis sit amet ornare auctor. Suspendisse ac tristique purus.<br /><br />

                    Proin imperdiet pulvinar sem, id porttitor enim tincidunt sed. Nulla id nisl eros. Nulla et elementum arcu. Etiam et elementum arcu. Mauris finibus egestas pulvinar. Pellentesque sagittis ultrices dui sed pellentesque. Mauris et varius libero, vel rutrum dui.<br /><br />
                  </p>
                  <h4>Ingredients</h4>
                  <p className="gray">Please see the below ingredients.</p>
                  <ul className="gray">
                    <li>Strawberries</li>
                    <li>Blueberries</li>
                    <li>Ice Cubes</li>
                  </ul>
                  <b><span className="orange"><i className="fas fa-check"></i>Add to Cart</span></b>
               </div>
               <div className="col-4" style={{borderRadius: 5}}>
                  <div style={{backgroundColor: 'white', padding: 20}}>
                    <button className="add"><b>Checkout</b></button>
                    <hr style={{marginBottom: 10, marginTop: 10}} />
                    <div className="row">
                      <div className="col-sm-9">
                        <b className="charcoal">Subtotal (3 items)</b>
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

export default Item;
