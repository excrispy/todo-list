import React, { Component } from '../../../node_modules/react';
import './index.css';
import Row from '../row/index';

class List extends Component {
  getRows() {
    const { list } = this.props;

    return <Row label={ list.label } rows={ list.rows }></Row>
  }

  render() {
    return (
      <div className="list">
        <div className="title">{ this.props.list.label }</div>
        { this.getRows() }
      </div>
    );
  }
}

export default List;
