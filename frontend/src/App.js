import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Results from './screens/HotelResults/HotelResults';
import HotelDetails from './screens/hotelDetails';
import Layout from './screens/Layout/Layout';
import Loader from './components/Loader/Loader';
import { RecentDealsGrid } from './screens/Home/Grid';
import Privacy from './screens/Privacy&Terms/Privacy';
import Terms from './screens/Privacy&Terms/Terms';
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
        <Route path="/results" element={<Results />} />
        <Route
          path="/deal"
          element={
            <React.Suspense fallback={<Loader />}>
              <HotelDetails />{' '}
            </React.Suspense>
          }
        />
        <Route
          path="/recent-deals"
          element={
            <React.Suspense fallback={<Loader />}>
              <RecentDealsGrid />
            </React.Suspense>
          }
        />
        <Route
          path="/privacy"
          element={
            <React.Suspense fallback={<Loader />}>
              <Privacy />
            </React.Suspense>
          }
        />
        <Route
          path="/terms"
          element={
            <React.Suspense fallback={<Loader />}>
              <Terms />
            </React.Suspense>
          }
        />
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
