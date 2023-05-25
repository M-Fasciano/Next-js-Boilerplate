import { useState } from 'react';

import MapBox from '@/components/atoms/Map';
import SearchBox from '@/components/molecules/SearchBox';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Map = () => {
  const [results, setResults] = useState([]);
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  // console.log('results', results);

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <SearchBox
        setResults={setResults}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
      <br />
      {results.length > 0 ? <MapBox results={results} /> : null}
    </Main>
  );
};

export default Map;
