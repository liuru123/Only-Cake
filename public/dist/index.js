webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(325);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactRouter = __webpack_require__(173);

	var _CakeDetailContainer = __webpack_require__(236);

	var _CakeDetailContainer2 = _interopRequireDefault(_CakeDetailContainer);

	var _OrderListContainer = __webpack_require__(261);

	var _OrderListContainer2 = _interopRequireDefault(_OrderListContainer);

	var _CakeList = __webpack_require__(265);

	var _CakeList2 = _interopRequireDefault(_CakeList);

	var _ = __webpack_require__(269);

	var _2 = _interopRequireDefault(_);

	var _BrandStory = __webpack_require__(270);

	var _BrandStory2 = _interopRequireDefault(_BrandStory);

	var _OrderList = __webpack_require__(263);

	var _OrderList2 = _interopRequireDefault(_OrderList);

	var _ConfirmPayContainer = __webpack_require__(271);

	var _ConfirmPayContainer2 = _interopRequireDefault(_ConfirmPayContainer);

	var _personalInfo = __webpack_require__(274);

	var _personalInfo2 = _interopRequireDefault(_personalInfo);

	var _CollectionContainer = __webpack_require__(277);

	var _CollectionContainer2 = _interopRequireDefault(_CollectionContainer);

	var _LogIn = __webpack_require__(280);

	var _LogIn2 = _interopRequireDefault(_LogIn);

	var _SlideShow = __webpack_require__(283);

	var _SlideShow2 = _interopRequireDefault(_SlideShow);

	var _App = __webpack_require__(284);

	var _App2 = _interopRequireDefault(_App);

	var _ValidLogin = __webpack_require__(285);

	var _ValidLogin2 = _interopRequireDefault(_ValidLogin);

	var _Contact = __webpack_require__(291);

	var _Contact2 = _interopRequireDefault(_Contact);

	var _AddTodo = __webpack_require__(292);

	var _AddTodo2 = _interopRequireDefault(_AddTodo);

	var _reducers = __webpack_require__(295);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _Exclusive = __webpack_require__(306);

	var _Exclusive2 = _interopRequireDefault(_Exclusive);

	var _PersonCenter = __webpack_require__(307);

	var _PersonCenter2 = _interopRequireDefault(_PersonCenter);

	var _redux = __webpack_require__(244);

	var _reactRedux = __webpack_require__(237);

	var _cakeRequestMiddleware = __webpack_require__(309);

	var _cakeRequestMiddleware2 = _interopRequireDefault(_cakeRequestMiddleware);

	var _signUpRequestMiddleware = __webpack_require__(315);

	var _signUpRequestMiddleware2 = _interopRequireDefault(_signUpRequestMiddleware);

	var _cakeDetailRequestMiddleware = __webpack_require__(316);

	var _cakeDetailRequestMiddleware2 = _interopRequireDefault(_cakeDetailRequestMiddleware);

	var _loginRequestMiddleware = __webpack_require__(317);

	var _loginRequestMiddleware2 = _interopRequireDefault(_loginRequestMiddleware);

	var _orderRequestMiddleware = __webpack_require__(318);

	var _orderRequestMiddleware2 = _interopRequireDefault(_orderRequestMiddleware);

	var _confirmOrderMiddleware = __webpack_require__(319);

	var _confirmOrderMiddleware2 = _interopRequireDefault(_confirmOrderMiddleware);

	var _validLoginRequestMiddleware = __webpack_require__(320);

	var _validLoginRequestMiddleware2 = _interopRequireDefault(_validLoginRequestMiddleware);

	var _validLogin = __webpack_require__(289);

	var _getOrderInfoMiddleware = __webpack_require__(321);

	var _getOrderInfoMiddleware2 = _interopRequireDefault(_getOrderInfoMiddleware);

	var _confirmPayMiddleware = __webpack_require__(322);

	var _confirmPayMiddleware2 = _interopRequireDefault(_confirmPayMiddleware);

	var _personalInfoMiddleware = __webpack_require__(323);

	var _personalInfoMiddleware2 = _interopRequireDefault(_personalInfoMiddleware);

	var _collectionMiddleware = __webpack_require__(324);

	var _collectionMiddleware2 = _interopRequireDefault(_collectionMiddleware);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// eslint-disable-line no-unused-vars
	var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_cakeRequestMiddleware2.default, _loginRequestMiddleware2.default, _signUpRequestMiddleware2.default, _cakeDetailRequestMiddleware2.default, _orderRequestMiddleware2.default, _getOrderInfoMiddleware2.default, _confirmPayMiddleware2.default, _confirmOrderMiddleware2.default, _validLoginRequestMiddleware2.default, _personalInfoMiddleware2.default, _collectionMiddleware2.default));

	store.dispatch({
	  type: 'INIT'
	});

	function validateLogin() {
	  store.dispatch((0, _validLogin.validLogin)());
	}

	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _ValidLogin2.default },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: _App2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _LogIn2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/cakelist', component: _CakeList2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/brandstory', component: _BrandStory2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/slideshow', component: _SlideShow2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/presoncenter', component: _PersonCenter2.default, onEnter: validateLogin }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/personalInfo', component: _personalInfo2.default, onEnter: validateLogin }),
	      _react2.default.createElement(_reactRouter.Router, { path: '/personalCollection', component: _CollectionContainer2.default, onEnter: validateLogin }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/exclusive', component: _Exclusive2.default, onEnter: validateLogin }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/orderlist', component: _OrderList2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/confirmpay/:id', component: _ConfirmPayContainer2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _AddTodo2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _Contact2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/404', component: _2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/cakedetail/:id', component: _CakeDetailContainer2.default, onEnter: validateLogin }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/orderlist/:id', component: _OrderListContainer2.default, onEnter: validateLogin })
	    )
	  )
	), document.getElementById('app'));

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

	var _RouteUtils = __webpack_require__(174);

	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});

	var _PropTypes2 = __webpack_require__(175);

	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.routerShape;
	  }
	});

	var _PatternUtils = __webpack_require__(180);

	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});

	var _Router2 = __webpack_require__(182);

	var _Router3 = _interopRequireDefault(_Router2);

	var _Link2 = __webpack_require__(213);

	var _Link3 = _interopRequireDefault(_Link2);

	var _IndexLink2 = __webpack_require__(214);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	var _withRouter2 = __webpack_require__(215);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	var _IndexRedirect2 = __webpack_require__(217);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	var _IndexRoute2 = __webpack_require__(219);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	var _Redirect2 = __webpack_require__(218);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(220);

	var _Route3 = _interopRequireDefault(_Route2);

	var _History2 = __webpack_require__(221);

	var _History3 = _interopRequireDefault(_History2);

	var _Lifecycle2 = __webpack_require__(222);

	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

	var _RouteContext2 = __webpack_require__(223);

	var _RouteContext3 = _interopRequireDefault(_RouteContext2);

	var _useRoutes2 = __webpack_require__(224);

	var _useRoutes3 = _interopRequireDefault(_useRoutes2);

	var _RouterContext2 = __webpack_require__(210);

	var _RouterContext3 = _interopRequireDefault(_RouterContext2);

	var _RoutingContext2 = __webpack_require__(225);

	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	var _match2 = __webpack_require__(226);

	var _match3 = _interopRequireDefault(_match2);

	var _useRouterHistory2 = __webpack_require__(230);

	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

	var _applyRouterMiddleware2 = __webpack_require__(231);

	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

	var _browserHistory2 = __webpack_require__(232);

	var _browserHistory3 = _interopRequireDefault(_browserHistory2);

	var _hashHistory2 = __webpack_require__(235);

	var _hashHistory3 = _interopRequireDefault(_hashHistory2);

	var _createMemoryHistory2 = __webpack_require__(227);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Router = _Router3.default; /* components */

	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;

	/* components (configuration) */

	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;

	/* mixins */

	exports.History = _History3.default;
	exports.Lifecycle = _Lifecycle3.default;
	exports.RouteContext = _RouteContext3.default;

	/* utils */

	exports.useRoutes = _useRoutes3.default;
	exports.RouterContext = _RouterContext3.default;
	exports.RoutingContext = _RoutingContext3.default;
	exports.PropTypes = _PropTypes3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

	/* histories */

	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;

	var _react = __webpack_require__(2);

	var _deprecateObjectProperties = __webpack_require__(176);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _InternalPropTypes = __webpack_require__(179);

	var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});

	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

	// Deprecated stuff below:

	var falsy = exports.falsy = InternalPropTypes.falsy;
	var history = exports.history = InternalPropTypes.history;
	var location = exports.location = locationShape;
	var component = exports.component = InternalPropTypes.component;
	var components = exports.components = InternalPropTypes.components;
	var route = exports.route = InternalPropTypes.route;
	var routes = exports.routes = InternalPropTypes.routes;
	var router = exports.router = routerShape;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var deprecatePropType = function deprecatePropType(propType, message) {
	      return function () {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	        return propType.apply(undefined, arguments);
	      };
	    };

	    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
	      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
	    };

	    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
	      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
	    };

	    exports.falsy = falsy = deprecateInternalPropType(falsy);
	    exports.history = history = deprecateInternalPropType(history);
	    exports.component = component = deprecateInternalPropType(component);
	    exports.components = components = deprecateInternalPropType(components);
	    exports.route = route = deprecateInternalPropType(route);
	    exports.routes = routes = deprecateInternalPropType(routes);

	    exports.location = location = deprecateRenamedPropType(location, 'location');
	    exports.router = router = deprecateRenamedPropType(router, 'router');
	  })();
	}

	var defaultExport = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route,
	  // For some reason, routes was never here.
	  router: router
	};

	if (process.env.NODE_ENV !== 'production') {
	  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
	}

	exports.default = defaultExport;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.canUseMembrane = undefined;

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseMembrane = exports.canUseMembrane = false;

	// No-op by default.
	var deprecateObjectProperties = function deprecateObjectProperties(object) {
	  return object;
	};

	if (process.env.NODE_ENV !== 'production') {
	  try {
	    if (Object.defineProperty({}, 'x', {
	      get: function get() {
	        return true;
	      }
	    }).x) {
	      exports.canUseMembrane = canUseMembrane = true;
	    }
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */

	  if (canUseMembrane) {
	    deprecateObjectProperties = function deprecateObjectProperties(object, message) {
	      // Wrap the deprecated object in a membrane to warn on property access.
	      var membrane = {};

	      var _loop = function _loop(prop) {
	        if (!Object.prototype.hasOwnProperty.call(object, prop)) {
	          return 'continue';
	        }

	        if (typeof object[prop] === 'function') {
	          // Can't use fat arrow here because of use of arguments below.
	          membrane[prop] = function () {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop].apply(object, arguments);
	          };
	          return 'continue';
	        }

	        // These properties are non-enumerable to prevent React dev tools from
	        // seeing them and causing spurious warnings when accessing them. In
	        // principle this could be done with a proxy, but support for the
	        // ownKeys trap on proxies is not universal, even among browsers that
	        // otherwise support proxies.
	        Object.defineProperty(membrane, prop, {
	          get: function get() {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop];
	          }
	        });
	      };

	      for (var prop in object) {
	        var _ret = _loop(prop);

	        if (_ret === 'continue') continue;
	      }

	      return membrane;
	    };
	  }
	}

	exports.default = deprecateObjectProperties;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;

	var _warning = __webpack_require__(178);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }

	    warned[message] = true;
	  }

	  message = '[react-router] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}

	function _resetWarned() {
	  warned = {};
	}

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;

	var _react = __webpack_require__(2);

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});

	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = Object.create(null);

	function compilePattern(pattern) {
	  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }

	  var _compilePattern2 = compilePattern(pattern);

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;


	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }

	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }

	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);

	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }

	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }

	  var paramNames = match.paramNames;
	  var paramValues = match.paramValues;

	  var params = {};

	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });

	  return params;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createHashHistory = __webpack_require__(183);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _useQueries = __webpack_require__(199);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _createTransitionManager = __webpack_require__(202);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _InternalPropTypes = __webpack_require__(179);

	var _RouterContext = __webpack_require__(210);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _RouteUtils = __webpack_require__(174);

	var _RouterUtils = __webpack_require__(212);

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function isDeprecatedHistory(history) {
	  return !history || !history.__v2_compatible__;
	}

	/* istanbul ignore next: sanity check */
	function isUnsupportedHistory(history) {
	  // v3 histories expose getCurrentLocation, but aren't currently supported.
	  return history && history.getCurrentLocation;
	}

	var _React$PropTypes = _react2.default.PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = _react2.default.createClass({
	  displayName: 'Router',


	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,

	    // Deprecated:
	    parseQueryString: func,
	    stringifyQuery: func,

	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    var _props = this.props;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;

	    var _createRouterObjects = this.createRouterObjects();

	    var history = _createRouterObjects.history;
	    var transitionManager = _createRouterObjects.transitionManager;
	    var router = _createRouterObjects.router;


	    this._unlisten = transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });

	    this.history = history;
	    this.router = router;
	  },
	  createRouterObjects: function createRouterObjects() {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext;
	    }

	    var history = this.props.history;
	    var _props2 = this.props;
	    var routes = _props2.routes;
	    var children = _props2.children;


	    !!isUnsupportedHistory(history) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v3.x. ' + 'This version of React Router is not compatible with v3 history ' + 'objects. Please use history v2.x instead.') : (0, _invariant2.default)(false) : void 0;

	    if (isDeprecatedHistory(history)) {
	      history = this.wrapDeprecatedHistory(history);
	    }

	    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	    return { history: routingHistory, transitionManager: transitionManager, router: router };
	  },
	  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
	    var _props3 = this.props;
	    var parseQueryString = _props3.parseQueryString;
	    var stringifyQuery = _props3.stringifyQuery;


	    var createHistory = void 0;
	    if (history) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
	      createHistory = function createHistory() {
	        return history;
	      };
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
	      createHistory = _createHashHistory2.default;
	    }

	    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
	  },


	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props4 = this.props;
	    var createElement = _props4.createElement;
	    var render = _props4.render;

	    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return render(_extends({}, props, {
	      history: this.history,
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});

	exports.default = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(184);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(185);

	var _PathUtils = __webpack_require__(186);

	var _ExecutionEnvironment = __webpack_require__(187);

	var _DOMUtils = __webpack_require__(188);

	var _DOMStateStorage = __webpack_require__(189);

	var _createDOMHistory = __webpack_require__(190);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();

	  if (isAbsolutePath(path)) return true;

	  _DOMUtils.replaceHashPath('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}

	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	var DefaultQueryKey = '_k';

	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

	  var queryKey = options.queryKey;

	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();

	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);

	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

	      transitionTo(getCurrentLocation());
	    }

	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    var path = (basename || '') + pathname + search;

	    if (queryKey) {
	      path = addQueryStringValueToPath(path, queryKey, key);
	      _DOMStateStorage.saveState(key, state);
	    } else {
	      // Drop key and state.
	      location.key = location.state = null;
	    }

	    var currentHash = _DOMUtils.getHashPath();

	    if (action === _Actions.PUSH) {
	      if (currentHash !== path) {
	        window.location.hash = path;
	      } else {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
	      }
	    } else if (currentHash !== path) {
	      // REPLACE
	      _DOMUtils.replaceHashPath(path);
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopHashChangeListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function push(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.push(location);
	  }

	  function replace(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replace(location);
	  }

	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

	  function go(n) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

	    history.go(n);
	  }

	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopHashChangeListener();
	  }

	  // deprecated
	  function pushState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.pushState(state, path);
	  }

	  // deprecated
	  function replaceState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replaceState(state, path);
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    push: push,
	    replace: replace,
	    go: go,
	    createHref: createHref,

	    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
	    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
	    pushState: pushState, // deprecated - warning is in createHistory
	    replaceState: replaceState // deprecated - warning is in createHistory
	  });
	}

	exports['default'] = createHashHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 185 */
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.extractPath = extractPath;
	exports.parsePath = parsePath;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(184);

	var _warning2 = _interopRequireDefault(_warning);

	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  return string.substring(match[0].length);
	}

	function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 187 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 188 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*eslint-disable no-empty */
	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(184);

	var _warning2 = _interopRequireDefault(_warning);

	var KeyPrefix = '@@History/';
	var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];

	var SecurityError = 'SecurityError';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

	      return;
	    }

	    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

	      return;
	    }

	    throw error;
	  }
	}

	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

	      return null;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(187);

	var _DOMUtils = __webpack_require__(188);

	var _createHistory = __webpack_require__(191);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(184);

	var _warning2 = _interopRequireDefault(_warning);

	var _deepEqual = __webpack_require__(192);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _PathUtils = __webpack_require__(186);

	var _AsyncUtils = __webpack_require__(195);

	var _Actions = __webpack_require__(185);

	var _createLocation2 = __webpack_require__(196);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _runTransitionHook = __webpack_require__(197);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(198);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var getUserConfirmation = options.getUserConfirmation;
	  var keyLength = options.keyLength;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];

	  function listenBefore(hook) {
	    transitionHooks.push(hook);

	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }

	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function listen(listener) {
	    changeListeners.push(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);

	          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }

	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;

	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;

	    var result = pathname;

	    if (search) result += search;

	    if (hash) result += hash;

	    return result;
	  }

	  function createHref(location) {
	    return createPath(location);
	  }

	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

	    if (typeof action === 'object') {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      location = _extends({}, location, { state: action });

	      action = key;
	      key = arguments[3] || createKey();
	    }

	    return _createLocation3['default'](location, action, key);
	  }

	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    push(_extends({ state: state }, path));
	  }

	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    replace(_extends({ state: state }, path));
	  }

	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,

	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(193);
	var isArguments = __webpack_require__(194);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 193 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 194 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 195 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = undefined;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(_slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(184);

	var _warning2 = _interopRequireDefault(_warning);

	var _Actions = __webpack_require__(185);

	var _PathUtils = __webpack_require__(186);

	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  if (typeof location === 'string') location = _PathUtils.parsePath(location);

	  if (typeof action === 'object') {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	    location = _extends({}, location, { state: action });

	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }

	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = createLocation;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(184);

	var _warning2 = _interopRequireDefault(_warning);

	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}

	exports['default'] = runTransitionHook;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(184);

	var _warning2 = _interopRequireDefault(_warning);

	function deprecate(fn, message) {
	  return function () {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
	    return fn.apply(this, arguments);
	  };
	}

	exports['default'] = deprecate;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(184);

	var _warning2 = _interopRequireDefault(_warning);

	var _queryString = __webpack_require__(200);

	var _runTransitionHook = __webpack_require__(197);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(186);

	var _deprecate = __webpack_require__(198);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var SEARCH_BASE_KEY = '$searchBase';

	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}

	var defaultParseQueryString = _queryString.parse;

	function isNestedObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;

	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }

	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.

	      return location;
	    }

	    function appendQuery(location, query) {
	      var _extends2;

	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var queryString = query ? stringifyQuery(query) : '';
	      if (!searchBaseSpec && !queryString) {
	        return location;
	      }

	      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }

	      var search = searchBase;
	      if (queryString) {
	        search += (search ? '&' : '?') + queryString;
	      }

	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }

	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }

	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }

	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }

	    function createPath(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;

	      return history.createPath(appendQuery(location, query || location.query));
	    }

	    function createHref(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;

	      return history.createHref(appendQuery(location, query || location.query));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
	      if (location.query) {
	        fullLocation.query = location.query;
	      }
	      return addQuery(fullLocation);
	    }

	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path, { query: query }));
	    }

	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path, { query: query }));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(201);

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return {};
		}

		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return key;
			}

			if (Array.isArray(val)) {
				return val.slice().sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}

			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 201 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createTransitionManager;

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _Actions = __webpack_require__(185);

	var _computeChangedRoutes2 = __webpack_require__(203);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(204);

	var _isActive2 = __webpack_require__(206);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(207);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(209);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}

	function createTransitionManager(history, routes) {
	  var state = {};

	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location) {
	    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    var indexOnly = void 0;
	    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
	      indexOnly = deprecatedIndexOnly || false;
	    } else {
	      location = history.createLocation(location);
	      indexOnly = indexOnlyOrDeprecatedQuery;
	    }

	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }

	  function createLocationFromRedirectInfo(location) {
	    return history.createLocation(location, _Actions.REPLACE);
	  }

	  var partialNextState = void 0;

	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }

	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);

	    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	    var changeRoutes = _computeChangedRoutes.changeRoutes;
	    var enterRoutes = _computeChangedRoutes.enterRoutes;


	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);

	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });

	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }

	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, createLocationFromRedirectInfo(redirectInfo));
	    }
	  }

	  var RouteGuid = 1;

	  function getRouteID(route) {
	    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }

	  var RouteHooks = Object.create(null);

	  function getRouteHooksForRoutes(routes) {
	    return routes.reduce(function (hooks, route) {
	      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	      return hooks;
	    }, []);
	  }

	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }

	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });

	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }

	      callback(result);
	    });
	  }

	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);

	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }

	      return message;
	    }
	  }

	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;

	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route, false);
	    if (!routeID) {
	      return;
	    }

	    delete RouteHooks[routeID];

	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }

	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }

	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    // TODO: Warn if they register for a route that isn't currently
	    // active. They're probably doing something wrong, like re-creating
	    // route objects on every location change.
	    var routeID = getRouteID(route);
	    var hooks = RouteHooks[routeID];

	    if (!hooks) {
	      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

	      RouteHooks[routeID] = [hook];

	      if (thereWereNoRouteHooks) {
	        // setup transition & beforeunload hooks
	        unlistenBefore = history.listenBefore(transitionHook);

	        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	      }
	    } else {
	      if (hooks.indexOf(hook) === -1) {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;

	        hooks.push(hook);
	      }
	    }

	    return function () {
	      var hooks = RouteHooks[routeID];

	      if (hooks) {
	        var newHooks = hooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (newHooks.length === 0) {
	          removeListenBeforeHooksForRoute(route);
	        } else {
	          RouteHooks[routeID] = newHooks;
	        }
	      }
	    };
	  }

	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    // TODO: Only use a single history listener. Otherwise we'll
	    // end up with multiple concurrent calls to match.
	    return history.listen(function (location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.transitionTo(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    });
	  }

	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}

	//export default useRoutes

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(180);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });

	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();

	      enterRoutes = [];
	      changeRoutes = [];

	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(205);

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createTransitionHook(hook, route, asyncArity) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    hook.apply(route, args);

	    if (hook.length < asyncArity) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));

	    return hooks;
	  }, []);
	}

	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
	    return hooks;
	  }, []);
	}

	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }

	  var redirectInfo = void 0;
	  function replace(location, deprecatedPathname, deprecatedQuery) {
	    if (deprecatedPathname) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      redirectInfo = {
	        pathname: deprecatedPathname,
	        query: deprecatedQuery,
	        state: location
	      };

	      return;
	    }

	    redirectInfo = location;
	  }

	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](state, nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes, prevState) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 205 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isActive;

	var _PatternUtils = __webpack_require__(180);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }

	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }

	  return currentPathname === pathname;
	}

	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }

	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }

	  return false;
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname;
	  var query = _ref.query;

	  if (currentLocation == null) return false;

	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }

	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(205);

	var _makeStateWithLocation = __webpack_require__(208);

	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }

	  var getComponent = route.getComponent || route.getComponents;
	  if (!getComponent) {
	    callback();
	    return;
	  }

	  var location = nextState.location;

	  var nextStateWithLocation = (0, _makeStateWithLocation2.default)(nextState, location);

	  getComponent.call(route, nextStateWithLocation, callback);
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}

	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = makeStateWithLocation;

	var _deprecateObjectProperties = __webpack_require__(176);

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function makeStateWithLocation(state, location) {
	  if (process.env.NODE_ENV !== 'production' && _deprecateObjectProperties.canUseMembrane) {
	    var stateWithLocation = _extends({}, state);

	    // I don't use deprecateObjectProperties here because I want to keep the
	    // same code path between development and production, in that we just
	    // assign extra properties to the copy of the state object in both cases.

	    var _loop = function _loop(prop) {
	      if (!Object.prototype.hasOwnProperty.call(location, prop)) {
	        return 'continue';
	      }

	      Object.defineProperty(stateWithLocation, prop, {
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties directly from the first argument to `getComponent`, `getComponents`, `getChildRoutes`, and `getIndexRoute` is deprecated. That argument is now the router state (`nextState` or `partialNextState`) rather than the location. To access the location, use `nextState.location` or `partialNextState.location`.') : void 0;
	          return location[prop];
	        }
	      });
	    };

	    for (var prop in location) {
	      var _ret = _loop(prop);

	      if (_ret === 'continue') continue;
	    }

	    return stateWithLocation;
	  }

	  return _extends({}, state, location);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = matchRoutes;

	var _AsyncUtils = __webpack_require__(205);

	var _makeStateWithLocation = __webpack_require__(208);

	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

	var _PatternUtils = __webpack_require__(180);

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _RouteUtils = __webpack_require__(174);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }

	  var sync = true,
	      result = void 0;

	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };

	  var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

	  route.getChildRoutes(partialNextStateWithLocation, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }

	    callback(error, childRoutes);
	  });

	  sync = false;
	  return result; // Might be undefined.
	}

	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };

	    var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

	    route.getIndexRoute(partialNextStateWithLocation, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });

	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }

	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret2 = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];

	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _deprecateObjectProperties = __webpack_require__(176);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _getRouteParams = __webpack_require__(211);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _RouteUtils = __webpack_require__(174);

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',


	  propTypes: {
	    history: object,
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },


	  childContextTypes: {
	    history: object,
	    location: object.isRequired,
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    var _props = this.props;
	    var router = _props.router;
	    var history = _props.history;
	    var location = _props.location;

	    if (!router) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;

	      router = _extends({}, history, {
	        setRouteLeaveHook: history.listenBeforeLeavingRoute
	      });
	      delete router.listenBeforeLeavingRoute;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
	    }

	    return { history: history, location: location, router: router };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }

	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

	    return element;
	  }
	});

	exports.default = RouterContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(180);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });

	  return routeParams;
	}

	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createRouterObject = createRouterObject;
	exports.createRoutingHistory = createRoutingHistory;

	var _deprecateObjectProperties = __webpack_require__(176);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createRouterObject(history, transitionManager) {
	  return _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });
	}

	// deprecated
	function createRoutingHistory(history, transitionManager) {
	  history = _extends({}, history, transitionManager);

	  if (process.env.NODE_ENV !== 'production') {
	    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
	  }

	  return history;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PropTypes = __webpack_require__(175);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	var oneOfType = _React$PropTypes.oneOfType;


	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}

	function createLocationDescriptor(to, _ref) {
	  var query = _ref.query;
	  var hash = _ref.hash;
	  var state = _ref.state;

	  if (query || hash || state) {
	    return { pathname: to, query: query, hash: hash, state: state };
	  }

	  return to;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',


	  contextTypes: {
	    router: _PropTypes.routerShape
	  },

	  propTypes: {
	    to: oneOfType([string, object]).isRequired,
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    if (this.props.onClick) this.props.onClick(event);

	    if (event.defaultPrevented) return;

	    !this.context.router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    // If target prop is set (e.g. to "_blank"), let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) return;

	    event.preventDefault();

	    var _props = this.props;
	    var to = _props.to;
	    var query = _props.query;
	    var hash = _props.hash;
	    var state = _props.state;

	    var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

	    this.context.router.push(location);
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;

	    // Ignore if rendered outside the context of router, simplifies unit testing.
	    var router = this.context.router;


	    if (router) {
	      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	      props.href = router.createHref(location);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(location, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});

	exports.default = Link;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(213);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});

	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = withRouter;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(216);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _PropTypes = __webpack_require__(175);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function withRouter(WrappedComponent) {
	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',

	    contextTypes: { router: _PropTypes.routerShape },
	    render: function render() {
	      return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { router: this.context.router }));
	    }
	  });

	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;

	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];

