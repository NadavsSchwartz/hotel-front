import React from 'react';
import { Button } from 'antd';

import ReservationFormWrapper, { FormActionArea } from './Reservation.style.js';

const RenderReservationForm = ({ linkToBook, isRoomAvailable }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ReservationFormWrapper className="form-container" onSubmit={handleSubmit}>
      <FormActionArea>
        <Button
          htmlType="submit"
          type="primary"
          style={{ marginBottom: '30px' }}
        >
          {isRoomAvailable ? (
            <a href={linkToBook} target="_blank" rel="noreferrer">
              Book Hotel
            </a>
          ) : (
            'Not Available'
          )}
        </Button>
      </FormActionArea>
    </ReservationFormWrapper>
  );
};

export default RenderReservationForm;
