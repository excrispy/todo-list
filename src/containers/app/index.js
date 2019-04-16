import React, { Component } from '../../../node_modules/react';
import SidePanel from '../side-panel/index';
import View from '../../components/view/index';
import './index.css';
import Template from '../../components/template';
import Dialog from '@material-ui/core/Dialog';

const placeHolderListItem = { listName: 'Select a task', taskRows: [] };
const sampleData = [
  placeHolderListItem,
  { listName: 'test', taskRows: [
    { id: 0, taskName: 'a', isComplete: false},
    { id: 1, taskName: 'b', isComplete: false},
    { id: 2, taskName: 'c', isComplete: false},
  ]},
];

class App extends Component {
  state = {
    drawerIsOpen: false,
    templateIsOpen: false,
    lists: sampleData,
    currentList: placeHolderListItem,
  };

  handleListChange = (e) => {
    const currentList = e.target.value;
    this.setState({ currentList });
  }

  handleCheck = (rowDatum, listName) => {
    const clonedLists = [...this.state.lists];
    const updatedList = clonedLists.find(list => list.listName === listName);
    updatedList.rows.forEach(row => {
      if (row.taskName === rowDatum.taskName) {
        Object.assign(row, rowDatum);
      }
    });

    this.setState({ lists: clonedLists });
  }

  openListTemplate = () => {
    this.setState({ templateIsOpen: true });
  }

  getTemplate = () => {
    return (
      <Dialog open={ this.state.templateIsOpen }>
        <Template
          handleListSave={ this.handleListSave }
          handleListCancel={ this.handleListCancel }>
        </Template>
      </Dialog>);
  }

  handleListSave = (newList) => {
    const clonedLists = [...this.state.lists];
    clonedLists.push(newList);

    this.setState({
      lists: clonedLists,
      templateIsOpen: false,
    });
  }

  handleListCancel = () => {
    this.setState({ templateIsOpen: false });
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
