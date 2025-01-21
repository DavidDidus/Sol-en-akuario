import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Modal from 'react-modal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <DndProvider backend={HTML5Backend}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </DndProvider>
);