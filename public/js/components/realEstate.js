webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
    _inherits(Listings, _Component);

    function Listings() {
        _classCallCheck(this, Listings);

        var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

        _this.state = {
            name: ''
        };
        _this.loopListings = _this.loopListings.bind(_this);
        return _this;
    }

    _createClass(Listings, [{
        key: 'loopListings',
        value: function loopListings() {
            var _this2 = this;

            var listingsData = this.props.listingsData;


            if (listingsData == undefined || listingsData.length == 0) {
                return "Sorry your filter did not match any listing";
            }

            return listingsData.map(function (listing, index) {
                if (_this2.props.globalState.view == 'box') {
                    return (
                        // THIS IS BOX VIEW
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-3', key: index },
                            _react2.default.createElement(
                                'div',
                                { className: 'listing' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'address' },
                                        listing.address
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'details' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-md-3' },
                                            _react2.default.createElement('div', { className: 'user-img' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-md-9' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'user-details' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'user-name' },
                                                    'Nina Smith'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'post-date' },
                                                    '05/05/2017'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'listing-details' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'floor-space' },
                                                    _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        listing.floorSpace,
                                                        ' ft\xB2'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'bedrooms' },
                                                    _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        listing.rooms,
                                                        ' bedrooms'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'view-btn' },
                                                'View Listing'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'bottom-info' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'price' },
                                        listing.price
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'location' },
                                        _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                                        ' ',
                                        listing.city,
                                        ', ',
                                        listing.state
                                    )
                                )
                            )
                        )
                    );
                } else {
                    // THIS IS LONG VIEW
                    return _react2.default.createElement(
                        'div',
                        { className: 'col-md-12 col-lg-6', key: index },
                        _react2.default.createElement(
                            'div',
                            { className: 'listing' },
                            _react2.default.createElement(
                                'div',
                                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'address' },
                                    listing.address
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'details' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-3' },
                                        _react2.default.createElement('div', { className: 'user-img' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-md-9' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'user-details' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'user-name' },
                                                'Nina Smith'
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'post-date' },
                                                '05/05/2017'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'listing-details' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'floor-space' },
                                                _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    listing.floorSpace,
                                                    ' ft\xB2'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'bedrooms' },
                                                _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    listing.rooms,
                                                    ' bedrooms'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'view-btn' },
                                            'View Listing'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'bottom-info' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'price' },
                                    listing.price
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'location' },
                                    _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                                    ' ',
                                    listing.city,
                                    ', ',
                                    listing.state
                                )
                            )
                        )
                    );
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'listings' },
                _react2.default.createElement(
                    'section',
                    { className: 'search-area' },
                    _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change, placeholder: 'Search by city...' })
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'sortby-area' },
                    _react2.default.createElement(
                        'div',
                        { className: 'results' },
                        this.props.globalState.filteredData.length,
                        ' results found'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sort-options' },
                        _react2.default.createElement(
                            'select',
                            { name: 'sortby', className: 'sortby', onChange: this.props.change },
                            _react2.default.createElement(
                                'option',
                                { value: 'price-dsc' },
                                'Lowest Price'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'price-asc' },
                                'Highest Price'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'view' },
                            _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "long") }),
                            _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "box") })
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'listings-results' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        this.loopListings()
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { id: 'pagination' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'pages' },
                            _react2.default.createElement(
                                'li',
                                null,
                                'Prev'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'active' },
                                '1'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                '2'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                '3'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                '4'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                '5'
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                'Next'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listingsData = [{
    address: '234 grand ave',
    city: 'Ridgewood',
    state: 'NY',
    rooms: 2,
    price: 220000,
    floorSpace: 2000,
    extras: ['elevator', 'gym'],
    homeType: 'Apartment',
    image: 'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4206-28/the-kelvin-apartments-exterior.jpg'
}, {
    address: '14 dixon st',
    city: 'Orlando',
    state: 'FL',
    rooms: 0,
    price: 146000,
    floorSpace: 1100,
    extras: ['pool', 'gym'],
    homeType: 'Studio',
    image: 'https://www.adinahotels.com/wp-content/uploads/sites/4/2016/07/adina-melbourne-flinders-street-apartment-hotel-one-and-two-bedroom-apartment-2-2013.jpg'
}, {
    address: '225 nicey ave',
    city: 'Sacramento',
    state: 'CA',
    rooms: 4,
    price: 366000,
    floorSpace: 3500,
    extras: ['pool'],
    homeType: 'Apartment',
    image: 'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4011-1/moda-apartments-exterior.jpg'
}, {
    address: '187 riley cir',
    city: 'Woodcrest',
    state: 'CHI',
    rooms: 3,
    price: 480000,
    floorSpace: 4000,
    extras: ['elevator', 'gym'],
    homeType: 'Loft',
    image: 'https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2017/01/09/BostonGlobe.com/Lifestyle/Images/doherty_10names04_liv.jpg'
}, {
    address: '16 second st',
    city: 'San Francisco',
    state: 'CA',
    rooms: 1,
    price: 780000,
    floorSpace: 2300,
    extras: ['elevator', 'gym'],
    homeType: 'Room',
    image: 'https://thecollegeinvestor.com/wp-content/uploads/2012/04/Henrietta_Apartment_Building.jpg'
}, {
    address: '1515 sava blvd',
    city: 'Long Beach',
    state: 'CA',
    rooms: 3,
    price: 300000,
    floorSpace: 2500,
    extras: ['pool'],
    homeType: 'Condo',
    image: 'https://www.arlnow.com/wp-content/uploads/2012/03/kettler-dev-cc.jpg'
}, { // Extra listings
    address: '234 grand ave',
    city: 'Ridgewood',
    state: 'NY',
    rooms: 2,
    price: 220000,
    floorSpace: 2000,
    extras: ['elevator', 'gym'],
    homeType: 'Apartment',
    image: 'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4206-28/the-kelvin-apartments-exterior.jpg'
}, {
    address: '14 dixon st',
    city: 'Orlando',
    state: 'FL',
    rooms: 0,
    price: 146000,
    floorSpace: 1100,
    extras: ['pool', 'gym'],
    homeType: 'Studio',
    image: 'https://www.adinahotels.com/wp-content/uploads/sites/4/2016/07/adina-melbourne-flinders-street-apartment-hotel-one-and-two-bedroom-apartment-2-2013.jpg'
}, {
    address: '225 nicey ave',
    city: 'Sacramento',
    state: 'CA',
    rooms: 4,
    price: 366000,
    floorSpace: 3500,
    extras: ['pool'],
    homeType: 'Apartment',
    image: 'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4011-1/moda-apartments-exterior.jpg'
}, {
    address: '187 riley cir',
    city: 'Woodcrest',
    state: 'CHI',
    rooms: 3,
    price: 480000,
    floorSpace: 4000,
    extras: ['elevator', 'gym'],
    homeType: 'Loft',
    image: 'https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2017/01/09/BostonGlobe.com/Lifestyle/Images/doherty_10names04_liv.jpg'
}, {
    address: '16 second st',
    city: 'San Francisco',
    state: 'CA',
    rooms: 1,
    price: 780000,
    floorSpace: 2300,
    extras: ['elevator', 'gym'],
    homeType: 'Room',
    image: 'https://thecollegeinvestor.com/wp-content/uploads/2012/04/Henrietta_Apartment_Building.jpg'
}, {
    address: '1515 sava blvd',
    city: 'Long Beach',
    state: 'CA',
    rooms: 3,
    price: 300000,
    floorSpace: 2500,
    extras: ['pool'],
    homeType: 'Condo',
    image: 'https://www.arlnow.com/wp-content/uploads/2012/03/kettler-dev-cc.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(99);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(100);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(101);

var _listingsData2 = _interopRequireDefault(_listingsData);

var _Footer = __webpack_require__(98);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            name: 'Joe',
            listingsData: _listingsData2.default,
            city: 'All',
            homeType: 'All',
            bedrooms: 0,
            min_price: 0,
            max_price: 10000000,
            min_floor_space: 0,
            max_floor_space: 50000,
            elevator: false,
            finished_basement: false,
            gym: false,
            swimming_pool: false,
            filteredData: _listingsData2.default,
            populateFormsData: '',
            sortby: 'price-dsc',
            view: 'box',
            search: ''
        };
        _this.change = _this.change.bind(_this);
        _this.filteredData = _this.filteredData.bind(_this);
        _this.populateForms = _this.populateForms.bind(_this);
        _this.changeView = _this.changeView.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var listingsData = this.state.listingsData.sort(function (a, b) {
                return a.price - b.price;
            });
            this.setState({
                listingsData: listingsData
            });
        }
    }, {
        key: 'change',
        value: function change(event) {
            var _this2 = this;

            var name = event.target.name;
            var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

            this.setState(_defineProperty({}, name, value), function () {
                console.log(_this2.state);
                _this2.filteredData();
            });
        }
    }, {
        key: 'changeView',
        value: function changeView(viewName) {
            this.setState({
                view: viewName
            });
        }
    }, {
        key: 'filteredData',
        value: function filteredData() {
            var _this3 = this;

            var newData = this.state.listingsData.filter(function (item) {
                return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.bedrooms;
            });

            if (this.state.city != "All") {
                newData = newData.filter(function (item) {
                    return item.city == _this3.state.city;
                });
            }

            if (this.state.homeType != "All") {
                newData = newData.filter(function (item) {
                    return item.homeType == _this3.state.homeType;
                });
            }

            if (this.state.sortby == 'price-dsc') {
                newData = newData.sort(function (a, b) {
                    return a.price - b.price;
                });
            }

            if (this.state.sortby == 'price-asc') {
                newData = newData.sort(function (a, b) {
                    return b.price - a.price;
                });
            }

            if (this.state.search != '') {
                newData = newData.filter(function (item) {
                    var city = item.city.toLowerCase();
                    var searchText = _this3.state.search.toLowerCase();
                    var n = city.match(searchText);

                    if (n != null) {
                        return true;
                    }
                });
            }

            // Filter Checkboxes
            if (this.state.elevator) {
                newData = newData.filter(function (item) {
                    return item.extras.includes('elevator') == _this3.state.elevator;
                });
            }

            if (this.state.swimming_pool) {
                newData = newData.filter(function (item) {
                    return item.extras.includes('pool') == _this3.state.swimming_pool;
                });
            }

            if (this.state.finished_basement) {
                newData = newData.filter(function (item) {
                    return item.extras.includes('basement') == _this3.state.finished_basement;
                });
            }

            if (this.state.gym) {
                newData = newData.filter(function (item) {
                    return item.extras.includes('gym') == _this3.state.gym;
                });
            }

            this.setState({
                filteredData: newData
            });
        }
    }, {
        key: 'populateForms',
        value: function populateForms() {
            // city
            var cities = this.state.listingsData.map(function (item) {
                return item.city;
            });
            cities = new Set(cities);
            cities = [].concat(_toConsumableArray(cities)).sort();

            // homeType
            var homeTypes = this.state.listingsData.map(function (item) {
                return item.homeType;
            });
            homeTypes = new Set(homeTypes);
            homeTypes = [].concat(_toConsumableArray(homeTypes)).sort();

            // bedrooms
            var bedrooms = this.state.listingsData.map(function (item) {
                return item.rooms;
            });
            bedrooms = new Set(bedrooms);
            bedrooms = [].concat(_toConsumableArray(bedrooms)).sort();

            this.setState({
                populateFormsData: {
                    homeTypes: homeTypes,
                    bedrooms: bedrooms,
                    cities: cities
                }
            }, function () {
                // console.log(this.state)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'section',
                    { id: 'content-area' },
                    _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
                    _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData, change: this.change, globalState: this.state, changeView: this.changeView })
                ),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
    _inherits(Filter, _Component);

    function Filter() {
        _classCallCheck(this, Filter);

        var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

        _this.state = {
            name: ''
        };
        _this.cities = _this.cities.bind(_this);
        _this.homeTypes = _this.homeTypes.bind(_this);
        _this.bedrooms = _this.bedrooms.bind(_this);
        return _this;
    }

    _createClass(Filter, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.populateAction();
        }
    }, {
        key: 'cities',
        value: function cities() {
            if (this.props.globalState.populateFormsData.cities != undefined) {
                var cities = this.props.globalState.populateFormsData.cities;

                return cities.map(function (item) {

                    return _react2.default.createElement(
                        'option',
                        { key: item, value: item },
                        item
                    );
                });
            }
        }
    }, {
        key: 'homeTypes',
        value: function homeTypes() {
            if (this.props.globalState.populateFormsData.homeTypes != undefined) {
                var homeTypes = this.props.globalState.populateFormsData.homeTypes;

                return homeTypes.map(function (item) {

                    return _react2.default.createElement(
                        'option',
                        { key: item, value: item },
                        item
                    );
                });
            }
        }
    }, {
        key: 'bedrooms',
        value: function bedrooms() {
            if (this.props.globalState.populateFormsData.bedrooms != undefined) {
                var bedrooms = this.props.globalState.populateFormsData.bedrooms;

                return bedrooms.map(function (item) {

                    return _react2.default.createElement(
                        'option',
                        { key: item, value: item },
                        item,
                        '+ BR'
                    );
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'filter' },
                _react2.default.createElement(
                    'div',
                    { className: 'inside' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Filter'
                    ),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'city' },
                        'City'
                    ),
                    _react2.default.createElement(
                        'select',
                        { name: 'city', className: 'filters city', onChange: this.props.change },
                        _react2.default.createElement(
                            'option',
                            { value: 'All' },
                            'All'
                        ),
                        this.cities()
                    ),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'homeType' },
                        'Home Type'
                    ),
                    _react2.default.createElement(
                        'select',
                        { name: 'homeType', className: 'filters homeType', onChange: this.props.change },
                        _react2.default.createElement(
                            'option',
                            { value: 'All' },
                            'All Homes'
                        ),
                        this.homeTypes()
                    ),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'bedrooms' },
                        'Bedrooms'
                    ),
                    _react2.default.createElement(
                        'select',
                        { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
                        this.bedrooms()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters price' },
                        _react2.default.createElement(
                            'span',
                            { className: 'title' },
                            'Price'
                        ),
                        _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', onChange: this.props.change, value: this.props.globalState.min_price }),
                        _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', onChange: this.props.change, value: this.props.globalState.max_price })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters floor-space' },
                        _react2.default.createElement(
                            'span',
                            { className: 'title' },
                            'Floor Space'
                        ),
                        _react2.default.createElement('input', { type: 'text', name: 'min_floor_space', className: 'min-floor-space', onChange: this.props.change, value: this.props.globalState.min_floor_space }),
                        _react2.default.createElement('input', { type: 'text', name: 'max_floor_space', className: 'max-floor-space', onChange: this.props.change, value: this.props.globalState.max_floor_space })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters extras' },
                        _react2.default.createElement(
                            'span',
                            { className: 'title' },
                            'Extras'
                        ),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'extras' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Elevators'
                            ),
                            _react2.default.createElement('input', { name: 'elevator', value: 'elevator', type: 'checkbox', onChange: this.props.change })
                        ),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'extras' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Swimming Pool'
                            ),
                            _react2.default.createElement('input', { name: 'swimming_pool', value: 'swimming_pool', type: 'checkbox', onChange: this.props.change })
                        ),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'extras' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Finished Basement'
                            ),
                            _react2.default.createElement('input', { name: 'finished_basement', value: 'finished_basement', type: 'checkbox', onChange: this.props.change })
                        ),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'extras' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Gym'
                            ),
                            _react2.default.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox', onChange: this.props.change })
                        )
                    )
                )
            );
        }
    }]);

    return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "footer",
        null,
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            "Twitter: ",
            _react2.default.createElement(
              "a",
              { href: "https://twitter.com/AndreWatts85" },
              "@andrewatts85"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            "Portfolio: ",
            _react2.default.createElement(
              "a",
              { href: "https://andrewatts85.github.io/responsive-portfolio/" },
              _react2.default.createElement(
                "span",
                null,
                "Andre Watts"
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: ''
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'Logo'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Create Ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log In'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ })

},[103]);