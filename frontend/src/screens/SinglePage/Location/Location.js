import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../components/UI/Heading/Heading';
import Text from '../../../components/UI/Text/Text';
import LocationWrapper from './Location.style';
import { Element } from 'react-scroll';
import Map from '../../../components/Map/Map';

const Location = ({
  titleStyle,
  contentStyle,
  boldContentStyle,
  policies,
  location,
  neighborhoodDescription,
}) => {
  return (
    <Element name="location" className="location">
      <LocationWrapper>
        <Heading as="h2" content="Location" {...titleStyle} />
        {/* <Text content={formattedAddress} {...locationMetaStyle} /> */}
        <Text content={neighborhoodDescription} {...contentStyle} />
        <Text content="Policies" {...contentStyle} {...boldContentStyle} />
        <Text
          content={`CHECK IN-OUT: ${policies.checkInTime} - ${policies.checkOutTime}`}
          {...contentStyle}
        />
        <Text content={`-${policies.petDescription}`} {...contentStyle} />{' '}
        <Text content={`-${policies.childrenDescription}`} {...contentStyle} />
        <Text
          content={`IMPORTANT: ${policies.importantInfo[0]}`}
          {...contentStyle}
        />
        <Map location={location} multiple={false} />
      </LocationWrapper>
    </Element>
  );
};

Location.propTypes = {
  titleStyle: PropTypes.object,
  locationMetaStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Location.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: '4px',
  },
  locationMetaStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#909090',
    mb: ['14px', '20px', '27px'],
  },
  contentStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: '1.6',
    mb: ['14px', '20px', '27px'],
  },
  boldContentStyle: {
    fontWeight: '700',
    mb: '0!important',
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#008489',
  },
};

export default Location;
