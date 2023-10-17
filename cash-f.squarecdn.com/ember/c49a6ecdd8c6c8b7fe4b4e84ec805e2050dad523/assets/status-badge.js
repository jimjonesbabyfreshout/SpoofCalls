(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _ajax = _interopRequireDefault(require("./utils/ajax"));

var _config = _interopRequireDefault(require("./utils/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener('DOMContentLoaded', function () {
  var envConfig = _config["default"].getEnvConfig();

  var issueDetectedElement = document.getElementById('issue-detected');

  var getStatus = function getStatus() {
    (0, _ajax["default"])({
      dataType: 'json',
      type: 'GET',
      url: envConfig['statusPageApiUrl'],
      crossDomain: true,
      done: getStatusSucceeded,
      fail: getStatusFailed
    });
  };

  var getStatusSucceeded = function getStatusSucceeded(data) {
    var nonOperationalComponents = [];

    var _iterator = _createForOfIteratorHelper(data.components),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var component = _step.value;

        if (component.status !== 'operational') {
          nonOperationalComponents.push(component.name || 'Cash App');
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (nonOperationalComponents.length >= 1 && issueDetectedElement) {
      issueDetectedElement.innerText = getBadgeTitle(nonOperationalComponents);
      issueDetectedElement.setAttribute('href', envConfig['statusPageUrl']);
      issueDetectedElement.style.display = 'block';
    }
  };

  var getBadgeTitle = function getBadgeTitle(components) {
    if (components.length > 1) {
      return 'Check Status Page';
    } else {
      return 'Check ' + components[0] + ' Status';
    }
  };

  var getStatusFailed = function getStatusFailed() {
    issueDetectedElement.innerText = '';
    issueDetectedElement.style.display = 'none';
  };

  getStatus();
});

},{"./utils/ajax":2,"./utils/config":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}]},{},[1]);
