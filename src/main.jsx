import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Task from './Task.jsx'

// Application Component
export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/App" element={<App />}></Route>
        <Route path="/Task" element={<Task />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);