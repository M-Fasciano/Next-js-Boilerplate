import axios from 'axios';

export async function findNearbyPlaces(query: string) {
  // const radius = 5000; // Radius in meters (adjust as needed)
  // const bbox = getBoundingBox(location, radius);
  // const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${apiKey}&types=place&bbox=${bbox}`;
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN;
  const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${accessToken}`;
  try {
    const response = await axios.get(endpoint);
    return response.data.features;
  } catch (error) {
    console.error('Error occurred while fetching nearby places:', error);
    return [];
  }
}
