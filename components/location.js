import { useEffect, useState } from 'react';
import { IoLocation } from "react-icons/io5";
 

 
    
const Location = () => {
  const [location, setLocation] = useState({ city: '', state: '', country: ''});
 

  useEffect(() => {
    fetch('/location.json')
      .then(response => response.json())
      .then(data => setLocation({ city: data.city, state: data.state,country: data.country }))
      .catch(error => console.error('Erro ao buscar localização:', error));
  }, []);

  return (
        <p>
          <IoLocation />
          {location.city
            ? `${location.city} - ${location.state}, ${location.country}`
            : 'Carregando localização...'}
        </p>
  );
};

export default Location;
