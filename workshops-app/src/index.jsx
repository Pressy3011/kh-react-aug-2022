import React from 'react';
import ReactDOM from 'react-dom/client';
import House, { a } from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <House />
    <House />
    <House />
    <House />
  </React.StrictMode>
);

console.log( a );