/***/ },
/* 216 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Redirect = __webpack_require__(218);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _InternalPropTypes = __webpack_require__(179);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */

	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(174);

	var _PatternUtils = __webpack_require__(180);

	var _InternalPropTypes = __webpack_require__(179);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */

	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location;
	        var params = nextState.params;


	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }

	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };

	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';

	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';

	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	        if (pattern.indexOf('/') === 0) break;
	      }

	      return '/' + parentPattern;
	    }
	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(174);

	var _InternalPropTypes = __webpack_require__(179);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react2.default.PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */

	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(174);

	var _InternalPropTypes = __webpack_require__(179);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */

	var Route = _react2.default.createClass({
	  displayName: 'Route',


	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },

	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _InternalPropTypes = __webpack_require__(179);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {

	  contextTypes: {
	    history: _InternalPropTypes.history
	  },

	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
	    this.history = this.context.history;
	  }
	};

	exports.default = History;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var object = _react2.default.PropTypes.object;

	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */

	var Lifecycle = {

	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },

	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },

	  componentDidMount: function componentDidMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
	    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;

	    var route = this.props.route || this.context.route;

	    !route ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;

	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }
	};

	exports.default = Lifecycle;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var object = _react2.default.PropTypes.object;

	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */

	var RouteContext = {

	  propTypes: {
	    route: object.isRequired
	  },

	  childContextTypes: {
	    route: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
	  }
	};

	exports.default = RouteContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _useQueries = __webpack_require__(199);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _createTransitionManager = __webpack_require__(202);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;

	  return function () {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var routes = _ref.routes;

	    var options = _objectWithoutProperties(_ref, ['routes']);

	    var history = (0, _useQueries2.default)(createHistory)(options);
	    var transitionManager = (0, _createTransitionManager2.default)(history, routes);
	    return _extends({}, history, transitionManager);
	  };
	}

	exports.default = useRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(210);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(177);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RoutingContext = _react2.default.createClass({
	  displayName: 'RoutingContext',
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
	  },
	  render: function render() {
	    return _react2.default.createElement(_RouterContext2.default, this.props);
	  }
	});

	exports.default = RoutingContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _createMemoryHistory = __webpack_require__(227);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _createTransitionManager = __webpack_require__(202);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _RouteUtils = __webpack_require__(174);

	var _RouterUtils = __webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history;
	  var routes = _ref.routes;
	  var location = _ref.location;

	  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

	  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

	  var unlisten = void 0;

	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    // Pick up the location from the history via synchronous history.listen
	    // call if needed.
	    unlisten = history.listen(function (historyLocation) {
	      location = historyLocation;
	    });
	  }

	  var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	  history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation, nextState && _extends({}, nextState, {
	      history: history,
	      router: router,
	      matchContext: { history: history, transitionManager: transitionManager, router: router }
	    }));

	    // Defer removing the listener to here to prevent DOM histories from having
	    // to unwind DOM event listeners unnecessarily, in case callback renders a
	    // <Router> and attaches another history listener.
	    if (unlisten) {
	      unlisten();
	    }
	  });
	}

	exports.default = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = createMemoryHistory;

	var _useQueries = __webpack_require__(199);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(228);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	var _createMemoryHistory = __webpack_require__(229);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useRoutes` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  history.__v2_compatible__ = true;
	  return history;
	}
	module.exports = exports['default'];

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(184);

	var _warning2 = _interopRequireDefault(_warning);

	var _ExecutionEnvironment = __webpack_require__(187);

	var _PathUtils = __webpack_require__(186);

	var _runTransitionHook = __webpack_require__(197);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(198);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var basename = options.basename;

	    var checkedBaseHref = false;

	    function checkBaseHref() {
	      if (checkedBaseHref) {
	        return;
	      }

	      // Automatically use the value of <base href> in HTML
	      // documents as basename if it's not explicitly given.
	      if (basename == null && _ExecutionEnvironment.canUseDOM) {
	        var base = document.getElementsByTagName('base')[0];
	        var baseHref = base && base.getAttribute('href');

	        if (baseHref != null) {
	          basename = baseHref;

	          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
	        }
	      }

	      checkedBaseHref = true;
	    }

	    function addBasename(location) {
	      checkBaseHref();

	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    }

	    function prependBasename(location) {
	      checkBaseHref();

	      if (!basename) return location;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }

	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }

	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }

	    function replace(location) {
	      history.replace(prependBasename(location));
	    }

	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }

	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    }

	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path));
	    }

	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useBasename;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(184);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PathUtils = __webpack_require__(186);

	var _Actions = __webpack_require__(185);

	var _createHistory = __webpack_require__(191);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var key = undefined,
	        state = undefined;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    } else {
	      key = history.createKey();
	      state = null;
	      entry.key = key;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = useRouterHistory;

	var _useQueries = __webpack_require__(199);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(228);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    history.__v2_compatible__ = true;
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(210);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  var withContext = middlewares.map(function (m) {
	    return m.renderRouterContext;
	  }).filter(function (f) {
	    return f;
	  });
	  var withComponent = middlewares.map(function (m) {
	    return m.renderRouteComponent;
	  }).filter(function (f) {
	    return f;
	  });
	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };

	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createBrowserHistory = __webpack_require__(233);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createRouterHistory = __webpack_require__(234);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(185);

	var _PathUtils = __webpack_require__(186);

	var _ExecutionEnvironment = __webpack_require__(187);

	var _DOMUtils = __webpack_require__(188);

	var _DOMStateStorage = __webpack_require__(189);

	var _createDOMHistory = __webpack_require__(190);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

	  var forceRefresh = options.forceRefresh;

	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;

	  function getCurrentLocation(historyState) {
	    try {
	      historyState = historyState || window.history.state || {};
	    } catch (e) {
	      historyState = {};
	    }

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};

	var _useRouterHistory = __webpack_require__(230);

	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	module.exports = exports['default'];

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHashHistory = __webpack_require__(183);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _createRouterHistory = __webpack_require__(234);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(237);

	var _CakeDetailActions = __webpack_require__(259);

	var _CakeDetailComponents = __webpack_require__(260);

	var _CakeDetailComponents2 = _interopRequireDefault(_CakeDetailComponents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	  return state;
	}; /**
	    * Created by hanyile on 16/8/19.
	    */

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {

	    loadPage: function loadPage(id) {
	      dispatch((0, _CakeDetailActions.InitializeCakeDetail)(id));
	    }

	  };
	};

	var CakeDetailContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CakeDetailComponents2.default);

	exports.default = CakeDetailContainer;

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(238);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(241);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(2);

	var _storeShape = __webpack_require__(239);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(240);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(2);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 240 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(2);

	var _storeShape = __webpack_require__(239);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(242);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(243);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(240);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(246);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(216);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 242 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(244);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(245);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(254);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(256);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(257);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(258);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(255);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(246);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(250);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(247),
	    isObjectLike = __webpack_require__(249);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(248);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 248 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 249 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(251);


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(253);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(252)(module)))

/***/ },
/* 252 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 253 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(245);

	var _isPlainObject = __webpack_require__(246);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(255);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (process.env.NODE_ENV !== 'production') {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 255 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 256 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(258);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 258 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 259 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by hanyile on 16/8/21.
	 */

	var LoadCakeDetail = exports.LoadCakeDetail = function LoadCakeDetail(data) {
	  return {
	    type: 'CAKEDETAIL_LOADED',
	    data: data
	  };
	};

	var InitializeCakeDetail = exports.InitializeCakeDetail = function InitializeCakeDetail(id) {
	  return {
	    type: 'CAKEDETAIl_INITIALIZED',
	    id: id
	  };
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by hanyile on 16/8/18.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	// eslint-disable-line no-unused-vars


	var CakeDetailComponent = function (_Component) {
	    _inherits(CakeDetailComponent, _Component);

	    function CakeDetailComponent(props) {
	        _classCallCheck(this, CakeDetailComponent);

	        return _possibleConstructorReturn(this, (CakeDetailComponent.__proto__ || Object.getPrototypeOf(CakeDetailComponent)).call(this, props));
	    }

	    _createClass(CakeDetailComponent, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.loadPage(this.props.params.id);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props$CakeDetailRedu = this.props.CakeDetailReducers;
	            var name = _props$CakeDetailRedu.name;
	            var image = _props$CakeDetailRedu.image;
	            var style = _props$CakeDetailRedu.style;
	            var intro = _props$CakeDetailRedu.intro;
	            var size = _props$CakeDetailRedu.size;
	            var price = _props$CakeDetailRedu.price;
	            var infore = _props$CakeDetailRedu.infore;
	            var inforc = _props$CakeDetailRedu.inforc;

	            var id = this.props.CakeDetailReducers._id;
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'cakecomcui' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'welcome-section' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'container' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'about-grid ' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 about-text' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-4 about-img' },
	                                        _react2.default.createElement('img', { src: '../' + image, className: 'img-responsive zoom-img img-rounded',
	                                            title: inforc })
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { style: { marginTop: '20px', marginLeft: '480px' } },
	                                        _react2.default.createElement(
	                                            'h3',
	                                            { style: { color: '#b0916a' } },
	                                            'CakeDetail--',
	                                            style
	                                        ),
	                                        _react2.default.createElement(
	                                            'p',
	                                            null,
	                                            '\u86CB\u7CD5\u540D\u79F0\uFF1A',
	                                            name
	                                        ),
	                                        _react2.default.createElement(
	                                            'p',
	                                            null,
	                                            '\u86CB\u7CD5\u98CE\u5473\uFF1A',
	                                            style
	                                        ),
	                                        _react2.default.createElement(
	                                            'p',
	                                            null,
	                                            '\u86CB\u7CD5\u7B80\u4ECB\uFF1A',
	                                            intro
	                                        ),
	                                        _react2.default.createElement(
	                                            'p',
	                                            null,
	                                            '\u86CB\u7CD5\u4EF7\u683C\uFF1A',
	                                            price
	                                        ),
	                                        _react2.default.createElement(
	                                            'p',
	                                            null,
	                                            '\u86CB\u7CD5\u5C3A\u5BF8\uFF1A',
	                                            size
	                                        ),
	                                        _react2.default.createElement(
	                                            'p',
	                                            null,
	                                            '\u86CB\u7CD5\u5FC3\u8BED\uFF1A',
	                                            infore
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { style: { marginTop: '20px', marginLeft: '600px' } },
	                                        _react2.default.createElement(
	                                            _reactRouter.Link,
	                                            { to: '/orderlist/' + id },
	                                            _react2.default.createElement(
	                                                'button',
	                                                { className: 'btn btn-info' },
	                                                '\u7ACB\u5373\u8D2D\u4E70'
	                                            )
	                                        ),
	                                        '\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0',
	                                        _react2.default.createElement(
	                                            _reactRouter.Link,
	                                            { to: '/personalCollection/' },
	                                            _react2.default.createElement(
	                                                'button',
	                                                { className: 'btn btn-info' },
	                                                '\u70B9\u51FB\u6536\u85CF'
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return CakeDetailComponent;
	}(_react.Component);

	exports.default = CakeDetailComponent;

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(237);

	var _BuyCakeInfo = __webpack_require__(262);

	var _OrderList = __webpack_require__(263);

	var _OrderList2 = _interopRequireDefault(_OrderList);

	var _reactRouter = __webpack_require__(173);

	var _cofirmOrderAction = __webpack_require__(264);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	  return state;
	}; /**
	    * Created by jae on 16-8-22.
	    */


	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {

	    loadorder: function loadorder(id) {
	      // console.log('container/cakeDetailContainer/loadPage:id:' + id);
	      dispatch((0, _BuyCakeInfo.orderlistinit)(id));
	    },
	    confirmOrderFunction: function confirmOrderFunction(order) {
	      dispatch((0, _cofirmOrderAction.confirmOrderAction)(order));
	    }
	  };
	};

	var OrderListContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactRouter.withRouter)(_OrderList2.default));

	exports.default = OrderListContainer;

/***/ },
/* 262 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by jae on 16-8-22.
	 */
	var SelectedCake = exports.SelectedCake = function SelectedCake(data) {
	  // console.log('actions/cakeDetailActions/CAKEDETAIL_LOADED:data:' + data);
	  return {
	    type: 'SELECTED_CAKES_LOADED',
	    data: data
	  };
	};

	var orderlistinit = exports.orderlistinit = function orderlistinit(id) {
	  // console.log('actions/cakeDetailActions/CAKEDETAIl_INITIALIZED:id:' + id);
	  return {
	    type: 'ORDERLIST_INIT',
	    id: id
	  };
	};

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jae on 16-8-22.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	// eslint-disable-line no-unused-vars
	var OrderList = function (_Component) {
	    _inherits(OrderList, _Component);

	    function OrderList(props) {
	        _classCallCheck(this, OrderList);

	        return _possibleConstructorReturn(this, (OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call(this, props));
	    }

	    _createClass(OrderList, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.loadorder(this.props.params.id);
	        }
	    }, {
	        key: 'confirm',
	        value: function confirm() {
	            var order = {};
	            order.username = '我不是黄蓉';
	            order.name = this.refs.inputName.value.trim();
	            order.tel = this.refs.inputTel.value.trim();
	            order.address = this.refs.inputAddress.value.trim();
	            order.more = this.refs.inputMore.value.trim();
	            order.cakeName = this.props.order.name;
	            order.image = this.props.order.image;
	            order.isPay = false;
	            order.price = this.props.order.price;
	            this.props.confirmOrderFunction(order);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var order = this.props.order;
	            var realName = this.props.user.realName;
	            var telphone = this.props.user.telphone;
	            var login = this.props.loginusername;
	            return _react2.default.createElement(
	                'div',
	                { className: 'orderlist' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'welcome-section' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'container' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'about-grid ' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'col-md-8 about-text' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-4 about-img' },
	                                    _react2.default.createElement(
	                                        'p',
	                                        null,
	                                        '\u8BA2\u8D2D\u7684\u86CB\u7CD5\u4FE1\u606F: '
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        null,
	                                        order.style,
	                                        '\uFFE5\uFF1A',
	                                        order.price
	                                    ),
	                                    _react2.default.createElement('img', { src: '../' + order.image, className: 'img-responsive zoom-img' })
	                                ),
	                                _react2.default.createElement(
	                                    'h3',
	                                    null,
	                                    '   ',
	                                    login,
	                                    ',\u60A8\u597D, \u8BF7\u586B\u5199\u8D2D\u4E70\u4FE1\u606F:'
	                                ),
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement(
	                                    'form',
	                                    { action: '#', className: 'form-horizontal' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'form-group' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-6 col-md-5' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                { htmlFor: 'inputEmail3', className: 'control-label' },
	                                                '\u771F\u5B9E\u59D3\u540D: '
	                                            ),
	                                            _react2.default.createElement('input', { type: 'text',
	                                                className: 'form-control',
	                                                id: 'inputEmail3',
	                                                ref: 'inputName'
	                                            })
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-5 col-md-5 ' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                { htmlFor: 'inputEmail3', className: 'control-label' },
	                                                '\u8054\u7CFB\u7535\u8BDD: '
	                                            ),
	                                            _react2.default.createElement('input', { type: 'text',
	                                                className: 'form-control',
	                                                id: 'inputEmail3',
	                                                ref: 'inputTel'
	                                            })
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-5 col-md-5' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                { htmlFor: 'inputEmail3', className: 'control-label' },
	                                                '\u6536\u8D27\u5730\u5740: '
	                                            ),
	                                            _react2.default.createElement('input', { type: 'text',
	                                                className: 'form-control',
	                                                id: 'inputEmail3',
	                                                ref: 'inputAddress'
	                                            })
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-5 col-md-5' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                { htmlFor: 'inputEmail3', className: 'control-label' },
	                                                '\u5907\u6CE8: '
	                                            ),
	                                            _react2.default.createElement('input', { type: 'text',
	                                                className: 'form-control',
	                                                id: 'inputEmail3',
	                                                ref: 'inputMore'
	                                            })
	                                        )
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { style: { marginTop: '20px', marginLeft: '800px' } },
	                                    _react2.default.createElement(
	                                        'button',
	                                        { type: 'button',
	                                            className: 'btn btn-info',
	                                            onClick: this.confirm.bind(this) },
	                                        '\u786E\u8BA4\u8BA2\u5355'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return OrderList;
	}(_react.Component);

	exports.default = OrderList;

/***/ },
/* 264 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by qinqi on 16-8-23.
	 */
	var confirmOrderAction = exports.confirmOrderAction = function confirmOrderAction(order) {
	  return {
	    type: 'CONFIRM_ORDER',
	    order: order
	  };
	};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _CakeList = __webpack_require__(266);

	var _CakeList2 = _interopRequireDefault(_CakeList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jae on 16-8-16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	// eslint-disable-line no-unused-vars


	var CakesList = function (_Component) {
	  _inherits(CakesList, _Component);

	  function CakesList() {
	    _classCallCheck(this, CakesList);

	    return _possibleConstructorReturn(this, (CakesList.__proto__ || Object.getPrototypeOf(CakesList)).apply(this, arguments));
	  }

	  _createClass(CakesList, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_CakeList2.default, null)
	      );
	    }
	  }]);

	  return CakesList;
	}(_react.Component);

	exports.default = CakesList;

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(237);

	var _Cakes = __webpack_require__(267);

	var _Cakes2 = _interopRequireDefault(_Cakes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by jae on 16-8-14.
	 */
	var mapStateToProps = function mapStateToProps(state) {
	  return state;
	};

	var CakeList = (0, _reactRedux.connect)(mapStateToProps)(_Cakes2.default);

	exports.default = CakeList;

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _CakeItem = __webpack_require__(268);

	var _CakeItem2 = _interopRequireDefault(_CakeItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jae on 16-8-14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	// eslint-disable-line no-unused-vars


	var Cake = function (_Component) {
	  _inherits(Cake, _Component);

	  function Cake() {
	    _classCallCheck(this, Cake);

	    return _possibleConstructorReturn(this, (Cake.__proto__ || Object.getPrototypeOf(Cake)).apply(this, arguments));
	  }

	  _createClass(Cake, [{
	    key: 'render',
	    value: function render() {
	      var cake = this.props.cake;
	      //console.log(this.props.cake);

	      return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        cake.map(function (v, k) {
	          return _react2.default.createElement(_CakeItem2.default, { key: k,
	            id: v._id,
	            name: v.name,
	            image: v.image,
	            price: v.price,
	            intro: v.intro,
	            infor: v.infor,
	            size: v.size,
	            style: v.style
	          });
	        })
	      );
	    }
	  }]);

	  return Cake;
	}(_react.Component);

	exports.default = Cake;

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars


	var CakeItem = function (_Component) {
	  _inherits(CakeItem, _Component);

	  function CakeItem() {
	    _classCallCheck(this, CakeItem);

	    return _possibleConstructorReturn(this, (CakeItem.__proto__ || Object.getPrototypeOf(CakeItem)).apply(this, arguments));
	  }

	  _createClass(CakeItem, [{
	    key: 'click',
	    value: function click() {
	      this.props.getId(this.props.key);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var name = _props.name;
	      var image = _props.image;
	      var style = _props.style;
	      var intro = _props.intro;
	      var id = _props.id;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'text-center col-xs-6 col-md-3  gallery-left two' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/cakeDetail/' + id, className: 'text-center thumbnail mask b-link-stripe b-animate-go swipebox' },
	            _react2.default.createElement('img', { src: image, title: intro, className: 'img-responsive zoom-img' })
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            name
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            style
	          )
	        )
	      );
	    }
	  }]);

	  return CakeItem;
	}(_react.Component);

	exports.default = CakeItem;

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jae on 16-8-22.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// eslint-disable-line no-unused-vars

	var BrandStory = function (_Component) {
	  _inherits(BrandStory, _Component);

	  function BrandStory() {
	    _classCallCheck(this, BrandStory);

	    return _possibleConstructorReturn(this, (BrandStory.__proto__ || Object.getPrototypeOf(BrandStory)).apply(this, arguments));
	  }

	  _createClass(BrandStory, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "error" },
	          _react2.default.createElement(
	            "div",
	            { className: "container" },
	            _react2.default.createElement(
	              "div",
	              { className: "error-top" },
	              _react2.default.createElement(
	                "h3",
	                null,
	                "404",
	                _react2.default.createElement(
	                  "span",
	                  null,
	                  "ERROR!"
	                )
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                "Page Not Found..."
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return BrandStory;
	}(_react.Component);

	exports.default = BrandStory;

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by hanyile on 16/8/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// eslint-disable-line no-unused-vars
	var BrandStory = function (_Component) {
	  _inherits(BrandStory, _Component);

	  function BrandStory() {
	    _classCallCheck(this, BrandStory);

	    return _possibleConstructorReturn(this, (BrandStory.__proto__ || Object.getPrototypeOf(BrandStory)).apply(this, arguments));
	  }

	  _createClass(BrandStory, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "about-section brandstory" },
	          _react2.default.createElement(
	            "div",
	            { className: "container" },
	            _react2.default.createElement(
	              "div",
	              { className: "about-section" },
	              _react2.default.createElement(
	                "div",
	                { className: "col-md-7 ab-text" },
	                _react2.default.createElement(
	                  "h4",
	                  null,
	                  "Welcome To ",
	                  _react2.default.createElement(
	                    "span",
	                    null,
	                    "Only Cake"
	                  )
	                ),
	                _react2.default.createElement(
	                  "p",
	                  null,
	                  "\u897F\u5B89Only Cake\u516C\u53F8\u4E13\u6CE8\u4E8E\u6B27\u5F0F\u3001\u6CD5\u5F0F\u751C\u70B9\u3001\u914D\u65B9\u86CB\u7CD5\u7684\u4F20\u627F\u4E0E\u521B\u65B0\u3002\u62E5\u6709\u8D44\u6DF1\u6CD5\u53A8\u56E2\u961F\u3001\u56FD\u9645\u822A\u7A7A\u914D\u9910\u4E1A\uFF08IFCA\uFF09\u98DF\u54C1\u751F\u4EA7\u7BA1\u7406\u56E2\u961F\uFF0C\u81EA\u6709\u4E13\u4E1A\u7269\u6D41\u914D\u9001\u961F\u4F0D\u3002 Only Cake\u91C7\u7528\u8FD1100%\u8FDB\u53E3\u539F\u6599\u3001\u98DF\u6750\uFF1B\u575A\u6301\u82DB\u523B\u6311\u5254\u7684\u9009\u62E9\uFF0C \u7504\u9009\u4E16\u754C\u540C\u7C7B\u9876\u7EA7\u98DF\u6750\uFF1B\u52AA\u529B\u4E3A\u5BA2\u6237\u521B\u9020\u3001\u63D0\u4F9B\u9AD8\u54C1\u8D28\u3001\u7EFF\u8272\u3001\u5065\u5EB7\u3001\u5B89\u5168\u7684\u7F8E\u5473\u914D\u65B9\u98DF\u54C1\uFF01 \u4E14\u575A\u6301\u5B9E\u65BD\u5BA2\u6237\u70B9\u5BF9\u70B9\u3001\u9001\u8D27\u4E0A\u5E9C\u7684\u5FEB\u6377\u670D\u52A1\u3002"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "why" },
	                  _react2.default.createElement(
	                    "h4",
	                    null,
	                    "Thanks  Choose Us"
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    "\u65E0\u6728\u4E0D\u6210\u6797\uFF0C\u4EFB\u4F55\u4E8B\u4E1A\u7684\u6210\u5C31\u5747\u79BB\u4E0D\u5F00\u8BF8\u591A\u7684\u201C\u60A8\u201D\uFF08\u540C\u4E8B\u3001\u5BA2\u6237\uFF09",
	                    _react2.default.createElement("br", null),
	                    "\u8FD8\u8BB0\u5F97\u66FE\u7ECF\u7684\u6211\u4EEC",
	                    _react2.default.createElement("br", null),
	                    "\u6000\u63E3\u7740\u5BF9\u98DF\u6750\u7684\u9AD8\u6311\u5254\u3001\u914D\u65B9\u7684\u4F20\u627F\u53CA\u6C38\u4E3A\u6D88\u8D39\u8005\u63D0\u4F9B\u9AD8\u54C1\u8D28\u5B89\u5168\u3001\u7F8E\u5473\u98DF\u54C1\u7684\u516C\u53F8\u613F\u666F",
	                    _react2.default.createElement("br", null),
	                    "\u5F00\u59CB\u4E86Only Cake\u7684\u53D1\u5C55\u4E4B\u65C5",
	                    _react2.default.createElement("br", null),
	                    "Only Cake\u62D2\u7EDD\u4ED8\u8D39\u5E7F\u544A\u3001\u575A\u4FE1\u4F53\u9A8C\u4E0E\u53E3\u7891\u76F8\u4F20",
	                    _react2.default.createElement("br", null),
	                    "Only Cake\u575A\u6301\u5408\u7406\u5229\u6DA6\uFF0C\u575A\u6301\u7ED9\u4E88\u201C\u60A8\u201D\u6700\u9AD8\u6027\u4EF7\u6BD4\u3001\u5173\u6000\u4E0E\u4FBF\u6377"
	                  ),
	                  _react2.default.createElement(
	                    "h2",
	                    null,
	                    "About Only Cake"
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col-md-5 chef" },
	                _react2.default.createElement("img", { src: "../image/brandstory/brand.jpg", className: "img-responsive", alt: "" })
	              ),
	              _react2.default.createElement("div", { className: "clearfix" })
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "team-section", style: { background: '#E6FAF9' } },
	            _react2.default.createElement(
	              "div",
	              { className: "container" },
	              _react2.default.createElement(
	                "div",
	                { className: "team" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "col-md-4 team-left" },
	                  _react2.default.createElement(
	                    "h3",
	                    null,
	                    "OUR TEAM"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "col-md-8 team-right" },
	                  _react2.default.createElement(
	                    "ul",
	                    { className: "ch-grid" },
	                    _react2.default.createElement(
	                      "li",
	                      null,
	                      _react2.default.createElement(
	                        "div",
	                        { className: "ch-item ch-img-1", style: { background: 'url(../image/cook/01.png)' } },
	                        _react2.default.createElement(
	                          "div",
	                          { className: "ch-info" },
	                          _react2.default.createElement(
	                            "h3",
	                            null,
	                            "\u79E6\u9F50&\u97E9\u4EA6\u4E50&\u738B\u6839\u65FA"
	                          ),
	                          _react2.default.createElement(
	                            "p",
	                            null,
	                            "Qinqi",
	                            _react2.default.createElement("a", { href: "#" }),
	                            "Hanyile"
	                          )
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "h4",
	                        null,
	                        "\u79E6\u9F50&\u97E9\u4EA6\u4E50&\u738B\u6839\u65FA"
	                      ),
	                      _react2.default.createElement(
	                        "p",
	                        null,
	                        "Qinqi&Hanyile&Wanggenwang"
	                      ),
	                      _react2.default.createElement(
	                        "a",
	                        { className: "more", href: "#" },
	                        "\u989C\u503C\u62C5\u5F53"
	                      )
	                    ),
	                    _react2.default.createElement(
	                      "li",
	                      null,
	                      _react2.default.createElement(
	                        "div",
	                        { className: "ch-item ch-img-2", style: { background: 'url(../image/cook/02.png)' } },
	                        _react2.default.createElement(
	                          "div",
	                          { className: "ch-info" },
	                          _react2.default.createElement(
	                            "h3",
	                            null,
	                            "\u738B\u5A77&\u738B\u76FC"
	                          ),
	                          _react2.default.createElement(
	                            "p",
	                            null,
	                            "Wangting",
	                            _react2.default.createElement("a", { href: "#" }),
	                            "Wangpan"
	                          )
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "h4",
	                        null,
	                        "\u738B\u5A77&\u738B\u76FC"
	                      ),
	                      _react2.default.createElement(
	                        "p",
	                        null,
	                        "Wangting&Wangpan"
	                      ),
	                      _react2.default.createElement(
	                        "a",
	                        { className: "more", href: "#" },
	                        "\u6700\u4F73\u62CD\u6863"
	                      )
	                    ),
	                    _react2.default.createElement(
	                      "li",
	                      null,
	                      _react2.default.createElement(
	                        "div",
	                        { className: "ch-item ch-img-3", style: { background: 'url(../image/cook/03.png)' } },
	                        _react2.default.createElement(
	                          "div",
	                          { className: "ch-info" },
	                          _react2.default.createElement(
	                            "h3",
	                            null,
	                            "\u5D14\u5029&\u5218\u8339"
	                          ),
	                          _react2.default.createElement(
	                            "p",
	                            null,
	                            "CuiQian",
	                            _react2.default.createElement("a", { href: "#" }),
	                            "LiuRu"
	                          )
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "h4",
	                        null,
	                        "\u5D14\u5029&\u5218\u8339"
	                      ),
	                      _react2.default.createElement(
	                        "p",
	                        null,
	                        "CuiQian&LiuRu"
	                      ),
	                      _react2.default.createElement(
	                        "a",
	                        { className: "more", href: "#" },
	                        "\u6280\u672F\u62C5\u5F53"
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return BrandStory;
	}(_react.Component);

	exports.default = BrandStory;

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(237);

	var _ConfirmPay = __webpack_require__(272);

	var _ConfirmPay2 = __webpack_require__(273);

	var _ConfirmPay3 = _interopRequireDefault(_ConfirmPay2);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	  return state;
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {

	    loadorderinfo: function loadorderinfo(id) {
	      dispatch((0, _ConfirmPay.OrderInfo)(id));
	    },
	    ConfirmBuy: function ConfirmBuy(id) {
	      dispatch((0, _ConfirmPay.ConfirmPay)(id));
	    }
	  };
	};

	var ConfirmPayContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactRouter.withRouter)(_ConfirmPay3.default));

	exports.default = ConfirmPayContainer;

/***/ },
/* 272 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var OrderInfo = exports.OrderInfo = function OrderInfo(id) {
	  return {
	    type: 'ORDER_INFO',
	    id: id
	  };
	};

	var OrderLoaded = exports.OrderLoaded = function OrderLoaded(data) {
	  return {
	    type: 'ORDER_LOADED',
	    data: data
	  };
	};

	var ConfirmPay = exports.ConfirmPay = function ConfirmPay(id) {
	  return {
	    type: 'CONFIRM_PAY',
	    id: id
	  };
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// eslint-disable-line no-unused-vars

	var ConfirmPay = function (_Component) {
	    _inherits(ConfirmPay, _Component);

	    function ConfirmPay(props) {
	        _classCallCheck(this, ConfirmPay);

	        return _possibleConstructorReturn(this, (ConfirmPay.__proto__ || Object.getPrototypeOf(ConfirmPay)).call(this, props));
	    }

	    _createClass(ConfirmPay, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.props.loadorderinfo(this.props.params.id);
	        }
	    }, {
	        key: "readyToPay",
	        value: function readyToPay() {
	            /* <div className="wel-grid">
	             <div className="col-md-4 welcome-text">
	             <h3>Welcome</h3>
	             <h4>TO RESTAURANT!</h4>
	             <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	             </div>
	             <div className="col-md-8 welcome-img">
	             <img src="images/img_03.jpg" className="img-responsive" alt="" />
	             </div>
	             <div className="clearfix"> </div>
	             </div>*/
	            this.props.ConfirmBuy(this.props.params.id);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var username = this.props.loginusername;
	            var _props$orderInfo = this.props.orderInfo;
	            var _id = _props$orderInfo._id;
	            var name = _props$orderInfo.name;
	            var tel = _props$orderInfo.tel;
	            var address = _props$orderInfo.address;
	            var more = _props$orderInfo.more;
	            var cakeName = _props$orderInfo.cakeName;
	            var image = _props$orderInfo.image;
	            var price = _props$orderInfo.price;

	            return _react2.default.createElement(
	                "div",
	                { className: "confirmpay" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "welcome-section" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "container" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "about-grid " },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "col-md-8 about-text" },
	                                _react2.default.createElement(
	                                    "h4",
	                                    { style: { marginBottom: '10px' } },
	                                    "Hello\uFF01",
	                                    username,
	                                    " Your Order!"
	                                ),
	                                _react2.default.createElement(
	                                    "div",
	                                    { className: "col-md-4 about-img" },
	                                    _react2.default.createElement("img", { src: '../' + image, className: "img-responsive zoom-img",
	                                        style: { marginLeft: '30px' }, alt: "" })
	                                ),
	                                _react2.default.createElement(
	                                    "div",
	                                    { style: { marginLeft: '540px' } },
	                                    _react2.default.createElement(
	                                        "h4",
	                                        null,
	                                        "\u86CB\u7CD5\u540D\u79F0\uFF1A",
	                                        cakeName
	                                    ),
	                                    _react2.default.createElement(
	                                        "p",
	                                        null,
	                                        "\u8BA2\u5355\u7F16\u53F7:",
	                                        _id
	                                    ),
	                                    _react2.default.createElement(
	                                        "p",
	                                        null,
	                                        "\u771F\u5B9E\u59D3\u540D:",
	                                        name
	                                    ),
	                                    _react2.default.createElement(
	                                        "p",
	                                        null,
	                                        "\u8054\u7CFB\u7535\u8BDD: ",
	                                        tel
	                                    ),
	                                    _react2.default.createElement(
	                                        "p",
	                                        null,
	                                        "\u6536\u8D27\u5730\u5740:",
	                                        address
	                                    ),
	                                    _react2.default.createElement(
	                                        "p",
	                                        null,
	                                        "\u5B9E\u4ED8\u4EF7\u683C:",
	                                        price,
	                                        "\u5143"
	                                    ),
	                                    _react2.default.createElement(
	                                        "p",
	                                        null,
	                                        "\u5907\u6CE8\u4FE1\u606F:",
	                                        more
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    "div",
	                                    { style: { marginTop: '20px', marginLeft: '800px' } },
	                                    _react2.default.createElement(
	                                        "button",
	                                        { onClick: this.readyToPay.bind(this), type: "button", className: "btn btn-info" },
	                                        "\u786E\u8BA4\u652F\u4ED8"
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ConfirmPay;
	}(_react.Component);

	module.exports = ConfirmPay;

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRedux = __webpack_require__(237);

	var _PersonalInfo = __webpack_require__(275);

	var _PersonalInfo2 = _interopRequireDefault(_PersonalInfo);

	var _Personal_CenterAction = __webpack_require__(276);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	    return state;
	};
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        addTodo2: function addTodo2(arr) {
	            dispatch((0, _Personal_CenterAction.personal_center)(arr));
	        }
	    };
	};

	var AddTodo2 = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_PersonalInfo2.default);

	exports.default = AddTodo2;

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PersonalInfo = function (_Component) {
	    _inherits(PersonalInfo, _Component);

	    function PersonalInfo() {
	        _classCallCheck(this, PersonalInfo);

	        var _this = _possibleConstructorReturn(this, (PersonalInfo.__proto__ || Object.getPrototypeOf(PersonalInfo)).call(this));

	        _this.state = {
	            realNameResult: false,
	            telPhoneResult: false,
	            addressResult: false,
	            ageResult: false,
	            wechatResult: false
	        };
	        return _this;
	    }

	    _createClass(PersonalInfo, [{
	        key: 'addTodo2',
	        value: function addTodo2() {
	            var arr = [];
	            var user = this.props.loginusername;
	            var inputReal = this.refs.inputRealName.value.trim();
	            var inputTel = this.refs.inputTel.value.trim();
	            var inputAddress = this.refs.inputAddress.value.trim();
	            var inputAge = this.refs.inputAge.value.trim();
	            var inputWechat = this.refs.inputWechat.value.trim();
	            arr.push(user, inputReal, inputTel, inputAddress, inputAge, inputWechat);
	            if (arr) {
	                this.props.addTodo2(arr);
	            }
	            this.refs.inputRealName.value = '';
	            this.refs.inputTel.value = '';
	            this.refs.inputAddress.value = '';
	        }
	    }, {
	        key: 'handleKeyPress',
	        value: function handleKeyPress(e) {
	            if (13 !== e.charCode) {
	                return;
	            }
	            this.addTodo2();
	        }
	    }, {
	        key: 'checkName',
	        value: function checkName() {
	            var password = this.refs.inputRealName.value.trim();
	            var patt = /^[\u4E00-\u9FA5]+$/;
	            this.state.realName = patt.test(password);
	            if (!patt.test(password)) this.refs.realNameWrongFormat.innerHTML = '姓名为简体汉字';else this.refs.realNameWrongFormat.innerHTML = '';
	        }
	    }, {
	        key: 'checkAddress',
	        value: function checkAddress() {
	            var rePassword = this.refs.inputAddress.value.trim();
	            var pattern = /^[\u4E00-\u9FA5]+$/;
	            this.state.addressResult = pattern.test(rePassword);
	            if (!pattern.test(rePassword)) this.refs.addressWrong.innerHTML = '详细地址为汉字';else this.refs.addressWrong.innerHTML = '';
	        }
	    }, {
	        key: 'checkTelphone',
	        value: function checkTelphone() {
	            var telphone = this.refs.inputTel.value.trim();
	            var pattern = /^1[3|4|5|7|8][0-9]\d{8}$/;
	            this.state.telPhoneResult = pattern.test(telphone);
	            if (!pattern.test(telphone)) this.refs.inputTelWrong.innerHTML = '请输入正确的手机号';else this.refs.inputTelWrong.innerHTML = '';
	        }
	    }, {
	        key: 'checkAge',
	        value: function checkAge() {
	            var age = this.refs.inputAge.value.trim();

	            if (age < 0 || age > 150) {
	                this.state.ageResult = false;
	                this.refs.inputAgeWrong.innerHTML = '请输入合法的年龄';
	            } else {
	                this.state.ageResult = true;
	                this.refs.inputAgeWrong.innerHTML = '';
	            }
	        }
	    }, {
	        key: 'checkWechat',
	        value: function checkWechat() {
	            var wechat = this.refs.inputWechat.value.trim();
	            var pattern = /^1[3|4|5|7|8][0-9]\d{8}$/;
	            this.state.wechatResult = pattern.test(wechat);
	            if (!pattern.test(wechat)) {
	                this.refs.inputWechatWrong.innerHTML = '请输入正确的微信号';
	            } else {
	                this.refs.inputWechatWrong.innerHTML = '';
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var PersonalInfo = this.props.PersonalInfo;

	            var user = this.props.loginusername;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container' },
	                    _react2.default.createElement(
	                        'h3',
	                        null,
	                        'Hi, ',
	                        user,
	                        '\u4E3A\u4E86\u7ED9\u60A8\u63D0\u4F9B\u4E2A\u6027\u5316\u7684\u670D\u52A1\u8BF7\u60A8\u5B8C\u5584\u4E2A\u4EBA\u8D44\u6599'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-10' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-10 ' },
	                            _react2.default.createElement(
	                                'form',
	                                { action: '#', className: 'form-horizontal col-md-12' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'inputEmail3',
	                                            className: 'col-md-3 col-md-6 control-label' },
	                                        'RealName:'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-5 col-md-6' },
	                                        _react2.default.createElement('input', { type: 'text',
	                                            className: 'form-control',
	                                            id: 'inputEmail3',
	                                            placeholder: 'Please input your real name',
	                                            ref: 'inputRealName',
	                                            onKeyPress: this.handleKeyPress.bind(this),
	                                            onBlur: this.checkName.bind(this)
	                                        })
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'text-danger col-md-4', ref: 'realNameWrongFormat' },
	                                        ' '
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'inputEmail3',
	                                            className: 'col-md-3 col-md-6 control-label' },
	                                        'Telphone:'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-5 col-md-6' },
	                                        _react2.default.createElement('input', { type: 'text',
	                                            className: 'form-control',
	                                            id: 'inputEmail3',
	                                            placeholder: 'Please input your telphone',
	                                            ref: 'inputTel',
	                                            onKeyPress: this.handleKeyPress.bind(this),
	                                            onBlur: this.checkTelphone.bind(this)
	                                        })
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'text-danger col-md-4', ref: 'inputTelWrong' },
	                                        ' '
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'inputEmail3',
	                                            className: 'col-md-3 col-md-6 control-label' },
	                                        'age:'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-5 col-md-6' },
	                                        _react2.default.createElement('input', { type: 'text',
	                                            className: 'form-control',
	                                            id: 'inputEmail3',
	                                            placeholder: 'Please input your age',
	                                            ref: 'inputAge',
	                                            onKeyPress: this.handleKeyPress.bind(this),
	                                            onBlur: this.checkAge.bind(this)
	                                        })
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'text-danger col-md-4', ref: 'inputAgeWrong' },
	                                        ' '
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'inputEmail3',
	                                            className: 'col-md-3 col-md-6 control-label' },
	                                        'wechat:'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-5 col-md-6' },
	                                        _react2.default.createElement('input', { type: 'text',
	                                            className: 'form-control',
	                                            id: 'inputEmail3',
	                                            placeholder: 'Please input your wechat',
	                                            ref: 'inputWechat',
	                                            onKeyPress: this.handleKeyPress.bind(this),
	                                            onBlur: this.checkWechat.bind(this)
	                                        })
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'text-danger col-md-4', ref: 'inputWechatWrong' },
	                                        ' '
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'inputEmail3',
	                                            className: 'col-md-3 col-md-6 control-label' },
	                                        'address:'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-5 col-md-6' },
	                                        _react2.default.createElement('input', { type: 'text',
	                                            className: 'form-control',
	                                            id: 'inputEmail3',
	                                            placeholder: 'Please input your addresss',
	                                            ref: 'inputAddress',
	                                            onKeyPress: this.handleKeyPress.bind(this),
	                                            onBlur: this.checkAddress.bind(this)
	                                        })
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'text-danger col-md-4', ref: 'addressWrong' },
	                                        ' '
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'inputEmail3',
	                                            className: 'col-md-3 col-md-6 control-label' },
	                                        'tip:'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-5 col-md-6' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'alert alert-info', role: 'alert' },
	                                            '\u8BF7\u60A8\u5728\u7B2C\u4E00\u6B21\u586B\u5199\u5730\u5740\u7684\u65F6\u5019\u4ED4\u7EC6\u6838\u5BF9\uFF0C\u5982\u6709\u9519\u8BEF\u8BF7\u53CA\u65F6\u4FEE\u6539'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'text-danger col-md-4' },
	                                        ' '
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'label',
	                                        { htmlFor: 'inputEmail3',
	                                            className: 'col-md-3 col-md-6 control-label' },
	                                        'sex:'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-5 col-md-6' },
	                                        _react2.default.createElement(
	                                            'label',
	                                            { className: 'radio-inline' },
	                                            '\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0',
	                                            _react2.default.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'inlineRadio1',
	                                                value: 'option1' }),
	                                            ' Sir'
	                                        ),
	                                        '\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0',
	                                        _react2.default.createElement(
	                                            'label',
	                                            { className: 'radio-inline' },
	                                            _react2.default.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'inlineRadio2',
	                                                value: 'option2' }),
	                                            ' Miss'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'text-danger col-md-4' },
	                                        ' '
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'text-danger col-md-10' },
	                                    ' ',
	                                    PersonalInfo
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-offset-4 col-sm-10' },
	                                    _react2.default.createElement(
	                                        'button',
	                                        { onClick: this.addTodo2.bind(this), type: 'button',
	                                            className: 'btn btn-primary' },
	                                        'save'
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return PersonalInfo;
	}(_react.Component);

	exports.default = PersonalInfo;

/***/ },
/* 276 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	var personal_center = exports.personal_center = function personal_center(data) {
	        return {
	                type: 'PERSONALINFO_LOAD',
	                data: data
	        };
	};

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRedux = __webpack_require__(237);

	var _personalCollection = __webpack_require__(278);

	var _personalCollection2 = __webpack_require__(279);

	var _personalCollection3 = _interopRequireDefault(_personalCollection2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	    return state;
	}; /**
	    * Created by liuru on 16-10-25.
	    */

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        loadCollection: function loadCollection(id) {
	            dispatch((0, _personalCollection.collectionById)(id));
	        }
	    };
	};

	var collectionCake = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_personalCollection3.default);
	exports.default = collectionCake;

/***/ },
/* 278 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var personalCollection = exports.personalCollection = function personalCollection(data) {
	    return {
	        type: 'COLLECTION_ADD',
	        data: data
	    };
	};

	var collectionById = exports.collectionById = function collectionById(id) {
	    return {
	        type: 'COLLECTION_INITIALIZED',
	        id: id
	    };
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import {Link} from 'react-router';
	var personalCollect = function (_Component) {
	    _inherits(personalCollect, _Component);

	    function personalCollect(props) {
	        _classCallCheck(this, personalCollect);

	        return _possibleConstructorReturn(this, (personalCollect.__proto__ || Object.getPrototypeOf(personalCollect)).call(this, props));
	    }

	    _createClass(personalCollect, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {

	            this.props.loadCollection(this.props.CakeDetailReducers._id);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props$CakeDetailRedu = this.props.CakeDetailReducers;
	            var name = _props$CakeDetailRedu.name;
	            var image = _props$CakeDetailRedu.image;
	            var size = _props$CakeDetailRedu.size;
	            var price = _props$CakeDetailRedu.price;
	            var intro = _props$CakeDetailRedu.intro;
	            //    const id = this.props.CakeDetailReducers._id;

	            return _react2.default.createElement(
	                "div",
	                { className: "cakeWelcome" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "collection_cake" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "container" },
	                        _react2.default.createElement(
	                            "table",
	                            { className: "table table-hover" },
	                            _react2.default.createElement(
	                                "caption",
	                                null,
	                                "\u5982\u679C\u60A8\u6709\u770B\u5230\u559C\u6B22\u7684\u4F46\u662F\u6682\u65F6\u4E0D\u60F3\u4E70\uFF0C\u53EF\u4EE5\u9009\u62E9\u6536\u85CF"
	                            ),
	                            _react2.default.createElement(
	                                "thead",
	                                null,
	                                _react2.default.createElement(
	                                    "tr",
	                                    null,
	                                    _react2.default.createElement(
	                                        "th",
	                                        null,
	                                        "\u540D\u79F0"
	                                    ),
	                                    _react2.default.createElement(
	                                        "th",
	                                        null,
	                                        "\u56FE\u7247"
	                                    ),
	                                    _react2.default.createElement(
	                                        "th",
	                                        null,
	                                        "\u5546\u54C1\u4FE1\u606F"
	                                    ),
	                                    _react2.default.createElement(
	                                        "th",
	                                        null,
	                                        "\u4EF7\u683C"
	                                    ),
	                                    _react2.default.createElement(
	                                        "th",
	                                        null,
	                                        "\u5C3A\u5BF8"
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                "tbody",
	                                null,
	                                _react2.default.createElement(
	                                    "tr",
	                                    null,
	                                    _react2.default.createElement(
	                                        "td",
	                                        null,
	                                        name
	                                    ),
	                                    _react2.default.createElement(
	                                        "td",
	                                        null,
	                                        _react2.default.createElement("img", { src: '../' + image })
	                                    ),
	                                    _react2.default.createElement(
	                                        "td",
	                                        null,
	                                        intro
	                                    ),
	                                    _react2.default.createElement(
	                                        "td",
	                                        null,
	                                        price
	                                    ),
	                                    _react2.default.createElement(
	                                        "td",
	                                        null,
	                                        size
	                                    )
	                                ),
	                                _react2.default.createElement("tr", null)
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return personalCollect;
	}(_react.Component);

	exports.default = personalCollect;

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(237);

	var _LogIn = __webpack_require__(281);

	var _LogIn2 = _interopRequireDefault(_LogIn);

	var _login_vaild = __webpack_require__(282);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	  return state;
	}; /**
	    * Created by wt on 16-8-18.
	    */

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    LogIna: function LogIna(arr) {
	      dispatch((0, _login_vaild.LoginVaild)(arr));
	    }
	  };
	};

	var connect2 = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
	var LogInList = connect2(_LogIn2.default);

	exports.default = LogInList;

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by wt on 16-8-18.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	// eslint-disable-line no-unused-vars
	var LogIn = function (_Component) {
	  _inherits(LogIn, _Component);

	  function LogIn() {
	    _classCallCheck(this, LogIn);

	    return _possibleConstructorReturn(this, (LogIn.__proto__ || Object.getPrototypeOf(LogIn)).apply(this, arguments));
	  }

	  _createClass(LogIn, [{
	    key: 'doAction',
	    value: function doAction() {
	      var arr = {};
	      var inputn = this.refs.inputName.value.trim();
	      var inputp = this.refs.inputPwd.value.trim();
	      arr.username = inputn;
	      arr.password = inputp;
	      this.props.LogIna(arr);
	      this.refs.inputName.value = '';
	      this.refs.inputPwd.value = '';
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(e) {
	      if (13 !== e.charCode) {
	        return;
	      }
	      this.doAction();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // const user = this.props.user;
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-10' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-10 ' },
	              _react2.default.createElement(
	                'form',
	                { action: '#', className: 'form-horizontal col-md-12' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'inputEmail3', className: 'col-md-3 col-md-6 control-label' },
	                    'Username:'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-md-5 col-md-6' },
	                    _react2.default.createElement('input', { type: 'text',
	                      className: 'form-control',
	                      id: 'inputEmail3',
	                      placeholder: 'Please input username',
	                      ref: 'inputName',
	                      onKeyPress: this.handleKeyPress.bind(this)
	                    })
	                  ),
	                  _react2.default.createElement('span', { className: 'text-danger col-md-4', id: 'error_show' })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'inputEmail3', className: 'col-md-3 col-md-6 control-label' },
	                    'Password:'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-md-5 col-md-6' },
	                    _react2.default.createElement('input', { type: 'Password',
	                      className: 'form-control',
	                      id: 'inputEmail3',
	                      placeholder: 'Please input password',
	                      ref: 'inputPwd',
	                      onKeyPress: this.handleKeyPress.bind(this)
	                    })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-lg-offset-6 col-sm-5' },
	                  _react2.default.createElement(
	                    'button',
	                    { onClick: this.doAction.bind(this), type: 'button', className: 'btn btn-default' },
	                    ' Login Now'
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return LogIn;
	}(_react.Component);

	exports.default = LogIn;

/***/ },
/* 282 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wt on 16-8-18.
	 */
	var LoginVaild = exports.LoginVaild = function LoginVaild(text) {
	  return {
	    type: 'LoginVaild',
	    text: text
	  };
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// eslint-disable-line no-unused-vars

	var SlideShow = function (_Component) {
	  _inherits(SlideShow, _Component);

	  function SlideShow() {
	    _classCallCheck(this, SlideShow);

	    var _this = _possibleConstructorReturn(this, (SlideShow.__proto__ || Object.getPrototypeOf(SlideShow)).call(this));

	    _this.state = {
	      imageIndex: 0
	    };
	    _this.interval = setInterval(_this.next.bind(_this), 5000);
	    return _this;
	  }

	  _createClass(SlideShow, [{
	    key: 'prev',
	    value: function prev() {
	      var index = this.state.imageIndex - 1 < 0 ? 4 : this.state.imageIndex - 1;
	      this.setState({
	        imageIndex: index
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.clearInterval(this.interval);
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      this.setState({
	        imageIndex: (this.state.imageIndex + 1) % 5
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var address = ['image/slideShow/slide.01.jpg', 'image/slideShow/slide.02.jpg', 'image/slideShow/slide.03.jpg', 'image/slideShow/slide.05.jpg', 'image/slideShow/slide.04.jpg'];
	      return _react2.default.createElement(
	        'div',
	        { className: 'aaaa' },
	        _react2.default.createElement('img', { id: 'picture_0', src: address[this.state.imageIndex] }),
	        _react2.default.createElement(
	          'button',
	          { id: 'btn_1', className: 'glyphicon glyphicon-menu-left', onClick: this.prev.bind(this) },
	          '.'
	        ),
	        _react2.default.createElement(
	          'button',
	          { id: 'btn_2', className: 'glyphicon glyphicon-menu-right', onClick: this.next.bind(this) },
	          '.'
	        )
	      );
	    }
	  }]);

	  return SlideShow;
	}(_react.Component);

	exports.default = SlideShow;

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _SlideShow = __webpack_require__(283);

	var _SlideShow2 = _interopRequireDefault(_SlideShow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_SlideShow2.default, null)
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(237);

	var _MainView = __webpack_require__(286);

	var _MainView2 = _interopRequireDefault(_MainView);

	var _validLogin = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	  return state;
	}; /**
	    * Created by jae on 16-8-23.
	    */

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    redirectToLoginPage: function redirectToLoginPage() {
	      dispatch((0, _validLogin.redirectToLogin)());
	    }
	  };
	};

	var connect2 = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
	var ValidLogin = connect2(_MainView2.default);

	exports.default = ValidLogin;

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	var _Logo = __webpack_require__(287);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _Footer = __webpack_require__(290);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jae on 16-8-23.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	// eslint-disable-line no-unused-vars


	var MainView = function (_Component) {
	  _inherits(MainView, _Component);

	  function MainView() {
	    _classCallCheck(this, MainView);

	    return _possibleConstructorReturn(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).apply(this, arguments));
	  }

	  _createClass(MainView, [{
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps) {
	      if (nextProps.loginstate === 'FAIL') {
	        this.props.redirectToLoginPage();
	        _reactRouter.browserHistory.push('/login');
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Logo2.default, null),
	        this.props.children,
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }]);

	  return MainView;
	}(_react.Component);

	exports.default = MainView;

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(237);

	var _Logo = __webpack_require__(288);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _validLogin = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	  return state;
	}; /**
	    * Created by jae on 16-8-23.
	    */

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    aaaaliu: function aaaaliu() {
	      dispatch((0, _validLogin.validLogin)());
	    }
	  };
	};
	var LogoList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Logo2.default);

	exports.default = LogoList;

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars


	var Logo = function (_Component) {
	  _inherits(Logo, _Component);

	  function Logo() {
	    _classCallCheck(this, Logo);

	    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
	  }

	  _createClass(Logo, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.aaaaliu();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var loginstate = void 0;
	      var signupstate = void 0;
	      var path = void 0;
	      if (this.props.loginusername !== null) {
	        loginstate = this.props.loginusername;
	        path = '/presoncenter';
	        signupstate = '退出';
	      } else {
	        loginstate = '登录';
	        path = '/login';
	        signupstate = '注册';
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'header' },
	        _react2.default.createElement(
	          'div',
	          { className: 'header-top' },
	          _react2.default.createElement(
	            'div',
	            { className: 'container' },
	            _react2.default.createElement(
	              'div',
	              { className: 'top-nav' },
	              _react2.default.createElement(
	                'span',
	                { className: 'menu two' },
	                ' '
	              ),
	              _react2.default.createElement(
	                'ul',
	                null,
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/' },
	                    '\u9996\xA0\xA0\u9875'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/cakelist' },
	                    '\u86CB\u7CD5\u540D\u5F55'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/exclusive' },
	                    '\u552F\u4F9D\u4E13\u533A'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: 'brandstory' },
	                    '\u54C1\u724C\u6545\u4E8B'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { className: 'lost' },
	                  _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/contact' },
	                    '\u8BA2\u8D2D\u5E2E\u52A9'
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'ul',
	              { className: 'nav navbar-nav', style: { marginLeft: '60px' } },
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { className: 'loginands', to: path },
	                  loginstate
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { className: 'loginands', to: '/signup' },
	                  signupstate
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'head-bg' },
	          _react2.default.createElement(
	            'div',
	            { className: 'logo three' },
	            _react2.default.createElement(
	              'a',
	              { href: '' },
	              _react2.default.createElement(
	                'h1',
	                null,
	                'ONLY ',
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  'FOR '
	                ),
	                'CAKES'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Logo;
	}(_react.Component);

	exports.default = Logo;

/***/ },
/* 289 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by jae on 16-8-23.
	 */
	var validLogin = exports.validLogin = function validLogin() {
	  return {
	    type: 'VALID_LOGIN'
	  };
	};

	var redirectToLogin = exports.redirectToLogin = function redirectToLogin() {
	  return {
	    type: 'REDIRECT_TO_LOGIN'
	  };
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jae on 16-8-17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	// eslint-disable-line no-unused-vars


	var Footer = function (_Component) {
	  _inherits(Footer, _Component);

	  function Footer() {
	    _classCallCheck(this, Footer);

	    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	  }

	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'footer', style: { height: '150px' } },
	          _react2.default.createElement(
	            'div',
	            { className: 'container' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-3 footer-grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'logo two' },
	                _react2.default.createElement(
	                  'a',
	                  null,
	                  _react2.default.createElement(
	                    'h3',
	                    null,
	                    'ONLY',
	                    _react2.default.createElement(
	                      'span',
	                      null,
	                      'cakes'
	                    )
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: ' col-md-4 footer-grid footer-grid2' },
	              _react2.default.createElement(
	                'div',
	                { className: 'bottom-nav' },
	                _react2.default.createElement(
	                  'h4',
	                  null,
	                  'About Only cakes'
	                ),
	                _react2.default.createElement(
	                  'ul',
	                  null,
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: '/' },
	                      '\u9996\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u9875'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: '/cakelist' },
	                      '\u86CB\u7CD5\u540D\u5F55'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: '/exclusive' },
	                      '\u552F\u4F9D\u4E13\u533A'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: '/brandstory' },
	                      '\u54C1\u724C\u6545\u4E8B'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: '/contact' },
	                      '\u8BA2\u8D2D\u5E2E\u52A9'
	                    )
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'footer-grid' },
	              _react2.default.createElement(
	                'h4',
	                { style: { marginLeft: '700px' } },
	                ' \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0ADDRESS'
	              ),
	              _react2.default.createElement(
	                'ul',
	                { style: { marginLeft: '700px' }, className: 'bottom-icons' },
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement(
	                    'a',
	                    { className: 'home', href: '#' },
	                    _react2.default.createElement(
	                      'span',
	                      null,
	                      ' '
	                    )
	                  ),
	                  'Shanxi\uFF0CXian\uFF0CChina'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'copy-right' },
	            _react2.default.createElement(
	              'div',
	              { className: 'container' },
	              _react2.default.createElement(
	                'p',
	                null,
	                'Copyright \xA9 2016 All Rights Reserved . Design by Only Cake Team! '
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

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jae on 16-8-17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// eslint-disable-line no-unused-vars
	// import GoogleMap from 'google-map-react';
	// import { changeMapCenter } from '../actions'
	// import {withRouter} from 'react-router';
	var Contact = function (_Component) {
	  _inherits(Contact, _Component);

	  function Contact() {
	    _classCallCheck(this, Contact);

	    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
	  }

	  _createClass(Contact, [{
	    key: "render",

	    /* static defaultProps = {
	     center: {lat: 59.938043, lng: 30.337157},
	     zoom: 9,
	     greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
	     };
	      shouldComponentUpdate = shouldPureComponentUpdate;*/

	    /*constructor(props) {
	     super(props);
	     }*/
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "contact-section" },
	        _react2.default.createElement(
	          "div",
	          { className: "contact-head" },
	          _react2.default.createElement(
	            "div",
	            { className: "container" },
	            _react2.default.createElement(
	              "h3",
	              null,
	              "\u5168\u56FD\u914D\u9001\u533A\u57DF\u8BF4\u660E\u53CA\u793A\u56FE"
	            ),
	            _react2.default.createElement(
	              "h4",
	              null,
	              "\u4E00\u3001\u914D\u9001\u670D\u52A1\u8D39"
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              " \u73B0\u6709\u914D\u9001\u57CE\u5E02\uFF1A\u5317\u4EAC/ \u5929\u6D25/ \u4E0A\u6D77/ \u676D\u5DDE/ \u82CF\u5DDE/ \u65E0\u9521/ \u5E7F\u5DDE/ \u6DF1\u5733 \u5355\u7B14\u8BA2\u5355\u91D1\u989D 100\u5143\u4EE5\u4E0B\uFF0C\u914D\u9001\u670D\u52A1\u8D3912\u5143\uFF1B \u5355\u7B14\u8BA2\u5355\u91D1\u989D\u2267 100\u5143\uFF0C\u514D\u6536\u914D\u9001\u670D\u52A1\u8D39\u3002"
	            ),
	            _react2.default.createElement(
	              "h4",
	              null,
	              "\u4E8C\u3001\u914D\u9001\u8303\u56F4"
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              " \uFF08\u4E00\uFF09\u5317\u4EAC\uFF1A \u914D\u9001\u533A\u57DF\uFF1A\u516D\u73AF\u4EE5\u5185\uFF1B \u914D\u9001\u65F6\u95F4\uFF1A\u4E94\u73AF\u5185\uFF1A9:30-22:00\u70B9\uFF1B\u4E94\u73AF\u5916-\u516D\u73AF\u5185\uFF1A10:00-21:00\uFF1B",
	              _react2.default.createElement("br", null),
	              _react2.default.createElement("img", { src: "../image/contact/1.png" })
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              "\uFF08\u4E8C\uFF09\u5929\u6D25\uFF1A \u914D\u9001\u533A\u57DF\uFF1A\u5FEB\u901F\u8DEF\u4EE5\u5185\uFF1B\u5FEB\u901F\u8DEF\u4EE5\u5916\u2014\u7ED5\u57CE\u516C\u8DEF\u4EE5\u5185\uFF1B \u914D\u9001\u65F6\u95F4\uFF1A10:00-19:00\uFF1B \u914D\u9001\u533A\u57DF\uFF1A\u5929\u6D25\u6EE8\u6D77\u65B0\u533A-\u5858\u6CBD\uFF1A\u897F\u81F3\u897F\u4E2D\u73AF\u5FEB\u901F-\u5317\u81F3\u4EAC\u6D25\u9AD8\u901F-\u4E1C\u81F3\u6D77\u6EE8\u9AD8\u901F-\u5357\u81F3\u6D77\u6CB3\uFF0C\u4EC5\u652F\u6301\u7535\u8BDD\u8BA2\u8D2D\uFF1A 400 650 2121\uFF1B \u914D\u9001\u65F6\u95F4\uFF1A15:00~19:00\uFF1B",
	              _react2.default.createElement("br", null),
	              _react2.default.createElement("img", { src: "../image/contact/1.png" })
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              "\uFF08\u4E09\uFF09\u4E0A\u6D77\uFF1A \u914D\u9001\u533A\u57DF\uFF1AA30\u4EE5\u5185\uFF08\u91D1\u5C71\u533A\u9664\u5916\uFF09 \u914D\u9001\u65F6\u95F4\uFF1A A\u3001A20\u5916\u73AF\u4EE5\u5185\uFF1A9:30-22:00\uFF1B B\u3001A20-A30\u4E4B\u95F4\uFF1A10:00-22:00\uFF1B C\u3001\u5949\u8D24\u3001\u6CD6\u6E2F\u3001\u53F6\u69AD\u3001\u5609\u5B9A\u57CE\u533A\u7B49\u5728A30\u9644\u8FD1\u6216\u8F83\u8FDC\u533A\u57DF\uFF1A10:00-18:00\uFF1B",
	              _react2.default.createElement("br", null),
	              _react2.default.createElement("img", { src: "../image/contact/1.png" })
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              "\uFF08\u56DB\uFF09\u676D\u5DDE\uFF1A \u914D\u9001\u533A\u57DF\uFF1A\u676D\u5DDE\u7ED5\u57CE\u9AD8\u901F\u4EE5\u5185\u3001\u897F\u81F3\u676D\u5DDE\u7ED5\u57CE\u9AD8\u901F-\u5317\u81F3\u6C5F\u4E1C\u5927\u9053-\u4E1C\u81F3\u94B1\u5858\u6C5F-\u5357\u81F3\u94B1\u5858\u6C5F\u3001\u676D\u5DDE\u8427\u5C71\u56FD\u9645\u673A\u573A\u3001\u963F\u91CC\u5DF4\u5DF4\u897F\u6EAA\u56ED\u533A\uFF1B \u914D\u9001\u65F6\u95F4\uFF1A10:00-19:00",
	              _react2.default.createElement("br", null),
	              _react2.default.createElement("img", { src: "../image/contact/1.png" })
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              "\uFF08\u4E94\uFF09\u82CF\u5DDE\uFF1A \u914D\u9001\u533A\u57DF\uFF1A A\u3001\u82CF\u5DDE\u7ED5\u57CE\u9AD8\u901F\u5185\uFF1B B\u3001\u9633\u6F84\u6E56\u533A\uFF08\u897F\u81F3\u5E38\u53F0\u9AD8\u901F-\u5317\u81F3\u7ED5\u57CE\u5317\u7EBF-\u4E1C\u81F3\u9633\u6F84\u6E56-\u5357\u81F3\u4EAC\u6CAA\u9AD8\u901F\uFF09\u3001\u6728\u6E0E\u533A\uFF08\u897F\u81F3\u7ED5\u57CE\u897F\u7EBF-\u5317\u81F3\u592A\u6E56\u5927\u9053-\u4E1C\u81F3\u91D1\u67AB\u8DEF-\u5357\u81F3\u5B9D\u5E26\u897F\u8DEF\uFF09\u3001\u5434\u4E2D\u533A\uFF08\u897F\u81F3\u7ED5\u57CE\u897F\u7EBF-\u5317\u81F3\u5B9D\u5E26\u897F \u8DEF-\u4E1C\u81F3\u53CB\u65B0\u5FEB\u901F\u8DEF-\u5357\u81F3\u7ED5\u57CE\u5357\u7EBF\uFF09\uFF1B \u914D\u9001\u65F6\u95F4\uFF1A10:00-19:00\uFF1B",
	              _react2.default.createElement("br", null),
	              _react2.default.createElement("img", { src: "../image/contact/1.png" })
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              "\uFF08\u516D\uFF09\u65E0\u9521\uFF1A \u914D\u9001\u533A\u57DF\uFF1A A\u3001\u897F\u81F3\u897F\u73AF\u8DEF-\u5317\u81F3\u6CAA\u5B9C\u9AD8\u901F/\u4EAC\u6CAA\u9AD8\u901F/\u9521\u6CAA\u8DEF-\u4E1C\u81F3\u901A\u9521\u9AD8\u901F-\u5357\u81F3\u901A\u9521\u9AD8\u901F\u53CA\u5411\u897F\u5EF6\u957F\u7EBF\uFF08\u81F3\u592A\u6E56\uFF09\uFF1B B\u3001\u897F\u81F3\u4EAC\u6CAA\u9AD8\u901F-\u5317\u81F3\u9521\u6CAA\u8DEF-\u4E1C\u81F3\u901A\u9521\u9AD8\u901F-\u5357\u81F3\u4EAC\u6CAA/\u901A\u9521\u9AD8\u901F\uFF1B \u914D\u9001\u65F6\u95F4\uFF1A10:00-19:00\uFF1B",
	              _react2.default.createElement("br", null),
	              _react2.default.createElement("img", { src: "../image/contact/1.png" })
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              "\uFF08\u4E03\uFF09\u5E7F\u5DDE\uFF1A \u914D\u9001\u533A\u57DF\uFF1A A\u3001\u73AF\u57CE\u9AD8\u901F\u4EE5\u5185\uFF08S81\uFF09\uFF1B B\u3001\u73AF\u57CE\u9AD8\u901F\u4EE5\u5916\uFF0C\u897F\u81F3\u5E7F\u6E05\u9AD8\u901F/\u5E7F\u5DDE\u73AF\u57CE\u9AD8\u901F/\u5E7F\u73E0\u897F\u7EBF\u9AD8\u901F-\u5317\u81F3\u5E7F\u5DDE\u7ED5\u57CE\u9AD8\u901F-\u4E1C\u81F3\u5E7F\u5DDE\u7ED5\u57CE\u9AD8\u901F-\u5357\u81F3\u5E7F\u5DDE\u7ED5\u57CE\u9AD8\u901F\uFF1B \u914D\u9001\u65F6\u95F4\uFF1A9:30-20:00\uFF1B",
	              _react2.default.createElement("br", null),
	              _react2.default.createElement("img", { src: "../image/contact/1.png" })
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              "\uFF08\u516B\uFF09\u6DF1\u5733\uFF1A \u914D\u9001\u533A\u57DF\uFF1A A\u3001\u5357\u5C71\u533A\u3001\u798F\u7530\u533A\u3001\u7F57\u6E56\u533A\uFF1B B\u3001\u897F\u81F3\u5E7F\u6DF1\u6CBF\u6C5F\u9AD8\u901F-\u5317\u81F3\u6DF1\u5733\u5B9D\u5B89\u56FD\u9645\u673A\u573A/\u6C88\u6D77\u9AD8\u901F-\u4E1C\u81F3\u957F\u6DF1\u9AD8\u901F/\u76D0\u6392\u9AD8\u901F-\u5357\u81F3\u6DF1\u76D0\u8DEF/\u6C99\u76D0\u8DEF/\u6C99\u6DF1\u8DEF/\u7F57\u6C99\u8DEF/\u76D0\u575D\u9AD8\u901F/\u6EE8\u6CB3\u5927\u9053/\u4EAC\u6E2F\u6FB3\u9AD8\u901F/\u6EE8\u6CB3\u5927\u9053/\u6DF1\u5733\u6E7E\u4EE5\u5317\uFF1B \u914D\u9001\u65F6\u95F4\uFF1A10:00-19:00\uFF1B",
	              _react2.default.createElement("br", null),
	              _react2.default.createElement("img", { src: "../image/contact/1.png" })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Contact;
	}(_react.Component);
	/*const mapStateToProps = (state)=>  {return {
	 mapPoints: state.mapPoints
	 }};
	 const mapDispatchToProps = (dispatch)=> {
	 return{
	 onMapCenterChanging: (center) => {
	 dispatch(changeMapCenter(center))
	 }
	 }
	 };*/

	// var Contact = connect(mapStateToProps,mapDispatchToProps)(withRouter(Con));


	exports.default = Contact;

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(237);

	var _Signup = __webpack_require__(293);

	var _Signup2 = _interopRequireDefault(_Signup);

	var _index = __webpack_require__(294);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	  return state;
	};
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    addTodo: function addTodo(arr) {
	      dispatch((0, _index.addTodo)(arr));
	    }
	  };
	};

	var connect2 = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
	var AddTodo = connect2(_Signup2.default);

	exports.default = AddTodo;

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jae on 16-8-17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	/*wang genwang*/


	// eslint-disable-line no-unused-vars
	var SignUp = function (_Component) {
	  _inherits(SignUp, _Component);

	  function SignUp() {
	    _classCallCheck(this, SignUp);

	    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this));

	    _this.state = {
	      emailResult: false,
	      passwordFormatResult: false,
	      passwordSameResult: false
	    };
	    return _this;
	  }

	  _createClass(SignUp, [{
	    key: 'addTodo',
	    value: function addTodo() {
	      var arr = [];
	      var inputn = this.refs.inputName.value.trim();
	      var inputp = this.refs.inputPwd.value.trim();
	      var inputre = this.refs.rePassword.value.trim();
	      arr.push(inputn, inputp, inputre);
	      if (arr) {
	        this.props.addTodo(arr);
	      }
	      this.refs.inputName.value = '';
	      this.refs.inputPwd.value = '';
	      this.refs.rePassword.value = '';
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(e) {
	      if (13 !== e.charCode) {
	        return;
	      }
	      this.addTodo();
	    }
	  }, {
	    key: 'checkEmail',
	    value: function checkEmail() {
	      var email = this.refs.inputName.value.trim();
	      var patt = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
	      this.state.emailResult = patt.test(email);
	      if (!patt.test(email)) this.refs.emailWrongMessage.innerHTML = 'wrong format';else this.refs.emailWrongMessage.innerHTML = '';
	    }
	  }, {
	    key: 'checkPasswordFormat',
	    value: function checkPasswordFormat() {
	      var password = this.refs.inputPwd.value.trim();
	      var patt = /^.{6,13}$/;
	      this.state.passwordFormatResult = patt.test(password);
	      if (!patt.test(password)) this.refs.passwordWrongFormat.innerHTML = '6 - 13位字符';else this.refs.passwordWrongFormat.innerHTML = '';
	    }
	  }, {
	    key: 'checkPasswordSame',
	    value: function checkPasswordSame() {
	      var password = this.refs.inputPwd.value.trim();
	      var password_2 = this.refs.rePassword.value.trim();
	      this.state.passwordSameResult = password === password_2;
	      if (password === password_2) this.refs.passwordWrongSame.innerHTML = '';else this.refs.passwordWrongSame.innerHTML = '两次密码不一致';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var signup = this.props.signup;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-10' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-8 ' },
	              _react2.default.createElement(
	                'form',
	                { action: '#', className: 'form-horizontal col-md-12' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'inputEmail3', className: 'col-md-3 col-md-6 control-label' },
	                    'Username:'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-md-5 col-md-6' },
	                    _react2.default.createElement('input', { type: 'email',
	                      className: 'form-control',
	                      id: 'inputEmail3',
	                      placeholder: 'Please input username',
	                      ref: 'inputName',
	                      onKeyPress: this.handleKeyPress.bind(this),
	                      onBlur: this.checkEmail.bind(this)
	                    })
	                  ),
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'text-danger col-md-4', ref: 'emailWrongMessage' },
	                    ' '
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'inputEmail3', className: 'col-md-3 col-md-6 control-label' },
	                    'Password:'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-md-5 col-md-6' },
	                    _react2.default.createElement('input', { type: 'password',
	                      className: 'form-control',
	                      id: 'inputEmail3',
	                      placeholder: 'Please input password',
	                      ref: 'inputPwd',
	                      onKeyPress: this.handleKeyPress.bind(this),
	                      onBlur: this.checkPasswordFormat.bind(this)
	                    })
	                  ),
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'text-danger col-md-4', ref: 'passwordWrongFormat' },
	                    ' '
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'inputEmail3', className: 'col-md-3 col-md-6 control-label' },
	                    'RePassword:'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-md-5 col-md-6' },
	                    _react2.default.createElement('input', { type: 'password',
	                      className: 'form-control',
	                      id: 'inputEmail3',
	                      placeholder: 'Please input password again',
	                      ref: 'rePassword',
	                      onKeyPress: this.handleKeyPress.bind(this),
	                      onBlur: this.checkPasswordSame.bind(this)
	                    })
	                  ),
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'text-danger col-md-4', ref: 'passwordWrongSame' },
	                    ' '
	                  )
	                ),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'text-danger col-md-10' },
	                  ' ',
	                  signup
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-md-offset-4 col-sm-10' },
	                  _react2.default.createElement(
	                    'button',
	                    { onClick: this.addTodo.bind(this), type: 'button',
	                      className: 'btn btn-default' },
	                    'Create new account'
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return SignUp;
	}(_react.Component);

	exports.default = SignUp;

/***/ },
/* 294 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var addTodo = exports.addTodo = function addTodo(text) {
	  return {
	    type: 'ADD_TODO',
	    text: text
	  };
	};

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(244);

	var _cake = __webpack_require__(296);

	var _cake2 = _interopRequireDefault(_cake);

	var _order = __webpack_require__(297);

	var _order2 = _interopRequireDefault(_order);

	var _CakeDetailReducers = __webpack_require__(298);

	var _CakeDetailReducers2 = _interopRequireDefault(_CakeDetailReducers);

	var _users = __webpack_require__(299);

	var _users2 = _interopRequireDefault(_users);

	var _signUp = __webpack_require__(300);

	var _signUp2 = _interopRequireDefault(_signUp);

	var _orderInfo = __webpack_require__(301);

	var _orderInfo2 = _interopRequireDefault(_orderInfo);

	var _loginState = __webpack_require__(302);

	var _loginState2 = _interopRequireDefault(_loginState);

	var _userName = __webpack_require__(303);

	var _userName2 = _interopRequireDefault(_userName);

	var _personalReducer = __webpack_require__(304);

	var _personalReducer2 = _interopRequireDefault(_personalReducer);

	var _collectionReducer = __webpack_require__(305);

	var _collectionReducer2 = _interopRequireDefault(_collectionReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cakeList = (0, _redux.combineReducers)({
	  cake: _cake2.default,
	  CakeDetailReducers: _CakeDetailReducers2.default,
	  user: _users2.default,
	  signup: _signUp2.default,
	  order: _order2.default,
	  loginstate: _loginState2.default,
	  loginusername: _userName2.default,
	  orderInfo: _orderInfo2.default,
	  personalInfo: _personalReducer2.default,
	  collectionReducer: _collectionReducer2.default
	});

	exports.default = cakeList;

/***/ },
/* 296 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by jae on 16-8-14.
	 */
	var cake = function cake() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments[1];


	  switch (action.type) {
	    case 'CAKE_LOADED':
	      return action.data;
	  }
	  return state;
	};
	exports.default = cake;

/***/ },
/* 297 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by jae on 16-8-22.
	 */

	var orderDetail = function orderDetail() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  switch (action.type) {
	    case 'SELECTED_CAKES_LOADED':
	      return action.data;
	    /*case 'CONFIRM_ORDER_TRUE':
	      return action.data;*/
	    case 'CONFIRMED_ORDER':
	      return action.data;
	  }

	  return state;
	};

	exports.default = orderDetail;

/***/ },
/* 298 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by hanyile on 16/8/19.
	 */

	var cakeDetail = function cakeDetail() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'CAKEDETAIL_LOADED':
	      return action.data;
	  }
	  return state;
	};

	exports.default = cakeDetail;

/***/ },
/* 299 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var users = function users() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '登录';
	  var action = arguments[1];

	  switch (action.type) {
	    case 'LOGIN_FAIR':
	      return action.data;
	    case 'LOGIN_SUCCESS':
	      return action.username;
	  }
	  return state;
	};

	exports.default = users;
	/*
	const users = (state ={name: ''}, action)=> {
	  switch (action.type) {
	    case 'TODO_LOADED':

	      return {
	        name: action.name
	      };
	  }
	  return state;
	};

	export default users;*/

/***/ },
/* 300 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by wanggenwang on 16-8-22.
	 */
	var usersignup = function usersignup() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var action = arguments[1];

	  switch (action.type) {
	    case 'SIGNUP_FAIR':

	      return action.data;

	    case 'SIGNUP_SUCCESS':

	      return action.data;
	    /* case 'SIGNUP':
	        return action.data;
	     */}
	  return state;
	};

	exports.default = usersignup;

/***/ },
/* 301 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var orderInfo = function orderInfo() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  switch (action.type) {
	    case 'ORDER_LOADED':
	      return action.data;
	  }
	  return state;
	};

	exports.default = orderInfo;

/***/ },
/* 302 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var loginstate = function loginstate() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Checking';
	  var action = arguments[1];

	  switch (action.type) {
	    case 'Loggin_state_received':
	      return action.states;
	    case 'REDIRECT_TO_LOGIN':
	      return 'Checking';
	  }

	  return state;
	};
	exports.default = loginstate;

/***/ },
/* 303 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by jae on 16-8-23.
	 */
	var loginusername = function loginusername() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var action = arguments[1];


	  switch (action.type) {
	    case 'Loggin_state_received':
	      return action.name;
	  }

	  return state;
	};
	exports.default = loginusername;

/***/ },
/* 304 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var personalInfo = function personalInfo() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var action = arguments[1];

	    switch (action.type) {
	        case 'SAVE_FAIR':

	            return action.data;

	        case 'SAVE_SUCESSFUL':

	            return action.data;

	    }
	    return state;
	};

	exports.default = personalInfo;

/***/ },
/* 305 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by liuru on 16-10-25.
	 */
	var collectionCake = function collectionCake() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'COLLECTION_ADD':
	            return action.data;
	    }
	    return state;
	};
	exports.default = collectionCake;

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jae on 16-8-20.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// eslint-disable-line no-unused-vars
	var Exclusive = function (_Component) {
	  _inherits(Exclusive, _Component);

	  function Exclusive() {
	    _classCallCheck(this, Exclusive);

	    return _possibleConstructorReturn(this, (Exclusive.__proto__ || Object.getPrototypeOf(Exclusive)).apply(this, arguments));
	  }

	  _createClass(Exclusive, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "text-center exclusive" },
	          _react2.default.createElement(
	            "h3",
	            null,
	            "\u89C1\u8BC1\u771F\u7231\xB7\u5206\u4EAB\u5E78\u798F\u65F6\u5149"
	          ),
	          _react2.default.createElement(
	            "h4",
	            null,
	            "\u4E66\u5199\u7231\u60C5\u751C\u871C"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "............................................."
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "ONLY FOR CAKES\u4E3A\u6BCF\u5BF9\u604B\u4EBA\u6253\u9020\u6D6A\u6F2B\u7684\u4E13\u5C5E\u7A7A\u95F4\u3002"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "\u6BCF\u5BF9\u5B9A\u5236\u8FC7\u86CB\u7CD5\u7684\u604B\u4EBA\u53EA\u8981\u4F7F\u7528ONLY FOR CAKES\u5E10\u53F7\uFF0C"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "\u5373\u53EF\u8FDB\u5165\u751C\u871C\u7684\u60C5\u4FA3\u4E13\u5C5E\u7A7A\u95F4\u3002"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "\u5728\u6B64\u5199\u4E0B\u60A8\u7684\u771F\u7231\u5BA3\u8A00\uFF0C\u5206\u4EAB\u751C\u871C\u7684\u5A5A\u7EB1\u7167\u3001\u751F\u6D3B\u7167\uFF0C"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "\u5E76\u6536\u96C6\u6765\u81EA\u56DB\u9762\u516B\u65B9\u597D\u53CB\u7684\u795D\u798F\u89C1\u8BC1\u3002"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            _react2.default.createElement("img", { src: "image/exclusive/kj1.jpg", style: { width: '500px', height: '300px' } })
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            _react2.default.createElement(
	              "div",
	              { id: "exclusive_01", className: "exclusive_img_style" },
	              _react2.default.createElement("img", { src: "image/exclusive/02.jpg", className: "exclusive_img_size gallery-left two" })
	            ),
	            _react2.default.createElement(
	              "div",
	              { id: "exclusive_02", className: "exclusive_img_style" },
	              _react2.default.createElement("img", { src: "image/exclusive/01.jpg", className: "exclusive_img_size gallery-left two" })
	            ),
	            _react2.default.createElement(
	              "div",
	              { id: "exclusive_04", className: "exclusive_img_style" },
	              _react2.default.createElement("img", { src: "image/exclusive/04.jpg", className: "exclusive_img_size gallery-left two" })
	            ),
	            _react2.default.createElement(
	              "div",
	              { id: "exclusive_03", className: "exclusive_img_style" },
	              _react2.default.createElement("img", { src: "image/exclusive/03.jpg", className: "exclusive_img_size gallery-left two" })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Exclusive;
	}(_react.Component);

	exports.default = Exclusive;

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(237);

	var _PersonCenter = __webpack_require__(308);

	var _PersonCenter2 = _interopRequireDefault(_PersonCenter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by jae on 16-8-26.
	 */
	var mapStateToProps = function mapStateToProps(state) {
	  return state;
	};

	var PersonList = (0, _reactRedux.connect)(mapStateToProps)(_PersonCenter2.default);

	exports.default = PersonList;

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Personal = function (_Component) {
	    _inherits(Personal, _Component);

	    function Personal() {
	        _classCallCheck(this, Personal);

	        return _possibleConstructorReturn(this, (Personal.__proto__ || Object.getPrototypeOf(Personal)).apply(this, arguments));
	    }

	    _createClass(Personal, [{
	        key: 'render',
	        value: function render() {
	            var user = this.props.loginusername;
	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'aside-nav' },
	                    _react2.default.createElement(
	                        'h1',
	                        null,
	                        'Hi ',
	                        user
	                    ),
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'nav nav-pills nav-stacked', role: 'tablist' },
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/PersonalInfo' },
	                                ' \u4E2A\u4EBA\u4FE1\u606F'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/personalCollection' },
	                                ' \u4E2A\u4EBA\u6536\u85CF'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '#' },
	                                ' \u4E2A\u4EBA\u8BA2\u5355'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '#' },
	                                ' \u4E2A\u4EBAshow'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Personal;
	}(_react.Component);

	exports.default = Personal;

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(310);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cakeRequestMiddleware = function cakeRequestMiddleware(store) {
	  return function (next) {
	    return function (action) {
	      // eslint-disable-line no-unused-vars
	      switch (action.type) {
	        case 'INIT':
	          _superagent2.default.get('/cakes').end(function (err, res) {
	            next({
	              type: 'CAKE_LOADED',
	              data: res.body
	            });
	          });
	          break;
	      }
	      next(action);
	    };
	  };
	};

	exports.default = cakeRequestMiddleware;

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Root reference for iframes.
	 */

	var root;
	if (typeof window !== 'undefined') { // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') { // Web Worker
	  root = self;
	} else { // Other environments
	  console.warn("Using browser-only version of superagent in non-browser environment");
	  root = this;
	}

	var Emitter = __webpack_require__(311);
	var requestBase = __webpack_require__(312);
	var isObject = __webpack_require__(313);

	/**
	 * Noop.
	 */

	function noop(){};

	/**
	 * Expose `request`.
	 */

	var request = module.exports = __webpack_require__(314).bind(null, Request);

	/**
	 * Determine XHR.
	 */

	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  throw Error("Browser-only verison of superagent could not find XHR");
	};

	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */

	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */

	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    pushEncodedKeyValuePair(pairs, key, obj[key]);
	  }
	  return pairs.join('&');
	}

	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */

	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (val != null) {
	    if (Array.isArray(val)) {
	      val.forEach(function(v) {
	        pushEncodedKeyValuePair(pairs, key, v);
	      });
	    } else if (isObject(val)) {
	      for(var subkey in val) {
	        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
	      }
	    } else {
	      pairs.push(encodeURIComponent(key)
	        + '=' + encodeURIComponent(val));
	    }
	  } else if (val === null) {
	    pairs.push(encodeURIComponent(key));
	  }
	}

	/**
	 * Expose serialization method.
	 */

	 request.serializeObject = serialize;

	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */

	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var pair;
	  var pos;

	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    pos = pair.indexOf('=');
	    if (pos == -1) {
	      obj[decodeURIComponent(pair)] = '';
	    } else {
	      obj[decodeURIComponent(pair.slice(0, pos))] =
	        decodeURIComponent(pair.slice(pos + 1));
	    }
	  }

	  return obj;
	}

	/**
	 * Expose parser.
	 */

	request.parseString = parseString;

	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */

	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};

	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */

	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };

	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */

	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};

	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;

	  lines.pop(); // trailing CRLF

	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }

	  return fields;
	}

	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */

	function isJSON(mime) {
	  return /[\/+]json\b/.test(mime);
	}

	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function type(str){
	  return str.split(/ *; */).shift();
	};

	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function params(str){
	  return str.split(/ *; */).reduce(function(obj, str){
	    var parts = str.split(/ *= */),
	        key = parts.shift(),
	        val = parts.shift();

	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};

	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */

	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this._setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this._setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this._parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}

	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};

	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */

	Response.prototype._setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);

	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};

	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */

	Response.prototype._parseBody = function(str){
	  var parse = request.parse[this.type];
	  if (!parse && isJSON(this.type)) {
	    parse = request.parse['application/json'];
	  }
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};

	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */

	Response.prototype._setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }

	  var type = status / 100 | 0;

	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;

	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;

	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};

	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */

	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;

	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;

	  return err;
	};

	/**
	 * Expose `Response`.
	 */

	request.Response = Response;

	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */

	function Request(method, url) {
	  var self = this;
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {}; // preserves header name case
	  this._header = {}; // coerces header names to lowercase
	  this.on('end', function(){
	    var err = null;
	    var res = null;

	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
	      // issue #876: return the http status code if the response parsing fails
	      err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null;
	      return self.callback(err);
	    }

	    self.emit('response', res);

	    var new_err;
	    try {
	      if (res.status < 200 || res.status >= 300) {
	        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	        new_err.original = err;
	        new_err.response = res;
	        new_err.status = res.status;
	      }
	    } catch(e) {
	      new_err = e; // #985 touching res may cause INVALID_STATE_ERR on old Android
	    }

	    // #1000 don't catch errors from the callback to avoid double calling it
	    if (new_err) {
	      self.callback(new_err, res);
	    } else {
	      self.callback(null, res);
	    }
	  });
	}

	/**
	 * Mixin `Emitter` and `requestBase`.
	 */

	Emitter(Request.prototype);
	for (var key in requestBase) {
	  Request.prototype[key] = requestBase[key];
	}

	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};

	/**
	 * Set responseType to `val`. Presently valid responseTypes are 'blob' and
	 * 'arraybuffer'.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .responseType('blob')
	 *        .end(callback);
	 *
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.responseType = function(val){
	  this._responseType = val;
	  return this;
	};

	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.auth = function(user, pass, options){
	  if (!options) {
	    options = {
	      type: 'basic'
	    }
	  }

	  switch (options.type) {
	    case 'basic':
	      var str = btoa(user + ':' + pass);
	      this.set('Authorization', 'Basic ' + str);
	    break;

	    case 'auto':
	      this.username = user;
	      this.password = pass;
	    break;
	  }
	  return this;
	};

	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/

	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};

	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.attach = function(field, file, filename){
	  this._getFormData().append(field, file, filename || file.name);
	  return this;
	};

	Request.prototype._getFormData = function(){
	  if (!this._formData) {
	    this._formData = new root.FormData();
	  }
	  return this._formData;
	};

	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */

	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};

	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */

	Request.prototype.crossDomainError = function(){
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;

	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;

	  this.callback(err);
	};

	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */

	Request.prototype._timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};

	/**
	 * Compose querystring to append to req.url
	 *
	 * @api private
	 */

	Request.prototype._appendQueryString = function(){
	  var query = this._query.join('&');
	  if (query) {
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }
	};

	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var timeout = this._timeout;
	  var data = this._formData || this._data;

	  // store callback
	  this._callback = fn || noop;

	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;

	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }

	    if (0 == status) {
	      if (self.timedout) return self._timeoutError();
	      if (self._aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };

	  // progress
	  var handleProgress = function(direction, e) {
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    e.direction = direction;
	    self.emit('progress', e);
	  }
	  if (this.hasListeners('progress')) {
	    try {
	      xhr.onprogress = handleProgress.bind(null, 'download');
	      if (xhr.upload) {
	        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
	      }
	    } catch(e) {
	      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	      // Reported here:
	      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	    }
	  }

	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }

	  // querystring
	  this._appendQueryString();

	  // initiate request
	  if (this.username && this.password) {
	    xhr.open(this.method, this.url, true, this.username, this.password);
	  } else {
	    xhr.open(this.method, this.url, true);
	  }

	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;

	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
	    // serialize stuff
	    var contentType = this._header['content-type'];
	    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
	    if (serialize) data = serialize(data);
	  }

	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }

	  if (this._responseType) {
	    xhr.responseType = this._responseType;
	  }

	  // send stuff
	  this.emit('request', this);

	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};


	/**
	 * Expose `Request`.
	 */

	request.Request = Request;

	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * OPTIONS query to `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.options = function(url, data, fn){
	  var req = request('OPTIONS', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	function del(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};

	request['del'] = del;
	request['delete'] = del;

	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */

	if (true) {
	  module.exports = Emitter;
	}

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module of mixed-in functions shared between node and client code
	 */
	var isObject = __webpack_require__(313);

	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.clearTimeout = function _clearTimeout(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};

	/**
	 * Override default response body parser
	 *
	 * This function will be called to convert incoming data into request.body
	 *
	 * @param {Function}
	 * @api public
	 */

	exports.parse = function parse(fn){
	  this._parser = fn;
	  return this;
	};

	/**
	 * Override default request body serializer
	 *
	 * This function will be called to convert data set via .send or .attach into payload to send
	 *
	 * @param {Function}
	 * @api public
	 */

	exports.serialize = function serialize(fn){
	  this._serializer = fn;
	  return this;
	};

	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.timeout = function timeout(ms){
	  this._timeout = ms;
	  return this;
	};

	/**
	 * Promise support
	 *
	 * @param {Function} resolve
	 * @param {Function} reject
	 * @return {Request}
	 */

	exports.then = function then(resolve, reject) {
	  if (!this._fullfilledPromise) {
	    var self = this;
	    this._fullfilledPromise = new Promise(function(innerResolve, innerReject){
	      self.end(function(err, res){
	        if (err) innerReject(err); else innerResolve(res);
	      });
	    });
	  }
	  return this._fullfilledPromise.then(resolve, reject);
	}

	exports.catch = function(cb) {
	  return this.then(undefined, cb);
	};

	/**
	 * Allow for extension
	 */

	exports.use = function use(fn) {
	  fn(this);
	  return this;
	}


	/**
	 * Get request header `field`.
	 * Case-insensitive.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	exports.get = function(field){
	  return this._header[field.toLowerCase()];
	};

	/**
	 * Get case-insensitive header `field` value.
	 * This is a deprecated internal API. Use `.get(field)` instead.
	 *
	 * (getHeader is no longer used internally by the superagent code base)
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 * @deprecated
	 */

	exports.getHeader = exports.get;

	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 * Case-insensitive.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};

	/**
	 * Remove header `field`.
	 * Case-insensitive.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 */
	exports.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};

	/**
	 * Write the field `name` and `val`, or multiple fields with one object
	 * for "multipart/form-data" request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 *
	 * request.post('/upload')
	 *   .field({ foo: 'bar', baz: 'qux' })
	 *   .end(callback);
	 * ```
	 *
	 * @param {String|Object} name
	 * @param {String|Blob|File|Buffer|fs.ReadStream} val
	 * @return {Request} for chaining
	 * @api public
	 */
	exports.field = function(name, val) {

	  // name should be either a string or an object.
	  if (null === name ||  undefined === name) {
	    throw new Error('.field(name, val) name can not be empty');
	  }

	  if (isObject(name)) {
	    for (var key in name) {
	      this.field(key, name[key]);
	    }
	    return this;
	  }

	  // val should be defined now
	  if (null === val || undefined === val) {
	    throw new Error('.field(name, val) val can not be empty');
	  }
	  this._getFormData().append(name, val);
	  return this;
	};

	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	exports.abort = function(){
	  if (this._aborted) {
	    return this;
	  }
	  this._aborted = true;
	  this.xhr && this.xhr.abort(); // browser
	  this.req && this.req.abort(); // node
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};

	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */

	exports.withCredentials = function(){
	  // This is browser-only functionality. Node side is no-op.
	  this._withCredentials = true;
	  return this;
	};

	/**
	 * Set the max redirects to `n`. Does noting in browser XHR implementation.
	 *
	 * @param {Number} n
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.redirects = function(n){
	  this._maxRedirects = n;
	  return this;
	};

	/**
	 * Convert to a plain javascript object (not JSON string) of scalar properties.
	 * Note as this method is designed to return a useful non-this value,
	 * it cannot be chained.
	 *
	 * @return {Object} describing method, url, and data of this request
	 * @api public
	 */

	exports.toJSON = function(){
	  return {
	    method: this.method,
	    url: this.url,
	    data: this._data,
	    headers: this._header
	  };
	};

	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	exports._isHost = function _isHost(obj) {
	  var str = {}.toString.call(obj);

	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Send `data` as the request body, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	 *      request.post('/user')
	 *        .send('name=tobi')
	 *        .send('species=ferret')
	 *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.send = function(data){
	  var obj = isObject(data);
	  var type = this._header['content-type'];

	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    // default to x-www-form-urlencoded
	    if (!type) this.type('form');
	    type = this._header['content-type'];
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }

	  if (!obj || this._isHost(data)) return this;

	  // default to json
	  if (!type) this.type('json');
	  return this;
	};


