import React, { Component } from 'react';
import TodoCard from './TodoCard';

export default class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.description + index}>
            <TodoCard {...todo} />
          </li>
        ))}
      </ul>
    );
  }
}
