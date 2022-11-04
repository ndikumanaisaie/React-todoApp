/* eslint-disable no-param-reassign */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NoMatch from '../pages/NoMatch';
import About from '../pages/About';
import Navbar from './Navbar';
import Home from './Home';
import AboutApp from '../pages/AboutApp';
import AboutAuthor from '../pages/AboutAuthor';

const TodoContainer = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
        <Route path="aboutApp" element={<AboutApp />} />
        <Route path="aboutAuthor" element={<AboutAuthor />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </>

);

export default TodoContainer;
