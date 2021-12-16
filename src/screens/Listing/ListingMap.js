import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Map from '../../components/Map/Map';

import { FixedMap } from './Listing.style';
import Loader from '../../components/Loader/Loader';

const ListingMap = ({ foundDeals, loading }) => {
  if (isEmpty(foundDeals) || loading) return <Loader />;

  return (
    <FixedMap>
      <Map foundDeals={foundDeals} multiple={true} />
    </FixedMap>
  );
};

export default ListingMap;
