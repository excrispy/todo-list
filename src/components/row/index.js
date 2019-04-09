import React, { Component } from '../../../node_modules/react';
import './index.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Row extends Component {
  createRowLayout() {
    const { rowDatum, label } = this.props;

    return (
      <div className="row-wrapper">
        <FormControlLabel
          control={ <Checkbox></Checkbox> }
          label={ rowDatum.task }
        >
        </FormControlLabel>
      </div>
    );
  }
  
  handleClick(isChecked) {
    const { rowDatum, label } = this.props;
    const checkedStatus = !isChecked;
    const newRowDatum = { task: rowDatum.task, isChecked: checkedStatus };

    this.props.handleCheck(newRowDatum, label);
  }

  render() {
    const isChecked = this.props.rowDatum;

    return (
      <div className="row" onClick={ this.handleClick(isChecked) }>
        { this.createRowLayout() }
      </div>
    );
  }
}

export default Row;
