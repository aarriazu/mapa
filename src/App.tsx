import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MapView } from './components/MapView';

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Mapa
        </p>
      </header>
      <div className="map">
        <MapView />
      </div>
    </div>
  );
}

export default App;

