import axios from 'axios';

export const convertToCoordinates = ({ query, setCoordinates }: any) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    query
  )}&key=${apiKey}`;

  axios
    .get(endpoint)
    .then((response) => {
      const result = response.data.results[0];
      const { lat, lng } = result.geometry.location;
      setCoordinates({ latitude: lat, longitude: lng });
    })
    .catch((error) => {
      const err = `Error converting location to coordinates: ${error}`;
      return err;
    });
};
