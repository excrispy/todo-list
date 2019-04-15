
import React, { Component } from '../../../node_modules/react';
import Drawer from '@material-ui/core/Drawer';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './index.css';

class SidePanel extends Component {
  getTasks() {
    return this.props.lists.map(d => <MenuItem value={ d }>{ d.label }</MenuItem> );
  }

  render() {
    const { lists, currentList, onChange, openListTemplate } = this.props;

    return (
        <div className="side-panel">
          <Drawer
            open={ true }
            variant="permanent"
            anchor="left"
          >
            <div className="panel-content">
              <Select
                children={ this.getTasks() }
                value={ currentList }
                onChange={ onChange }
                >
              </Select>
              <Button
                variant="contained"
                style={ { zIndex: 1300 } }
                onClick={ openListTemplate }
                >
                Add List
              </Button>
            </div>
          </Drawer>
        </div>
    );
  }
}

export default SidePanel;
