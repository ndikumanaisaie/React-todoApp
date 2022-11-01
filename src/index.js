import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import TodoContainer from './components/TodoContainer';
import './App.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </StrictMode>,
);
reportWebVitals();
