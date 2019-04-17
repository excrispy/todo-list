import React, { Component } from '../../../node_modules/react';
import SidePanel from '../../components/side-panel/index';
import View from '../../components/view/index';
import './index.css';
import Template from '../../components/template';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { placeHolderListItem, sampleData } from '../../constants/sample-data';

class App extends Component {
  state = {
    drawerIsOpen: false,
    listDialogIsOpen: false,
    lists: sampleData,
    selectedList: placeHolderListItem,
  };

  getTemplate = () => {
    return this.state.listDialogIsOpen ? 
      (<Template
        isOpen={ this.state.listDialogIsOpen }
        onClose={ this.handleClose }
        handleSaveList={ this.handleSaveList }
        handleCloseListDialog={ this.handleCloseListDialog }
      >
      </Template>)
      : null;
  }

  handleChangeSelectedList = (e) => {
    const selectedList = e.target.value;
    this.setState({ selectedList });
  }

  handleCheckTask = (rowDatum, listName) => {
    const clonedLists = [...this.state.lists];
    const updatedList = clonedLists.find(list => list.listName === listName);
    updatedList.taskRows.forEach(row => {
      if (row.taskName === rowDatum.taskName) {
        Object.assign(row, rowDatum);
      }
    });

    this.setState({ lists: clonedLists });
  }

  handleOpenListDialog = () => {
    this.setState({ listDialogIsOpen: true });
  }

  handleSaveList = (newList) => {
    const clonedLists = [...this.state.lists];
    clonedLists.push(newList);

    this.setState({
      lists: clonedLists,
      listDialogIsOpen: false,
    });
  }

  handleCloseListDialog = () => {
    this.setState({ listDialogIsOpen: false });
  }

  handleDeleteList = (listName) => {
    const newList = [];
    this.state.lists.forEach(d => {
      if (d.listName !== listName) {
        newList.push(d);
      }
    });

    this.setState({ lists: newList, selectedList: newList[0] });
  }

  handleOpenDrawer = () => {
    this.setState({ drawerIsOpen: true });
  }

  handleCloseDrawer = () => {
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
              onClick={ this.handleOpenDrawer }
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
          selectedList={ this.state.selectedList }
          openListTemplate={ this.handleOpenListDialog }
          drawerIsOpen={ this.state.drawerIsOpen }
          handleCloseDrawer={ this.handleCloseDrawer }
          handleChangeSelectedList={ this.handleChangeSelectedList }
          >
        </SidePanel>
        <View
          selectedList={ this.state.selectedList }
          handleCheckTask={ this.handleCheckTask }
          handleDeleteList={ this.handleDeleteList }
        >
        </View>
      </div>
    );
  }
}

export default App;
