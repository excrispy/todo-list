import React, { Component } from '../../../node_modules/react';
import './index.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

class AddTaskDialog extends Component {
  state = {
    taskName: '',
  };

  handleTaskNameChange = (e) => {
    this.setState({ taskName: e.target.value });
  }

  handleCloseAddTaskDialog = () => {
    this.setState({ taskName: '' });
    this.props.handleCloseAddTaskDialog();
  }

  handleAddTask = (listName, taskName) => {
    this.setState({ taskName: '' });
    this.props.handleAddTask(listName, taskName);
  }

  render() {
    const {
      addTaskDialogIsOpen,
      selectedList,
      handleCloseAddTaskDialog,
    } = this.props;
    const { taskName } = this.state;

    return (
      <div className="add-task-dialog">
        <Dialog
          open={ addTaskDialogIsOpen }
          onClose={ handleCloseAddTaskDialog }
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          >
            <DialogTitle>Add a new task</DialogTitle>
            <DialogContent>
              <FormControl>
                <InputLabel>Task name</InputLabel>
                <Input value={ taskName } onChange={ this.handleTaskNameChange }></Input>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={ this.handleCloseAddTaskDialog } color="primary">
                Cancel
              </Button>
              <Button onClick={ () => this.handleAddTask(selectedList.listName, taskName) } color="primary" autoFocus>
                Add
              </Button>
            </DialogActions>
          </Dialog>
      </div>
    );
  }
}

export default AddTaskDialog;
