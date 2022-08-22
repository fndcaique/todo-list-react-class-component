import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const TODOS_KEY = 'todos';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      todos: JSON.parse(localStorage.getItem(TODOS_KEY)) || [],
    };
  }

  handleChange = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ todo: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { todo, todos } = this.state;
    this.setState(
      {
        todo: '',
        todos: [
          ...todos,
          {
            id: `todo-${todos.length + 1}`,
            description: todo,
            completed: false,
          },
        ],
      },
      this.saveTodos
    );
  };

  handleStatusChange = (todoId) => {
    this.setState((state) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: newTodos,
      };
    }, this.saveTodos);
  };

  saveTodos = () => {
    const { todos } = this.state;
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  };

  render() {
    const { todo, todos } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm
          todo={todo}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <TodoList
          todos={todos}
          handleStatusChange={this.handleStatusChange}
        />
      </div>
    );
  }
}

export default App;
