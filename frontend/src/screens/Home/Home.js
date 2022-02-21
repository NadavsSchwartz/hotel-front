import React, { Suspense, useContext } from 'react';
import LocationGrid from './Location/Location';
import { LayoutContext } from '../../context/LayoutProvider';
import { Waypoint } from 'react-waypoint';
import HotelSearchForm from '../../components/HotelSearchForm';
import RecentDealsGrid from './Grid/RecentDealsGrid';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [, dispatch] = useContext(LayoutContext);
  return (
    <>
      <HotelSearchForm />
      <Waypoint
        onEnter={() => dispatch({ type: 'HIDE_TOP_SEARCHBAR' })}
        onLeave={() => dispatch({ type: 'SHOW_TOP_SEARCHBAR' })}
      />
      {/* <Suspense fallback={<Loader />}>
        <LocationGrid />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <RecentDealsGrid />
      </Suspense> */}
    </>
  );
};

export default Home;
