import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import MapBox from '@/components/atoms/Map';
import Location from '@/components/molecules/Location';
import SearchBox from '@/components/molecules/SearchBox';
import SelectBox from '@/components/molecules/SelectBox';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { convertToCoordinates } from '../helpers/convertToCoordinates';
import { findNearbyPlaces } from '../helpers/fetchNearbyPlaces';

const Map = () => {
  const router = useRouter();
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

  const imgSrcGender = `${router.basePath}/assets/images/gender.svg`;
  const imgSrcGoals = `${router.basePath}/assets/images/scale.svg`;
  const imgSrcWallet = `${router.basePath}/assets/images/wallet.svg`;

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <div className="flex items-center justify-between">
        {results.length > 0 ? (
          <>
            <Location results={results} setRadius={setRadius} />
            <SelectBox imgSrc={imgSrcGender} imgAlt="gender icon">
              <option value="" defaultValue="gender">
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </SelectBox>
            <SelectBox imgSrc={imgSrcGoals} imgAlt="scale icon">
              <option value="" defaultValue="goals">
                Goals
              </option>
              <option value="option1">option 1</option>
              <option value="option2">option 2</option>
            </SelectBox>
            <SelectBox imgSrc={imgSrcWallet} imgAlt="wallet icon">
              <option value="" defaultValue="price">
                Price
              </option>
              <option value="option1">option 1</option>
              <option value="option2">option 2</option>
            </SelectBox>
          </>
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
