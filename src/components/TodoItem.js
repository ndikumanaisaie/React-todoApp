/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    const { todo } = this.props;
    console.log(todo);
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => console.log('clicked')}
        />
        {todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool,
    title: PropTypes.string,
  }).isRequired,
};

export default TodoItem;
