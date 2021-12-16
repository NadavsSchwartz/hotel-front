import { Row, Col, Card, Button, List, Collapse, Skeleton } from 'antd';
import React, { useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {
  dateConverter,
  dateConverterSpecificDeal,
  isValidated,
} from '../utils';
import { getSpecificDeal } from '../store/actions/SpecificDealActions';

const { Panel } = Collapse;
const HotelDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const hash = location.search.split('=')[1];

  const { Deal, loading, error } = useSelector((state) => state.SpecificDeal);
  useEffect(() => {
    if (!hash || !isValidated(hash)) navigate('/dashboard');
    dispatch(getSpecificDeal(hash));
  }, [dispatch]);

  const hotelAmenities =
    Deal && Deal.hotel
      ? Array.from(Deal.hotel.hotelFeatures.hotelAmenities).slice(0, 15)
      : [];

  const policies = Deal && Deal.hotel ? Deal.hotel.policies : [];
  const hotelFeatures =
    Deal && Deal.hotel
      ? Array.from(Deal.hotel.hotelFeatures.features).slice(0, 15)
      : [];
  const availableRooms = Deal && Deal.hotel ? Deal.hotel.transformedRooms : [];
  const logo = Deal && Deal.hotel ? Deal.hotel.images[0].imageHDURL : null;
  const queryData = Deal && Deal.queryData ? Deal.queryData : null;
  return (
    <>
      <Skeleton active loading={loading}>
        <div
          className="profile-nav-bg"
          style={{
            backgroundImage: 'url(' + logo + ')',

            height: '300px',
          }}
        ></div>
        <Row>
          <Col xs={24} className="mb-24">
            <Row justify="center">
              <Card
                className="card-profile-head"
                style={{ margin: '-40px 0 14px' }}
                title={
                  <>
                    <Row>
                      <Col xs={24} style={{ textAlign: 'center' }}>
                        <h6 className="font-semibold m-0">
                          {queryData && queryData.name}
                        </h6>
                      </Col>
                      <Col xs={24} style={{ textAlign: 'center' }}>
                        <h6>
                          {queryData && dateConverter(queryData.checkIn, true)}{' '}
                          -{' '}
                          {queryData && dateConverter(queryData.checkOut, true)}
                        </h6>
                      </Col>
                    </Row>
                  </>
                }
              />{' '}
            </Row>
          </Col>
        </Row>
        <Row gutter={[24, 0]}>
          <Col span={24} md={16}>
            <Card
              className="header-solid h-full"
              bordered="false"
              title="Available Rooms"
            >
              <List
                itemLayout="vertical"
                size="large"
                loading={loading}
                dataSource={availableRooms}
                renderItem={(room, index) => (
                  <>
                    <List.Item
                      key={index}
                      extra={
                        <img
                          width={200}
                          height={180}
                          alt="logo"
                          src={availableRooms[0].imageUrls[0].mediumUrl}
                        />
                      }
                    >
                      <List.Item.Meta
                        title={
                          <>
                            <div>
                              Total Price: {room.roomRates[0].currencySymbol}
                              {room.roomRates[0].grandTotal}, (
                              {room.roomRates[0].currencySymbol}
                              {room.roomRates[0].price}/night)
                              <div style={{ fontSize: '10px' }}>
                                all taxes & fees inc. price is for the entire
                                vacation duration.
                              </div>
                            </div>
                          </>
                        }
                        description={
                          <>
                            <p>Accepted Payment Methods:</p>
                            {room.roomRates[0].paymentOptionsText}
                          </>
                        }
                      />
                      {queryData && (
                        <Button type="primary" block>
                          <a
                            target="_blank"
                            href={`https://www.priceline.com/cart/checkout/retail/${dateConverterSpecificDeal(
                              queryData.checkIn
                            )}/${dateConverterSpecificDeal(
                              queryData.checkOut
                            )}/1/${queryData.hotelId}/${
                              room.roomRates[0].rateIdentifier
                            }/single?adultocc=2&country-code=US&currency-code=USD&tax-display-mode=false`}
                            rel="noreferrer"
                          >
                            <p style={{ color: '#fff' }}>HEAD TO PRICELINE</p>
                          </a>
                        </Button>
                      )}
                    </List.Item>
                  </>
                )}
              />
              <Collapse accordion>
                <Panel header="Hotel Location" key="1">
                  <p>
                    {Deal && Deal.hotel
                      ? Deal.hotel.location.neighborhoodDescription
                      : ''}
                  </p>
                </Panel>
                <Panel header="Hotel Policies" key="2">
                  {policies && (
                    <>
                      <div>
                        <p>IMPORTANT: {policies?.importantInfo}</p>
                        <p> check in time: {policies?.checkInTime}</p>
                        <p> check out time: {policies?.checkOutTime}</p>
                        <p> Children Policy: {policies?.childrenDescription}</p>
                        <p> Pet Policy: {policies?.petDescription}</p>
                      </div>
                    </>
                  )}
                </Panel>
              </Collapse>
            </Card>
          </Col>
          <Col span={24} md={8} className="mb-24">
            <Card
              bordered="false"
              bodyStyle={{ paddingTop: 0 }}
              className="header-solid h-full  ant-list-yes"
              title={
                <h6
                  className="font-semibold m-0"
                  style={{ textAlign: 'center' }}
                >
                  Hotel Features
                </h6>
              }
            >
              <List
                header={
                  <h6 style={{ textAlign: 'center' }}>
                    AMENITIES
                    <hr />
                  </h6>
                }
                className="transactions-list ant-newest"
                itemLayout="horizontal"
                dataSource={hotelAmenities}
                renderItem={(item) => <Col xs={24}> {item.name} </Col>}
              />

              <List
                className="yestday transactions-list"
                header={
                  <h6 style={{ textAlign: 'center' }}>
                    FEATURES
                    <hr />
                  </h6>
                }
                itemLayout="horizontal"
                dataSource={hotelFeatures}
                renderItem={(item) => <Col xs={24}> {item} </Col>}
              />
            </Card>
          </Col>
        </Row>
      </Skeleton>
    </>
  );
};

export default HotelDetails;
