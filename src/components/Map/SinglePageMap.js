import React, { useState } from 'react';
import { Marker } from '@react-google-maps/api';
import HotelInfoWindow from './MapInfoWindow';
import MakerImage from './hotelMapMarker.png';

const SingleMapDisplay = ({ foundDeals }) => {
  let hotelData = [];
  const [isOpen, setIsOpen] = useState(false);
  const [markerIndex, setMarkerIndex] = useState(0);

  const infoWindowToggle = (index) => {
    setIsOpen(!isOpen);
    setMarkerIndex(index);
  };

  hotelData.push({
    id: foundDeals?.pclnId,
    lat: parseFloat(foundDeals?.location.latitude),
    lng: parseFloat(foundDeals?.location.longitude),
    title: foundDeals?.hotelName,
    thumbUrl: foundDeals?.thumbnailUrl,
    formattedAddress: foundDeals?.address.addressLine1,
    price: foundDeals?.expressDealDailyPrice,
    rating: foundDeals?.overallGuestRating,
    ratingCount: foundDeals?.totalReviewCount,
  });

  return hotelData.map((singlePostLoaction, index) => {
    return (
      <Marker
        key={index}
        icon={MakerImage}
        position={singlePostLoaction}
        onClick={() => {
          infoWindowToggle(singlePostLoaction.id);
        }}
      >
        {isOpen && markerIndex === singlePostLoaction.id ? (
          <HotelInfoWindow
            data={singlePostLoaction}
            onCloseClick={() => {
              infoWindowToggle(singlePostLoaction.id);
            }}
          />
        ) : (
          ''
        )}
      </Marker>
    );
  });
};

const HotelMapMarkerSingle = (props) => {
  return <SingleMapDisplay {...props} />;
};

export default HotelMapMarkerSingle;
