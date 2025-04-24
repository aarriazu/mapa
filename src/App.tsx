import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MapView } from './components/MapView';

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Últimos 200 terremotos registrados y sus condiciones meteorologicas
        </p>
      </header>
      <div className="map">
        <MapView />
      </div>
    </div>
  );
}

export default App;

