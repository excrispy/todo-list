import React, { Component } from '../../../node_modules/react';
import './index.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class EditListDialog extends Component {
  render() {
    const {
      deleteDialogIsOpen,
      selectedList,
      handleCloseEditDialog,
      handleDeleteList,
    } = this.props;

    return (
      <div className="edit-list-dialog">
        <Dialog
          open={ deleteDialogIsOpen }
          onClose={ handleCloseEditDialog }
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          >
            <DialogTitle>Are you sure you want to delete this list?</DialogTitle>
            <DialogContent>
              <DialogContentText>This action cannot be undone!</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={ handleCloseEditDialog } color="primary">
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

export default EditListDialog;
