
import React, { Component } from '../../../node_modules/react';
import Drawer from '@material-ui/core/Drawer';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import './index.css';

class SidePanel extends Component {
  getTasks() {
    return this.props.lists.map(d => <MenuItem value={ d }>{ d.listName }</MenuItem> );
  }

  render() {
    const { currentList, onChange, openListTemplate } = this.props;
    console.log(this.props.drawerIsOpen);

    return (
        <div className="side-panel">
          <Drawer
            variant="persistent"
            anchor="left"
            open={ this.props.drawerIsOpen }
          >
            <IconButton onClick={ this.props.handleDrawerClose }>
              <ChevronLeftIcon />
            </IconButton>
            <Divider />
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
