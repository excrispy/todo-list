import React, { Component } from '../../../node_modules/react';
import SidePanel from '../side-panel/index';
import View from '../../components/view/index';
import './index.css';
import Template from '../../components/template';

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

  handleListChange = (e) => {
    const currentList = e.target.value;
    this.setState({ currentList });
  }

  handleCheck = (rowDatum, label) => {
    const clonedLists = [...this.state.lists];
    const updatedList = clonedLists.find(list => list.label === label);
    updatedList.rows.forEach(row => {
      if (row.task === rowDatum.task) {
        Object.assign(row, rowDatum);
      }
    });

    this.setState({ lists: clonedLists });
  }

  openListTemplate = () => {
    this.setState({ templateIsOpen: true });
  }

  getTemplate = () => {
    return this.state.templateIsOpen
      ? (<Template
          handleListSave={ this.handleListSave }
          handleListCancel={ this.handleListCancel }>
        </Template>)
      : null;
  }

  render() {
    return (
      <div className="app">
        { this.getTemplate() }
        <SidePanel
          lists={ this.state.lists }
          currentList={ this.state.currentList }
          openListTemplate={ this.openListTemplate }
          onChange={ this.handleListChange }
        >
        </SidePanel>
        <View list={ this.state.currentList } handleCheck={ this.handleCheck }></View>
      </div>
    );
  }
}

export default App;
