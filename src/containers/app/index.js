import React, { Component } from '../../../node_modules/react';
import SidePanel from '../side-panel/index';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SidePanel lists={ [{ name: 'Select a task', rows: [] }] }></SidePanel>
      </div>
    );
  }
}

export default App;
