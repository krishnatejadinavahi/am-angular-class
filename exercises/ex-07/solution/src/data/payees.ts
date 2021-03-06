/* tslint:disable */
import { Payee } from '../app/payees/Payee';

const payees = [
  {
    "id": "1",
    "version": 1,
    "payeeName": "DCH Mortgages",
    "address": {
      "street": "1285 Rezlog Plaza",
      "city": "Powhatan",
      "state": "RI",
      "zip": "02212"
    },
    "categoryId": "102",
    "image": null,
    "motto": null,
    "active": true
  },
  {
    "id": "2",
    "version": 1,
    "payeeName": "Ill Communication Telephones",
    "address": {
      "street": "1597 Figole Grove",
      "city": "Akron",
      "state": "OH",
      "zip": "66345"
    },
    "categoryId": "106",
    "image": null,
    "motto": null,
    "active": true
  },
  {
    "id": "3",
    "version": 1,
    "payeeName": "Erol's Internet",
    "address": {
      "street": "453 Loma Linda Junction",
      "city": "Kansas City",
      "state": "KS",
      "zip": "60019"
    },
    "categoryId": "106",
    "image": null,
    "motto": null,
    "active": true
  },
  {
    "id": "4",
    "version": 1,
    "payeeName": "Acme Products, Inc",
    "address": {
      "street": "1669 Divided Court",
      "city": "Cheyenne",
      "state": "WY",
      "zip": "48324"
    },
    "categoryId": "103",
    "image": null,
    "motto": null,
    "active": true
  },
  {
    "id": "5",
    "version": 1,
    "payeeName": "Shop-Rite Grocery Store",
    "address": {
      "street": "311 St. Paul Ave.",
      "city": "Baltimore",
      "state": "MD",
      "zip": "08697"
    },
    "categoryId": "103",
    "image": null,
    "motto": null,
    "active": true
  },
  {
    "id": "6",
    "version": 1,
    "payeeName": "Sushi Land",
    "address": {
      "street": "808 Calvert St.",
      "city": "Baltimore",
      "state": "MD",
      "zip": "01848"
    },
    "categoryId": "103",
    "image": null,
    "motto": null,
    "active": true
  },
  {
    "id": "7",
    "version": 1,
    "payeeName": "Worthless Peon Productions",
    "address": {
      "street": "125 Scrub Street",
      "city": "Santa Monica",
      "state": "CA",
      "zip": "90111"
    },
    "categoryId": "104",
    "image": null,
    "motto": null,
    "active": true
  },
  {
    "id": "8",
    "version": 1,
    "payeeName": "The CX Institute",
    "address": {
      "street": "1715 Greymalkin Lane",
      "city": "Westchester",
      "state": "NY",
      "zip": "10047"
    },
    "categoryId": "3",
    "image": null,
    "motto": null,
    "active": true
  },
  {
    "id": "9",
    "version": 1,
    "payeeName": "Gleichner, Lind and Olson, Ltd.",
    "categoryId": "107",
    "address": {
      "street": "142 Wune Street",
      "city": "Deetelu",
      "state": "WV",
      "zip": "80587"
    },
    "image": "/images/animals/9.jpg",
    "motto": "Optimized executive frame",
    "active": true
  },
  {
    "id": "10",
    "version": 1,
    "payeeName": "Klein Cars",
    "address": {
      "street": "1939 Rolfs Pass",
      "city": "Baltimore",
      "state": "MD",
      "zip": "97394"
    },
    "categoryId": "107",
    "image": "/images/technics/4.jpg",
    "motto": "Seamless heuristic process improvement",
    "active": true
  },
  {
    "id": "11",
    "version": 1,
    "payeeName": "Spinka Salon",
    "categoryId": "2",
    "address": {
      "street": "857 Descartes Turnpike",
      "city": "Palomar",
      "state": "CA",
      "zip": "99533"
    },
    "image": "/images/cats/10.jpg",
    "motto": "Monitored encompassing workforce",
    "active": true
  },
  {
    "id": "12",
    "version": 1,
    "payeeName": "Bauch-Stehr Medical Partners",
    "address": {
      "street": "671 York Ave",
      "city": "Baltimore",
      "state": "MD",
      "zip": "54952"
    },
    "categoryId": "105",
    "image": "/images/business/3.jpg",
    "motto": "Versatile optimizing support",
    "active": true
  },
  {
    "id": "13",
    "version": 1,
    "payeeName": "The Senator Theater",
    "address": {
      "street": "1689 North York Rd",
      "city": "Baltimore",
      "state": "MD",
      "zip": "48693"
    },
    "categoryId": "104",
    "image": "/images/business/5.jpg",
    "motto": "Yesterday's movies tomorrow",
    "active": true
  },
  {
    "id": "14",
    "version": 1,
    "payeeName": "Ziener & Ratke, Pediatrics",
    "address": {
      "street": "1873 Razif Loop",
      "city": "Fonzopo",
      "state": "FL",
      "zip": "55902"
    },
    "categoryId": "105",
    "image": "/images/business/2.jpg",
    "motto": "Multi-lateral grid-enabled toolset",
    "active": true
  },
  {
    "id": "15",
    "version": 1,
    "payeeName": "Heathcote Inc",
    "address": {
      "street": "798 Defarge Point",
      "city": "Tajuwbi",
      "state": "WI",
      "zip": "88464"
    },
    "categoryId": "103",
    "image": "/images/business/3.jpg",
    "motto": "Secured web-enabled Graphical Clothing Interface",
    "active": true
  },
  {
    "id": "16",
    "version": 1,
    "payeeName": "Davis, Muller and Marvin",
    "address": {
      "street": "319 Nazmo Road",
      "city": "Sohcutzeh",
      "state": "VT",
      "zip": "09725"
    },
    "categoryId": "104",
    "image": "/images/technics/1.jpg",
    "motto": "Persevering regional moratorium",
    "active": true
  },
  {
    "id": "17",
    "version": 1,
    "payeeName": "Deckow-Hand",
    "address": {
      "street": "1622 Avena Circle",
      "city": "Nuebaheh",
      "state": "MA",
      "zip": "52038"
    },
    "categoryId": "106",
    "image": "/images/animals/9.jpg",
    "motto": "Cloned directional attitude",
    "active": true
  },
  {
    "id": "18",
    "version": 1,
    "payeeName": "Watsica Design",
    "address": {
      "street": "289 Vaewi Avenue",
      "city": "Dorgaec",
      "state": "WY",
      "zip": "19966"
    },
    "categoryId": "102",
    "image": "/images/business/5.jpg",
    "motto": "Streamlined full-range budgetary management",
    "active": true
  },
  {
    "id": "19",
    "version": 1,
    "payeeName": "Wayne Enterprises",
    "categoryId": "107",
    "address": {
      "street": "319 Thomas Wayne Road",
      "city": "Gotham",
      "state": "NY",
      "zip": "10939"
    },
    "image": "/images/technics/1.jpg",
    "motto": "Persevering regional moratorium",
    "active": true
  },
  {
    "id": "20",
    "version": 1,
    "payeeName": "Stark Electronics",
    "categoryId": "3",
    "address": {
      "street": "1146 Kubo Parkway",
      "city": "Cupertino",
      "state": "CA",
      "zip": "96412"
    },
    "image": "/images/nature/3.jpg",
    "motto": "Function-based logistical paradigm",
    "active": true
  },
  {
    "id": "21",
    "version": 1,
    "payeeName": "Tyrell Corporation",
    "categoryId": "2",
    "address": {
      "street": "841 Pewuj Court",
      "city": "Netseyev",
      "state": "NY",
      "zip": "86629"
    },
    "image": "/images/technics/7.jpg",
    "motto": "Diverse optimizing paradigm",
    "active": true
  },
  {
    "id": "22",
    "version": 1,
    "payeeName": "Yoyodyne Propulsion Systems",
    "categoryId": "1",
    "address": {
      "street": "16 Blue Blazer Way",
      "city": "Grover's Mill",
      "state": "NJ",
      "zip": "07561"
    },
    "image": "/images/cats/3.jpg",
    "motto": "Synchronised systemic internet solution",
    "active": true
  },
  {
    "id": "23",
    "version": 1,
    "payeeName": "Goodman, Lieber, Kurtzberg, Holliway",
    "categoryId": "1",
    "address": {
      "street": "16 W 12 St.",
      "city": "New York",
      "state": "NY",
      "zip": "10015"
    },
    "image": "/images/animals/9.jpg",
    "motto": null,
    "active": true
  },
  {
    "id": "24",
    "version": 1,
    "payeeName": "Rodriguez Outfitting",
    "categoryId": "101",
    "address": {
      "street": "587 Ipobak Terrace",
      "city": "Alexandria",
      "state": "VA",
      "zip": "16097"
    },
    "image": "/images/nature/6.jpg",
    "motto": "Operative maximized matrices",
    "active": true
  },
  {
    "id": "25",
    "version": 1,
    "payeeName": "Tower Shields",
    "categoryId": "101",
    "address": {
      "street": "289 Vaewi Avenue",
      "city": "Dorkachek",
      "state": "WY",
      "zip": "19966"
    },
    "image": "/images/business/5.jpg",
    "motto": "Streamlined full-range budgetary management",
    "active": true
  },
  {
    "id": "26",
    "version": 1,
    "payeeName": "Cash Withdrawal",
    "categoryId": "108",
    "active": true
  }
] as Payee[];

export {payees};
