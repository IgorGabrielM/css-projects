import './App.css';
import React from 'react'
import Header from './Header';
import Routes from './routes';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
