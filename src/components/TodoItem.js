/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    const { todo: title } = this.props;
    return <li>{title}</li>;
  }
}

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
};

export default TodoItem;
