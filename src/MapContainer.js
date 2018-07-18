import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
	static defaultProps = {
    center: {
      lat: 58.603532,
	  lng: 49.666798
    },
    zoom: 15
  };

  render() {

  	 	const { locationsList } = this.props;
  	 	
  	return (

	<div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCJN8mAbhC7hIpg6Qd8CtjNOrgmlQWvRQE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
         
          {locationsList.map((location) => (<AnyReactComponent
            lat={location.position.lat}
            lng={location.position.lng}
            text={'*'}
          />))}
          
        </GoogleMapReact>
      </div>	)
  }
}

export default MapContainer