import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
)