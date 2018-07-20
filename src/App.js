import React, { Component } from 'react';
import './App.css';
import ListContainer from './ListContainer';
import MapContainer from './MapContainer';
import locations from "./Locations";

class App extends Component {
  state = {
    filteringLocation: locations,
    activeLocation: {},
    selected: false
  }
  
  selectionLocation = (location) => {   
    this.setState({
      activeLocation: location,
      selected: true
    });
}
 

  unselectionLocation = () => {   
    this.setState({
      selected: false
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
        <div class="#selectedLocation">Address: ${object.location.formattedAddress[0]}</div>
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
    console.log(this.state.activeLocation)
    if (this.state.selected) 
    this.fetchFourSquare(this.state.activeLocation.idFourSquare)
    //document.getElementById(this.state.activeLocation.idFourSquare).classList.add('selectedLocation')
    
  }
}

  render() {
    return (
   
        <div className="main">
                     
          <ListContainer className="list"
          locationList={locations}
          unselectionLocation={this.unselectionLocation}
          selectionLocation={this.selectionLocation}
          filteringLocation={this.filteringLocation}
          selected={this.state.selected}
          />
                  
          <MapContainer 
            activeLocation={this.state.activeLocation}  
                     unselectionLocation={this.unselectionLocation}        
            selectionLocation={this.selectionLocation}
             filteringLocation={this.state.filteringLocation}
             selected={this.state.selected}
            />
        </div>
     
    );
  }
}

export default App;
