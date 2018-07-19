import React, { Component } from 'react'
import image from './marker.svg'
import Info from './Info';


class Marker extends Component {

render () {

	const { location, activeLocation, selectionLocation } = this.props;

	
	return (
		<div className="marker">
		{(activeLocation.title === location.title) && (<Info />)}
		<img src={image} onClick={() => selectionLocation(location)} alt={this.props.key}/>
		</div>		
		)
}
}


export default Marker