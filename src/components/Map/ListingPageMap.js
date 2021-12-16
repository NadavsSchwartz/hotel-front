import React, { useState } from 'react';
import { Marker } from '@react-google-maps/api';
import HotelInfoWindow from './MapInfoWindow';
import MakerImage from './hotelMapMarker.png';

const HotelMapMarkerCluster = ({ foundDeals, clusterer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [markerIndex, setMarkerIndex] = useState(0);
  let hotelData = [];

  const infoWindowToggle = (index) => {
    setIsOpen(!isOpen);
    setMarkerIndex(index);
  };

  foundDeals &&
    foundDeals.forEach((item) => {
      hotelData.push({
        id: item.pclnId,
        lat: parseFloat(item.location.latitude),
        lng: parseFloat(item.location.longitude),
        title: item.hotelName,
        thumbUrl: item.thumbnailUrl,
        formattedAddress: item.address.addressLine1,
        price: item.expressDealDailyPrice,
        rating: item.overallGuestRating,
        ratingCount: item.totalReviewCount,
      });
    });

  return hotelData.map((singlePostLocation, index) => {
    return (
      <Marker
        key={index}
        icon={MakerImage}
        clusterer={clusterer}
        position={singlePostLocation}
        onClick={() => infoWindowToggle(singlePostLocation.id)}
      >
        {isOpen && markerIndex === singlePostLocation.id ? (
          <HotelInfoWindow
            data={singlePostLocation}
            onCloseClick={() => infoWindowToggle(singlePostLocation.id)}
          />
        ) : (
          ''
        )}
      </Marker>
    );
  });
};

export default HotelMapMarkerCluster;
