import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
	
  render() {
const styles = {
			width: '70%',
			height: '80%'
		};

  	return (
  		<Map google={this.props.google}
				zoom={15}
				style={styles}
				initialCenter={{
					lat: 58.603532,
					lng: 49.666798
				}}
			/>     
	)
  }
}

export default GoogleApiWrapper({
	apiKey: ('AIzaSyCJN8mAbhC7hIpg6Qd8CtjNOrgmlQWvRQE')
})(MapContainer)