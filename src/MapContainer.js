import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
	
  render() {

  	 	const { locationsList } = this.props;
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
			>    

			{locationsList.map(location =>
				<Marker
					key={location.title}
					title={location.title}
					position={location.position}
					
				/>
			)}
			</Map>
	)
  }
}

export default GoogleApiWrapper({
	apiKey: ('AIzaSyCJN8mAbhC7hIpg6Qd8CtjNOrgmlQWvRQE')
})(MapContainer)