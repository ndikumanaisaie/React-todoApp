/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    const { todo, handleChangeProps } = this.props;
    console.log(todo);
    return (
      <li>
        <input
          type="checkbox"
          onChange={() => handleChangeProps(todo.id)}
          checked={todo.completed}
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
    id: PropTypes.number,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
};

export default TodoItem;
