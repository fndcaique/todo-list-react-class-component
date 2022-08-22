import React, { Component } from 'react';

export default class TodoCard extends Component {
  render() {
    // const {
    // desestruture aqui o identificador da tarefa
    // destruture aqui a descrição da tarefa
    // desestruture aqui o status da tarefa
    // desestruture aqui a função que resolve a alteração de status da tarefa
    // } = this.props;
    return (
      <div>
        <input
          // id={}
          type="checkbox"
          // checked={}
          // onChange={}
        />
        <label
        // htmlFor={ }
        >
          {'descrição da tarefa'}
        </label>
      </div>
    );
  }
}
