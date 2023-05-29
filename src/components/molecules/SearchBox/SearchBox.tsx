/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Button from '@/components/atoms/Button';

import { findNearbyPlaces } from './helpers/fetchNearbyPlaces';

function SearchBox({ setResults, coordinates, setCoordinates }: any) {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  async function handleSearch() {
    const results = await findNearbyPlaces(query);

    setResults(results);
  }

  const convertToCoordinates = () => {
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
              convertToCoordinates();
              handleSearch();
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
