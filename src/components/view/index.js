import React, { Component } from '../../../node_modules/react';
import './index.css';
import List from '../list/index';
import EditListDialog from '../../components/edit-list-dialog';

class View extends Component {
  state = {
    deleteDialogIsOpen: false,
  };

  getEditButton() {
    const { selectedList } = this.props;

    return selectedList.id !== -1 ?
      (<div className="delete">
        <i className="material-icons" onClick={ this.openEditListDialog }>
          edit
        </i>
      </div>)
      : null;
  }

  openEditListDialog = () => {
    this.setState({ deleteDialogIsOpen: true });
  }

  handleCloseEditDialog = () => {
    this.setState({ deleteDialogIsOpen: false });
  }

  handleDeleteList = (listName) => {
    this.handleCloseEditDialog();
    this.props.handleDeleteList(listName);
  }

  render() {
    const { selectedList, handleCheckTask } = this.props;
    const { deleteDialogIsOpen } = this.state;

    return (
      <div className="view">
        <EditListDialog
          deleteDialogIsOpen={ deleteDialogIsOpen }
          handleCloseEditDialog={ this.handleCloseEditDialog }
          selectedList={ selectedList }
          handleDeleteList={ this.handleDeleteList }
        >
        </EditListDialog>
        <List list={ selectedList } handleCheckTask={ handleCheckTask }></List>
        { this.getEditButton() }
      </div>
    );
  }
}

export default View;
