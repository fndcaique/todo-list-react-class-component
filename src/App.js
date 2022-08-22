import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      todos: [],
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
    this.setState({
      todo: '',
      todos: [...todos, { description: todo, completed: false }],
    });
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
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
