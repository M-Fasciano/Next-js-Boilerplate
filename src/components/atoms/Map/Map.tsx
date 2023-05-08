/* eslint-disable import/no-extraneous-dependencies */
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import Marker from '../Marker';

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
      properties: {
        id: i,
        name: marker.name,
      },
    },
  })),
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN as string;

function Map(results: any) {
  // Create a map instance
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);

  // Set coordinates for the center of the map
  const lat = results.results[0].center[1];
  const lng = results.results[0].center[0];

  /**
   * Use Mapbox GL JS's `flyTo` to move the camera smoothly
   * a given center point
   * */
  function flyToStore(currentFeature: any) {
    map.current.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15,
    });
  }

  // Add a listing for each marker
  const buildLocationList = (data: any) => {
    const listings = document.getElementById('listings');
    listings!.innerHTML = '';

    data.features.map((item: any) => {
      const prop = item.geometry.properties;
      const listing = listings!.appendChild(document.createElement('div'));
      listing.className = 'item';
      listing.id = `listing-${prop.id}`;

      const link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.setAttribute('data-id', `${prop.id}`);
      link.innerHTML = prop.name;

      // Add an event listener for the links in the listing
      link.addEventListener('click', () => {
        const clickedListing = data.features[prop.id];
        flyToStore(clickedListing);
      });

      const mapMarkers = document.querySelectorAll('.mapboxgl-marker');

      // Add mouseenter and mouseleave events for the listing links
      link.addEventListener('mouseenter', (event) => {
        const target = event.target as HTMLAnchorElement;
        const listingId = target.getAttribute('data-id');

        const markersList = Array.from(mapMarkers).filter(
          (marker) => marker.getAttribute('data-id') === listingId
        );

        markersList.map((marker) => {
          return marker.children[0]!.classList.add('animate-bounce');
        });
      });

      link.addEventListener('mouseleave', (event) => {
        const target = event.target as HTMLAnchorElement;
        const listingId = target.getAttribute('data-id');

        const markersList = Array.from(mapMarkers).filter(
          (marker) => marker.getAttribute('data-id') === listingId
        );

        markersList.map((marker) => {
          return marker.children[0]!.classList.remove('animate-bounce');
        });
      });

      return listing;
    });
  };

  useEffect(() => {
    // Initialize map when component mounts
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: 10,
    });

    // Add markers to the map
    geojson.features.forEach((marker) => {
      // Create a DOM element for the marker
      const markerIcon = document.createElement('div');
      markerIcon.setAttribute('data-id', `${marker.geometry.properties.id}`);
      const root = createRoot(markerIcon);
      root.render(<Marker />);

      // Add an event listener to the marker
      markerIcon.addEventListener('click', () => {
        flyToStore(marker);
      });

      new mapboxgl.Marker(markerIcon)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map.current);
    });

    buildLocationList(geojson);

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
