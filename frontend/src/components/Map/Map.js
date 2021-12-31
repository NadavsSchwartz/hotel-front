import React from 'react';
import { MarkerClusterer } from '@react-google-maps/api';
import MapWrapper from './MapWrapper';
import HotelMapMarkerCluster from './ListingPageMap';
import HotelMapMarkerSingle from './SinglePageMap';

const Map = (props) => {
  const { multiple, foundDeals, location } = props;
  const handleClustererClick = (data) => {
    const markerClusterer = data.getMarkers();
    console.log(`Current clicked markers length: ${markerClusterer.length}`);
    console.log(markerClusterer);
  };
  return (
    <>
      {multiple ? (
        <MapWrapper
          id="map-multiple-location"
          zoom={8}
          center={{
            lat: foundDeals[0].location.latitude,
            lng: foundDeals[0].location.longitude,
          }}
        >
          <MarkerClusterer
            gridSize={60}
            averageCenter
            enableRetinaIcons={true}
            onClick={handleClustererClick}
          >
            {(clusterer) => (
              <HotelMapMarkerCluster
                foundDeals={foundDeals}
                clusterer={clusterer}
              />
            )}
          </MarkerClusterer>
        </MapWrapper>
      ) : (
        <MapWrapper
          id="map-single-location"
          mapContainerStyle={{
            height: '400px',
            width: '100%',
          }}
          zoom={8}
          center={{
            lat: location.latitude,
            lng: location.longitude,
          }}
        >
          <HotelMapMarkerSingle foundDeals={foundDeals} location={location} />
        </MapWrapper>
      )}
    </>
  );
};

export default Map;
