import React from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

class App extends React.Component {
  state = {
    toDo: '',
    toDoList: [],
  };

  handleChangeInput = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ toDo: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { toDo, toDoList } = this.state;
    this.setState({
      toDo: '',
      toDoList: [
        ...toDoList,
        {
          description: toDo,
          id: `toDo-${toDoList.length}`,
          completed: false,
        },
      ],
    });
  };

  render() {
    const { toDo, toDoList } = this.state;
    return (
      <div>
        <h1>ToDo List</h1>
        <ToDoForm
          toDo={toDo}
          onInputChange={this.handleChangeInput}
          onSubmit={this.handleFormSubmit}
        />
        <ToDoList toDoList={toDoList} />
      </div>
    );
  }
}

export default App;
