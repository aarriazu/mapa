// MapView.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix para íconos rotos
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl,
  shadowUrl: iconShadow,
});

export const MapView = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
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

      </MapContainer>
    </div>
  );
};
