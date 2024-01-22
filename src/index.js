import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Pages/Dashboard/Dashboard.css"
import "./style.css";
import "./all.min.css";
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import UserProvider from './Pages/Website/Context/UserContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
 <UserProvider>
    <App/>
    </UserProvider>
    </Router>
);