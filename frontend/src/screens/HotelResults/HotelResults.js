import { Alert, Checkbox, Menu, message } from 'antd';
import Sticky from 'react-stickynode';
import React, { useEffect, useState, Fragment } from 'react';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import SectionGrid from '../../components/SectionGrid/SectionGrid';
import ListingMap from '../Listing/ListingMap';
import SubMenu from 'antd/lib/menu/SubMenu';
import { isValidated, menuItems } from '../../utils';
import {
  getHotelDeals,
  START_LOADING,
  STOP_LOADING,
  RESET_HOTEL_DEALS,
} from '../../store/actions/HotelDealsAction';
import HotelResultsListingWrapper, {
  PostsWrapper,
  ShowMapCheckbox,
} from './HotelResults.style';
import useWindowSize from '../../library/hooks/useWindowSize';
import { PostPlaceholder } from '../../components/UI/ContentLoader/ContentLoader';
import CategorySearchWrapper from '../Listing/Search/CategorySearch/CategorySearch.style';

import { SettingOutlined } from '@ant-design/icons';
const Results = () => {
  const { width } = useWindowSize();
  const [showMap, setShowMap] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hash = location.search.split('=')[1];
  let columnWidth = [1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5];
  const [sortedDeals, setSortedDeals] = useState([]);
  const { foundDeals, loading, error } = useSelector(
    (state) => state.HotelDeals
  );

  useEffect(() => {
    if (!hash || !isValidated(hash)) navigate('/dashboard');
    dispatch({ type: RESET_HOTEL_DEALS });
    dispatch(getHotelDeals(hash));
  }, [dispatch]);
  if (showMap) {
    columnWidth = [1 / 1, 1 / 2, 1 / 2, 1 / 2, 1 / 3];
  }

  const copiedData = foundDeals;

  const handleClick = async (e) => {
    dispatch({
      type: START_LOADING,
    });
    //avoiding the error of manipulating the original data
    const res = copiedData.slice();
    switch (e.key) {
      case 'priceLowToHigh':
        res.sort((a, b) => a.expressDealDailyPrice - b.expressDealDailyPrice);
        break;
      case 'priceHighToLow':
        res.sort((a, b) => b.expressDealDailyPrice - a.expressDealDailyPrice);
        break;
      case 'GuestRatingLowToHigh':
        res.sort((a, b) => a.overallGuestRating - b.overallGuestRating);
        break;
      case 'GuestRatingHighToLow':
        res.sort((a, b) => b.overallGuestRating - a.overallGuestRating);
        break;
      case 'StarRatingLowToHigh':
        res.sort((a, b) => a.starRating - b.starRating);
        break;
      case 'StarRatingHighToLow':
        res.sort((a, b) => b.starRating - a.starRating);
        break;

      default:
        break;
    }

    setSortedDeals(res);
    dispatch({
      type: STOP_LOADING,
    });
  };

  const handleMapToggle = () => {
    setShowMap((showMap) => !showMap);
  };
  return (
    <HotelResultsListingWrapper>
      {!error && (
        <>
          {' '}
          <Sticky top={82} innerZ={999} activeClass="isHeaderSticky">
            <Toolbar
              left={
                <CategorySearchWrapper>
                  <Menu>
                    <SubMenu
                      key="SubMenu"
                      icon={<SettingOutlined />}
                      title="Sort Results"
                    >
                      {menuItems(handleClick)}
                    </SubMenu>
                  </Menu>
                </CategorySearchWrapper>
              }
              right={
                <ShowMapCheckbox>
                  <Checkbox defaultChecked={false} onChange={handleMapToggle}>
                    Show map
                  </Checkbox>
                </ShowMapCheckbox>
              }
              location={location}
            />
          </Sticky>
          <Fragment>
            <PostsWrapper
              className={width > 767 && showMap ? 'col-12' : 'col-24'}
            >
              <SectionGrid
                link={'/'}
                columnWidth={columnWidth}
                data={
                  sortedDeals && sortedDeals.length > 0
                    ? sortedDeals
                    : foundDeals
                }
                totalItem={1000}
                loading={loading}
                placeholder={<PostPlaceholder />}
              />
            </PostsWrapper>
            {showMap && <ListingMap foundDeals={foundDeals} />}
          </Fragment>{' '}
        </>
      )}
      {error && (
        <PostsWrapper>
          <Alert
            type="error"
            message={error}
            showIcon
            description={
              'Please try again, if the error persist, please contact us.'
            }
          />
        </PostsWrapper>
      )}
    </HotelResultsListingWrapper>
  );
};

export default Results;
