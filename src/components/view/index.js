import React, { Component } from '../../../node_modules/react';
import './index.css';
import List from '../list/index';
import DeleteListDialog from '../../components/delete-list-dialog';
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
        <div className="icon-wrapper">
          <i className="material-icons" onClick={ this.openAddTask }>
            playlist_add
          </i>
        </div>
        <div className="icon-wrapper">
          <i className="material-icons" onClick={ this.openDeleteListDialog }>
            delete_forever
          </i>
        </div>
      </div>)
      : null;
  }

  openDeleteListDialog = () => {
    this.setState({ deleteDialogIsOpen: true });
  }

  handleCloseDeleteDialog = () => {
    this.setState({ deleteDialogIsOpen: false });
  }

  handleDeleteList = (listName) => {
    this.handleCloseDeleteDialog();
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
    const { selectedList, handleCheckTask, handleDeleteTask } = this.props;
    const { deleteDialogIsOpen, addTaskDialogIsOpen } = this.state;

    return (
      <div className="view">
        <List
          list={ selectedList }
          handleCheckTask={ handleCheckTask }
          handleDeleteTask={ handleDeleteTask }
        >
        </List>
        <DeleteListDialog
          deleteDialogIsOpen={ deleteDialogIsOpen }
          selectedList={ selectedList }
          handleCloseDeleteDialog={ this.handleCloseDeleteDialog }
          handleDeleteList={ this.handleDeleteList }
        >
        </DeleteListDialog>
        <AddTaskDialog
          addTaskDialogIsOpen={ addTaskDialogIsOpen }
          selectedList={ selectedList }
          handleCloseAddTaskDialog={ this.handleCloseAddTaskDialog }
          handleAddTask={ this.handleAddTask }
        >
        </AddTaskDialog>
        { this.getEditButtons() }
      </div>
    );
  }
}

export default View;
