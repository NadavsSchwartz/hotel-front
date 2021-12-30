import { Form, Button, AutoComplete, DatePicker, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { autoCities } from '../constants/cities';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { getUserLocation } from '../../store/actions/HotelDealsAction';

import { encrypt } from '../../utils';
import BannerWrapper, {
  ComponentWrapper,
  FormWrapper,
  ItemWrapper,
  RoomGuestWrapper,
  SearchWrapper,
} from '../../screens/Home/Search/Search.style';
import Heading from '../UI/Heading/Heading';
import Container from '../UI/Container/Container';
import GlideCarousel, { GlideSlide } from '../UI/GlideCarousel/GlideCarousel';
import { FaMapMarkerAlt, FaRegCalendar, FaUserFriends } from 'react-icons/fa';
import InputIncDec from '../UI/InputIncDec/InputIncDec';
import ViewWithPopup from '../UI/ViewWithPopup/ViewWithPopup';

import Text from '../UI/Text/Text';
import Loader from '../Loader/Loader';
import moment from 'moment';

const HotelSearchForm = ({ searchTitleStyle, searchDescriptionStyle }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { loading, latestDeals } = useSelector((state) => state.HotelDeals);
  const { loading, userLocation } = useSelector((state) => state.HotelDeals);
  const initialValues = {
    dates: [moment(), moment().add(2, 'days')],
    cityName: '',
  };
  useEffect(() => {
    // dispatch(getLatestHotelDeals());

    if (!userLocation || userLocation.city === undefined) {
      dispatch(getUserLocation());
    }
  }, [dispatch]);
  const { RangePicker } = DatePicker;
  const [roomGuestError, SetRoomGuestError] = useState(null);
  const [roomGuest, setRoomGuest] = useState({
    room: 1,
    guest: 2,
  });
  const handleIncrement = (type) => {
    if (roomGuest[type] > 2) {
      SetRoomGuestError(
        "Room and Guests can't be smaller than 1 or higher than 3"
      );
      return false;
    }
    SetRoomGuestError(null);
    setRoomGuest({
      ...roomGuest,
      [type]: roomGuest[type] + 1,
    });
  };
  const handleDecrement = (type) => {
    if (roomGuest[type] <= 1) {
      SetRoomGuestError(
        "Room and Guests can't be lower than 1 or higher than 3"
      );
      return false;
    }
    SetRoomGuestError(null);
    setRoomGuest({
      ...roomGuest,
      [type]: roomGuest[type] - 1,
    });
  };
  const handleIncDecOnChange = (e, type) => {
    let currentValue = e.target.value;
    setRoomGuest({
      ...roomGuest,
      [type]: currentValue,
    });
  };

  const onFinish = async (values) => {
    const { cityName, dates } = values;
    const checkIn = dates[0].format('YYYYMMDD');
    const checkOut = dates[1].format('YYYYMMDD');

    const body = {
      checkIn: checkIn,
      checkOut: checkOut,
      cityName: cityName,
    };
    const encrypted = await encrypt(body);

    navigate(`/results?q=${encrypted}`);
  };
  // Can not select days before today
  const disabledDate = (current) => {
    return (
      current &&
      current < ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date())
    );
  };

  const handleGetUserLocation = async () => {
    if (userLocation.length !== 0 && userLocation.city === 'undefined') {
      return form.setFieldsValue({
        cityName: `${userLocation.city}, ${userLocation.country_code}`,
      });
    } else {
      form.setFieldsValue({ cityName: '' });
      await dispatch(getUserLocation());
      return form.setFieldsValue({
        cityName: `${userLocation.city}, ${userLocation.country_code}`,
      });
    }
  };
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

          <Form
            form={form}
            onFinish={onFinish}
            requiredMark={false}
            initialValues={initialValues}
          >
            <FormWrapper>
              <ComponentWrapper>
                <FaMapMarkerAlt className="map-marker" />
                <div className="map_autocomplete">
                  <Form.Item
                    name="cityName"
                    rules={[
                      { required: true, message: 'city location is required' },
                    ]}
                  >
                    <AutoComplete
                      style={{
                        padding: '0px 30px 0px 30px',
                      }}
                      options={autoCities}
                      bordered={false}
                      size="large"
                      placeholder="Las Vegas, NV"
                      filterOption={(inputValue, option) =>
                        option.value
                          .toUpperCase()
                          .indexOf(inputValue.toUpperCase()) !== -1
                      }
                    />
                  </Form.Item>
                </div>
                {loading && loading ? (
                  <Loader />
                ) : (
                  <svg
                    onClick={() => handleGetUserLocation()}
                    cursor={'pointer'}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 144.083 144"
                    enableBackground="new 0 0 144.083 144"
                    className="target"
                  >
                    <path d="M117.292,69h-13.587C102.28,53.851,90.19,41.761,75.042,40.337V26.5h-6v13.837C53.893,41.761,41.802,53.851,40.378,69  H26.792v6h13.587c1.425,15.148,13.515,27.238,28.663,28.663V117.5h6v-13.837C90.19,102.238,102.28,90.148,103.705,75h13.587V69z   M72.042,97.809c-14.23,0-25.809-11.578-25.809-25.809c0-14.231,11.578-25.809,25.809-25.809S97.85,57.769,97.85,72  C97.85,86.23,86.272,97.809,72.042,97.809z" />
                    <path d="M72.042,52.541c-10.729,0-19.459,8.729-19.459,19.459s8.729,19.459,19.459,19.459S91.5,82.729,91.5,72  S82.771,52.541,72.042,52.541z M72.042,85.459c-7.421,0-13.459-6.037-13.459-13.459c0-7.421,6.038-13.459,13.459-13.459  S85.5,64.579,85.5,72C85.5,79.422,79.462,85.459,72.042,85.459z" />
                  </svg>
                )}
              </ComponentWrapper>

              <ComponentWrapper>
                <FaRegCalendar className="calendar" />
                <Form.Item name={['dates']}>
                  <RangePicker
                    style={{
                      padding: '0px 30px 0px 40px',
                      height: '40px',
                    }}
                    disabledDate={disabledDate}
                    suffixIcon={null}
                    bordered={false}
                    size="middle"
                  />
                </Form.Item>
              </ComponentWrapper>

              <ComponentWrapper>
                <FaUserFriends className="user-friends" />
                <ViewWithPopup
                  key={200}
                  noView={true}
                  className="room_guest"
                  view={
                    <Button type="default">
                      <span>
                        Room {roomGuest.room > 0 && `: ${roomGuest.room}`}
                      </span>
                      <span>-</span>
                      <span>
                        Guests{roomGuest.guest > 0 && `: ${roomGuest.guest}`}
                      </span>
                    </Button>
                  }
                  popup={
                    <RoomGuestWrapper>
                      <ItemWrapper>
                        <strong>Room</strong>
                        <InputIncDec
                          id="room"
                          increment={() => handleIncrement('room')}
                          decrement={() => handleDecrement('room')}
                          onChange={(e) => handleIncDecOnChange(e, 'room')}
                          value={roomGuest.room}
                        />
                      </ItemWrapper>
                      <ItemWrapper>
                        <strong>Guests</strong>
                        <InputIncDec
                          id="guest"
                          increment={() => handleIncrement('guest')}
                          decrement={() => handleDecrement('guest')}
                          onChange={(e) => handleIncDecOnChange(e, 'guest')}
                          value={roomGuest.guest}
                        />
                      </ItemWrapper>
                      {roomGuestError && (
                        <Alert
                          message={roomGuestError}
                          style={{ color: 'red' }}
                        />
                      )}
                    </RoomGuestWrapper>
                  }
                />
              </ComponentWrapper>
              <Button
                type="primary"
                htmlType="submit"
                size="large" 
              >
                Find Hotels
              </Button>
            </FormWrapper>
          </Form>
        </SearchWrapper>
      </Container>
 
    </BannerWrapper>
    
  );
};

export default HotelSearchForm;
