import React, { Component } from '../../../node_modules/react';
import './index.css';
import List from '../list/index';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class View extends Component {
  state = {
    deleteDialogIsOpen: false,
  }

  getDeleteButton() {
    return this.props.list.id !== -1 ?
      (<div className="delete">
        <i className="material-icons" onClick={ this.handleDeleteTask }>
          delete_forever
        </i>
      </div>)
      : null;
  }

  handleDeleteList = (listName) => {
    this.setState({ deleteDialogIsOpen: false });
    this.props.handleDeleteList(listName);
  }

  handleCloseDeleteDialog = () => {
    this.setState({ deleteDialogIsOpen: false });
  }

  handleDeleteTask = () => {
    this.setState({ deleteDialogIsOpen: true });
  }

  render() {
    const { list, handleCheckTask } = this.props;

    return (
      <div className="view">
        <Dialog
          open={ this.state.deleteDialogIsOpen }
          onClose={ this.handleCloseDeleteDialog }
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>Are you sure you want to delete this list?</DialogTitle>
          <DialogContent>
            <DialogContentText>This action cannot be undone!</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={ this.handleCloseDeleteDialog } color="primary">
              Cancel
            </Button>
            <Button onClick={ () => this.handleDeleteList(this.props.list.listName) } color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        <List list={ list } handleCheckTask={ handleCheckTask }></List>
        { this.getDeleteButton() }
      </div>
    );
  }
}

export default View;
