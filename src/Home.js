import React, { Component } from 'react';
import Nav from './Components/Nav';

import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
         <div>
           <br />
           <div className="container">
             <h2>Online Marketplace</h2>
             <hr />
              <div className="row">
                <div className="col-4 ">
                <a href="/item">
                  <img src="https://cdn.bfloschool.com/projects/marketplace/images/smoothie.jpg" className="cover" alt="image" /><br />
                  <span><b>Smoothie</b> $20</span><br />
                  <small className="gray">Yummy smoothie!</small><br />
                </a>
              </div>
              <div className="col-4 ">
                <img src="https://cdn.bfloschool.com/projects/marketplace/images/hamburger.jpg" className="cover" alt="image" /><br />
                <span><b>Hamburger</b> $20</span><br />
                <small className="gray">Delicious veggie burger!</small><br />
              </div>
              <div className="col-4 ">
                <img src="https://cdn.bfloschool.com/projects/marketplace/images/grilled-cheese.jpg" className="cover" alt="image" /><br />
                <span><b>Grilled Cheese</b> $20</span><br />
                <small className="gray">This is a cheap grilled cheese</small><br />
              </div>
            </div>
         </div>
       </div>
    </div>
    );
  }
}

export default Home;
