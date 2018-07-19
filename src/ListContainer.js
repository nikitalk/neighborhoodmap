import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'

class ListContainer extends Component {
 state = {
    query: '',
    showingLocations: this.props.locationList
  }

  updateQuery = (query) => {
    	
let Locations;
if (query) {
			const match = new RegExp(escapeRegExp(query), "i")
			Locations = this.props.locationList.filter((location) => match.test(location.title))
			this.setState({ query : query, showingLocations: Locations })
		 } else {
		 	Locations = this.props.locationList
			 	this.setState({ query : '', showingLocations: Locations })
 		 }
   		this.props.filteringLocation(Locations)
		   		 
    }

  render() {

  	const { query, showingLocations } = this.state

  	return (
     <div>
     <input type="text" value={query} placeholder="Search"
              onChange={(e) => {this.updateQuery(e.target.value)}}
            />
        <ul>
			{showingLocations.map(location =>
					<li key={location.title}
					onClick={() => this.props.selectionLocation(location)}>
						{location.title}
					</li>
				)}
			</ul>
    </div>
		)
  }
}

export default ListContainer