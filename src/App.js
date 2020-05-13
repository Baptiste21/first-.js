import React from 'react';
import logo from './bite.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          suce mon zboub
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/baptiste-leviel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baptiste Leviel
        </a>
      </header>
    </div>
  );
}

export default App;
