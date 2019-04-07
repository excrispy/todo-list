import React, { Component } from '../../../node_modules/react';
import './index.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Row extends Component {
  createRowLayout() {
    const { label, rows } = this.props;
    return rows.map((r, i) => (
      <div className="row-wrapper" key={ i }>
        <FormControlLabel
          control={ <Checkbox></Checkbox> }
          label={ label }
          >
        </FormControlLabel>
      </div>
    ));
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
