import React, { Component } from '../../../node_modules/react';
import SidePanel from '../side-panel/index';
import View from '../../components/view/index';
import './index.css';

const placeHolderListItem = { label: 'Select a task', rows: [] };
const sampleData = [
  placeHolderListItem,
  { label: 'test', rows: [
    { task: 'a', isComplete: false},
    { task: 'b', isComplete: false},
    { task: 'c', isComplete: false},
  ]},
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
    return (
      <div className="app">
        <SidePanel
          lists={ this.state.lists }
          currentList={ this.state.currentList }
          onChange={ this.handleChange }
        >
        </SidePanel>
        <View list={ this.state.currentList }></View>
      </div>
    );
  }
}

export default App;
