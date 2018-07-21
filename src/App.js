import React, { Component } from 'react';
import './App.css';
import ListContainer from './ListContainer';
import MapContainer from './MapContainer';
import locations from "./Locations";

class App extends Component {
  state = {
    filteringLocation: locations,
    activeLocation: {},
    previousLocation: {},
    selected: false
  }
  
selectionLocation = (location) => {   
    this.setState({
      previousLocation: this.state.activeLocation,
      activeLocation: location,
      selected: true
    });
    
    this.fetchFourSquare(location.idFourSquare)
}
 
unselectionLocation = () => {   
    this.setState({
      selected: false
    });
}

fetchFourSquare(id) {
  fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=5P0VNDSS1SVTAXPLHKA4SQDFASHIE1BHNAKMVAKYOEADYMGS&client_secret=AUBY2AHOWPOUMUAIDWNPAMUAZVAQO3BPFJBRRIBQE5GIA50Q&v=20180323`)
    .then(res => res.json())
    .then(data => this.pushIntoInfo(data))
     .catch(err => alert(`Unable to get data from FourSquare (${err})`))
}

pushIntoInfo(data) {

  if (data.response.venue) {

    const object = data.response.venue

  document.getElementById(this.state.activeLocation.idFourSquare).classList.add('selectedLocation')
  if (this.state.previousLocation.idFourSquare !== undefined) {
    document.getElementById(this.state.previousLocation.idFourSquare).classList.remove('selectedLocation')
    document.querySelector(`#info${this.state.previousLocation.idFourSquare}`).classList.add('unvisible')
  }
      const html = `
        <img src="${object.bestPhoto.prefix}300x200${object.bestPhoto.suffix}" alt="${object.name}">
        <div style="color: #${object.ratingColor};">${object.rating}</div>
        <div class="#selectedLocation">Address: ${object.location.formattedAddress[0]}</div>
        <div>Likes: ${object.likes.count}</div>
        <a href="${object.canonicalUrl}" target="_blank">Look at this on FourSquare</a>`
        document.querySelector(`#info${this.state.activeLocation.idFourSquare}`).innerHTML = html
        document.querySelector(`#info${this.state.activeLocation.idFourSquare}`).classList.remove('unvisible')
    } else {
        const html = `<div> Unable to load information from FourSquare (${data.meta.errorDetail})</div>`
      document.querySelector(`#infos`).innerHTML = html
        
      }
        
    }

filteringLocation = (locations) => {
    this.setState({
      filteringLocation: locations
    });
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
