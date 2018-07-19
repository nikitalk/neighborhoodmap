import React, { Component } from 'react'

class Info extends Component {

render () {
	return (
		<div className="marker">{this.props.location.title}</div>		
		)
}
}


export default Info