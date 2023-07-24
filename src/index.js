import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import { Routes, Route } from 'react-router-dom';
import Prediction from './Components/Prediction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index to path="/" element={<App></App>} />
        <Route path="/signin" element={<Signin></Signin>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/prediction" element={<Prediction></Prediction>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
