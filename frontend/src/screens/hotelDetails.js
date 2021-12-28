import { Row, Col, Button } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { useLocation } from '../library/hooks/useLocation';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { isValidated } from '../utils';
import { getSpecificDeal } from '../store/actions/SpecificDealActions';
import SinglePageWrapper, {
  PostImage,
} from './SinglePage/SinglePageView.style';
import { isEmpty } from 'lodash';
import Loader from '../components/Loader/Loader';
import PostImageGallery from './SinglePage/ImageGallery/ImageGallery';
import Modal from 'antd/lib/modal/Modal';
import TopBar from './SinglePage/TopBar/TopBar';
import useWindowSize from '../library/hooks/useWindowSize';
import Container from '../components/UI/Container/Container';
import Description from './SinglePage/Description/Description';
import Amenities from './SinglePage/Amenities/Amenities';
import Location from './SinglePage/Location/Location';
import Sticky from 'react-stickynode';
import Reservation from './SinglePage/Reservation/Reservation';
import BottomReservation from './SinglePage/Reservation/BottomReservation';
import Review from './SinglePage/Review/Review';

const HotelDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const hash = location.search.split('=')[1];
  const [isModalShowing, setIsModalShowing] = useState(false);

  const { Deal, loading, error } = useSelector((state) => state.SpecificDeal);
  useEffect(() => {
    if (!hash || !isValidated(hash)) navigate('/dashboard');
    dispatch(getSpecificDeal(hash));
  }, [dispatch]);
  const { href } = location;
  const { width } = useWindowSize();
  if (isEmpty(Deal) || loading) return <Loader />;
  const hotelAmenities =
    Deal && Deal.hotel
      ? Array.from(Deal.hotel.hotelFeatures.hotelAmenities).slice(0, 15)
      : [];

  const reasonsToBookContent =
    Deal && Deal.hotel ? Deal.hotel.reasonsToBook : [];
  const images = Deal.hotel.images;
  const logo = images.find((image) => image.imageHDURL !== null);
  const image = logo ? logo.imageHDURL : images[0].imageURL;
  const queryData = Deal && Deal.queryData ? Deal.queryData : null;

  return (
    <SinglePageWrapper>
      <PostImage>
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
                <Reservation price={Deal.hotel.ratesSummary.minPrice} />
              </Sticky>
            ) : (
              <BottomReservation
                title={queryData.hotelName}
                price={Deal.hotel.ratesSummary.minPrice}
                rating={Deal.hotel.overallGuestRating}
                ratingCount={Deal.hotel.totalReviewCount}
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
    </SinglePageWrapper>
  );
};

export default HotelDetails;
