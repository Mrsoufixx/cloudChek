import React from "react";
import Map, { NavigationControl } from 'react-map-gl';
import maplibregl from 'maplibre-gl';

const MapSection = () => {
  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Location</h2>
        <div className="relative h-screen">
          <Map mapLib={maplibregl} 
            initialViewState={{
              longitude: -6.615967,
              latitude: 34.260495,
              zoom: 10
            }}
            style={{width: "100%", height: "600px"}}
            mapStyle="https://api.maptiler.com/maps/streets/style.json?key=zCZ0kooVGlY6tiF2cMQT"
          >
            <NavigationControl position="top-left" />
          </Map>
        </div>
      </div>
    </section>
  );
};

export default MapSection;