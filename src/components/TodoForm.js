import React, { Component } from 'react';

export default class TodoForm extends Component {
  render() {
    // const {
    // desestruture a tarefa;
    // desestruture a função que resolve o change do input;
    // desestruture a função que resolve o envio do formulário
    // } = this.props;

    return (
      // utilize o onSubmit do formulário para adicionar uma nova tarefa
      <form>
        <label htmlFor="todo-input">Todo:</label>
        <input
          id="todo-input"
          type="text"
          // utilize os atributos necessários para ter um componente controlado
        />
        <button>Add todo</button>
      </form>
    );
  }
}
