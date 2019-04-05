
import React, { Component } from '../../../node_modules/react';
import Drawer from '@material-ui/core/Drawer';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './index.css';

class SidePanel extends Component {
  getTasks() {
    return this.props.lists.map(d => <MenuItem value={ d.name }>{ d.name }</MenuItem> );
  }

  render() {
    return (
        <div>
          <Drawer
            open={ true }
            variant="permanent"
            anchor="left"
          >
            <Select
              children={ this.getTasks() }
              value={ this.props.lists[0].name }
            >
            </Select>
          </Drawer>
        </div>
    );
  }
}

export default SidePanel;
