import React, { Component } from 'react';
import './index.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class DeleteListDialog extends Component {
  render() {
    const {
      deleteDialogIsOpen,
      selectedList,
      handleCloseDeleteDialog,
      handleDeleteList,
    } = this.props;

    return (
      <div className="delete-list-dialog">
        <Dialog
          open={ deleteDialogIsOpen }
          onClose={ handleCloseDeleteDialog }
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          >
            <DialogTitle>Are you sure you want to delete this list?</DialogTitle>
            <DialogContent>
              <DialogContentText>This action cannot be undone!</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={ handleCloseDeleteDialog } color="primary">
                Cancel
              </Button>
              <Button onClick={ () => handleDeleteList(selectedList.listName) } color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
      </div>
    );
  }
}

export default DeleteListDialog;
