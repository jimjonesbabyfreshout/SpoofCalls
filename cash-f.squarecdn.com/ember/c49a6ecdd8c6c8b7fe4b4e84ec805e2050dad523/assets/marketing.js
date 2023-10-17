(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _queryParams = _interopRequireDefault(require("./utils/query-params"));

var _ajax = _interopRequireDefault(require("./utils/ajax"));

var _config = _interopRequireDefault(require("./utils/config"));

var _uaParser = _interopRequireDefault(require("./utils/ua-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var PageNameMapForLogging = {
  '/': 'Cash Marketing: Home',
  '/security': 'Cash Marketing: Security'
};

var EventStream = /*#__PURE__*/function () {
  function EventStream() {
    _classCallCheck(this, EventStream);
  }

  _createClass(EventStream, [{
    key: "getHost",
    value: function getHost() {
      return /localhost/.test(window.location.host) ? 'http://localhost:8080' : '';
    }
  }, {
    key: "hasOptedIntoStatisticsTracking",
    value: function hasOptedIntoStatisticsTracking() {
      return _config["default"].getRegionConfig().hasOptedIntoStatisticsTracking;
    } // Gets the referrer as a Location object

  }, {
    key: "getReferrer",
    value: function getReferrer() {
      if (document.referrer) {
        var parser = document.createElement('a');
        parser.href = document.referrer;
        return parser;
      }

      return {};
    } // Find the nearest parent node with a class name.
    // (we don't use IDs).

  }, {
    key: "getNearestParentIdentifier",
    value: function getNearestParentIdentifier(element) {
      element = element && element.parentNode;

      while (element && !element.className) {
        element = element.parentNode;
      }

      return element && element.className;
    }
  }, {
    key: "pageClick",
    value: function pageClick(action, targetElement) {
      // Don't log the element if it's the body
      targetElement = targetElement && targetElement !== document.body ? targetElement : {};
      var text = targetElement && (targetElement.getAttribute && targetElement.getAttribute('data-link-label') || targetElement.textContent);
      this.logEvent('page_click', {
        page_click_description: '',
        // Eventstream breaks up page_click events by description. We want them all grouped together.
        page_click_action: action,
        element_parent_identifier: this.getNearestParentIdentifier(targetElement),
        element_identifier: targetElement.className,
        element_text: text && text.trim() || null,
        element_type: targetElement.tagName && targetElement.tagName.toUpperCase() || null,
        element_title: targetElement.title,
        element_target: targetElement.href
      });
    }
  }, {
    key: "pageView",
    value: function pageView() {
      var pathName = window.location.pathname;
      var pageName = PageNameMapForLogging[pathName] || document.title;
      return this.logEvent('page_view', {
        webpage_title: pageName,
        webpage_utm_source: _queryParams["default"].utm_source,
        webpage_utm_medium: _queryParams["default"].utm_medium,
        webpage_utm_campaign: _queryParams["default"].utm_campaign,
        webpage_utm_content: _queryParams["default"].utm_content,
        webpage_utm_term: _queryParams["default"].utm_term
      });
    }
  }, {
    key: "event",
    value: function event(actionName, params) {
      params = params || {};
      var paramsToLog = {};
      paramsToLog.cash_web_event_action = actionName;
      paramsToLog.cash_web_event_description = params.cash_web_event_description;
      paramsToLog.cash_web_event_category = params.cash_web_event_category;
      paramsToLog.cash_web_event_detail = params.cash_web_event_detail;
      paramsToLog.cash_web_event_amount = params.cash_web_event_amount;
      this.logEvent('cash_web_event', paramsToLog);
    }
  }, {
    key: "appDownload",
    value: function appDownload(storeSentTo) {
      var isAndroid = _uaParser["default"].isAndroid;
      this.event('DOWNLOAD_APP', {
        cash_web_event_category: storeSentTo || (isAndroid ? 'ANDROID' : 'IOS')
      });
    }
  }, {
    key: "logEvent",
    value: function logEvent(catalogName, params) {
      if (catalogName && this.hasOptedIntoStatisticsTracking()) {
        var shouldSendBeacon = navigator.sendBeacon && window.useSendBeacon;
        var url = this.getHost() + '/event/eventstream2';
        var normalizedData = this.normalizeData(catalogName, params);

        if (shouldSendBeacon) {
          var blob = new Blob([normalizedData], {
            type: 'application/json; charset=utf-8'
          });
          return navigator.sendBeacon(url, blob);
        } else {
          return (0, _ajax["default"])({
            url: url,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: normalizedData,
            withCredentials: true
          });
        }
      } else return;
    } // Similar to $.extend({}, obj1, obj2)

  }, {
    key: "extendObject",
    value: function extendObject(result) {
      result = result || {};

      for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];

        if (!obj) {
          continue;
        }

        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
          }
        }
      }

      return result;
    }
  }, {
    key: "compactObject",
    value: function compactObject(object) {
      var key,
          value,
          clone = {};

      for (key in object) {
        if (object.hasOwnProperty(key)) {
          value = object[key];

          if (value !== null && value !== undefined) {
            clone[key] = value;
          }
        }
      }

      return clone;
    }
  }, {
    key: "normalizeData",
    value: function normalizeData(catalogName, params) {
      params = params || {};
      var location = window.location;
      var referrer = this.getReferrer();
      params = this.extendObject({}, params, {
        catalog_name: catalogName,
        // Browser
        browser_height: window.innerHeight,
        browser_width: window.innerWidth,
        browser_major_version: _uaParser["default"].ua.browser.major,
        browser_name: _uaParser["default"].ua.browser.name,
        browser_version: _uaParser["default"].ua.browser.version,
        // Device
        device_build_device: _uaParser["default"].ua.device.model,
        device_density_dpi: _uaParser["default"].ua.devicePixelRatio || 1,
        device_form_factor: _uaParser["default"].ua.device.type,
        device_manufacturer: _uaParser["default"].ua.device.vendor,
        device_model: _uaParser["default"].ua.device.model,
        device_screen_height: window.screen.height,
        device_screen_width: window.screen.width,
        // OS
        os_name: _uaParser["default"].ua.os.name,
        os_version: _uaParser["default"].ua.os.version,
        // Web Page
        webpage_base_url: location.hostname + location.pathname,
        webpage_full_url: location.href,
        webpage_path: location.pathname,
        webpage_referrer: referrer.href,
        webpage_referrer_host: referrer.hostname,
        webpage_referrer_path: referrer.pathname,
        webpage_title: params.webpage_title || document.title
      });
      return JSON.stringify(this.compactObject(params));
    }
  }]);

  return EventStream;
}();

