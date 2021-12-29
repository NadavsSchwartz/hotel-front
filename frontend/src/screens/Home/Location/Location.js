import React, { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import Loader from '../../../components/Loader/Loader';
import Container from '../../../components/UI/Container/Container';
import Heading from '../../../components/UI/Heading/Heading';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ImageCard from '../../../components/ImageCard/ImageCard';
import GlideCarousel, {
  GlideSlide,
} from '../../../components/UI/GlideCarousel/GlideCarousel';
import LocationWrapper, { CarouselSection } from './Location.style';
import { getRecentQueries } from '../../../store/actions/HotelDealsAction';
import { useDispatch, useSelector } from 'react-redux';
const carouselOptions = {
  type: 'carousel',
  perView: 5,
  gap: 30,
  hoverpause: true,
  breakpoints: {
    1440: {
      perView: 5,
      gap: 20,
    },
    1200: {
      perView: 4,
    },
    991: {
      perView: 3,
      gap: 15,
    },
    667: {
      perView: 2,
      gap: 20,
    },
    480: {
      perView: 1,
      gap: 0,
    },
  },
};

const LocationGrid = () => {
  const dispatch = useDispatch();
  const { loading, recentQueries } = useSelector((state) => state.HotelDeals);

  useEffect(() => {
    dispatch(getRecentQueries());
  }, [dispatch]);

  return (
    <LocationWrapper>
      <Container fluid={true}>
        <SectionTitle title={<Heading content="Explore Destinations" />} />

        <CarouselSection>
          {!loading && recentQueries.length !== 0 ? (
            <GlideCarousel
              carouselSelector="explore_carousel"
              prevButton={<IoIosArrowBack />}
              nextButton={<IoIosArrowForward />}
              options={carouselOptions}
            >
              <>
                {recentQueries.map((post, index) => (
                  <GlideSlide key={index}>
                    <ImageCard
                      link={`results?q=${post.queryId}`}
                      imageSrc={
                        post && post.data ? (
                          post.data[0].thumbnailUrl
                        ) : (
                          <Loader />
                        )
                      }
                      title={post.queryData.cityName}
                      meta={`${post.data.length} Hotels`}
                    />
                  </GlideSlide>
                ))}
              </>
            </GlideCarousel>
          ) : null}
        </CarouselSection>
      </Container>
    </LocationWrapper>
  );
};

export default LocationGrid;
