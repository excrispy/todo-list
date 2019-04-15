import React, { Component } from '../../../node_modules/react';
import './index.css';
// import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

// const taskRow = (
//   <FormControl>
//     <InputLabel>Task Name</InputLabel>
//     <Input></Input>
//     <Button onClick={}>-</Button>
//   </FormControl>
// );

class Template extends Component {
  // addTaskRow = () => {
  //   const tasks = Object.assign({}, this.state.taskRows);
  //   tasks.taskRows.push(taskRow);

  //   this.setState({ taskRows: tasks.taskRows });
  // }

  render() {
    const { handleListSave, handleListCancel } = this.props;

    return (
      <div className="template">
        <div className="content-wrapper">
          <div className="form-wrapper">
            <FormControl>
              <InputLabel>List Name</InputLabel>
              <Input></Input>
            </FormControl>
          </div>
          <div className="button-wrapper">
            <Button onClick={ handleListCancel }>Cancel</Button>
            <Button onClick={ handleListSave }>Save</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
