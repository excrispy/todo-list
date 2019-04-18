import React, { Component } from '../../../node_modules/react';
import './index.css';
import List from '../list/index';
import EditListDialog from '../../components/edit-list-dialog';

class View extends Component {
  state = {
    deleteDialogIsOpen: false,
  };

  getDeleteButton() {
    const { selectedList } = this.props;

    return selectedList.id !== -1 ?
      (<div className="delete">
        <i className="material-icons" onClick={ this.openEditListDialog }>
          delete_forever
        </i>
      </div>)
      : null;
  }

  openEditListDialog = () => {
    this.setState({ deleteDialogIsOpen: true });
  }

  handleCloseDeleteDialog = () => {
    this.setState({ deleteDialogIsOpen: false });
  }

  handleDeleteList = (listName) => {
    this.handleCloseDeleteDialog();
    this.props.handleDeleteList(listName);
  }

  render() {
    const { selectedList, handleCheckTask, handleDeleteList } = this.props;
    const { deleteDialogIsOpen } = this.state;

    return (
      <div className="view">
        <EditListDialog
          deleteDialogIsOpen={ deleteDialogIsOpen }
          handleCloseDeleteDialog={ this.handleCloseDeleteDialog }
          selectedList={ selectedList }
          handleDeleteList={ this.handleDeleteList }
        >
        </EditListDialog>
        <List list={ selectedList } handleCheckTask={ handleCheckTask }></List>
        { this.getDeleteButton() }
      </div>
    );
  }
}

export default View;
