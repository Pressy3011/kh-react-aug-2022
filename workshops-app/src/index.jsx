import React from 'react';
import ReactDOM from 'react-dom/client';
import House, { a } from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <House message="This is home">
      <p>#400, Rosewell</p>
      <p>North Carolina</p>
    </House>
    <House message="This is house" />
  </React.StrictMode>
);

console.log( a );