import React from 'react';
import { Button } from 'antd';

import ReservationFormWrapper, { FormActionArea } from './Reservation.style.js';

const RenderReservationForm = () => {
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
          Book Hotel
        </Button>
      </FormActionArea>
    </ReservationFormWrapper>
  );
};

export default RenderReservationForm;
