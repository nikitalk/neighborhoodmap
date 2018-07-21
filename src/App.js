import React, { Component } from "react";
import "./App.css";
import ListContainer from "./ListContainer";
import MapContainer from "./MapContainer";

const locations = require("./Locations.json");

class App extends Component {
  state = {
    filteredLocation: locations,
    activeLocation: {},
    selected: false
  };


/**
 * Function for changing marker to unselected mode
 */
  removeClassFromMarker = () => {
    const marker = document.getElementById(this.state.activeLocation.idFourSquare);
    if (marker) marker.classList.remove("selectedLocation");
  }

/**
 * Function for hiding Museum Information Window
 */
  addClassFromInfoWindow = () => {
    const info = document.getElementById(`info${this.state.activeLocation.idFourSquare}`);
    if (info) info.classList.add("unvisible");
  }

/**
 * Function for state of selected location
 */
  selectLocation = location => {
    if (this.state.activeLocation.idFourSquare !== undefined) {
      this.removeClassFromMarker();
      this.addClassFromInfoWindow();      
    }

    document.getElementById(location.idFourSquare).classList.add("selectedLocation");
    document.getElementById(`info${location.idFourSquare}`).classList.remove("unvisible");

    this.setState({
      activeLocation: location,
      selected: true
    });

    this.fetchFourSquare(location.idFourSquare);
  };

/**
 * Function for state of unselected location
 */
  unselectLocation = object => {
    if (object)
      if (object.tagName !== "IMG") {
        if (this.state.activeLocation.idFourSquare !== undefined) {
          this.removeClassFromMarker();
          this.addClassFromInfoWindow();   
        }
        this.setState({
          activeLocation: {},
          selected: false
        });
      }
  };

/**
 * Function for changing of state for filtering locations
 */
  filterLocation = locations => {
    this.setState({
      filteredLocation: locations
    });
  };

/**
 * Function for fetching information from FourSquare
 */
  fetchFourSquare(id) {
    fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=5P0VNDSS1SVTAXPLHKA4SQDFASHIE1BHNAKMVAKYOEADYMGS&client_secret=AUBY2AHOWPOUMUAIDWNPAMUAZVAQO3BPFJBRRIBQE5GIA50Q&v=20180323`)
      .then(res => res.json())
      .then(data => this.pushIntoInfo(data))
      .catch(err => {
        alert(`Unable to get data from FourSquare (${err})`);
      });
  }


/**
 * Function for pushing fetched information to Museum Info Window
 */  
  pushIntoInfo(data) {
    if (data.response.venue) {
      const object = data.response.venue;

      let rating = "there is no information";
      if (object.rating !== undefined) rating = object.rating;
      const html = `
        <img src="${object.bestPhoto.prefix}300x200${
        object.bestPhoto.suffix
      }" alt="${object.name}" tabindex="0">
        <div style="color: #${
          object.ratingColor
        };" tabindex="0"><b>Rating:</b> ${rating}</div>
        <div class="#selectedLocation" tabindex="0"><b>Address:</b> ${
          object.location.formattedAddress[0]
        }</div>
        <div tabindex="0"><b>Likes:</b> ${object.likes.count}</div>
        <a href="${
          object.canonicalUrl
        }" target="_blank">Look at this on FourSquare</a>`;
      document.getElementById(`info${object.id}`).innerHTML = html;
      document.getElementById(`infos`).classList.add("unvisible");
    } else {
      const html = `<div> Unable to load information from FourSquare (${
        data.meta.errorDetail
      })</div>`;
      document.getElementById(`infos`).innerHTML = html;
      document.getElementById(`infos`).classList.remove("unvisible");
    }
  }

  render() {
    return (
      <div className="main">
        <ListContainer
          locationList={locations}
          onUnselectLocation={this.unselectLocation}
          onSelectLocation={this.selectLocation}
          onFilterLocation={this.filterLocation}
          selected={this.state.selected}
        />

        <MapContainer
          onSelectLocation={this.selectLocation}
          filteredLocation={this.state.filteredLocation}
          onUnselectLocation={this.unselectLocation}
        />
      </div>
    );
  }
}

export default App;
