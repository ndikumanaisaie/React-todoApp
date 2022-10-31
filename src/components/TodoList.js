/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    const { todos, handleChangeProps, deleteTodoProps } = this.props;
    // console.log(Array.isArray(todos));
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf({}).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodosList;
