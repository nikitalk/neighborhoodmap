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
			 	this.props.unselectionLocation()		   		 
    }

  render() {

  	const { query, showingLocations } = this.state

  	return (
     <div className="sidebar">
     <div className="toplist">
     <div className="header">Museum Neighborhood Map</div>
     <div className="list">
     <input className="filter" type="text" value={query} placeholder="Type here to filter museums"
              onChange={(e) => {this.updateQuery(e.target.value)}}
            />
        <ul>
			{showingLocations.map(location =>
					<li key={location.title}
					onClick={() => this.props.selectionLocation(location)}>
						<span className="ggg">{location.title}</span>
					</li>
				)}
			</ul>

      </div>

      <div id="infos"></div>
      </div>

      <div className="footer">Footer</div>
    </div>

		)
  }
}

export default ListContainer