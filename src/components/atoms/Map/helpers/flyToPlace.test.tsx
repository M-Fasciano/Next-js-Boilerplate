// Import the necessary dependencies
import mapboxgl from 'mapbox-gl';

import { flyToPlace } from './flyToPlace';

// Mock the Mapbox GL JS library
jest.mock('mapbox-gl');

describe('Mapbox GL flyTo', () => {
  let map: mapboxgl.Map;

  beforeEach(() => {
    // Create a new map instance before each test
    map = new mapboxgl.Map();
  });

  afterEach(() => {
    // Clean up the map instance after each test
    map.remove();
    jest.resetAllMocks();
  });

  it('should call flyTo method with correct parameters', () => {
    const lngLat = {
      geometry: {
        coordinates: {
          lat: 12.34,
          lng: 56.78,
        },
        type: 'Point',
      },
    };

    // Call the flyTo method
    flyToPlace(lngLat, map);

    // Verify that the flyTo method was called with the correct parameters
    expect(map.flyTo).toHaveBeenCalledWith({
      center: lngLat.geometry.coordinates,
      zoom: 15,
    });
  });
});
