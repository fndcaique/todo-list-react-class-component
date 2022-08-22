import React, { Component } from 'react';
import TodoCard from './TodoCard';

export default class TodoList extends Component {
  render() {
    const { todos, handleStatusChange } = this.props;
    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.description + index}>
            <TodoCard
              {...todo}
              handleStatusChange={handleStatusChange}
            />
          </li>
        ))}
      </ul>
    );
  }
}
