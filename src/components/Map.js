import React,{useState} from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Google Map container style
const containerStyle = {
  width: '100%',
  height: '400px',
};

// Default location (e.g., New York City)
const center = {
  lat: 6.54839,
  lng: 3.34598,
};


const Map = () => {
    const [markers, setMarkers] = useState([
        { lat:6.557726, lng: 3.345531 }, // Marker 1
        { lat: 6.50157, lng: 3.3529  }, // Marker 2
      ]);
    
      // Add a marker on map click
      const handleMapClick = (e) => {
        setMarkers([...markers, { lat: e.latLng.lat(), lng: e.latLng.lng() }]);
      };
    
  return (

    <div className="relative h-80 lg:h-96 xl:h-[26rem] w-full">
     {/*<LoadScript googleMapsApiKey={process.env.API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={handleMapClick}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </LoadScript>*/}
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d203835.40117213034!2d3.2940823281250355!3d6.472971559697801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sng!4v1736528270864!5m2!1sen!2sng" width="100%" height="100%"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div> 
  )
}

export default Map