import React, { Component } from 'react'

class ListContainer extends Component {

  render() {

  	const { locationsList, selectionLocation} = this.props;
  	return (
     
        <ul>
				{/* Map through the locations list
				  * LocationsList is provided by <App /> state
				*/}
				{locationsList.map(location =>
					<li key={location.title}
					onClick={() => selectionLocation(location)}>
						{location.title}
					</li>
				)}
			</ul>
    
		)
  }
}

export default ListContainer