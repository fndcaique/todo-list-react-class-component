import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // configure aqui os dados iniciais do estado da aplicação
      // dica: será necessário pelo menos 2 chaves, 1 para o formulário e outra para armazenar todas as tarefas
    };
  }

  handleChange = (event) => {
    // implemente aqui o código para resolver a alteração da descrição da tarefa
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // implemente aqui o código para adicionar a tarefa preenchida no formulário para a lista com todas as tarefas e o código para resetar o formulário
  };

  handleStatusChange = (todoId) => {
    // implemente aqui o código para alterar o status da tarefa com o id correspondente ao id recebido via parâmetro
  };

  saveTodos = () => {
    // [bonus] implemente aqui o código para salvar as tarefas no localStorage
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm
        // passe aqui a prop que deverá receber como valor a descrição da tarefa
        // passe aqui a prop que deverá resolver as alterações da descrição da tarefa
        // passe aqui a prop que irá resolver a adição da tarefa na lista
        />
        <TodoList
        // passe aqui a prop que deverá receber a lista com todas as tarefas
        // passe aqui a prop que irá resolver a alteração de status das tarefas
        />
      </div>
    );
  }
}

export default App;
