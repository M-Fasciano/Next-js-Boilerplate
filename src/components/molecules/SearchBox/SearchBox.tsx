import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/atoms/Button';

function SearchBox({
  query,
  setQuery,
  convertToCoordinates,
  handleSearch,
}: any) {
  const router = useRouter();

  return (
    <>
      <label
        htmlFor="search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative w-full max-w-xl flex-1">
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
    </>
  );
}

export default SearchBox;
