import React, { Component } from 'react'
import image from './marker.svg'
import Info from './Info';

const Title = ({ text }) => <div className="title">{text}</div>;

class Marker extends Component {

render () {

	const { location, activeLocation, selectionLocation} = this.props;
	
	return (
		<div>
		<Title text={location.title} />
		<img className="marker" src={image} onClick={() => selectionLocation(location)} alt={this.props.key}/>
		{(activeLocation.title === location.title) && (<Info location={location} />)}
		</div>		
		)
}
}

export default Marker