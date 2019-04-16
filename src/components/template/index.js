import React, { Component } from '../../../node_modules/react';
import './index.css';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

class Template extends Component {
  state = {
    listName: '',
    taskRows: [{ id: 0, taskName: '', isCompleted: false }],
  };

  getTasks = () => {
    return this.state.taskRows.map(d => {
      return <div className={ d.id } key={ d.id }>
        <FormControl>
          <div className="task-row-wrapper">
            <InputLabel>Task Name</InputLabel>
            <Input value={ d.taskName } onChange={ (e) => this.handleTaskChange(e, d.id) }></Input>
            <Button onClick={ () => this.deleteTask(d.id) }>X</Button>
          </div>
        </FormControl>
      </div>
    });
  }

  addTask = () => {
    const taskRows = [...this.state.taskRows];
    const lastTask = taskRows[taskRows.length - 1];
    taskRows.push({ id: lastTask.id + 1, taskName: '', isCompleted: false });

    this.setState({ taskRows });
  }

  deleteTask = (id) => {
    const currentTasks = this.state.taskRows;
    if (currentTasks.length === 1) {
      const task = Object.assign(currentTasks[0], { taskName: '' });
      this.setState({ taskRows: [task] });
      return;
    }

    const clonedTasks = [];
    currentTasks.forEach(d => {
      if (d.id !== id) {
        clonedTasks.push(d);
      }
    })

    this.setState({ taskRows: clonedTasks });
  }

  handleLabelChange = (e) => {
    this.setState({ listName: e.target.value });
  }

  handleTaskChange = (e, id) => {
    const clonedTasks = [...this.state.taskRows];
    clonedTasks.forEach(d => {
      if (id === d.id) {
        Object.assign(d, { id, taskName: e.target.value });
      }
    });
    this.setState({ taskRows: clonedTasks });
  }

  render() {
    const { handleListSave, handleListCancel } = this.props;

    return (
      <div className="template">
        <div className="form-wrapper">
          <FormControl>
            <InputLabel>List Name</InputLabel>
            <Input value={ this.state.listName } onChange={ this.handleLabelChange }></Input>
          </FormControl>
        </div>
        { this.getTasks() }
        <div className="button-wrapper">
          <Button onClick={ this.addTask }>Add Task</Button>
          <Button onClick={ handleListCancel }>Cancel</Button>
          <Button onClick={ () => handleListSave(this.state) }>Save</Button>
        </div>
      </div>
    );
  }
}

export default Template;
