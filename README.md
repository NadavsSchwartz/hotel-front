# HotelRevealer
> Find hidden Priceline Hotel deals with a click of a button.

### Table of Contents

- [Description](#description)
- [Dependencies](#dependencies)
- [Run](#Run)
- [Resources](#Resources)
    - [Home Page Component](#HomePage)
    - [Search Results](#SearchResults)
    - [Recent Deals](#RecentDeals)
    - [Hotel Details](#HotelDetails)
- [License](#license)


---

## Description
HotelRevealer was created to help people conveniently attempt to find the hidden hotel behind Priceline's express deals,
helping you save up to 70% of the regular hotel price.

## Dependencies
The following requirements are necessary to run this application:

### Front End:
- Node.js
- React.js
- Redux

### Back End
- Node.js
- Express
- MongoDB

and other libraries. you can see them all within the Package.json file.

### Back End REPO with instructions
[HotelRevealer Back end](https://github.com/NadavsSchwartz/hotel-revealer/tree/main/backend)

## Setup

1. Clone this repository
2. Create an `.env` file and fill it properly ([see below](#configuration)).
3. Install dependencies: `npm install` or `yarn` if you're using yarn.
4. Run for development: `npm run dev` or `yarn dev` if you're using yarn.

### Configuration

For the configuration the following settings have to be added in your `.env`-file:

- **MONGO_URI**: The connection string
- **REACT_APP_GOOGLE_MAP_API_KEY**: Your google map api key
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
Bug reports and pull requests are welcome on GitHub at https://github.com/NadavsSchwartz/hotel-revealer.


## License
The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
---
