/**
 * Use Mapbox GL JS's `flyTo` to move the camera smoothly
 * a given center point
 * */
export function flyToPlace(currentFeature: any, map: any) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15,
  });
}
