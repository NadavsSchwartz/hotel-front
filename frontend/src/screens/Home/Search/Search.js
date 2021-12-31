import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../components/UI/Heading/Heading';
import Text from '../../../components/UI/Text/Text';
import Container from '../../../components/UI/Container/Container';
import GlideCarousel, {
  GlideSlide,
} from '../../../components/UI/GlideCarousel/GlideCarousel';
import SearchForm from './SearchForm';
import BannerWrapper, { SearchWrapper } from './Search.style';

const SearchArea = ({ searchTitleStyle, searchDescriptionStyle }) => {
  const [error, SetError] = useState(null);
  return (
    <BannerWrapper>
      <GlideCarousel controls={false} bullets={true} numberOfBullets={1}>
        <>
          <GlideSlide>
            <img src="/images/bg-image.jpeg" alt="bg=i" />
          </GlideSlide>
        </>
      </GlideCarousel>

      <Container>
        <SearchWrapper>
          <Heading
            {...searchTitleStyle}
            content="Same Hotels, Lowest prices."
          />
          <Text
            {...searchDescriptionStyle}
            content="find Priceline's Express Deals hotel's name to help you find the lowest
          price on the right hotel for you."
          />
          <SearchForm SetError={SetError} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </SearchWrapper>
      </Container>
    </BannerWrapper>
  );
};

SearchArea.propTypes = {
  searchTitleStyle: PropTypes.object,
  searchDescriptionStyle: PropTypes.object,
};

SearchArea.defaultProps = {
  searchTitleStyle: {
    color: '#2C2C2C',
    fontSize: ['20px', '24px', '28px'],
    lineHeight: ['28px', '30px', '30px'],
    mb: '9px',
  },
  searchDescriptionStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    lineHeight: ['25px', '25px', '18px'],
    mb: '30px',
  },
};

export default SearchArea;
