import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store'

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={store}>
        <App />
    </Context.Provider>
);