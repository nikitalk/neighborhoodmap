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
 
fetchFourSquare(id) {
  fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=5P0VNDSS1SVTAXPLHKA4SQDFASHIE1BHNAKMVAKYOEADYMGS&client_secret=DZFVTUHK3MPR0DWT22RJNO2GMWPBYM1EBXHPRTHFMLQ421EU&v=20180323`)
    .then(res => res.json())
    .then(data => this.pushIntoInfo(data))
}

pushIntoInfo(data) {
  if (data.response.venue) {
      const object = data.response.venue
      const html = `
        <img src="${object.bestPhoto.prefix}300x200${object.bestPhoto.suffix}" alt="${object.name}">
        <div style="color: #${object.ratingColor};">${object.rating}</div>
        <div>Address: ${object.location.formattedAddress[0]}</div>
        <div>Likes: ${object.likes.count}</div>
        <a href="${object.canonicalUrl}" target="_blank">Look at this on FourSquare</a>`
      document.querySelector(`#fs${object.id}`).innerHTML = html
    } else {
      alert(`Unable to get information from FourSquare (${data.meta.errorDetail})`)
      }
    }

filteringLocation = (locations) => {
    this.setState({
      filteringLocation: locations
    });
}

componentDidUpdate(prevState) {
  if (prevState.activeLocation === this.state.activeLocation) {
    return false
  } else {
    this.fetchFourSquare(this.state.activeLocation.idFourSquare)
  }
}

  render() {
    return (
    
      <div className="container">
        <div className="header">Header</div>
        <div className="main">
             <div className="list">
          <ListContainer 
          locationList={locations}
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
