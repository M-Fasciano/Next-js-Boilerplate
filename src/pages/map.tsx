import { useState } from 'react';

import MapBox from '@/components/atoms/Map';
import Select from '@/components/atoms/Select';
import SearchBox from '@/components/molecules/SearchBox';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Map = () => {
  const [results, setResults] = useState([]);
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [radius, setRadius] = useState<number>(5);

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <div className="flex items-center justify-between">
        <SearchBox
          setResults={setResults}
          coordinates={coordinates}
          setCoordinates={setCoordinates}
        />
        <Select setRadius={setRadius} />
      </div>
      <br />
      {results.length > 0 ? <MapBox results={results} radius={radius} /> : null}
    </Main>
  );
};

export default Map;
