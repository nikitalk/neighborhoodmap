import React, { Component } from "react";
import image from "./marker.svg";

const Title = ({ text }) => <div className="title">{text}</div>;

class Marker extends Component {
  render() {
    const { location, selectionLocation } = this.props;

    return (
      <div>
        <Title text={location.title} />
        <img
          id={location.idFourSquare}
          tabindex="0"
          className="marker"
          src={image}
          onClick={() => selectionLocation(location)}
          onKeyPress={() => selectionLocation(location)}
          alt={location.title}
        />
        <div id={`info${location.idFourSquare}`} className="info unvisible" />
      </div>
    );
  }
}

export default Marker;
