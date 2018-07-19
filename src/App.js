import React, { Component } from 'react';
import './App.css';
import ListContainer from './ListContainer';
import MapContainer from './MapContainer';


class App extends Component {
  state = {
    locations: require("./Locations.json"),
    activeLocation: {}
  }
  


  selectionLocation = (location) => {
   
    this.setState({
      activeLocation: location
    });

  }

  render() {
    return (
    
      <div className="container">
        <div className="header">Header</div>
        <div className="main">
             <div className="list">
          <ListContainer locationsList={this.state.locations}
          selectionLocation={this.selectionLocation}
          />
          </div>
          <div className="map">
          <MapContainer locationsList={this.state.locations}
            activeLocation={this.state.activeLocation}
            selectionLocation={this.selectionLocation}/>
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
     
    );
  }
}

export default App;
