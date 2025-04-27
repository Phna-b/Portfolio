import { useEffect, useState } from 'react';
 

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
          {location.city
            ? `Atualmente estou em: ${location.city} - ${location.state}, ${location.country}`
            : 'Carregando localização...'}
        </p>
  );
};

export default Location;
