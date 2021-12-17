import React from 'react';
import PropTypes from 'prop-types';
import Box from '../UI/Box/Box';
import ProductCard from '../ProductCard/ProductCard';
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
        {data && data.length
          ? data.map((item) => {
              return (
                <Box
                  className="grid_column"
                  width={columnWidth}
                  key={item.pclnId}
                  {...columnStyle}
                >
                  <ProductCard link={link} {...item} />
                </Box>
              );
            })
          : null}
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
