import * as React from 'react';
import Map, {NavigationControl} from 'react-map-gl';
import Navbar from './components/Navbar';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: -6.615967,
          latitude: 34.260495,
          zoom: 10
        }}
        style={{width: "100%", height: " calc(100vh - 77px)"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=zCZ0kooVGlY6tiF2cMQT"
      >
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
}

export default App;









