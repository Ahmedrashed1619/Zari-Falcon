import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import 'jquery/dist/jquery.min.js';
import './index.css';
import { HashRouter } from 'react-router-dom';
import LangContextProvider from './componants/context/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <HashRouter>
      <LangContextProvider>
        <App />
      </LangContextProvider>
    </HashRouter>
  </React.StrictMode>
);


reportWebVitals();
