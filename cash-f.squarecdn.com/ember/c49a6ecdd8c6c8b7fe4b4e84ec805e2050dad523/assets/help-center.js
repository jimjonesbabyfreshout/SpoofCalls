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

},{"./utils/ajax":3,"./utils/config":4,"./utils/query-params":5,"./utils/ua-parser":6}],2:[function(require,module,exports){
"use strict";

var _ajax = _interopRequireDefault(require("./utils/ajax"));

var _config = _interopRequireDefault(require("./utils/config"));

var _eventstream = _interopRequireDefault(require("./eventstream"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener('DOMContentLoaded', function () {
  var envConfig = _config["default"].getEnvConfig();

  var regionConfig = _config["default"].getRegionConfig();

  var inputField = document.getElementById('search-input-field');
  var ARTICLE_ID_REGEX = /[0-9]+/g;
  var AUTOCOMPLETE_DELAY = 200;
  var AUTOCOMPLETE_MIN_LENGTH = 2;
  var BOOKSHELF_SOURCE = 'CASH_HELP';
  var BOOKSHELF_SEARCH_TYPE_COMPLETE = 'COMPLETE';
  var BOOKSHELF_DOCUMENT_KINDS = ['CASH_HELP_ARTICLE'];
  var BOOKSHELF_DOCUMENT_ID_BASE = 'cash-help-article-';
  var BOOKSHELF_LOGGING_ENDPOINT = '/log-click-through';
  var BOOKSHELF_SEARCH_ENDPOINT = '/search';
  var RESULTS_PER_PAGE_FOR_SEARCH_BAR = 3;
  var RESULTS_PER_PAGE_FOR_SEARCH_PAGE = 10;
  var DEFAULT_RESULTS_PAGE = 1;
  var FALLBACK_DESCRIPTION_STRING = 'Click here to find out more about this article';
  var PATHNAME_FOR_SEARCH = '/help/search';
  var timeout;
  var eventstream = new _eventstream["default"]();
  var captureIntent = true;
  inputField.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      location.href = generateSearchLink(inputField.value, DEFAULT_RESULTS_PAGE);
    }
  }, true);
  inputField.addEventListener('focus', function () {
    captureIntent = true;
    eventstream.event('SEARCH', {
      cash_web_event_description: 'search_start'
    });
  });
  inputField.addEventListener('input', function () {
    var searchText = inputField.value;

    if (timeout) {
      clearTimeout(timeout);
    }

    if (captureIntent) {
      captureIntent = false;
      eventstream.event('SEARCH', {
        cash_web_event_description: 'search_enter_text'
      });
    }

    if (searchText.length > AUTOCOMPLETE_MIN_LENGTH) {
      timeout = setTimeout(function () {
        searchBookshelf(searchText, showResultsOnSearchbar, showFailedSearchOnSearchbar, RESULTS_PER_PAGE_FOR_SEARCH_BAR, DEFAULT_RESULTS_PAGE, BOOKSHELF_SEARCH_TYPE_COMPLETE);
      }, AUTOCOMPLETE_DELAY);
    }
  });

  var searchBookshelf = function searchBookshelf(searchText, searchSuccess, searchFailed, resultsPerPage, resultsPage, bookshelf_search_type) {
    var params = JSON.stringify({
      source: BOOKSHELF_SOURCE,
      search_type: bookshelf_search_type,
      document_kinds: BOOKSHELF_DOCUMENT_KINDS,
      page: resultsPage || 1,
      per_page: resultsPerPage,
      search_text: searchText,
      locale: {
        country_code: regionConfig.region,
        language_code: regionConfig.locale
      }
    });
    callBookshelf(BOOKSHELF_SEARCH_ENDPOINT, params, searchSuccess, searchFailed);
  };

  var logLinkClick = function logLinkClick(link, bookshelfSearchType) {
    var params = JSON.stringify({
      source: BOOKSHELF_SOURCE,
      search_text: inputField.value,
      search_type: bookshelfSearchType,
      locale: {
        country_code: regionConfig.region,
        language_code: regionConfig.locale
      },
      document_id: BOOKSHELF_DOCUMENT_ID_BASE + getArticleId(link)
    });
    callBookshelf(BOOKSHELF_LOGGING_ENDPOINT, params);
  };

  var callBookshelf = function callBookshelf(bookshelfEndpoint, params, searchSuccess, searchFailed) {
    var data = new FormData();
    data.append('data', params);
    (0, _ajax["default"])({
      dataType: 'json',
      type: 'POST',
      url: envConfig['bookshelfBaseApiUrl'] + bookshelfEndpoint,
      data: data,
      crossDomain: true,
      done: searchSuccess,
      fail: searchFailed
    });
  }; // Help article urls are structured as cash.app/help/us/en-us/3402-article-slug.
  // The article id is the 3402 part of the url


  var getArticleId = function getArticleId(link) {
    link = link.target.pathname || '';
    var articleId = link.match(ARTICLE_ID_REGEX);
    return articleId ? articleId.pop() : '';
  };

  var showResultsOnSearchbar = function showResultsOnSearchbar(data) {
    clearResultsFromElementById('search-bar-results');
    var fragment = document.createDocumentFragment();
    var searchResults = document.getElementById('search-bar-results');
    searchResults.style.display = 'block';

    if (data.document_results) {
      data.document_results.forEach(function (result) {
        if (result.document.title) {
          fragment.appendChild(renderResult(result.document, BOOKSHELF_SEARCH_TYPE_COMPLETE));
        }
      });

      if (data.page_count > 1) {
        moreResultsSearchItem.url = generateSearchLink(inputField.value, null);
        fragment.appendChild(renderResult(moreResultsSearchItem, BOOKSHELF_SEARCH_TYPE_COMPLETE));
      }
    } else {
      fragment.appendChild(renderResult(noSearchResults, BOOKSHELF_SEARCH_TYPE_COMPLETE));
    }

    searchResults.appendChild(fragment);
  };

  var showFailedSearchOnSearchbar = function showFailedSearchOnSearchbar() {
    clearResults();
    document.getElementById('search-bar-results').appendChild(renderResult(searchErrorMessage, BOOKSHELF_SEARCH_TYPE_COMPLETE));
  };

  var showResultsOnPage = function showResultsOnPage(data) {
    clearResults();
    var fragment = document.createDocumentFragment();
    var searchResults = document.getElementById('search-page-results');

    if (data.document_results) {
      data.document_results.forEach(function (result) {
        if (result.document.title) {
          fragment.appendChild(renderResult(result.document, BOOKSHELF_SEARCH_TYPE_COMPLETE));
        }
      });

      if (data.page_count > 1) {
        renderPrevNextButtons(data.current_page, data.page_count);
      }
    } else {
      fragment.appendChild(renderResult(noSearchResults, BOOKSHELF_SEARCH_TYPE_COMPLETE));
    }

    searchResults.appendChild(fragment);
  };

  var showFailedSearchOnPage = function showFailedSearchOnPage() {
    clearResults();
    document.getElementById('search-page-results').appendChild(renderResult(searchErrorMessage, BOOKSHELF_SEARCH_TYPE_COMPLETE));
  };

  var clearResults = function clearResults() {
    clearResultsFromElementById('search-page-results');
    clearResultsFromElementById('search-bar-results');
    clearResultsFromElementById('search-prev-next');
    document.getElementById('search-bar-results').style.display = 'none';
  };

  var clearResultsFromElementById = function clearResultsFromElementById(elementId) {
    var searchResults = document.getElementById(elementId);

    while (searchResults && searchResults.firstChild) {
      searchResults.removeChild(searchResults.lastChild);
    }
  };

  var clearPrevNextButtons = function clearPrevNextButtons() {
    var prevNextButtons = document.getElementById('search-prev-next');

    if (prevNextButtons) {
      prevNextButtons.remove();
    }
  };

  var generateSearchLink = function generateSearchLink(searchTerm, searchPage) {
    var hash = searchPage ? searchTerm + '&' + searchPage : searchTerm;
    return location.origin + PATHNAME_FOR_SEARCH + '#' + hash;
  };

  var moreResultsSearchItem = {
    title: 'More Results',
    description: 'Click to view more search results.',
    url: ''
  };
  var noSearchResults = {
    title: 'No Search Results Found',
    description: 'We couldn\'t find what you\'re looking for. Try searching for something else.',
    url: ''
  };
  var searchErrorMessage = {
    title: 'Error With Your Search Query',
    description: 'We had trouble with your search. Please try again later.',
    url: ''
  };

  var renderResult = function renderResult(result, bookshelfSearchType) {
    var searchDescription = document.createElement('p');
    searchDescription.innerText = getDescription(result);
    var searchTitle = document.createElement('h3');
    searchTitle.className = 'chevron-after';
    var searchLink = document.createElement('a');
    searchLink.innerText = result.title;
    searchLink.href = result.url;
    searchLink.className = 'search-link';

    if (result.document_id) {
      searchLink.onclick = logLinkClick.bind(result.url), bookshelfSearchType;
    }

    var searchElement = document.createElement('div');
    searchElement.className = 'search-item';
    searchTitle.appendChild(searchLink);
    searchElement.appendChild(searchTitle);
    searchElement.appendChild(searchDescription);
    return searchElement;
  };

  var renderPrevNextButtons = function renderPrevNextButtons(currentPage, maxPages) {
    if (maxPages === 1) {
      return;
    }

    clearResultsFromElementById('search-prev-next');
    var prevNextButtons = document.createElement('div');
    prevNextButtons.id = 'search-prev-next';
    var prevButton = document.createElement('a');
    var nextButton = document.createElement('a');

    if (currentPage > 1) {
      prevButton.href = generateSearchLink(inputField.value, currentPage - 1);
      prevButton.text = 'Previous';
      prevButton.className = 'search-prev';
      prevNextButtons.appendChild(prevButton);
    }

    if (currentPage < maxPages) {
      nextButton.href = generateSearchLink(inputField.value, currentPage + 1);
      nextButton.text = 'Next';
      nextButton.className = 'search-next';
      prevNextButtons.appendChild(nextButton);
    }

    document.getElementById('prev-next-buttons').appendChild(prevNextButtons);
  };

  var getDescription = function getDescription(result) {
    if (result.description) {
      return result.description;
    }

    var documentFields = result.fields;

    if (documentFields) {
      var _iterator = _createForOfIteratorHelper(documentFields),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _document = _step.value;

          if (_document.name === 'body') {
            if (_document.value.length > 0) {
              var breakpoint = _document.value.indexOf(' ', 90);

              return breakpoint > 0 ? _document.value.substring(0, breakpoint) + ' ...' : _document.value + ' ...';
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    return FALLBACK_DESCRIPTION_STRING;
  };

  var search = function search() {
    if (location.pathname === '/help/search') {
      var params = location.hash.substring(1).replace(/%20/g, ' ').split('&');
      var searchTerm = decodeURIComponent(params[0]);

      if (searchTerm) {
        inputField.value = searchTerm;
        searchBookshelf(searchTerm, showResultsOnPage, showFailedSearchOnPage, RESULTS_PER_PAGE_FOR_SEARCH_PAGE, params[1], BOOKSHELF_SEARCH_TYPE_COMPLETE);
      }
    }
  };

  window.onload = function () {
    clearPrevNextButtons();
    search();
  };

  window.onhashchange = function () {
    clearPrevNextButtons();
    clearResults();
    search();
  };
});

},{"./eventstream":1,"./utils/ajax":3,"./utils/config":4}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{"../../../node_modules/ua-parser-js/dist/ua-parser.min":7}],7:[function(require,module,exports){
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
