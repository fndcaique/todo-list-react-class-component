import React, { Component } from 'react';

export default class TodoForm extends Component {
  render() {
    const { todo, onChange, onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <label htmlFor="todo-input">Todo:</label>
        <input
          id="todo-input"
          type="text"
          value={todo}
          onChange={onChange}
        />
        <button>Add todo</button>
      </form>
    );
  }
}
