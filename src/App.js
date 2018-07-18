import React, { Component } from 'react';
import './App.css';
import List from './List';
import Map from './Map';


class App extends Component {

const locations = [
      {"title": "Vystavochnyy Zal", "location": {"lat": 58.602432, "lng": 49.664705}},
      {"title": "Vyatka Art Museum. V.M. & A.M. Vasnetsovs", "location": {"lat": 58.602197, "lng": 49.668953}},
      {"title": "Vyatka Paleontological Museum", "location": {"lat": 58.601582, "lng": 49.671228}},
      {"title": "Regional Museum of National History Education", "location": {"lat": 58.603829, "lng": 49.671528}},
      {"title": "Muzey Istorii Khlynova", "location": {"lat": 58.600509, "lng": 49.676249}}
]     

const kirov = {"lat": 58.603532, "lng": 49.666798}} 

  render() {
    return (
      <div>
        <List />
        <Map />
      </div>
    );
  }
}

export default App;