/***/ },
/* 313 */
/***/ function(module, exports) {

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(obj) {
	  return null !== obj && 'object' === typeof obj;
	}

	module.exports = isObject;


/***/ },
/* 314 */
/***/ function(module, exports) {

	// The node and browser modules expose versions of this with the
	// appropriate constructor function bound as first argument
	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */

	function request(RequestConstructor, method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new RequestConstructor('GET', method).end(url);
	  }

	  // url first
	  if (2 == arguments.length) {
	    return new RequestConstructor('GET', method);
	  }

	  return new RequestConstructor(method, url);
	}

	module.exports = request;


/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(310);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var todoRequestMiddleware = function todoRequestMiddleware(store) {
	  return function (next) {
	    return function (action) {
	      // eslint-disable-line no-unused-vars
	      switch (action.type) {
	        case 'ADD_TODO':
	          _superagent2.default.post('/users').type('form').send({
	            username: action.text[0],
	            password: action.text[1],
	            rePassword: action.text[2]
	          }).end(function (err, res) {
	            if (res.body.error) {
	              next({
	                type: 'SIGNUP_FAIR',
	                data: res.body.error
	              });
	            } else if (res.body.data) {
	              next({
	                type: 'SIGNUP_SUCCESS',
	                data: '注册成功！'
	              });
	              _reactRouter.browserHistory.push('/');
	            }
	          });
	          break;
	        /* case 'INIT':
	           request.get('/users')
	               .end((err,res) => {
	                 next({
	                   type: 'SIGNUP',
	                   data: ''
	                 });
	               });
	               
	           break;
	         case 'SIGNUP_SUCCESS':
	           browserHistory.push('/');
	           request.get('/users')
	               .end((err,res) => {
	               store.dispatch({
	                   type: 'INIT'
	                 });
	               });
	            break;
	         case 'SIGNUP_FAIR':
	           request.get('/users')
	               .end((err,res) => {
	                 store.dispatch({
	                   type: 'INIT'
	                 });
	               });
	        */
	      }
	      next(action);
	    };
	  };
	};

	exports.default = todoRequestMiddleware;

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(310);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _CakeDetailActions = __webpack_require__(259);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cakeDetailRequestMiddleware = function cakeDetailRequestMiddleware(store) {
	  return function (next) {
	    return function (action) {
	      // eslint-disable-line no-unused-vars
	      switch (action.type) {

	        case 'CAKEDETAIl_INITIALIZED':
	          _superagent2.default.get('/api/cakedetail/' + action.id).end(function (err, res) {
	            if (res.status === 200) {
	              next((0, _CakeDetailActions.LoadCakeDetail)(res.body));
	            } else if (res.status === 404) {
	              _reactRouter.browserHistory.push('/404');
	            }
	          });
	          break;
	      }
	      next(action);
	    };
	  };
	}; /**
	    * Created by hanyile on 16/8/22.
	    */

	exports.default = cakeDetailRequestMiddleware;

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(310);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loginRequestMiddleware = function loginRequestMiddleware(store) {
	  return function (next) {
	    return function (action) {
	      // eslint-disable-line no-unused-vars
	      switch (action.type) {
	        case 'LoginVaild':
	          _superagent2.default.post('/users/logining').type('form').send({
	            username: action.text.username,
	            password: action.text.password
	          }).end(function (err, data) {
	            if (data.status === 201) {
	              _reactRouter.browserHistory.push('/');
	              next({
	                type: 'Loggin_return',
	                username: data.body.data.username
	              });
	            } else {
	              next({
	                type: 'Loggin_return',
	                username: '登录'
	              });
	            }
	          });
	          break;
	      }
	      next(action);
	    };
	  };
	};
	exports.default = loginRequestMiddleware;

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(310);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _BuyCakeInfo = __webpack_require__(262);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var orderRequestMiddleware = function orderRequestMiddleware(store) {
	  return function (next) {
	    return function (action) {
	      // eslint-disable-line no-unused-vars
	      switch (action.type) {
	        case 'ORDERLIST_INIT':
	          _superagent2.default.get('/api/cakedetail/' + action.id).end(function (err, res) {
	            if (res.status === 200) {
	              store.dispatch((0, _BuyCakeInfo.SelectedCake)(res.body));
	            } else {
	              _reactRouter.browserHistory.push('/404');
	            }
	          });
	          break;
	      }
	      next(action);
	    };
	  };
	}; /**
	    * Created by jae on 16-8-22.
	    */
	exports.default = orderRequestMiddleware;

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(310);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by qinqi on 16-8-23.
	 */
	var confirmOrderMiddleware = function confirmOrderMiddleware(store) {
	  return function (next) {
	    return function (action) {
	      // eslint-disable-line no-unused-vars
	      switch (action.type) {
	        case 'CONFIRM_ORDER':
	          _superagent2.default.post('/api/order').type('form').send({
	            username: action.order.username,
	            name: action.order.name,
	            tel: action.order.tel,
	            address: action.order.address,
	            more: action.order.more,
	            cakeName: action.order.cakeName,
	            image: action.order.image,
	            isPay: action.order.isPay,
	            price: action.order.price
	          }).end(function (err, res) {
	            next({
	              type: 'CONFIRMED_ORDER',
	              data: res.body._id
	            });
	            _reactRouter.browserHistory.push('/confirmpay/' + res.body._id);
	          });
	          break;
	      }
	      next(action);
	    };
	  };
	};

	exports.default = confirmOrderMiddleware;

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(310);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var validLoginRequestMiddleware = function validLoginRequestMiddleware(store) {
	  return function (next) {
	    return function (action) {
	      // eslint-disable-line no-unused-vars
	      switch (action.type) {
	        case 'VALID_LOGIN':
	          _superagent2.default.get('/users/logining').end(function (err, res) {
	            if (res.status === 200) {
	              next({
	                type: 'Loggin_state_received',
	                name: res.text,
	                states: 'SUCCESS'
	              });
	            } else {
	              next({
	                type: 'Loggin_state_received',
	                name: null,
	                states: 'FAIL'
	              });
	            }
	          });
	          break;
	      }
	      next(action);
	    };
	  };
	}; /**
	    * Created by jae on 16-8-23.
	    */
	exports.default = validLoginRequestMiddleware;

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(310);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getOrderInfoMiddleware = function getOrderInfoMiddleware(store) {
	  return function (next) {
	    return function (action) {
	      // eslint-disable-line no-unused-vars
	      switch (action.type) {
	        case 'ORDER_INFO':
	          _superagent2.default.get('/api/order/' + action.id).end(function (err, res) {
	            if (res.body) {
	              next({
	                type: 'ORDER_LOADED',
	                data: res.body
	              });
	            }
	          });
	          break;
	      }
	      next(action);
	    };
	  };
	};

	exports.default = getOrderInfoMiddleware;

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(310);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by wt on 16-8-24.
	 */
	var confirmPayMiddleware = function confirmPayMiddleware(store) {
	  return function (next) {
	    return function (action) {
	      // eslint-disable-line no-unused-vars
	      switch (action.type) {
	        case 'CONFIRM_PAY':
	          _superagent2.default.put('/api/order/' + action.id).type('form').send({ isPay: true }).end(function (err, res) {
	            if (res.status === 205) {
	              alert('支付成功');
	              _reactRouter.browserHistory.push('/');
	            }
	          });
	          break;
	      }
	      next(action);
	    };
	  };
	};

	exports.default = confirmPayMiddleware;

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _superagent = __webpack_require__(310);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var personalRequest = function personalRequest(store) {
	    return function (next) {
	        return function (action) {

	            switch (action.type) {
	                case 'PERSONALINFO_LOAD':
	                    _superagent2.default.post('/users/perfect').type('form').send({
	                        username: action.data[0],
	                        realName: action.data[1],
	                        telphone: action.data[2],
	                        address: action.data[3],
	                        age: action.data[4],
	                        wechat: action.data[5]
	                    }).end(function (err, res) {
	                        if (res.body.error) {
	                            next({
	                                type: 'SAVE_FAIR',
	                                data: res.body.error
	                            });
	                        } else if (res.body.data) {
	                            next({
	                                type: 'SAVE_SUCESSFUL',
	                                data: '保存成功！'
	                            });
	                            _reactRouter.browserHistory.push('/cakelist');
	                        }
	                    });

	                    break;
	            }
	            next(action);
	        };
	    };
	};

	exports.default = personalRequest;

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _superagent = __webpack_require__(310);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _personalCollection = __webpack_require__(278);

	var _reactRouter = __webpack_require__(173);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var collectionMiddleWare = function collectionMiddleWare(store) {
	    return function (next) {
	        return function (action) {
	            switch (action.type) {
	                case 'COLLECTION_INITIALIZED':
	                    _superagent2.default.get('/api/cakedetail/' + action.id).end(function (err, res) {
	                        if (res.status === 200) {
	                            next((0, _personalCollection.personalCollection)(res.body));
	                        } else if (res.status === 404) {
	                            _reactRouter.browserHistory.push('/404');
	                        }
	                    });
	                    break;
	            }
	            next(action);
	        };
	    };
	}; /**
	    * Created by liuru on 16-10-25.
	    */
	exports.default = collectionMiddleWare;

/***/ },
/* 325 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=index.js.map