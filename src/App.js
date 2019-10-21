import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
// import Header from './component/Header';
import MainLayout from './component/MainLayout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainLayout />
      </header>
    </div>
  );
}

export default App;
