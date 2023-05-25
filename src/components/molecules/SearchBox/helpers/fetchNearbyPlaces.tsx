// import { getBoundingBox } from './getBoundingBox';

// Function to fetch nearby places using Mapbox Places API
export async function fetchNearbyPlaces(query: string) {
  // const radius = 5000; // Radius in meters (adjust as needed)
  const apiKey = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN; // Replace with your Mapbox Places API key

  // console.log('query', query);
  // console.log('location', location);

  // const bbox = getBoundingBox(location, radius);

  // const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${apiKey}&types=place&bbox=${bbox}`;

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

  return data.features;
}
