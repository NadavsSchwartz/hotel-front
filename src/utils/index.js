import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Menu, List, Avatar } from 'antd';

import { clockicon, credit } from './icons';
import CryptoJS, { AES } from 'crypto-js';
import { Content } from 'antd/lib/layout/layout';
export const PopoverContent = (
  <Content>
    <p>HR submits your requested</p>
    <p>city name, check-in and check-out dates,</p>
    <p>To Priceline, and matches multiple fields,</p>
    <p>between regular and express deals.</p>
  </Content>
);
export const menuItems = (handleClick) => {
  return (
    <>
      <Menu.ItemGroup title="Sort High to Low">
        <Menu.Item key="priceHighToLow" onClick={handleClick}>
          By Price
        </Menu.Item>
        <Menu.Item key="StarRatingHighToLow" onClick={handleClick}>
          By Star Rating
        </Menu.Item>
        <Menu.Item key="GuestRatingHighToLow" onClick={handleClick}>
          By Guest Rating
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Sort Low to High">
        <Menu.Item key="priceLowToHigh" onClick={handleClick}>
          By Price
        </Menu.Item>
        <Menu.Item key="StarRatingLowToHigh" onClick={handleClick}>
          By Star Rating
        </Menu.Item>
        <Menu.Item key="GuestRatingLowToHigh" onClick={handleClick}>
          By Guest Rating
        </Menu.Item>
      </Menu.ItemGroup>
    </>
  );
};

export const notificationData = [
  {
    title: 'Payment completed',
    description: <>{clockicon} 2 days ago</>,
    avatar: <Avatar shape="square">{credit}</Avatar>,
  },
];

export const notificationMenu = (
  <List
    min-width="100%"
    className="header-notifications-dropdown "
    itemLayout="horizontal"
    dataSource={notificationData}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar shape="square" src={item.avatar} />}
          title={item.title}
          description={item.description}
        />
      </List.Item>
    )}
  />
);

export const isValidated = async (hash) => {
  const decrypted = CryptoJS.AES.decrypt(hash, process.env.REACT_APP_SECRET);
  try {
    const res = await JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));

    if (res) return true;
  } catch (error) {
    return false;
  }
  return false;
};

export const dateConverter = (str, fulldate) => {
  if (fulldate) {
    let year = str.substr(0, 4);
    let month = str.substr(4, 2) - 1;
    let day = str.substr(6, 2);
    return `${year}/${month}/${day}`;
  }

  let month = str.substr(4, 2) - 1;
  let day = str.substr(6, 2);
  return `${month}/${day}`;
};

export const dateConverterSpecificDeal = (str) => {
  let year = str.substr(0, 4);
  let month = str.substr(4, 2) - 1;
  let day = str.substr(6, 2);
  return `${year}-${month}-${day}`;
};

const epochs = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];

const getDuration = (timeAgoInSeconds) => {
  for (let [name, seconds] of epochs) {
    const interval = Math.floor(timeAgoInSeconds / seconds);
    if (interval >= 1) {
      return {
        interval: interval,
        epoch: name,
      };
    }
  }
};

export const timeAgo = (date) => {
  const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000);
  const { interval, epoch } = getDuration(timeAgoInSeconds);
  const suffix = interval === 1 ? '' : 's';
  return `${interval} ${epoch}${suffix} ago`;
};

export const encrypt = (body) =>
  AES.encrypt(JSON.stringify(body), process.env.REACT_APP_SECRET).toString();
