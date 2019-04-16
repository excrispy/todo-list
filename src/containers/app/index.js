import React, { Component } from '../../../node_modules/react';
import SidePanel from '../side-panel/index';
import View from '../../components/view/index';
import './index.css';
import Template from '../../components/template';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

const placeHolderListItem = { id: -1, listName: 'Select a task', taskRows: [] };
const sampleData = [
  placeHolderListItem,
  { listName: 'test', taskRows: [
    { id: 0, taskName: 'a', isComplete: false },
    { id: 1, taskName: 'b', isComplete: false },
    { id: 2, taskName: 'c', isComplete: false },
  ]},
];

class App extends Component {
  state = {
    drawerIsOpen: false,
    templateIsOpen: false,
    lists: sampleData,
    currentList: placeHolderListItem,
    drawerIsOpen: false,
  };

  handleListChange = (e) => {
    const currentList = e.target.value;
    this.setState({ currentList });
  }

  handleCheck = (rowDatum, listName) => {
    const clonedLists = [...this.state.lists];
    const updatedList = clonedLists.find(list => list.listName === listName);
    updatedList.taskRows.forEach(row => {
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
      <Dialog open={ this.state.templateIsOpen } onClose={ this.handleClose }>
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

  handleClose = () => {
    this.setState({ templateIsOpen: false });
  }

  handleDeleteList = (listName) => {
    const newList = [];
    this.state.lists.forEach(d => {
      if (d.listName !== listName) {
        newList.push(d);
      }
    });

    this.setState({ lists: newList, currentList: newList[0] });
  }

  handleDrawerOpen = () => {
    this.setState({ drawerIsOpen: true });
  }

  handleDrawerClose = () => {
    this.setState({ drawerIsOpen: false });
  }

  render() {
    return (
      <div className="app">
        { this.getTemplate() }
        <AppBar position="fixed">
          <Toolbar disableGutters={ this.state.drawerIsOpen }>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={ this.handleDrawerOpen }
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              TODO List
            </Typography>
          </Toolbar>
        </AppBar>
        <SidePanel
          lists={ this.state.lists }
          currentList={ this.state.currentList }
          openListTemplate={ this.openListTemplate }
          drawerIsOpen={ this.state.drawerIsOpen }
          handleDrawerClose={ this.handleDrawerClose }
          onChange={ this.handleListChange }
          >
        </SidePanel>
        <View
          list={ this.state.currentList }
          handleCheck={ this.handleCheck }
          handleDeleteList={ this.handleDeleteList }
        >
        </View>
      </div>
    );
  }
}

export default App;
