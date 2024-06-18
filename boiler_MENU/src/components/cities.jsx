import { useEffect, useState } from 'react';
import ky from 'ky';

const CitiesList = () => {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    ky.get('/cities')
      .json()
      .then(response => {
        setCities(response);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <h1>Villes en France</h1>
      {error && <p>Erreur: {error.message}</p>}
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default CitiesList;
