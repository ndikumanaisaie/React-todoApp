/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class TodoContainer extends Component {
  constructor(props) {
    super(props);

    const state = {
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
        <h1>Hello from Create React App</h1>
        <p>I am in a React Component!</p>
      </div>
    );
  }
}

export default TodoContainer;
