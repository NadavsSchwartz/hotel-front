import React, { useContext } from 'react';
// import SearchArea from './Search/Search';

import { LayoutContext } from '../../context/LayoutProvider';
import { Waypoint } from 'react-waypoint';
import HotelSearchForm from '../../components/HotelSearchForm';

const Home = () => {
  const [, dispatch] = useContext(LayoutContext);
  return (
    <>
      <HotelSearchForm />
      <Waypoint
        onEnter={() => dispatch({ type: 'HIDE_TOP_SEARCHBAR' })}
        onLeave={() => dispatch({ type: 'SHOW_TOP_SEARCHBAR' })}
      />
    </>
  );
};

export default Home;
