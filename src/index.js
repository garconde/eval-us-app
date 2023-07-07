import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './paginas/App';
import TabComponent from './componentes/tabs-1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <div id="root"></div>
        <App />
    </>
);