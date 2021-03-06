import React, { Component } from '../../../node_modules/react';
import './index.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Row extends Component {
  handleCheckTask = () => {
    const { rowDatum, listName } = this.props;
    const checkedStatus = !rowDatum.isComplete;
    const newRowDatum = { taskName: rowDatum.taskName, isComplete: checkedStatus };

    this.props.handleCheckTask(newRowDatum, listName);
  }

  render() {
    const { rowDatum, listName, handleDeleteTask } = this.props;

    return (
      <div className="task">
        <div className={ rowDatum.isComplete ? "disabled" : "row" } onClick={ this.handleCheckTask }>
          <FormControlLabel
            control={ <Checkbox checked={ rowDatum.isComplete }></Checkbox> }
            label={ rowDatum.taskName }
            >
          </FormControlLabel>
        </div>
        <div className="icon-wrapper" onClick={ () => handleDeleteTask(rowDatum.taskName, listName) }>
          <i className="material-icons">delete_forever</i>
        </div>
      </div>
    );
  }
}

export default Row;
