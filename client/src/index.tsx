import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App';
import UserStore from './store/UserStore';

const userStore = { user: new UserStore() };
export const Context = createContext(userStore)
console.log(process.env.REACT_APP_URL)

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore()
    }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);

