import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
<ChatContextProvide>
<React.StrictMode>
    <App />
  </React.StrictMode>
  </ChatContextProvide>
  </AuthContextProvider>
  );

reportWebVitals();
