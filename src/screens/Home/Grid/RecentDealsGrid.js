import React, { useEffect } from 'react';
import Heading from '../../../components/UI/Heading/Heading';
import TextLink from '../../../components/UI/TextLink/TextLink';
import Container from '../../../components/UI/Container/Container';
import { PostPlaceholder } from '../../../components/UI/ContentLoader/ContentLoader';
import SectionGrid from '../../../components/SectionGrid/SectionGrid';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useWindowSize from '../../../library/hooks/useWindowSize';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentDeals } from '../../../store/actions/SpecificDealActions';
import { useLocation } from 'react-router-dom';

const RecentDealsGrid = () => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  let location = useLocation();
  const { loading, recentDeals, error } = useSelector(
    (state) => state.SpecificDeal
  );

  useEffect(() => {
    dispatch(getRecentDeals());
  }, [dispatch]);

  let posts = recentDeals;
  let limit;

  if (recentDeals && width <= 767) {
    posts = recentDeals.slice(0, 4);
    limit = 4;
  }
  if (recentDeals && width >= 768) {
    posts = recentDeals.slice(0, 6);
    limit = 6;
  }
  if (recentDeals && width >= 992) {
    posts = recentDeals.slice(0, 8);
    limit = 8;
  }
  if (recentDeals && width >= 1200) {
    posts = recentDeals.slice(0, 10);
    limit = 10;
  }
  return (
    <Container fluid={true}>
      <SectionTitle
        title={<Heading content="Recent Hotels Viewed By Members" />}
        link={
          location.pathname !== '/recent-deals' ? (
            <TextLink link="/recent-deals" content="Show all" />
          ) : (
            ''
          )
        }
      />

      <SectionGrid
        link="/recent-deals"
        columnWidth={[1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}
        data={location.pathname === '/recent-deals' ? recentDeals : posts}
        loading={loading}
        limit={location.pathname === '/recent-deals' ? 20 : limit}
        placeholder={<PostPlaceholder />}
      />
    </Container>
  );
};

export default RecentDealsGrid;
