import React, { Component } from '../../../node_modules/react';
import './index.css';
import List from '../list/index';
import EditListDialog from '../../components/edit-list-dialog';
import AddTaskDialog from '../../components/add-task-dialog';

class View extends Component {
  state = {
    deleteDialogIsOpen: false,
    addTaskDialogIsOpen: false,
  };

  getEditButtons() {
    const { selectedList } = this.props;

    return selectedList.id !== -1 ?
      (<div className="edit">
        <i className="material-icons" onClick={ this.openAddTask }>
          playlist_add
        </i>
        <i className="material-icons" onClick={ this.openDeleteListDialog }>
          delete_forever
        </i>
      </div>)
      : null;
  }

  openDeleteListDialog = () => {
    this.setState({ deleteDialogIsOpen: true });
  }

  handleCloseEditDialog = () => {
    this.setState({ deleteDialogIsOpen: false });
  }

  handleDeleteList = (listName) => {
    this.handleCloseEditDialog();
    this.props.handleDeleteList(listName);
  }

  openAddTask = () => {
    this.setState({ addTaskDialogIsOpen: true });
  }

  handleCloseAddTaskDialog = () => {
    this.setState({ addTaskDialogIsOpen: false });
  }

  handleAddTask = (listName, taskName) => {
    this.props.handleAddTask(listName, taskName);
    this.handleCloseAddTaskDialog();
  }

  render() {
    const { selectedList, handleCheckTask } = this.props;
    const { deleteDialogIsOpen, addTaskDialogIsOpen } = this.state;

    return (
      <div className="view">
        <EditListDialog
          deleteDialogIsOpen={ deleteDialogIsOpen }
          selectedList={ selectedList }
          handleCloseEditDialog={ this.handleCloseEditDialog }
          handleDeleteList={ this.handleDeleteList }
        >
        </EditListDialog>
        <AddTaskDialog
          addTaskDialogIsOpen={ addTaskDialogIsOpen }
          selectedList={ selectedList }
          handleCloseAddTaskDialog={ this.handleCloseAddTaskDialog }
          handleAddTask={ this.handleAddTask }
        >
        </AddTaskDialog>
        <List
          list={ selectedList }
          handleCheckTask={ handleCheckTask }
        >
        </List>
        { this.getEditButtons() }
      </div>
    );
  }
}

export default View;
