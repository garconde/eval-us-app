import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos/index.css';
import App from './paginas/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <div id="root"></div>
        <App />
    </>
);