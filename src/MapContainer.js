import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
	

	state = {
		    showingInfoWindow: false,
		    activeMarker: {}		    
  		};

  		onMarkerClick = (props, marker, event) => {
		this.setState({
		    activeMarker: marker,
		    showingInfoWindow: true
		});

	};

	onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {

  	 	const { locationsList } = this.props;
  	 	const { activeMarker, showingInfoWindow } = this.state;
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
				onClick={this.onMapClicked}
			>    

			{locationsList.map(location =>
				<Marker
					key={location.title}
					title={location.title}
					position={location.position}
					onClick={this.onMarkerClick}
				/>
			)}

			<InfoWindow
          		marker={activeMarker}
          		visible={showingInfoWindow}
          	>
	            <div>Description</div>
        	</InfoWindow>
			</Map>
	)
  }
}

export default GoogleApiWrapper({
	apiKey: ('AIzaSyCJN8mAbhC7hIpg6Qd8CtjNOrgmlQWvRQE')
})(MapContainer)