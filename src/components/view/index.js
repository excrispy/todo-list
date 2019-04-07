import React, { Component } from '../../../node_modules/react';
import './index.css';
import List from '../list/index';

class View extends Component {
  render() {
    const list = this.props.list;

    return (
      <div className="view">
        <List list={ list }></List>
      </div>
    );
  }
}

export default View;
