import { MapContainer, TileLayer } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { fetchEarthquakes } from '../services/earthquakeService';
import { EarthquakeMarker } from './EarthquakeMarker';
import { EarthquakeFilters } from './EarthquakeFilters';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl,
  shadowUrl: iconShadow,
});

export const MapView = () => {
  const [earthquakes, setEarthquakes] = useState<any[]>([]);
  const [minMag, setMinMag] = useState(0);
  const [maxMag, setMaxMag] = useState(10);
  const [search, setSearch] = useState('');
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    fetchEarthquakes().then(setEarthquakes);
  }, []);

  const filteredEarthquakes = earthquakes.filter((quake) => {
    const mag = quake.properties.mag;
    const place = quake.properties.place;
    const time = new Date(quake.properties.time);
  
    // Extraer país del final del string
    const country = place.includes(',')
      ? place.split(',').pop()?.trim().toLowerCase()
      : '';
  
    return (
      mag >= minMag &&
      mag <= maxMag &&
      (!search || country.includes(search.toLowerCase())) &&
      (!minDate || time >= new Date(minDate))
    );
  });  

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <EarthquakeFilters
        minMag={minMag}
        maxMag={maxMag}
        onMinMagChange={setMinMag}
        onMaxMagChange={setMaxMag}
        search={search}
        onSearchChange={setSearch}
        minDate={minDate}
        onMinDateChange={setMinDate}
      />

      <MapContainer
        center={[0, 0]}
        zoom={2}
        minZoom={2}
        style={{ width: '1025px', height: '700px' }}
        maxBounds={[[-90, -180], [90, 180]]}
        maxBoundsViscosity={1.0}
        worldCopyJump={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          noWrap={true}
        />

        {filteredEarthquakes.map((quake) => (
          <EarthquakeMarker key={quake.id} quake={quake} />
        ))}
      </MapContainer>
    </div>
  );
};
