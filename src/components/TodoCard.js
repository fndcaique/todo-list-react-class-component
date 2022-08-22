import React, { Component } from 'react';

export default class TodoCard extends Component {
  render() {
    const { description, completed } = this.props;
    return (
      <div>
        <input
          id={'completed-todo-' + description}
          type="checkbox"
          value={completed}
        />
        <label htmlFor={'completed-todo-' + description}>{description}</label>
      </div>
    );
  }
}
