/* eslint-disable no-param-reassign */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NoMatch from '../pages/NoMatch';
import About from '../pages/About';
import Navbar from './Navbar';
import Home from './home';

const TodoContainer = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </>

);

export default TodoContainer;
