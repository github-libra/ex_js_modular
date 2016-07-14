'use strict';

var _dep = require('./dep1.js');

var _dep2 = _interopRequireDefault(_dep);

var _dep3 = require('./dep2.js');

var _dep4 = _interopRequireDefault(_dep3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var result = _dep2.default + _dep4.default;
document.getElementById('result').innerHTML = result;