import React, { Component } from '../../../node_modules/react';
import './index.css';
import List from '../list/index';

class View extends Component {
  getDeleteButton() {
    const { selectedList, handleDeleteTask } = this.props;

    return selectedList.id !== -1 ?
      (<div className="delete">
        <i className="material-icons" onClick={ handleDeleteTask }>
          delete_forever
        </i>
      </div>)
      : null;
  }

  render() {
    const { selectedList, handleCheckTask } = this.props;

    return (
      <div className="view">
        <List list={ selectedList } handleCheckTask={ handleCheckTask }></List>
        { this.getDeleteButton() }
      </div>
    );
  }
}

export default View;
