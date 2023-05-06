/* eslint-disable import/no-extraneous-dependencies */
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

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
  features: markers.map((marker, i) => ({
    geometry: {
      type: 'Point',
      coordinates: {
        lat: marker.lat,
        lng: marker.long,
      },
      properties: {
        id: i,
      },
    },
  })),
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN as string;

function Map(results: any) {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);

  const lat = results.results[0].center[1];
  const lng = results.results[0].center[0];

  // const geojson = {
  //   type: 'Feature',
  //   features: [
  //     {
  //       geometry: {
  //         type: 'Point',
  //         coordinates: {
  //           lat,
  //           lng,
  //         },
  //       },
  //     },
  //   ],
  // };

  function flyToStore(currentFeature: any) {
    map.current.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15,
    });
  }

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: 10,
    });

    geojson.features.forEach((marker) => {
      // create a DOM element for the marker
      const markerIcon = document.createElement('div');
      const root = createRoot(markerIcon);
      root.render(<Marker />);

      markerIcon.addEventListener('click', () => {
        /* Fly to the point */
        flyToStore(marker);
      });

      new mapboxgl.Marker(markerIcon)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map.current);
    });

    // Add zoom and rotation controls to the map.
    map.current.addControl(new mapboxgl.NavigationControl());
  }, [lat, lng]);

  return <div className="relative h-[50vh]" ref={mapContainer} />;
}

export default Map;
