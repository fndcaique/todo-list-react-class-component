import React, { Component } from 'react';

export default class ToDoForm extends Component {
  render() {
    const { toDo, onInputChange, onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <label htmlFor="todo-input">ToDo:</label>
        <input
          id="todo-input"
          type="text"
          value={toDo}
          onChange={onInputChange}
        />
        <button type="submit">Add ToDo</button>
      </form>
    );
  }
}
