import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'

class ListContainer extends Component {
 state = {
    query: ''   
  }

  updateQuery = (query) => {
    	this.setState({ query : query.trim() })
  }

  render() {

  	const { locationsList, selectionLocation} = this.props;
  	const { query } = this.state

  	let showingLocations;


  	if (query) {
  		 
			const match = new RegExp(escapeRegExp(query), "i")
			showingLocations = locationsList.filter((location) => match.test(location.title))
		
		 } else {
		 	showingLocations = locationsList
		 }

  	return (
     <div>
     <input type="text" value={query} placeholder="Search"
              onChange={(e) => this.updateQuery(e.target.value)}
            />
        <ul>
		
				{showingLocations.map(location =>
					<li key={location.title}
					onClick={() => selectionLocation(location)}>
						{location.title}
					</li>
				)}
			</ul>
    </div>
		)
  }
}

export default ListContainer