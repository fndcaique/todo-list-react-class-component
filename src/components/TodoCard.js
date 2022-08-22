import React, { Component } from 'react';

export default class TodoCard extends Component {
  render() {
    const { id, description, completed, handleStatusChange } = this.props;
    return (
      <div>
        <input
          id={id}
          type="checkbox"
          checked={completed}
          onChange={() => handleStatusChange(id)}
        />
        <label htmlFor={id}>{description}</label>
      </div>
    );
  }
}
