/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Button from '@/components/atoms/Button';

function SearchBox({ setResults }: any) {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN;
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${accessToken}`;
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  async function handleSearch() {
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.features);
  }

  const convertToCoordinates = () => {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      query
    )}&key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const result = response.data.results[0];
        const { lat, lng } = result.geometry.location;
        setCoordinates({ latitude: lat, longitude: lng });
      })
      .catch((error) => {
        console.error('Error converting location to coordinates:', error);
      });
  };

  return (
    <>
      <label
        htmlFor="search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <img
            src={`${router.basePath}/assets/images/map-marker-alt.svg`}
            alt="location marker icon"
          />
        </div>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          id="search"
          className="block w-full rounded-lg border border-gray-300 p-4 pl-10 text-sm dark:border-gray-600 dark:text-black dark:placeholder:text-gray-700"
          placeholder="Search for trainers by postcode, town, city"
          required
        />

        <div className="absolute bottom-2.5 right-2.5">
          <Button
            onClick={() => {
              handleSearch();
              convertToCoordinates();
            }}
            color="success"
            size="sm"
            submit
          >
            Search
          </Button>
        </div>
      </div>
      {coordinates && (
        <div>
          Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
        </div>
      )}
    </>
  );
}

export default SearchBox;
