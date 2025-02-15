import React from 'react';
import ReactDOM from 'react-dom/client'; // If using React 18+ (newer method)
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
