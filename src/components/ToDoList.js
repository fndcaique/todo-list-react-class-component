import React, { Component } from 'react';

class ToDoList extends Component {
  render() {
    const { toDoList } = this.props;
    return (
      <ul>
        {toDoList.map(({ id, description }) => (
          <li key={id}>{description}</li>
        ))}
      </ul>
    );
  }
}

export default ToDoList;
