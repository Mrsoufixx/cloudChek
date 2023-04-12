import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import icon from "../assets/react.svg";
import L from "leaflet";

export default function Map({ coords, display_name }) {
  const { latitude, longitude } = coords;

  const customIcon = new L.Icon({//creating a custom icon to use in Marker
    iconUrl: icon,
    iconSize: [25, 35],
    iconAnchor: [5, 30]
  });

  function MapView() {
    let map = useMap();
    map.setView([latitude, longitude], map.getZoom());
     //Sets geographical center and zoom for the view of the map
    return null;
  }

  return (
    <MapContainer
      classsName="map"
      center={[latitude, longitude]}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
        contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon} position={[latitude, longitude]}>
        <Popup>{display_name}</Popup>
      </Marker>
      <MapView />
    </MapContainer>
  );
}



















// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// function Map() {
//   return (
//     <>
//       <h1 className="text-3xl font-bold underline">Hello world!</h1>
//       {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11050.261470957426!2d6.127334!3d46.179307!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1681309023244!5m2!1sfr!2sma" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
//       <MapContainer
//         style={{ height: "300px", width: "80%" }}
//         center={[34.021992, -6.83762]}
//         zoom={13}
//         scrollWheelZoom={false}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[34.021992, -6.83762]}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </>
//   );
// }

// export default Map;
