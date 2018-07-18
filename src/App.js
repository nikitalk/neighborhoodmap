import React, { Component } from 'react';
import './App.css';
import ListContainer from './ListContainer';
import MapContainer from './MapContainer';


class App extends Component {
  state = {
    locations: require("./Locations.json")
  }

  render() {
    return (
      <div>
        <ListContainer />
        <MapContainer />
      </div>
    );
  }
}

export default App;
