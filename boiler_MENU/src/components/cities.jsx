import { useEffect, useState } from 'react';
import ky from 'ky';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const CitiesList = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    ky.get('http://localhost:3000/cities')
      .json()
      .then(data => {
        setCities(data);
      })
      .catch(error => {
        console.error("There was an error fetching the cities!", error);
      });
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a city"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <MapContainer center={[46.603354, 1.888334]} zoom={6} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.filter(city => city.name.toLowerCase().includes(searchTerm.toLowerCase())).map(city => (
          <Marker key={city.id} position={[city.latitude, city.longitude]}>
            <Popup>{city.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CitiesList;
