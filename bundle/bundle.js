(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _dep = require('./dep1.js');

var _dep2 = _interopRequireDefault(_dep);

var _dep3 = require('./dep2.js');

var _dep4 = _interopRequireDefault(_dep3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var result = _dep2.default + _dep4.default;
document.getElementById('result').innerHTML = result;
},{"./dep1.js":2,"./dep2.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var private1 = "private member of dep1";
var public1 = "public member of dep1";
exports.default = public1;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var private2 = "private member of dep2";
var public2 = "public member of dep2";

exports.default = public2;
},{}]},{},[1]);
