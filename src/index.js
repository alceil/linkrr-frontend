import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AdminProvider } from "./contexts/adminContext";
import { ViewProvider } from "./contexts/viewContext";
import { AuthProvider } from './contexts/authContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<AuthProvider>
    <ViewProvider>

    <AdminProvider>

  <Router>
   <App />
    
    </Router>  
    </AdminProvider>
    </ViewProvider>
    </AuthProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

