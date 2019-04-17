import React, { Component } from '../../../node_modules/react';
import './index.css';
import List from '../list/index';

class View extends Component {
  getDeleteButton() {
    return this.props.selectedList.id !== -1 && this.props.deleteDialogIsOpen ?
      (<div className="delete">
        <i className="material-icons" onClick={ this.handleDeleteTask }>
          delete_forever
        </i>
      </div>)
      : null;
  }

  handleDeleteTask = () => {
    this.setState({ deleteDialogIsOpen: true });
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
