import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 58.600532,
      lng: 49.671111
    },
    zoom: 15
  };

  createMapOptions(maps) {
    return {
      panControl: true,
      mapTypeControl: true,
      scrollwheel: false
    };
  }

  render() {
    const {
      selectionLocation,
      filteringLocation,
      unselectionLocation
    } = this.props;

    return (
      <div
        className="map"
        style={{ height: "100%", width: "100%" }}
        onClick={e => unselectionLocation(e.target)}
      >
        <GoogleMapReact
          options={this.createMapOptions}
          bootstrapURLKeys={{ key: "AIzaSyCJN8mAbhC7hIpg6Qd8CtjNOrgmlQWvRQE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {filteringLocation.map(location => (
            <Marker
              location={location}
              lat={location.position.lat}
              lng={location.position.lng}
              key={location.title}
              selectionLocation={selectionLocation}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;
