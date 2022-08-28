import React from 'react';
import ReactDOM from 'react-dom/client';
// import House, { a } from './components/Home';
import House from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <House
      message="This is home"
      color="red"
    >
      <p>#400, Rosewell</p>
      <p>North Carolina</p>
    </House>
    <House
      message="This is house"
      color="blue"
    />
  </React.StrictMode>
);

// console.log( a );