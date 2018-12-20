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
             <h2>Food for sale</h2>
             <hr />
              <div className="row">
                <div className="col-4 ">
                  <img src="https://cdn.bfloschool.com/projects/marketplace/images/smoothie.jpg" className="cover" /><br />
                  <span><b>Grilled Cheese</b> $20</span><br />
                  <small className="gray">This is a cheap grilled cheese</small><br />
                </div>

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
              </div>
           </div>
         </div>
      </div>
    );
  }
}

export default Home;
