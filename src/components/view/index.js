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
    dialogIsOpen: false,
  }

  handleDeleteList = (listName) => {
    this.setState({ dialogIsOpen: false });
    this.props.handleDeleteList(listName);
  }

  handleClose = () => {
    this.setState({ dialogIsOpen: false });
  }

  getDeleteButton() {
    return this.props.list.id !== -1 ?
      (<div
        className="delete"
        onClick={ this.handleXClick }
      >
        X
      </div>)
      : null;
  }

  handleXClick = () => {
    this.setState({ dialogIsOpen: true });
  }

  render() {
    const { list, handleCheck } = this.props;

    return (
      <div className="view">
        <Dialog
          open={ this.state.dialogIsOpen }
          onClose={ this.handleClose }
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Are you sure you want to delete this list?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">This action cannot be undone!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={ this.handleClose } color="primary">
              Cancel
            </Button>
            <Button onClick={ () => this.handleDeleteList(this.props.list.listName) } color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        <List list={ list } handleCheck={ handleCheck }></List>
        { this.getDeleteButton() }
      </div>
    );
  }
}

export default View;
