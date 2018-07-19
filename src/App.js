import React, { Component } from 'react';
import './App.css';
import ListContainer from './ListContainer';
import MapContainer from './MapContainer';
import locations from "./Locations";

class App extends Component {
  state = {
    filteringLocation: locations,
    activeLocation: {}
  }
  

  selectionLocation = (location) => {
   
    this.setState({
      activeLocation: location
    });

  }


    filteringLocation = (locations) => {
   
    this.setState({
      filteringLocation: locations
    });

  }

  render() {
    return (
    
      <div className="container">
        <div className="header">Header</div>
        <div className="main">
             <div className="list">
          <ListContainer 
          selectionLocation={this.selectionLocation}
          filteringLocation={this.filteringLocation}
          />
          </div>
          <div className="map">
          <MapContainer 
            activeLocation={this.state.activeLocation}
            selectionLocation={this.selectionLocation}
             filteringLocation={this.state.filteringLocation}
            />
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
     
    );
  }
}

export default App;
