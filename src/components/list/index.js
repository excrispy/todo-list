import React, { Component } from '../../../node_modules/react';
import './index.css';
import Row from '../row/index';

class List extends Component {
  getRows() {
    const { list, handleCheckTask, handleDeleteTask } = this.props;

    return list.taskRows.map((row, i) => (
      <Row
        key={ i }
        rowDatum={ row }
        listName={ list.listName }
        handleCheckTask={ handleCheckTask }
        handleDeleteTask={ handleDeleteTask }
      >
      </Row>
    ));
  }

  getAddTaskIcon() {
    return this.props.showEditView
      ? <i class="material-icons">playlist_add</i>
      : null;
  }

  render() {
    return (
      <div className="list">
        <div className="title">{ this.props.list.listName }</div>
        { this.getRows() }
      </div>
    );
  }
}

export default List;
