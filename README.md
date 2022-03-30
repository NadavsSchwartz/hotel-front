![Heroku](https://pyheroku-badge.herokuapp.com/?app=hotel-revealer&style=flat)

# HotelRevealer
> Find hidden Priceline Hotel deals with a click of a button.

https://hotelrevealer.org

### Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Stack](#Stack)
- [Setup](#Setup)
- [Resources](#Resources)
    - [Home Page Component](#HomePage)
    - [Search Results](#SearchResults)
    - [Recent Deals](#RecentDeals)
    - [Hotel Details](#HotelDetails)
- [Contributing](#contributing)
- [License](#license)

---

## Description
HotelRevealer was created to help people conveniently attempt to find the hidden hotel behind Priceline's express deals,
helping you save up to 70% of the regular hotel price.


## Key Features
- Free forever.
- Modern design.
- Live data extraction from Priceline's servers.
- Dedicated Hotel details page to view reviews, amenities and, important information on the hotel.
- Google Maps integration to see the surrounding area of the hotel.

## Stack:
- Node (Web server)
- Express (Web server framework)
- React (UI library)
- Redux (State management)
- MongoDB (database)
- styled-components (CSS styling solution library)
- crypto-js (secure cryptographic algorithms)

## Setup

1. Clone this repository
2. Create an `.env` file and fill it properly ([see below](#configuration)).
3. Install dependencies: `npm install` or `yarn` if you're using yarn.
4. Run for development: `npm run dev` or `yarn dev` if you're using yarn.

### Configuration

For the configuration, the following settings have to be added in your `.env`-file:

- **MONGO_URI**: The connection string
- [**REACT_APP_GOOGLE_MAP_API_KEY**: Your google map api key](https://developers.google.com/maps/documentation/javascript/get-api-key)
- **REACT_APP_SECRET**: secure secret used for crypto-js

## Resources

### HomePage
| route | method | description | Docs |
|---|---|---|---|
|  '/' | GET | Show homepage|  [code](./frontend/src/screens/Home/Home.js) |

---

### SearchResults
| route | methods | description | Docs |
|---|---|---|---|
|  '/results?q=hashed-form-data' | GET | Show search results for hotel deals | [code](./frontend/src/screens/HotelResults/HotelResults.js) |

---
### RecentDeals
| route | methods | description | Docs |
|---|---|---|---|
|  '/recent-deals' | GET | Show recent searches made by users |  [code](./frontend/src/screens/Home/Grid/RecentDealsGrid.js) |

---
### HotelDetails
|  route | Methods | description  |  Docs |
|---|---|---|---|
|  '/deal?q=hashed-deal-data' | GET | Show hotel details by deal| [code](./frontend/src/screens/HotelDetails/HotelDetails.js) |


## Contributing

Pull requests are welcome. You'll probably find lots of improvements to be made.

Open issues for feedback, requesting features, reporting bugs, or discuss ideas.

## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

