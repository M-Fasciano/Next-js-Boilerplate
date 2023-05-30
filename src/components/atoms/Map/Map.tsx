/* eslint-disable import/no-extraneous-dependencies */
import 'mapbox-gl/dist/mapbox-gl.css';

import { distance, point } from '@turf/turf';
import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import Marker from '../Marker';
import { buildLocationList } from './helpers/buildLocationList';
import { flyToPlace } from './helpers/flyToPlace';

export const markers = [
  {
    lat: 51.550293,
    lng: -0.1513039,
    name: 'Ellie Ford',
  },
  {
    lat: 51.531207,
    lng: 0.00619,
    name: 'John Smith',
  },
  {
    lat: 51.477463,
    lng: -0.079471,
    name: 'Jane Doe',
  },
];

const geojson = {
  type: 'Feature',
  features: markers.map((marker, i) => ({
    geometry: {
      type: 'Point',
      coordinates: {
        lat: marker.lat,
        lng: marker.lng,
      },
    },
    properties: {
      id: i,
      name: marker.name,
      distance: {},
    },
  })),
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN as string;

function Map({ results }: any) {
  // Create a map instance
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);
  const radius = 5; // Radius in miles (adjust as needed)

  // Set coordinates for the center of the map
  const lat = results[0].center[1];
  const lng = results[0].center[0];

  useEffect(() => {
    const options = { units: 'miles' } as any;

    // Initialize map when component mounts
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: 10,
    });

    // Function to filter features within the specified radius
    function filterFeatures(features: any[]) {
      return features.filter((feature) => {
        const from = point([lat, lng]);
        const to = point([
          feature.geometry.coordinates.lat,
          feature.geometry.coordinates.lng,
        ]);
        const dist = distance(from, to, options);
        return dist <= radius;
      });
    }

    // Add markers to the map
    function addMarkers(features: any[]) {
      features.forEach((marker) => {
        // Create a DOM element for the marker
        const markerIcon = document.createElement('div');
        markerIcon.setAttribute('data-id', `${marker.properties.id}`);
        const root = createRoot(markerIcon);
        root.render(<Marker />);

        // Add an event listener to the marker
        markerIcon.addEventListener('click', () => {
          flyToPlace(marker, map);
        });

        new mapboxgl.Marker(markerIcon)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map.current);
      });
    }

    const filteredFeatures = filterFeatures(geojson.features);
    addMarkers(filteredFeatures);

    const geojsonFilteredFeatures = {
      type: 'Feature',
      features: filteredFeatures,
    };

    /**
     * Calculate distances:
     * For each marker, use turf.disance to calculate the distance
     * in miles between the searchResult and the marker. Assign the
     * calculated value to a property called `distance`.
     */
    for (const marker of geojson.features) {
      const from = point([lat, lng]);
      const to = point([
        marker.geometry.coordinates.lat,
        marker.geometry.coordinates.lng,
      ]);
      marker.properties.distance = distance(from, to, options);
    }

    /**
     * Sort markers by distance from closest to the `searchResult`
     * to furthest.
     */
    geojson.features.sort((a, b) => {
      const distanceA = a.properties.distance;
      const distanceB = b.properties.distance;
      if (distanceA > distanceB) {
        return 1;
      }
      if (distanceA < distanceB) {
        return -1;
      }
      return 0; // a must be equal to b
    });

    /**
     * Rebuild the listings:
     * Remove the existing listings and build the location
     * list again using the newly sorted markers.
     */
    const listings = document.getElementById('listings');
    while (listings?.firstChild) {
      listings.removeChild(listings.firstChild);
    }
    buildLocationList(geojsonFilteredFeatures, map);

    // Add zoom and rotation controls to the map
    map.current.addControl(new mapboxgl.NavigationControl());
  }, [lat, lng]);

  return (
    <>
      <div className="relative h-[50vh]" ref={mapContainer} />
      <div id="listings" />
    </>
  );
}

export default Map;
