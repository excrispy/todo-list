import React, { Component } from '../../../node_modules/react';
import './index.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Row extends Component {
  createRowLayout() {
    const { rowDatum } = this.props;

    return (
      <div className="row-wrapper" onClick={ this.handleClick }>
        <FormControlLabel
          control={ <Checkbox checked={ rowDatum.isComplete }></Checkbox> }
          label={ rowDatum.taskName }
        >
        </FormControlLabel>
      </div>
    );
  }
  
  handleClick = () => {
    const { rowDatum, label } = this.props;
    const checkedStatus = !rowDatum.isComplete;
    const newRowDatum = { taskName: rowDatum.taskName, isComplete: checkedStatus };

    this.props.handleCheck(newRowDatum, label);
  }

  render() {
    return (
      <div className="row">
        { this.createRowLayout() }
      </div>
    );
  }
}

export default Row;
