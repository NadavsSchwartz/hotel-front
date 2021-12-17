import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../components/UI/Heading/Heading';
import { FaWifi, FaSwimmer, FaSmokingBan, FaParking } from 'react-icons/fa';
import { BiHandicap } from 'react-icons/bi';
import {
  MdOutlineHealthAndSafety,
  MdPets,
  MdLocalAirport,
} from 'react-icons/md';
import { IoIosFitness } from 'react-icons/io';
import IconCard from '../../../components/IconCard/IconCard';
import AmenitiesWrapper, { AmenitiesArea } from './Amenities.style';

import { Element } from 'react-scroll';

const Amenities = ({ titleStyle, linkStyle, amenities }) => {
  const amenitiesCodes = amenities.map((amenity) => amenity.code);
  return (
    <Element name="amenities" className="Amenities">
      <AmenitiesWrapper>
        <Heading as="h2" content="Amenities" {...titleStyle} />
        <AmenitiesArea>
          {amenitiesCodes.map((amenity, index) => {
            switch (amenity) {
              case 'FINTRNT' || 'FINTRPUB':
                return (
                  <IconCard
                    key={index}
                    icon={<FaWifi />}
                    title={amenity.name}
                  />
                );
              case 'FPRKING':
                return (
                  <IconCard
                    key={index}
                    icon={<FaParking />}
                    title={amenity.name}
                  />
                );
              case 'HEALTHSVCS':
                return (
                  <IconCard
                    key={index}
                    icon={<MdOutlineHealthAndSafety />}
                    title={amenity.name}
                  />
                );
              case 'SPOOL':
                return (
                  <IconCard
                    key={index}
                    icon={<FaSwimmer />}
                    title={amenity.name}
                  />
                );
              case 'AIRSHUTTL':
                return (
                  <IconCard
                    key={index}
                    icon={<MdLocalAirport />}
                    title={amenity.name}
                  />
                );
              case 'FITSPA':
                return (
                  <IconCard
                    key={index}
                    icon={<IoIosFitness />}
                    title={amenity.name}
                  />
                );
              case 'PETALLOW':
                return (
                  <IconCard
                    key={index}
                    icon={<MdPets />}
                    title={amenity.name}
                  />
                );
              case 'HANDFAC':
                return (
                  <IconCard
                    key={index}
                    icon={<BiHandicap />}
                    title={amenity.name}
                  />
                );
              case 'NSMKFAC':
                return (
                  <IconCard
                    key={index}
                    icon={<FaSmokingBan />}
                    title={amenity.name}
                  />
                );
              default:
                return null;
            }
          })}
        </AmenitiesArea>
      </AmenitiesWrapper>
    </Element>
  );
};

Amenities.propTypes = {
  titleStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

Amenities.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: ['14px', '20px', '30px'],
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#008489',
  },
};

export default Amenities;
