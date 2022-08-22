import React, { Component } from 'react';

export default class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={todo + index}>{todo}</li>
        ))}
      </ul>
    );
  }
}