exports["default"] = EventStream;

},{"./utils/ajax":6,"./utils/config":8,"./utils/query-params":9,"./utils/ua-parser":10}],2:[function(require,module,exports){
"use strict";

var _scroller = _interopRequireDefault(require("./scroller"));

var _eventstream = _interopRequireDefault(require("./eventstream"));

var _downloadButton = _interopRequireDefault(require("./widgets/download-button"));

var _smoothScrollTrigger = _interopRequireDefault(require("./widgets/smooth-scroll-trigger"));

var _introAnimation = _interopRequireDefault(require("./widgets/intro-animation"));

var _preloadEmber = _interopRequireDefault(require("./preload-ember"));

var _uaParser = _interopRequireDefault(require("./utils/ua-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*jshint esversion: 6 */
(function () {
  var topElement,
      lowerElement,
      marqueeContent,
      upperNavigation,
      scrollPercentage,
      framePending,
      widgets = {
    'sqc-download-button': _downloadButton["default"],
    'sqc-smooth-scroll-trigger': _smoothScrollTrigger["default"],
    'sqc-intro-animation': _introAnimation["default"]
  },
      registeredWidgets = [],
      translateContainer = !(_uaParser["default"].isIOS || _uaParser["default"].isAndroid),
      cookieNotification = document.querySelector('[data-notification="uk-cookie"]');

  function fadeTopArea() {
    framePending = false;
    topElement.style.opacity = 1 - scrollPercentage;

    if (upperNavigation) {
      upperNavigation.style.transform = "translate3d(0,0, ".concat(2000 * scrollPercentage, "px)");
    }

    if (translateContainer) {
      marqueeContent.style.transform = "translate3d(0,0, -".concat(100 * scrollPercentage, "px)");
    }
  }

  function onScroll() {
    // Update the position on each scroll event so that when fadeTopArea() runs it has the latest values.
    var windowHeight = window.innerHeight,
        scrollPosition = window.scrollY;
    scrollPercentage = scrollPosition / windowHeight; // Safafi allows for effectively negative scrolling,
    // which produces some undesirable behavior

    if (scrollPosition < 0) {
      return;
    }

    if (!framePending) {
      // Only schedule a new frame if one is not on the queue.
      requestAnimationFrame(fadeTopArea);
    }

    framePending = true;
  }

  function registerWidgets() {
    var widgetElements = document.querySelectorAll('[data-widget-name]');
    widgetElements = Array.prototype.slice.call(widgetElements, 0);
    widgetElements.forEach(function (element) {
      var widgetName = element.getAttribute('data-widget-name');

      if (widgets[widgetName]) {
        registeredWidgets.push(new widgets[widgetName](element));
      }
    });
  }

  function registerAnalytics() {
    var eventstream = new _eventstream["default"]();
    eventstream.pageView();
    var anchorLinks = document.querySelectorAll('a[href]');
    Array.prototype.forEach.call(anchorLinks, function (anchor) {
      anchor.addEventListener('click', function (e) {
        eventstream.pageClick('LINK_CLICK', e.currentTarget);
        var href = e.currentTarget.href;

        if (href && href.match(/itunes.apple.com/)) {
          eventstream.appDownload('IOS');
        } else if (href && href.match(/play.google.com/)) {
          eventstream.appDownload('ANDROID');
        }
      });
    });
  }

  var checkUKCookie = function checkUKCookie() {
    var cookieConsent = document.cookie.replace(/(?:(?:^|.*;\s*)p\s*\=\s*([^;]*).*$)|^.*$/, '$1');

    if (cookieConsent != '1' && cookieNotification) {
      window.setTimeout(function () {
        document.cookie = 'p=true;expires=Fri, 31 Dec 9999 23:59:59 GMT';
        cookieNotification.dataset.active = true;
      }, 2000);
      var close = cookieNotification.querySelector('[data-action="dismiss"]');
      close.addEventListener('click', function (e) {
        cookieNotification.removeAttribute('data-active');
        e.preventDefault();
      });
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    topElement = document.querySelector('.marquee-canvas');
    marqueeContent = document.querySelector('.marquee-canvas__canvas');
    upperNavigation = document.querySelector('.marquee-canvas .cash-header-bar');
    lowerElement = document.querySelector('.scrollable');

    if (_uaParser["default"].isIPhone) {
      document.body.classList.add('is-iphone');
    } // Define check for iOS and offset initial state if appropriate


    var checkiOSOffset = function checkiOSOffset() {
      var mobileSafari = /iP(ad|hone|od).+Version\/[\d\.]+.*Safari/i.test(navigator.userAgent);

      if (mobileSafari) {
        var centeredContent = document.querySelector('.marquee-bitcoin-logo, .marquee-canvas-uk-content, .marquee-boost-logo-offset');
        var arrowContainer = document.querySelector('.marquee-canvas__nav-bar');

        if (!centeredContent || !arrowContainer) {
          return;
        }

        switch (window.screen.height) {
          case 812:
            centeredContent.style.transform = 'translateY(-3.6rem)';
            arrowContainer.style.transform = 'translate3d(-50%, -3rem,0)';
            break;

          default:
            centeredContent.style.transform = 'translateY(-2.4rem)';
        }
      }
    };

    checkiOSOffset();
    registerAnalytics();
    registerWidgets();
    (0, _preloadEmber["default"])();
    checkUKCookie();

    if (!(topElement && lowerElement)) {
      return;
    }

    setTimeout(function () {
      // Don't auto scroll to the top if there's an anchor link in the URL.
      if (!document.location.hash) {
        window.scrollTo(0, 0);
      }

      onScroll();
      new _scroller["default"](window, onScroll);
    }, 100);
  });
})();

},{"./eventstream":1,"./preload-ember":3,"./scroller":4,"./utils/ua-parser":10,"./widgets/download-button":12,"./widgets/intro-animation":13,"./widgets/smooth-scroll-trigger":14}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

/*jshint esversion: 6 */
function injectPreloadTag(type, src) {
  var preloadLink = document.createElement('link');
  preloadLink.href = src;
  preloadLink.rel = 'preload';
  preloadLink.as = type;
  preloadLink.setAttribute('crossorigin', '');
  document.head.appendChild(preloadLink);
}
/**
 * Inject preload tags for the primary ember app so that it's cached and ready when they click through to the app.
 */


function _default() {
  setTimeout(function () {
    injectPreloadTag('style', window.cdn.url + '/' + window.cdn.version + '/assets/cash.css');
    injectPreloadTag('script', window.cdn.url + '/' + window.cdn.version + '/assets/vendor.js');
    injectPreloadTag('script', window.cdn.url + '/' + window.cdn.version + '/assets/cash.js');
  }, 3000);
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*jshint esversion: 6 */
var _default = /*#__PURE__*/_createClass(function _default(element, callback) {
  _classCallCheck(this, _default);

  this.element = element;
  element.addEventListener('scroll', callback);
});

exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _animate = _interopRequireDefault(require("./utils/animate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*jshint esversion: 6 */
function _default(target, duration) {
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
  var startScrollTop = window.scrollY,
      targetPosition = typeof target === 'number' ? target : target.getBoundingClientRect().top + window.scrollY;
  (0, _animate["default"])(startScrollTop, targetPosition, duration, easing, window.scrollTo.bind(window, 0));
}

},{"./utils/animate":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ajax;

/*jshint esversion: 6 */
// Similar to jQuery's ajax() function.
function ajax(options) {
  var xhr = new XMLHttpRequest();
  xhr.open(options.type, options.url, true);

  if (options.contentType) {
    xhr.setRequestHeader('Content-type', options.contentType);
  }

  if (options.withCredentials) {
    xhr.withCredentials = true;
  }

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      var data = xhr.responseText && JSON.parse(xhr.responseText);

      if (options.done) {
        options.done(data);
      }
    } else {
      if (options.fail) {
        options.fail(xhr);
      }
    }

    if (options.always) {
      options.always(xhr);
    }
  };

  xhr.onerror = function () {
    if (options.fail) {
      options.fail(xhr);
    }

    if (options.always) {
      options.always(xhr);
    }
  };

  xhr.send(options.data);
}

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

/*jshint esversion: 6 */
// Source: https://gist.github.com/gre/1650294
var EasingFunctions = {
  // no easing, no acceleration
  linear: function linear(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

function _default(start, end, duration) {
  var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'linear';
  var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
  var easingFunction = EasingFunctions[easing] || EasingFunctions.linear,
      startTimestamp = performance.now(),
      distance = end - start;

  function step(newTime) {
    var elapsedTime = newTime - startTimestamp,
        percentComplete = elapsedTime / duration,
        newPosition = start + Math.min(distance, distance * easingFunction(percentComplete));
    callback(newPosition);

    if (elapsedTime >= duration) {
      return;
    }

    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*jshint esversion: 6 */
// Environment Configs
// TODO(shalom): add back the staging status pages when backend proxy is done
// https://crz5fygf73g7.statuspage.io/api/v2/components.json
var production = {
  bookshelfBaseApiUrl: 'https://squareup.com/api/v1/bookshelf',
  statusPageApiUrl: 'https://c2nqm6xyr4t4.statuspage.io/api/v2/components.json',
  statusPageUrl: 'https://status.cash.app'
};
var staging = {
  bookshelfBaseApiUrl: 'https://broadway.squareup.com/api/v1/bookshelf',
  statusPageApiUrl: 'https://c2nqm6xyr4t4.statuspage.io/api/v2/components.json',
  statusPageUrl: 'https://cashappstaging.statuspage.io/'
};
var development = {
  bookshelfBaseApiUrl: 'https://broadway.squareup.com/api/v1/bookshelf',
  statusPageApiUrl: 'https://c2nqm6xyr4t4.statuspage.io/api/v2/components.json',
  statusPageUrl: 'https://cashappstaging.statuspage.io/'
};
var config = {
  production: production,
  staging: staging,
  development: development
}; // Region Configs

var regionConfig = {
  GB: {
    region: 'GB',
    locale: 'EN-GB',
    hasOptedIntoStatisticsTracking: false
  },
  IE: {
    region: 'IE',
    locale: 'EN-IE',
    supportedRegion: 'IE',
    hasOptedIntoStatisticsTracking: false
  },
  CA: {
    region: 'CA',
    locale: 'EN-CA',
    supportedRegion: 'CA',
    hasOptedIntoStatisticsTracking: true
  },
  SV: {
    region: 'SV',
    locale: 'EN-US',
    supportedRegion: 'SV',
    hasOptedIntoStatisticsTracking: true
  },
  US: {
    region: 'US',
    locale: 'EN-US',
    hasOptedIntoStatisticsTracking: true
  }
};
var DEFAULT_REGION = 'US';

function getEnvConfig() {
  var env = 'development';
  var host = location.host;

  if (host === 'cash.app' || host === 'cash.me') {
    env = 'production';
  } else if (host === 'cashstaging.app' || host === 'cashstaging.me') {
    env = 'staging';
  }

  return config[env] || {};
}

function getRegionConfig() {
  var country = getCountry(window.countryGuess);
  return regionConfig[country];
}

function getCountry(countryGuess) {
  if (!regionConfig[countryGuess]) {
    return DEFAULT_REGION;
  }

  return regionConfig[countryGuess].supportedRegion || countryGuess;
} // Sets Environment variables.


var _default = {
  getEnvConfig: getEnvConfig,
  getRegionConfig: getRegionConfig
};
exports["default"] = _default;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*jshint esversion: 6 */

/**
 * Exports an object with keys & values for all the URL parameters.
 *
 * Ex:  /?utm_source=promo1
 *
 * {
 *   utm_source: "promo1"
 * }
 */
var _default = function (tuples) {
  var i, len, lookup, parts, tuple;

  if (!tuples) {
    return {};
  }

  lookup = {};

  for (i = 0, len = tuples.length; i < len; i++) {
    tuple = tuples[i];
    parts = tuple.split('=');

    if (parts.length !== 2) {
      continue;
    }

    lookup[parts[0]] = decodeURIComponent(parts[1].replace(/\+/g, ' '));
  }

  return lookup;
}(window.location.search.substr(1).split('&'));

exports["default"] = _default;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uaParser = _interopRequireDefault(require("../../../node_modules/ua-parser-js/dist/ua-parser.min"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*jshint esversion: 6 */
var ua = (0, _uaParser["default"])();
var UA_LOWERCASE = navigator.userAgent.toLowerCase(),
    OS_NAME = ua.os.name,
    BROWSER_NAME = ua.browser.name,
    DEVICE_MODEL = ua.device.model,
    isAndroid = OS_NAME === 'Android',
    isIOS = OS_NAME === 'iOS',
    isWindowsPhone = OS_NAME === 'Windows Phone',
    // Excludes android tablets by checking for one dimension smaller than 600px
isAndroidPhone = isAndroid && (window.innerWidth < 600 || window.innerHeight < 600),
    isIPhone = DEVICE_MODEL === 'iPhone',
    isIPad = DEVICE_MODEL === 'iPad',
    isIPod = DEVICE_MODEL === 'iPod',
    isFirefox = BROWSER_NAME === 'Firefox',
    isSafari = BROWSER_NAME === 'Safari' || BROWSER_NAME === 'Mobile Safari',
    isChrome = BROWSER_NAME === 'Chrome',
    isChromeIOS = isChrome && isIOS,
    // IE 11 identifies itself as everything but MSIE
// trident is the only distinct value in the UA String
// however, the version number of trident is meaninless && will
// break our version detection, so we identify it separately
isMSIE11 = !!UA_LOWERCASE.match(/trident/i),
    isMSIE = !!UA_LOWERCASE.match(/msie/i),
    isEdgeBrowser = !!UA_LOWERCASE.match(/edge/i);

function atLeastVersion(required) {
  var version = ua.browser.version;
  return version && required && parseFloat(required) <= parseFloat(version);
}

function atLeastOSVersion(required) {
  var version = ua.os.version;
  return version && required && parseFloat(required) <= parseFloat(version);
}

var _default = {
  ua: ua,
  userAgent: navigator.userAgent,
  isIOS: isIOS,
  isIPod: isIPod,
  isIPad: isIPad,
  isIPhone: isIPhone,
  isAndroid: isAndroid,
  isAndroidPhone: isAndroidPhone,
  isFirefox: isFirefox,
  isSafari: isSafari,
  isChome: isChrome,
  isChomeIOS: isChromeIOS,
  isMSIE: isMSIE,
  isMSIE11: isMSIE11,
  isEdgeBrowser: isEdgeBrowser,
  isWindowsPhone: isWindowsPhone,
  atLeastVersion: atLeastVersion,
  atLeastOSVersion: atLeastOSVersion,
  supportsPushState: window.history && window.history.pushState,
  isUnsupportedBrowser: isMSIE && !atLeastVersion(10),
  hasTouch: !!('ontouchstart' in window) || navigator.msMaxTouchPoints,
  devicePixelRatio: window.devicePixelRatio || 1,
  nativeAppSupported: function () {
    return isIPhone && atLeastOSVersion(9) || isAndroidPhone && atLeastOSVersion(4.4);
  }()
};
exports["default"] = _default;

},{"../../../node_modules/ua-parser-js/dist/ua-parser.min":17}],11:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sqcBaseWidget = _interopRequireDefault(require("./sqc-base-widget"));

var _uaParser = _interopRequireDefault(require("../utils/ua-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SQCAnimatedSignature = /*#__PURE__*/function (_SQCBaseWidget) {
  _inherits(SQCAnimatedSignature, _SQCBaseWidget);

  var _super = _createSuper(SQCAnimatedSignature);

  function SQCAnimatedSignature() {
    var _this;

    _classCallCheck(this, SQCAnimatedSignature);

    _this = _super.apply(this, arguments); // NOTE(seanslinsky): SVG stroke-dasharrays can't be animated with css
    // animations in any Microsoft browser up to and including Edge 14

    _this.canAnimateSVGStroke = !(_uaParser["default"].isMSIE || _uaParser["default"].isMSIE11 || _uaParser["default"].isEdgeBrowser);

    _this.setupPaths();

    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(SQCAnimatedSignature, [{
    key: "setupPaths",
    value: function setupPaths() {
      var animatablePaths = this.element.querySelectorAll('.animatable-path');

      if (!this.canAnimateSVGStroke) {
        this.element.classList.add('no-animated-paths');
        return;
      }

      if (!animatablePaths.length) {
        return;
      }

      animatablePaths = Array.prototype.slice.call(animatablePaths, 0);
      animatablePaths.forEach(function (path) {
        var pathLength = path.getTotalLength();
        path.setAttribute('stroke-dashoffset', pathLength);
        path.setAttribute('stroke-dasharray', pathLength);
      });
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this2 = this;

      return new Promise(function (resolve) {
        var count = 0,
            animatedPaths = _this2.element.querySelectorAll('.animatable-path'),
            nAnimatedPaths = animatedPaths && animatedPaths.length || 0,
            _onAnimationEnd;

        _onAnimationEnd = function onAnimationEnd() {
          count++;

          if (count === nAnimatedPaths) {
            _this2.element.removeEventListener('animationend', _onAnimationEnd);

            resolve();
          }
        };

        _this2.element.addEventListener('animationend', _onAnimationEnd);

        _this2.element.classList.add('animate');
      });
    }
  }]);

  return SQCAnimatedSignature;
}(_sqcBaseWidget["default"]);

exports["default"] = SQCAnimatedSignature;

},{"../utils/ua-parser":10,"./sqc-base-widget":16}],12:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uaParser = _interopRequireDefault(require("../utils/ua-parser"));

var _sqcBaseWidget = _interopRequireDefault(require("./sqc-base-widget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.squareup.cash&referrer=utm_source%3Dcash-web%26utm_medium%3Dweb';
var APP_STORE_URL = 'https://itunes.apple.com/us/app/square-cash/id711923939?pt=302818&ct=cash-web';
var CASH_APP_URL = '/app';

var SQCDownloadButton = /*#__PURE__*/function (_SQCBaseWidget) {
  _inherits(SQCDownloadButton, _SQCBaseWidget);

  var _super = _createSuper(SQCDownloadButton);

  function SQCDownloadButton(element) {
    var _this;

    _classCallCheck(this, SQCDownloadButton);

    var storeIcon = !!element.getAttribute('data-store-icon');
    _this = _super.call(this, element);
    _this.isAndroid = _uaParser["default"].isAndroid;
    _this.isIOS = _uaParser["default"].isIOS;

    if (storeIcon) {
      _this.addStoreIcon();
    }

    _this.setURLs(element.getAttribute('data-campaign-id'));

    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(SQCDownloadButton, [{
    key: "setURLs",
    value: function setURLs(campaignId) {
      var url = this.isAndroid ? PLAY_STORE_URL : this.isIOS ? APP_STORE_URL : CASH_APP_URL;

      if (campaignId && (this.isAndroid || this.isIOS)) {
        url += '-' + campaignId;
      }

      this.element.setAttribute('href', url);
    }
  }, {
    key: "addStoreIcon",
    value: function addStoreIcon() {
      var className = this.isAndroid ? 'play-store' : this.isIOS ? 'app-store' : '';
      return className && this.element.classList.add(className);
    }
  }]);

  return SQCDownloadButton;
}(_sqcBaseWidget["default"]);

exports["default"] = SQCDownloadButton;

},{"../utils/ua-parser":10,"./sqc-base-widget":16}],13:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sqcBaseWidget = _interopRequireDefault(require("./sqc-base-widget"));

var _animatedSignature = _interopRequireDefault(require("./animated-signature"));

var _spinner = _interopRequireDefault(require("./spinner"));

var _uaParser = _interopRequireDefault(require("../utils/ua-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LOOPING_VIDEO = 'https://cash-f.squarecdn.com/videos/cash_site_loop.mp4';
var LOADING_VIDEO = 'https://cash-f.squarecdn.com/videos/cash_site_intro-v2.mp4'; // TODO(seanslinsky): this is disgusting.  Get the actual CDN info injected into the page!

var CARD_IMG_URL = "".concat(window.cdn.url, "/").concat(window.cdn.version, "/assets/images/marketing/blankcard.png");

var IntroAnimation = /*#__PURE__*/function (_SQCBaseWidget) {
  _inherits(IntroAnimation, _SQCBaseWidget);

  var _super = _createSuper(IntroAnimation);

  function IntroAnimation(element) {
    var _this;

    _classCallCheck(this, IntroAnimation);

    _this = _super.call(this, element);
    _this.dummyFocusTarget = _this.createDummyFocusTarget();
    _this.canPlayInlineVideo = !_uaParser["default"].isIOS || _uaParser["default"].isIOS && _uaParser["default"].atLeastOSVersion(9);
    _this.animatedSignatureElement = element.querySelector('.animated-signature');
    _this.animatedSignature = _this.setupAnimatedSignature(_this.animatedSignatureElement);
    _this.cashcardLabel = element.querySelector('.cashcard__caption');
    _this.cardGrapic = element.querySelector('.cashcard');

    _this.loadAssets().then(_this.startAnimation.bind(_assertThisInitialized(_this)));

    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  } // Safari < 10.1 has a nasty bug where it seems to automatically set focus
  // on the video element, which does funky things to page's scroll position
  // In this case, we just deflect focus to an element we created in this widget


  _createClass(IntroAnimation, [{
    key: "createDummyFocusTarget",
    value: function createDummyFocusTarget() {
      var a = document.createElement('a');
      a.classList.add('dummy-focus-target');
      a.setAttribute('href', '#');
      this.element.appendChild(a);
      return a;
    }
  }, {
    key: "createSpinner",
    value: function createSpinner() {
      var spinner = new _spinner["default"]({
        color: '#fff',
        diameter: 80,
        thickness: 10
      });
      this.element.appendChild(spinner.el);
      return spinner;
    }
  }, {
    key: "loadAssets",
    value: function loadAssets() {
      var _this2 = this;

      var p1,
          p2,
          p3,
          spinner = this.createSpinner(),
          maxLoadingTime = 5000;
      spinner.spin();
      p1 = new Promise(function (resolve) {
        if (!_this2.canPlayInlineVideo) {
          return resolve();
        }

        _this2.introVideo = _this2.createVideoElement(LOADING_VIDEO, resolve);
        setTimeout(resolve, maxLoadingTime);
      });
      p2 = new Promise(function (resolve) {
        if (!_this2.canPlayInlineVideo) {
          return resolve();
        }

        _this2.loopingVideo = _this2.createVideoElement(LOOPING_VIDEO, resolve);
        setTimeout(resolve, maxLoadingTime);
      });
      p3 = new Promise(function (resolve) {
        var cardBg = document.createElement('img');
        cardBg.addEventListener('load', resolve);
        cardBg.src = CARD_IMG_URL;
        setTimeout(resolve, maxLoadingTime);
      });
      return Promise.all([p1, p2, p3]).then(function () {
        spinner.stop();
      });
    }
  }, {
    key: "createVideoElement",
    value: function createVideoElement(url, onCanPlay) {
      var _this3 = this;

      var video = document.createElement('video');
      video.setAttribute('src', url);
      video.setAttribute('playsinline', '');
      video.setAttribute('muted', '');
      video.setAttribute('controls', false); // video.setAttribute('autoplay', '');

      if (onCanPlay && typeof onCanPlay === 'function') {
        video.addEventListener('canplay', onCanPlay);
      }

      video.addEventListener('focus', function () {
        _this3.dummyFocusTarget.focus();
      });
      video.load();
      return video;
    }
  }, {
    key: "setupAnimatedSignature",
    value: function setupAnimatedSignature(element) {
      if (element) {
        var animatedSignature = new _animatedSignature["default"](element);
        return animatedSignature;
      }

      return null;
    }
  }, {
    key: "showCardCaption",
    value: function showCardCaption() {
      this.cashcardLabel.classList.add('show');
    }
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      var _this4 = this;

      var callback = function callback() {
        var animatedSignature = _this4.animatedSignature;

        _this4.cardGrapic.removeEventListener('transitionend', callback);

        if (animatedSignature) {
          animatedSignature.animate().then(_this4.showCardCaption.bind(_this4));
        }

        setTimeout(function () {
          _this4.insertLoadingVideo();
        }, 1000);
      };

      this.cardGrapic.addEventListener('transitionend', callback);
      this.element.classList.add('ready');
    }
  }, {
    key: "insertLoadingVideo",
    value: function insertLoadingVideo() {
      var _this5 = this;

      if (!this.canPlayInlineVideo) {
        return this.element.classList.add('no-bgvideo');
      }

      this.element.appendChild(this.introVideo);

      var swapVideo = function swapVideo() {
        _this5.loopingVideo.currentTime = 0;

        _this5.introVideo.removeEventListener('ended', swapVideo);

        setTimeout(function () {
          _this5.element.appendChild(_this5.loopingVideo);

          _this5.loopingVideo.setAttribute('loop', '');

          _this5.loopingVideo.play(); // If the tab is in the background, stop the video.


          document.addEventListener('visibilitychange', function () {
            var loopingVideo = _this5.loopingVideo;
            var isPlaying = loopingVideo && loopingVideo.currentTime > 0 && !loopingVideo.paused && !loopingVideo.ended && loopingVideo.readyState > 2;

            if (document.hidden && isPlaying) {
              loopingVideo.pause();
            } else if (!document.hidden && !isPlaying && loopingVideo) {
              loopingVideo.play();
            }
          });
        }, 0); // Delay adding the looping video to prevent momentary flash
        // of blank background in Safar (mobile and desktop)

        setTimeout(function () {
          _this5.element.removeChild(_this5.introVideo);
        }, 100);
      };

      this.introVideo.addEventListener('ended', swapVideo);
      this.introVideo.play();
    }
  }]);

  return IntroAnimation;
}(_sqcBaseWidget["default"]);

exports["default"] = IntroAnimation;

},{"../utils/ua-parser":10,"./animated-signature":11,"./spinner":15,"./sqc-base-widget":16}],14:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sqcBaseWidget = _interopRequireDefault(require("./sqc-base-widget"));

var _smoothScroller = _interopRequireDefault(require("../smooth-scroller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SQCSmoothScrollTrigger = /*#__PURE__*/function (_SQCBaseWidget) {
  _inherits(SQCSmoothScrollTrigger, _SQCBaseWidget);

  var _super = _createSuper(SQCSmoothScrollTrigger);

  function SQCSmoothScrollTrigger(element) {
    var _this;

    _classCallCheck(this, SQCSmoothScrollTrigger);

    _this = _super.call(this, element);

    _this.setupHandler();

    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(SQCSmoothScrollTrigger, [{
    key: "scrollToTarget",
    value: function scrollToTarget(target, event) {
      var scrollDuration = Math.max(window.innerHeight, 700);
      (0, _smoothScroller["default"])(target, scrollDuration, 'easeInOutQuint');
      event.preventDefault();
    }
  }, {
    key: "setupHandler",
    value: function setupHandler() {
      var target = this.element.getAttribute('href'),
          targetElement = document.querySelector(target);

      if (targetElement) {
        this.element.addEventListener('click', this.scrollToTarget.bind(this, targetElement));
      }
    }
  }]);

  return SQCSmoothScrollTrigger;
}(_sqcBaseWidget["default"]);

exports["default"] = SQCSmoothScrollTrigger;

},{"../smooth-scroller":5,"./sqc-base-widget":16}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* jshint esversion: 6 */
var devicePixelRatio = window.devicePixelRatio || 1;

function extend() {
  var i, len;

  for (i = 1, len = arguments.length; i < len; i++) {
    for (var key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key)) {
        arguments[0][key] = arguments[i][key];
      }
    }
  }

  return arguments[0];
}

window.requestAnimationFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

window.clearAnimationFrame = function () {
  return window.clearAnimationFrame || window.webkitClearAnimationFrame || window.mozClearAnimationFrame || function (timeoutid) {
    window.clearTimeout(timeoutid);
  };
}();

var supportsCssAnimations = function () {
  var domPrefixes = ['Webkit', 'Moz', 'O', 'ms', 'Khtml'],
      elm = document.createElement('div'),
      i,
      len;

  if (elm.style.animationName) {
    return true;
  } else {
    for (i = 0, len = domPrefixes.length; i < len; i++) {
      if (elm.style[domPrefixes[i] + 'AnimationName'] !== 'undefined') {
        return true;
      }
    }
  }

  return false;
}();

var getBackingStoreRatio = function getBackingStoreRatio(context) {
  return context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
};

var Spinner = function Spinner(options) {
  this.options = options ? extend({}, this.defaults, options) : this.defaults;
  this.el = this.createCanvasElement();
  this.drawSpinner();
  return this;
};

Spinner.prototype = {
  defaults: {
    diameter: 30,
    thickness: 5,
    color: '#fff',
    fps: 20,
    className: 'spinner',
    top: '50%',
    left: '50%',
    position: 'absolute',
    rotationsPerSecond: 1.38
  },
  setPixelRatioForDevice: function setPixelRatioForDevice(context) {
    var backingStoreRatio = getBackingStoreRatio(context);
    this.pixelRatioForDevice = devicePixelRatio / backingStoreRatio;
  },
  createCanvasElement: function createCanvasElement() {
    var canvas = document.createElement('canvas'),
        diameter = this.options.diameter,
        ctx = canvas.getContext('2d');
    this.setPixelRatioForDevice(ctx);
    canvas.width = canvas.height = diameter * this.pixelRatioForDevice;
    canvas.style.height = canvas.style.width = diameter + 'px';
    canvas.style.position = this.options.position;
    canvas.style.top = this.options.top;
    canvas.style.left = this.options.left;

    if (this.options.top === '50%') {
      canvas.style.marginTop = '-' + diameter / 2 + 'px';
    }

    if (this.options.left === '50%') {
      canvas.style.marginLeft = '-' + diameter / 2 + 'px';
    }

    canvas.className = this.options.className;
    diameter = diameter * this.pixelRatioForDevice;
    ctx.translate(diameter / 2, diameter / 2);
    ctx.scale = (this.pixelRatioForDevice, this.pixelRatioForDevice);
    return canvas;
  },
  drawSpinner: function drawSpinner() {
    var ctx = this.el.getContext('2d'),
        diameter = this.options.diameter * this.pixelRatioForDevice,
        thickness = this.options.thickness * this.pixelRatioForDevice,
        innerDiameter = (diameter - thickness) / diameter,
        i,
        opacity;
    ctx.lineWidth = Math.ceil(diameter / 45);
    ctx.lineCap = 'square';
    ctx.fillStyle = 'transparent';
    ctx.strokeStyle = 'transparent';
    ctx.globalCompositeOperation = 'source-over';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 2;

    for (i = 360; i >= 0; i--) {
      ctx.save();
      opacity = (360 - i) / 360;
      ctx.rotate(Math.PI * (i / 180));
      ctx.beginPath();
      ctx.moveTo(0, -(diameter / 2));
      ctx.strokeStyle = 'rgba(255,255,255,' + opacity.toFixed(2) + ')';
      ctx.lineTo(0, -10);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }

    ctx.globalCompositeOperation = 'source-out';
    ctx.beginPath();
    ctx.arc(0, 0, diameter / 2, 2 * Math.PI, false);
    ctx.fillStyle = this.options.color;
    ctx.closePath();
    ctx.fill();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(0, 0, diameter / 2 * innerDiameter, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
  },
  spin: function spin() {
    if (supportsCssAnimations) {
      this.el.className = this.options.className + ' spin';
    } else {
      this.animate();
    }
  },
  animate: function animate() {
    var lastTimeChecked = this.lastTimeChecked || new Date().getTime(),
        timeSinceLastCheck = new Date().getTime() - lastTimeChecked,
        degressPerMillisecond = 360 * this.options.rotationsPerSecond / 1000,
        ctx = this.el.getContext('2d'),
        nextRotation,
        self = this;
    nextRotation = Math.PI * (degressPerMillisecond * timeSinceLastCheck) / 180;
    ctx.rotate(nextRotation);
    this.drawSpinner();
    self.animation = window.requestAnimationFrame(function () {
      self.animate();
    });
    this.lastTimeChecked = new Date().getTime();
  },
  stop: function stop() {
    var el = this.el;

    if (el && el.parentNode) {
      el.parentNode.removeChild(el);

      if (this.animation) {
        clearAnimationFrame(this.animation);
      }
    }
  }
};
var _default = Spinner;
exports["default"] = _default;

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*jshint esversion: 6 */
var SQCBaseWidget = /*#__PURE__*/_createClass(function SQCBaseWidget(element) {
  _classCallCheck(this, SQCBaseWidget);

  this.element = element;
  return this;
});

exports["default"] = SQCBaseWidget;

},{}],17:[function(require,module,exports){
/*!@license
 * UAParser.js v0.7.28
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
(function(window,undefined){"use strict";var LIBVERSION="0.7.28",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded",UA_MAX_LENGTH=255;var util={extend:function(regexes,extensions){var mergedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){mergedRegexes[i]=extensions[i].concat(regexes[i])}else{mergedRegexes[i]=regexes[i]}}return mergedRegexes},has:function(str1,str2){return typeof str1===STR_TYPE?str2.toLowerCase().indexOf(str1.toLowerCase())!==-1:false},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,"").split(".")[0]:undefined},trim:function(str,len){str=str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");return typeof len===UNDEF_TYPE?str:str.substring(0,UA_MAX_LENGTH)}};var mapper={rgx:function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[VERSION,[NAME,"Chrome"]],[/(?:edge|edgios|edga|edg)\/([\w\.]+)/i],[VERSION,[NAME,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[NAME,VERSION],[/opios[\/\s]+([\w\.]+)/i],[VERSION,[NAME,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[VERSION,[NAME,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[NAME,VERSION],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[VERSION,[NAME,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[VERSION,[NAME,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[VERSION,[NAME,"WeChat"]],[/konqueror\/([\w\.]+)/i],[VERSION,[NAME,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[VERSION,[NAME,"IE"]],[/yabrowser\/([\w\.]+)/i],[VERSION,[NAME,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Secure Browser"],VERSION],[/focus\/([\w\.]+)/i],[VERSION,[NAME,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[VERSION,[NAME,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[VERSION,[NAME,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[VERSION,[NAME,"Dolphin"]],[/coast\/([\w\.]+)/i],[VERSION,[NAME,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[NAME,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Browser"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[NAME],[/;fbav\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[NAME,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[NAME,VERSION],[/\bgsa\/([\w\.]+)\s.*safari\//i],[VERSION,[NAME,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[VERSION,[NAME,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[NAME,"Chrome WebView"],VERSION],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[VERSION,[NAME,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[VERSION,[NAME,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[ARCHITECTURE,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[ARCHITECTURE,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[MODEL,[VENDOR,"Samsung"],[TYPE,TABLET]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[MODEL,[VENDOR,"Samsung"],[TYPE,MOBILE]],[/\((ip(?:hone|od)[\s\w]*);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[MODEL,[VENDOR,"Huawei"],[TYPE,TABLET]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[MODEL,[VENDOR,"Huawei"],[TYPE,MOBILE]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,TABLET]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[MODEL,[VENDOR,"OPPO"],[TYPE,MOBILE]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[MODEL,[VENDOR,"Vivo"],[TYPE,MOBILE]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[MODEL,[VENDOR,"Realme"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[MODEL,[VENDOR,"LG"],[TYPE,TABLET]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[MODEL,/_/g," "],[VENDOR,"Nokia"],[TYPE,MOBILE]],[/droid.+;\s(pixel\sc)[\s)]/i],[MODEL,[VENDOR,"Google"],[TYPE,TABLET]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[MODEL,[VENDOR,"Google"],[TYPE,MOBILE]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,"Sony"],[TYPE,MOBILE]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[MODEL,"Xperia Tablet"],[VENDOR,"Sony"],[TYPE,TABLET]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[MODEL,"Fire Phone"],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((playbook);[\w\s\),;-]+(rim)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[MODEL,[VENDOR,"ASUS"],[TYPE,TABLET]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[MODEL,[VENDOR,"ASUS"],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\s(surface\sduo)\s/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,TABLET]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[MODEL,[VENDOR,"Fairphone"],[TYPE,MOBILE]],[/\s(u304aa)\sbuild/i],[MODEL,[VENDOR,"AT&T"],[TYPE,MOBILE]],[/sie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/[;\/]\s?(rct\w+)\sbuild/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[MODEL,[VENDOR,"Barnes & Noble"],[TYPE,TABLET]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/;\s(k88)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/;\s(nx\d{3}j)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,MOBILE]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/[;\/]\s?(zur\d{3})\sbuild/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/;\s(ph-1)\s/i],[MODEL,[VENDOR,"Essential"],[TYPE,MOBILE]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/[;\/]\s?tu_(1491)\sbuild/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/(shield[\w\s]+)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,TABLET]],[/(sprint)\s(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,TABLET]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/droid.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[345portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,"Samsung"],[TYPE,SMARTTV]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[VENDOR,"LG"],[TYPE,SMARTTV]],[/(apple)\s?tv/i],[VENDOR,[MODEL,"Apple TV"],[TYPE,SMARTTV]],[/crkey/i],[[MODEL,"Chromecast"],[VENDOR,"Google"],[TYPE,SMARTTV]],[/droid.+aft([\w])(\sbuild\/|\))/i],[MODEL,[VENDOR,"Amazon"],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[VENDOR,util.trim],[MODEL,util.trim],[TYPE,SMARTTV]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[TYPE,SMARTTV]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/droid.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,WEARABLE]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[VENDOR,[TYPE,EMBEDDED]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[MODEL,[TYPE,MOBILE]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[MODEL,[TYPE,TABLET]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[TYPE,util.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[MODEL,[VENDOR,"Generic"]],[/(phone)/i],[[TYPE,MOBILE]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[NAME,VERSION],[/\(bb(10);/i],[VERSION,[NAME,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[VERSION,[NAME,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[VERSION,[NAME,"webOS"]],[/crkey\/([\d\.]+)/i],[VERSION,[NAME,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[NAME,VERSION],[/(sunos)\s?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(ua,extensions){if(typeof ua==="object"){extensions=ua;ua=undefined}if(!(this instanceof UAParser)){return new UAParser(ua,extensions).getResult()}var _ua=ua||(typeof window!=="undefined"&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var _rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var _browser={name:undefined,version:undefined};mapper.rgx.call(_browser,_ua,_rgxmap.browser);_browser.major=util.major(_browser.version);return _browser};this.getCPU=function(){var _cpu={architecture:undefined};mapper.rgx.call(_cpu,_ua,_rgxmap.cpu);return _cpu};this.getDevice=function(){var _device={vendor:undefined,model:undefined,type:undefined};mapper.rgx.call(_device,_ua,_rgxmap.device);return _device};this.getEngine=function(){var _engine={name:undefined,version:undefined};mapper.rgx.call(_engine,_ua,_rgxmap.engine);return _engine};this.getOS=function(){var _os={name:undefined,version:undefined};mapper.rgx.call(_os,_ua,_rgxmap.os);return _os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return _ua};this.setUA=function(ua){_ua=typeof ua===STR_TYPE&&ua.length>UA_MAX_LENGTH?util.trim(ua,UA_MAX_LENGTH):ua;return this};this.setUA(_ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if(typeof define==="function"&&define.amd){define(function(){return UAParser})}else if(typeof window!=="undefined"){window.UAParser=UAParser}}var $=typeof window!=="undefined"&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);
},{}]},{},[2]);
