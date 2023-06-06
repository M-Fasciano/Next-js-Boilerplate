import { useEffect, useState } from 'react';

import MapBox from '@/components/atoms/Map';
import Location from '@/components/molecules/Location';
import SearchBox from '@/components/molecules/SearchBox';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { convertToCoordinates } from './helpers/convertToCoordinates';
import { findNearbyPlaces } from './helpers/fetchNearbyPlaces';

const Map = () => {
  const [results, setResults] = useState([]);
  const [radius, setRadius] = useState<number>(5);
  const [query, setQuery] = useState<string>('');
  const [, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  async function handleSearch() {
    const res = await findNearbyPlaces(query);

    setResults(res);
  }

  useEffect(() => {
    if (query) {
      handleSearch();
      convertToCoordinates({ query, setCoordinates });
    }
  }, [query]);

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <div className="flex items-center justify-between">
        {results.length > 0 ? (
          <Location results={results} setRadius={setRadius} />
        ) : (
          <SearchBox
            setResults={setResults}
            setQuery={setQuery}
            handleSearch={handleSearch}
            convertToCoordinates={convertToCoordinates}
          />
        )}
      </div>
      <br />
      {results.length > 0 ? <MapBox results={results} radius={radius} /> : null}
    </Main>
  );
};

export default Map;
