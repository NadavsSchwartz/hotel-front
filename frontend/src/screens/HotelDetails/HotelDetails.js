import { Row, Col, Button, Alert } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { useLocation } from '../../library/hooks/useLocation';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { isValidated } from '../../utils';
import { getSpecificDeal } from '../../store/actions/SpecificDealActions';
import HotelDetailsWrapper, { PostImage } from './HotelDetails.style';
import { isEmpty } from 'lodash';
import Loader from '../../components/Loader/Loader';
import PostImageGallery from './ImageGallery/ImageGallery';
import Modal from 'antd/lib/modal/Modal';
import TopBar from './TopBar/TopBar';
import useWindowSize from '../../library/hooks/useWindowSize';
import Container from '../../components/UI/Container/Container';
import Description from './Description/Description';
import Amenities from './Amenities/Amenities';
import Location from './Location/Location';
import Sticky from 'react-stickynode';
import Reservation from './Reservation/Reservation';
import BottomReservation from './Reservation/BottomReservation';
import Review from './Review/Review';
import { PostsWrapper } from '../Listing/Listing.style';
import { CloseCircleTwoTone } from '@ant-design/icons';
import { SET_SHOW_HOTEL_MODAL } from '../../store/StaticDataReducer';

const HotelDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const hash = location.search.split('=')[1];
  const [isModalShowing, setIsModalShowing] = useState(false);

  const { Deal, loading, error } = useSelector((state) => state.SpecificDeal);
  const { showHotelModal } = useSelector((state) => state.StaticData);
  const [isShowModal, SetIsShowModal] = useState(false);

  useEffect(() => {
    if (!hash || !isValidated(hash)) navigate('/dashboard');
    dispatch(getSpecificDeal(hash));
    if (showHotelModal !== 'false') {
      setTimeout(() => {
        SetIsShowModal(true);
      }, 3000);
    }
  }, [dispatch]);
  const { href } = location;
  const { width } = useWindowSize();
  if (isEmpty(Deal) || loading) return <Loader />;
  const hotelAmenities =
    Deal && Deal.hotel
      ? Array.from(Deal.hotel.hotelFeatures.hotelAmenities).slice(0, 15)
      : [];

  const cityId =
    Deal && Deal.hotel
      ? Deal.hotel.location.cityId
      : Deal.hotel.location.neighborhoodID;
  const pclnId = Deal && Deal.queryData ? Deal.queryData.pclnId : '';
  const checkIn = Deal && Deal.queryData ? Deal.queryData.checkIn : '';
  const checkOut = Deal && Deal.queryData ? Deal.queryData.checkOut : '';
  const link = `https://www.priceline.com/relax/at/express/${cityId}/${pclnId}/from/${checkIn}/to/${checkOut}/rooms/1?cur=USD`;
  const images = Deal.hotel.images;
  const logo = images.find((image) => image.imageHDURL !== null);
  const image = logo ? logo.imageHDURL : images[0].imageURL;
  const queryData = Deal && Deal.queryData ? Deal.queryData : null;
  const isRoomAvailable =
    Deal && Deal.hotel.ratesSummary.status === 'UNAVAILABLE' ? false : true;

  return (
    <HotelDetailsWrapper>
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
      {!error && (
        <>
          <PostImage>
            <Modal
              centered={true}
              forceRender={true}
              style={{
                borderRadius: '10px',
                backgroundColor: '#ffff',
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)',
                width: '100% !important',
              }}
              visible={isShowModal}
              footer={null}
              onCancel={() => {
                return (
                  localStorage.setItem('showHotelModal', false),
                  dispatch({ type: SET_SHOW_HOTEL_MODAL, payload: false }),
                  SetIsShowModal(false)
                );
              }}
              closeIcon={
                <CloseCircleTwoTone
                  style={{ fontSize: '20px' }}
                  twoToneColor="#ec1b1b"
                />
              }
              destroyOnClose={true}
            >
              <div style={{ margin: '5px' }}>
                <h3>
                  <strong>Important!</strong>
                </h3>
                <h3>
                  Please be aware that the data for hotel details are pulled
                  live from priceline.com For the most up-to-date amenities and
                  reviews. Because it's pulled directly from priceline.
                </h3>
                <h3>
                  The price and availability are towards regular deals and not
                  express deals. Although, once you click on "book", you'll be
                  redirected to the latest available express deal.
                </h3>
              </div>
            </Modal>
            <img
              className="absolute"
              src={image}
              alt="Listing details page banner"
            />
            <Button
              type="primary"
              onClick={() => setIsModalShowing(true)}
              className="image_gallery_button"
            >
              View Photos
            </Button>
            <Modal
              visible={isModalShowing}
              onCancel={() => setIsModalShowing(false)}
              footer={null}
              width="100%"
              maskStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
              }}
              wrapClassName="image_gallery_modal"
              closable={false}
            >
              <Fragment>
                <PostImageGallery data={Deal.hotel.images} />
                <Button
                  onClick={() => setIsModalShowing(false)}
                  className="image_gallery_close"
                >
                  <svg width="16.004" height="16" viewBox="0 0 16.004 16">
                    <path
                      id="_ionicons_svg_ios-close_2_"
                      d="M170.4,168.55l5.716-5.716a1.339,1.339,0,1,0-1.894-1.894l-5.716,5.716-5.716-5.716a1.339,1.339,0,1,0-1.894,1.894l5.716,5.716-5.716,5.716a1.339,1.339,0,0,0,1.894,1.894l5.716-5.716,5.716,5.716a1.339,1.339,0,0,0,1.894-1.894Z"
                      transform="translate(-160.5 -160.55)"
                      fill="#909090"
                    />
                  </svg>
                </Button>
              </Fragment>
            </Modal>
          </PostImage>
          <TopBar
            title={queryData.hotelName}
            shareURL={href}
            media={Deal.hotel.images}
          />
          <Container>
            <Row gutter={30} id="reviewSection" style={{ marginTop: 30 }}>
              <Col xl={16}>
                <Description
                  location={Deal.hotel.location}
                  title={queryData.hotelName}
                  guestRating={Deal.hotel.overallGuestRating}
                  rating={Deal.hotel.overallGuestRating}
                  ratingCount={Deal.hotel.totalReviewCount}
                />
                <Amenities amenities={hotelAmenities} />
                <Location
                  neighborhoodDescription={
                    Deal.hotel.location.neighborhoodDescription
                  }
                  policies={Deal.hotel.policies}
                  location={Deal.hotel.location}
                />
              </Col>
              <Col xl={8}>
                {width > 1200 ? (
                  <Sticky
                    innerZ={999}
                    activeClass="isSticky"
                    top={202}
                    bottomBoundary="#reviewSection"
                  >
                    <Reservation
                      price={Deal.hotel.ratesSummary.minPrice}
                      linkToBook={link}
                      isRoomAvailable={isRoomAvailable}
                    />
                  </Sticky>
                ) : (
                  <BottomReservation
                    title={queryData.hotelName}
                    price={Deal.hotel.ratesSummary.minPrice}
                    rating={Deal.hotel.overallGuestRating}
                    ratingCount={Deal.hotel.totalReviewCount}
                    linkToBook={link}
                    isRoomAvailable={isRoomAvailable}
                  />
                )}
              </Col>
            </Row>
            <Row gutter={30}>
              <Col xl={16}>
                <Review
                  ratingCount={Deal.hotel.totalReviewCount}
                  reviews={Deal.hotel.guestReviews}
                />
              </Col>
              <Col xl={8} />
            </Row>
          </Container>
        </>
      )}
    </HotelDetailsWrapper>
  );
};

export default HotelDetails;
