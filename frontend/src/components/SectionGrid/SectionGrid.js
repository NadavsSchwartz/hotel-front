import React from 'react';
import PropTypes from 'prop-types';
import Box from '../UI/Box/Box';
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../../components/Loader/Loader';
export default function SectionGrid({
  data = [],
  columnWidth,
  paginationComponent,
  rowStyle,
  columnStyle,
  link,
}) {
  return (
    <>
      <Box className="grid_wrapper" {...rowStyle}>
        {data && data.length ? (
          data.map((item, index) => {
            return (
              <Box
                className="grid_column"
                width={columnWidth}
                key={item.pclnId ? item.pclnId : index}
                {...columnStyle}
              >
                <ProductCard
                  link={link}
                  hotelName={
                    item && item.hotelName
                      ? item.hotelName
                      : item.queryData.hotelName
                  }
                  totalReviewCount={
                    item && item.totalReviewCount >= 0
                      ? item.totalReviewCount
                      : item.hotel.totalReviewCount
                  }
                  expressDealDailyPrice={
                    item && item.expressDealDailyPrice
                      ? item.expressDealDailyPrice
                      : item.hotel.ratesSummary.minPrice
                  }
                  expressDealPricePerStay={
                    item && item.expressDealPricePerStay
                      ? item.expressDealPricePerStay
                      : item.hotel.transformedRooms[0].roomRates[0].grandTotal
                  }
                  thumbnailUrl={
                    item && item.thumbnailUrl
                      ? item.thumbnailUrl
                      : item.hotel.transformedRooms[0].roomThumbnailUrl
                  }
                  hotelId={
                    item && item.hotelId ? item.hotelId : item.queryData.hotelId
                  }
                  checkIn={
                    item && item.checkIn ? item.checkIn : item.queryData.checkIn
                  }
                  overallGuestRating={
                    item && item.overallGuestRating >= 0
                      ? item.overallGuestRating
                      : item.hotel.overallGuestRating
                  }
                  checkOut={
                    item && item.checkOut
                      ? item.checkOut
                      : item.queryData.checkOut
                  }
                  pclnId={
                    item && item.hotelName ? item.pclnId : item.queryData.pclnId
                  }
                  cityId={item && item.location ? item.location.cityId : item.hotel.location.cityId}
                  {...item}
                />
              </Box>
            );
          })
        ) : (
          <Loader />
        )}
      </Box>

      {paginationComponent && (
        <Box className="pagination_wrapper">{paginationComponent}</Box>
      )}
    </>
  );
}

SectionGrid.propTypes = {
  data: PropTypes.array.isRequired,
  totalItem: PropTypes.number,
  columnWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  paginationComponent: PropTypes.element,
  handleLoadMore: PropTypes.func,
  loadMoreComponent: PropTypes.element,
  placeholder: PropTypes.element,
  loading: PropTypes.bool,
  limit: PropTypes.number,
  buttonText: PropTypes.string,
  rowStyle: PropTypes.object,
  columnStyle: PropTypes.object,
  loadMoreStyle: PropTypes.object,
};

SectionGrid.defaultProps = {
  rowStyle: {
    flexBox: true,
    flexWrap: 'wrap',
    mr: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px'],
    ml: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px'],
  },
  columnStyle: {
    pr: ['10px', '10px', '10px', '10px', '10px', '15px'],
    pl: ['10px', '10px', '10px', '10px', '10px', '15px'],
  },
  loadMoreStyle: {
    flexBox: true,
    justifyContent: 'center',
    mt: '1rem',
  },
};
