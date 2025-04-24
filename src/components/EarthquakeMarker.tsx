// EarthquakeMarker.tsx
import { Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import { fetchWeather } from '../services/weatherService';

interface Props {
  quake: any;
}

export const EarthquakeMarker = ({ quake }: Props) => {
  const [weather, setWeather] = useState<any>(null);
  const coords = quake.geometry.coordinates;
  const [lon, lat] = coords;

  const handleClick = async () => {
    if (!weather) {
      const data = await fetchWeather(lat, lon);
      setWeather(data);
    }
  };

  const date = new Date(quake.properties.time).toLocaleString();

  return (
    <Marker position={[lat, lon]} eventHandlers={{ click: handleClick }}>
      <Popup>
        <strong>{quake.properties.place}</strong><br />
        Magnitud: {quake.properties.mag}<br />
        Fecha y hora: {date}<br />
        {weather ? (
          <>
            🌡️ Temperatura: {weather.temperature}°C<br />
            💨 Viento: {weather.windspeed} km/h
          </>
        ) : (
          "Cargando temporal..."
        )}
      </Popup>
    </Marker>
  );
};
