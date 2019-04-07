
import React, { Component } from '../../../node_modules/react';
import Drawer from '@material-ui/core/Drawer';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './index.css';

class SidePanel extends Component {
  getTasks() {
    return this.props.lists.map(d => <MenuItem value={ d }>{ d.label }</MenuItem> );
  }

  render() {
    const { lists, currentList, onChange } = this.props;

    return (
        <div>
          <Drawer
            open={ true }
            variant="permanent"
            anchor="left"
          >
            <Select
              children={ this.getTasks() }
              value={ currentList }
              onChange={ onChange }
            >
            </Select>
          </Drawer>
        </div>
    );
  }
}

export default SidePanel;
