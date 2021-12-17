import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import Heading from '../../../components/UI/Heading/Heading';
import { Button, Card } from 'antd';
import DescriptionWrapper from './Description.style';
import { TextButton } from '../SinglePageView.style';

const Description = ({ title, content, titleStyle, contentStyle }) => {
  return (
    <Element name="overview" className="overview">
      <DescriptionWrapper>
        <Heading as="h2" content={title} {...titleStyle} />

        <h3>Reasons To Book</h3>
        {content.map((item, index) => (
          <Card
            title={item.header}
            size="small"
            key={index}
            color="green"
            {...contentStyle}
          >
            {item.substring}
          </Card>
        ))}
      </DescriptionWrapper>
    </Element>
  );
};

Description.propTypes = {
  titleStyle: PropTypes.object,
  locationMetaStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Description.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineheight: ['1.15', '1.2', '1.36'],
    mb: '4px',
  },
  locationMetaStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#909090',
  },
  contentStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineheight: '1.6',
  },
};

export default Description;
