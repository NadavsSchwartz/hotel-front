import React, { useContext } from 'react';
import { Route, Redirect, Routes } from 'react-router-dom';
import HotelSearchForm from './components/HotelSearchForm';
import Results from './screens/HotelResults/HotelResults';
import HotelDetails from './screens/hotelDetails';
import Layout from './screens/Layout/Layout';
import Loader from './components/Loader/Loader';
const NotFound = React.lazy(() => import('./screens/404/404'));
const HomePage = React.lazy(() => import('./screens/Home/Home'));
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <React.Suspense fallback={<Loader />}>
              <HomePage />
            </React.Suspense>
          }
        />
        <Route exact path="/dashboard" element={<HotelSearchForm />} />
        <Route path="/results" element={<Results />} />
        <Route exact path="/deal" element={<HotelDetails />} />
        {/* <Redirect exact from='/' to='/dashboard' /> */}
        <Route
          path="*"
          element={
            <React.Suspense fallback={<Loader />}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
