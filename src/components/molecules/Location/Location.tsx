import { useRouter } from 'next/router';
import React from 'react';

import Box from '@/components/atoms/Box';
import Select from '@/components/atoms/Select';

interface LocationProps {
  results: any;
  setRadius: any;
}

function Location(props: LocationProps) {
  const router = useRouter();
  const { results, setRadius } = props;

  return (
    <Box withBorder className="inline-block">
      <div className="flex items-center text-sm">
        <img
          src={`${router.basePath}/assets/images/map-marker-alt.svg`}
          alt="location marker icon"
        />
        <input className="ml-3" defaultValue={results[0].text} />
        <img
          src={`${router.basePath}/assets/images/geolocation.svg`}
          alt="geolocation icon"
        />
        <div className="mx-2 h-[30px] w-px bg-gray-400" />
        <span>whitin</span>
        <Select setRadius={setRadius}>
          <option value="5" defaultValue="5">
            5 Miles
          </option>
          <option value="10">10 Miles</option>
          <option value="15">15 Miles</option>
          <option value="20">20 Miles</option>
        </Select>
      </div>
    </Box>
  );
}

export default Location;
