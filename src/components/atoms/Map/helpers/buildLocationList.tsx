import { flyToPlace } from './flyToPlace';

// Add a listing for each marker
export const buildLocationList = (data: any, map: any) => {
  const listings = document.getElementById('listings');
  listings!.innerHTML = '';

  data.features.map((item: any) => {
    const prop = item.properties;
    const listing = listings!.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = `listing-${prop.id}`;

    const link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.setAttribute('data-id', `${prop.id}`);
    link.innerHTML = prop.name;

    if (prop.distance) {
      const proximity = listing.appendChild(document.createElement('span'));
      const roundedDistance = Math.round(prop.distance * 100) / 100;
      proximity.innerHTML = ` <span>${roundedDistance} miles away</span>`;
    }

    // Add an event listener for the links in the listing
    link.addEventListener('click', () => {
      const clickedListing = data.features[prop.id];
      flyToPlace(clickedListing, map);
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
