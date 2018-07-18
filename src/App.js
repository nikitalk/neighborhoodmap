import React, { Component } from 'react';
import './App.css';
import ListContainer from './ListContainer';
import MapContainer from './MapContainer';


class App extends Component {
  state = {
    locations: require("./Locations.json"),
    currentMarker: {}
  }
  


  locationInListClicked = (marker) => {
    this.setState({
      currentMarker: marker
    });
  }

  render() {
    return (
    
      <div className="container">
        <div className="header">Header</div>
        <div className="main">
             <div className="list">
          <ListContainer locationsList={this.state.locations}
          locationInListClicked={this.locationInListClicked}
          />
          </div>
          <div className="map">
          <MapContainer locationsList={this.state.locations}
          toggleInfoBox={this.toggleInfoBox}
          currentMarker={this.state.currentMarker}/>
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
     
    );
  }
}

export default App;
