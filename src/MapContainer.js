import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import image from './marker.svg'

const AnyReactComponent = () => <div className="marker"><img src={image}/></div>;

class MapContainer extends Component {
	static defaultProps = {
    center: {
      lat: 58.603532,
	  lng: 49.666798
    },
    zoom: 15
  };

_onClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event)

createMapOptions (maps) {
    return {
      panControl: true,
      mapTypeControl: true,
      scrollwheel: false
      
    }
  }

  render() {

  	 	const { locationsList } = this.props;
  	 	
  	 	
  	return (

	<div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
        	options={this.createMapOptions}
          bootstrapURLKeys={{ key: 'AIzaSyCJN8mAbhC7hIpg6Qd8CtjNOrgmlQWvRQE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
         
          {locationsList.map((location) => (<AnyReactComponent onClick={this._onClick}
            lat={location.position.lat}
            lng={location.position.lng}
            key={location.title}
          />))}
          
        </GoogleMapReact>
      </div>	)
  }
}

export default MapContainer