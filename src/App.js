import React from 'react';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: '',
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
  };

  render() {
    const { todo } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm
          todo={todo}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
