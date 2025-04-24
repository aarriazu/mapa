export async function fetchEarthquakes() {
    const res = await fetch(
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'
    );
    const data = await res.json();
    return data.features.slice(0, 200); 
  }
  