import React, { Component } from '../../../node_modules/react';
import SidePanel from '../side-panel/index';
import './index.css';

const placeHolderListItem = { label: 'Select a task', rows: [] };
const sampleData = [
  placeHolderListItem,
  { label: 'test', rows: [] },
];

class App extends Component {
  state = {
    templateIsOpen: false,
    lists: sampleData,
    currentList: placeHolderListItem,
  };

  handleChange = (e) => {
    const currentList = e.target.value;
    this.setState({ currentList });
  }

  render() {
    console.log('state', this.state.currentList);
    return (
      <div className="app">
        <SidePanel
          lists={ this.state.lists }
          currentList={ this.state.currentList }
          onChange={ this.handleChange }
        >
        </SidePanel>
      </div>
    );
  }
}

export default App;
