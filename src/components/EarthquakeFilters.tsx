// components/EarthquakeFilters.tsx
import React from 'react';

interface Props {
  minMag: number;
  maxMag: number;
  onMinMagChange: (value: number) => void;
  onMaxMagChange: (value: number) => void;
  search: string;
  onSearchChange: (value: string) => void;
  minDate: string;
  onMinDateChange: (value: string) => void;
}

export const EarthquakeFilters = ({
  minMag,
  maxMag,
  onMinMagChange,
  onMaxMagChange,
  search,
  onSearchChange,
  minDate,
  onMinDateChange,
}: Props) => {
  return (
    <div style={{
      marginBottom: '10px',
      background: '#f4f4f4',
      padding: '10px',
      borderRadius: '8px',
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
      <label>
        🔽 Mín. magnitud:
        <input
          type="number"
          value={minMag}
          onChange={(e) => onMinMagChange(parseFloat(e.target.value))}
          step={0.1}
          min={0}
          style={{ marginLeft: '5px', width: '60px' }}
        />
      </label>
      <label>
        🔼 Máx. magnitud:
        <input
          type="number"
          value={maxMag}
          onChange={(e) => onMaxMagChange(parseFloat(e.target.value))}
          step={0.1}
          min={0}
          style={{ marginLeft: '5px', width: '60px' }}
        />
      </label>
      <label>
        🔍 Lugar:
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Ej: Chile"
          style={{ marginLeft: '5px', width: '120px' }}
        />
      </label>
      <label>
        📅 Desde:
        <input
          type="date"
          value={minDate}
          onChange={(e) => onMinDateChange(e.target.value)}
          style={{ marginLeft: '5px' }}
        />
      </label>
    </div>
  );
};
