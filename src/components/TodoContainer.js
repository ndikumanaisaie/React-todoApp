/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

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

  render() {
    return (
      <div>
        {
          this.state.todos.map((todo) => (
            <h1>{todo}</h1>
          ))
        }
      </div>
    );
  }
}

export default TodoContainer;
