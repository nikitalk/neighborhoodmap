import React, { Component } from 'react'
import image from './marker.svg'

const Title = ({ text }) => <div className="title">{text}</div>;

class Marker extends Component {

render () {

	const { location, activeLocation, selectionLocation} = this.props;
	
	return (
		<div>
		<Title text={location.title} />
		<img id={location.idFourSquare} className="marker" src={image} onClick={() => selectionLocation(location)} alt={this.props.key}/>
		<div id={`info${location.idFourSquare}`} className="info unvisible"></div>
		</div>		
		)
}
}

export default Marker