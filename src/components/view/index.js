import React, { Component } from '../../../node_modules/react';
import './index.css';
import List from '../list/index';

class View extends Component {
  render() {
    const { list, handleCheck } = this.props;

    return (
      <div className="view">
        <List list={ list } handleCheck={ handleCheck }></List>
      </div>
    );
  }
}

export default View;
