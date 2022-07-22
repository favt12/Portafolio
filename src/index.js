/**import { sayHi } from "./utils";
sayHi()**/
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.scss';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);