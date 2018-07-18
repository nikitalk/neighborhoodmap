import React, { Component } from 'react';
import './App.css';
import List from './List';
import Map from './Map';


class App extends Component {
  render() {
    return (
      <div>
        <List />
        <Map />
      </div>
    );
  }
}

export default App;
