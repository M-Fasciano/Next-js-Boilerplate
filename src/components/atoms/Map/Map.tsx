/* eslint-disable import/no-extraneous-dependencies */
import 'mapbox-gl/dist/mapbox-gl.css';

import { useRouter } from 'next/router';
import React from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';

export const markers = [
  {
    lat: 51.550293,
    long: -0.1513039,
  },
  {
    lat: 51.531207,
    long: 0.00619,
  },
  {
    lat: 51.477463,
    long: -0.079471,
  },
];

function Map() {
  const router = useRouter();

  return (
    <div className="relative h-[50vh]">
      <ReactMapGL
        initialViewState={{
          longitude: -0.127758,
          latitude: 51.507351,
          zoom: 10,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
      >
        <NavigationControl />

        {markers.map((marker) => (
          <Marker
            key={marker.lat}
            longitude={marker.long}
            latitude={marker.lat}
            anchor="bottom"
          >
            <img
              src={`${router.basePath}/assets/images/marker.svg`}
              alt="marker"
            />
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default Map;
