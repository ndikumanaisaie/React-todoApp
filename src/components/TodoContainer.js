/* eslint-disable no-param-reassign */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import TodosList from './TodoList';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = (id) => {
    // const { todos } = this.state;
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos.filter((todo) => todo.id !== id),
      ],
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodosList
          todos={todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
