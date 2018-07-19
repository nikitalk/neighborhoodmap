import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

class MapContainer extends Component {
	static defaultProps = {
    center: {
      lat: 58.603532,
	  lng: 49.666798
    },
    zoom: 15
  };

createMapOptions (maps) {
    return {
      panControl: true,
      mapTypeControl: true,
      scrollwheel: false
    }
  }

  render() {
  	 	const { activeLocation, selectionLocation, filteringLocation} = this.props;
  	 	 	
  	return (

	<div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
        	options={this.createMapOptions}
          bootstrapURLKeys={{ key: 'AIzaSyCJN8mAbhC7hIpg6Qd8CtjNOrgmlQWvRQE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
         
          {filteringLocation.map((location) => (<Marker
           location={location}
           lat={location.position.lat}
            lng={location.position.lng}
            key={location.title}
            activeLocation={activeLocation}
            selectionLocation={selectionLocation}
          />
         ))}
        </GoogleMapReact>
      </div>	)
  }
}

export default MapContainer