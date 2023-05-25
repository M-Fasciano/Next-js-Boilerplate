// Function to calculate the bounding box based on a center location and radius
export function getBoundingBox(location: any[], radius: number) {
  const lng = location[0];
  const lat = location[1];

  const earthRadius = 6378.1; // Radius of the Earth in kilometers
  const latDelta = (radius / 1000 / earthRadius) * (180 / Math.PI);
  const lngDelta =
    (radius / 1000 / (earthRadius * Math.cos((lat * Math.PI) / 180))) *
    (180 / Math.PI);

  const minLng = lng - lngDelta;
  const maxLng = lng + lngDelta;
  const minLat = lat - latDelta;
  const maxLat = lat + latDelta;

  return `${minLng},${minLat},${maxLng},${maxLat}`;
}
