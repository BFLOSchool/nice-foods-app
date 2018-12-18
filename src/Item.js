import React, { Component } from 'react';
import Nav from './Components/Nav';

import logo from './logo.svg';
import './App.css';

class Item extends Component {
  render() {
    return (
      <div>
        <Nav />
         <div>

           <div  className="image-cover" style={{backgroundImage: "url("+'https://cdn.bfloschool.com/projects/marketplace/images/smoothie.jpg'+")", height: 380, paddingTop: 30, backgroundRepeat: 'no-repeat'}} >
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
             <h2>About Item</h2>
             <p className="gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac blandit diam, in posuere felis. Praesent volutpat, augue id vulputate fringilla, turpis metus ullamcorper elit, non bibendum turpis odio in nulla. Phasellus sed aliquam mauris. Donec nulla leo, congue sit amet aliquet non, aliquam nec eros. Nulla eget mi sed nisl hendrerit dapibus vitae aliquet neque. Etiam egestas turpis sit amet ornare auctor. Suspendisse ac tristique purus.<br /><br />

                Proin imperdiet pulvinar sem, id porttitor enim tincidunt sed. Nulla id nisl eros. Nulla et elementum arcu. Etiam et elementum arcu. Mauris finibus egestas pulvinar. Pellentesque sagittis ultrices dui sed pellentesque. Mauris et varius libero, vel rutrum dui.<br /><br />

                Duis hendrerit diam quis sem fringilla malesuada id in dui. Praesent placerat mattis ante, nec ultrices diam varius non. Quisque eu dolor hendrerit, facilisis erat ac, tristique lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec porta egestas odio, at vestibulum nisl maximus sed. Donec aliquam ante in orci tincidunt tincidunt. Nam porttitor ultrices libero ut pellentesque. Nulla eget justo sem. Sed vulputate malesuada maximus.<br /><br /> Nullam vitae dui ut dui finibus laoreet. Sed fermentum consequat dictum. Nullam tempor orci nisl, ac aliquet nibh auctor sagittis.

                Pellentesque at scelerisque ligula. Maecenas luctus auctor leo nec aliquam. Duis mi justo, viverra in sapien a, blandit consequat ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum consectetur sapien vel odio faucibus egestas. Nunc semper dolor iaculis, tincidunt tortor in, cursus nulla. Ut ac odio dictum, pellentesque neque sed, sagittis felis. Suspendisse placerat justo nec mauris rutrum porta. Fusce ullamcorper tortor nibh, at accumsan purus rhoncus et. Etiam faucibus nulla ac sapien maximus, eget scelerisque mauris suscipit. Nunc non dui iaculis, rhoncus ligula sed, fringilla tortor. Donec id neque dolor. Nam ullamcorper fermentum dui eget ultrices. In sit amet felis non justo bibendum cursus lobortis vel ex. Sed finibus eleifend tortor vel pharetra.<br /><br />

                Suspendisse varius, ante et egestas varius, ipsum libero accumsan libero, sed scelerisque tellus odio dapibus nulla. Curabitur pellentesque orci quis nibh blandit, non dignissim massa iaculis. Cras odio felis, euismod facilisis laoreet vel, sodales sagittis erat. Phasellus ullamcorper maximus massa. Integer posuere nibh tortor, ac mollis nisl placerat nec. Duis congue nulla nibh, ac consequat erat gravida at. Pellentesque habitant morbi tristique senectus et netus et malesuada<br /><br /> fames ac turpis egestas. Nunc tempus neque non iaculis blandit. Vestibulum mollis malesuada dignissim. Nulla ut vehicula mauris. Donec commodo libero tellus, ac blandit justo consequat non.
              </p>
              <br /><hr /><br />
              <h2>Other Foods</h2>
              <div className="row">
                <div className="col-sm-3 ">
                  <img src="https://cdn.bfloschool.com/projects/marketplace/images/grilled-cheese.jpg" className="cover" /><br />
                  <span><b>Grilled Cheese</b> $20</span><br />
                  <small>This is a cheap grilled cheese</small><br />
                </div>
              </div>
           </div>
         </div>
      </div>
    );
  }
}

export default Item;
