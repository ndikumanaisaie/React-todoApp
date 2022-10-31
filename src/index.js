import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import {StrictMode} from 'react';
import reportWebVitals from './reportWebVitals';

import TodoContainer from './components/TodoContainer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TodoContainer />
  </StrictMode>,
);
reportWebVitals();
