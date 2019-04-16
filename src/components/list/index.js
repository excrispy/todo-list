import React, { Component } from '../../../node_modules/react';
import './index.css';
import Row from '../row/index';

class List extends Component {
  getRows() {
    const { list, handleCheck } = this.props;

    return list.taskRows.map((row, i) => (
      <Row
        key={ i }
        rowDatum={ row }
        label={ list.listName }
        handleCheck={ handleCheck }
      >
      </Row>
    ));
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
