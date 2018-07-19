import React, { Component } from 'react'

class Info extends Component {

render () {
	return (
		<div id={`fs${this.props.location.idFourSquare}`} className="info">{this.props.location.title}</div>		
		)
}
}

export default Info