import React, { Component } from 'react'

class ListContainer extends Component {

  render() {

  	const { locationsList, locationInListClicked} = this.props;
  	return (
     
        <ul>
				{/* Map through the locations list
				  * LocationsList is provided by <App /> state
				*/}
				{locationsList.map(location =>
					<li key={location.title}
					onClick={() => locationInListClicked(location)}>
						{location.title}
					</li>
				)}
			</ul>
    
		)
  }
}

export default ListContainer