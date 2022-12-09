// import React from 'react';
// import { GoogleMap , withScriptjs , withGoogleMap , useLoadScript , Marker } from 'react-google-maps';


// export default function Google() {

//     function Map() {
//         return (
//             <GoogleMap 
//                 defaultZoom={10} 
//                 defaultCenter={{lat: 45.421535, lng: -75.697189}}
//             />
//         )
//     }
    

//     const WrappedMap = withScriptjs(withGoogleMap(Map))

//     const API_KEY = 'AIzaSyAHk4vrlDeCAi9oEp6P9_F1sdzr1mL8lIM'


//   return (
//     <div style={{width: '100vw' , height: '65vh'}}>
//       <WrappedMap 
//             googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
//             loadingElement={<div style={{ height: `100%` }} />}
//             containerElement={<div style={{ height: `100%` }} />}
//             mapElement={<div style={{ height: `100%` }} />} 
//         />  
//     </div>
//   )
// }









import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '70vh'
};

const center = {
  lat: -34,
  lng: 150
};

function Google() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDaOQ1qVIyrLaSM819j3CxVv8OYLgJiYg4"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Google)







// import React from 'react';
// import {MapContainer , TileLayer , Marker , Popup} from 'react-leaflet'

// export default function Google() {

//   const position = [51.505, -0.09]


//   return (
//     <>
//       <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </>
//   )
// }


