import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function MapView({lat,lng}){

  return(

    <MapContainer
      center={[lat,lng]}
      zoom={10}
      style={{height:"300px"}}
    >

      <TileLayer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[lat,lng]} />

    </MapContainer>

  )

}