/* eslint-disable import/no-extraneous-dependencies */
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import Marker from '../Marker';

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

const geojson = {
  type: 'Feature',
  features: markers.map((marker) => ({
    geometry: {
      type: 'Point',
      coordinates: {
        lat: marker.lat,
        lng: marker.long,
      },
    },
  })),
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN as string;

function Map() {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-0.127758, 51.507351],
      zoom: 10,
    });

    geojson.features.forEach((marker) => {
      // create a DOM element for the marker
      const markerIcon = document.createElement('div');
      ReactDOM.render(<Marker />, markerIcon);

      new mapboxgl.Marker(markerIcon)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map.current);
    });
  });

  return <div className="relative h-[50vh]" ref={mapContainer} />;
}

export default Map;
