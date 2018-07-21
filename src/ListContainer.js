import React, { Component } from "react";
import escapeRegExp from "escape-string-regexp";

class ListContainer extends Component {
  state = {
    query: "",
    showedLocations: this.props.locationList
  };

  updateQuery = query => {
    let Locations;
    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      Locations = this.props.locationList.filter(location =>
        match.test(location.title)
      );
      this.setState({ query: query, showedLocations: Locations });
    } else {
      Locations = this.props.locationList;
      this.setState({ query: "", showedLocations: Locations });
    }
    this.props.onFilterLocation(Locations);
    this.props.onUnselectLocation();
  };

  render() {
    const { query, showedLocations } = this.state;

    return (
      <div
        className="sidebar"
        aria-label="Input for filtering museums and list of museums"
      >
        <div className="toplist">
          <div className="header">Vyatka Museum Map</div>
          <div className="list">
            <input
              className="filter"
              type="text"
              value={query}
              placeholder="Type here to filter museums"
              onChange={e => {
                this.updateQuery(e.target.value);
              }}
              aria-label="Type here to filter museums"
            />
            <ul>
              {showedLocations.map(location => (
                <li
                  key={location.title}
                  onClick={() => this.props.onSelectLocation(location)}
                  onKeyPress={() => this.props.onSelectLocation(location)}
                  tabindex="0"
                >
                  <span className="locationtitle">{location.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="infos" />
        </div>

        <div className="footer">
          &copy; Copyright by{" "}
          <a href="https://github.com/nikitalk">Nikita L. Karavaev</a>
        </div>
      </div>
    );
  }
}

export default ListContainer;
