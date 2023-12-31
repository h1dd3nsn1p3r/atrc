"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _css = require("../control-box-four/css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); } /* Inbuilt */
/* Local */
var AtrcControlBorderRadiusCss = function AtrcControlBorderRadiusCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'border-radius';
  var output = {
    xs: ''
  };
  if (_typeof(value) === 'object') {
    output.xs += "".concat(property, ":").concat((0, _css.AtrcControlBoxFourShorthandCssOnly)({
      t: value.tL,
      r: value.tR,
      b: value.bR,
      l: value.bL
    }), ";");
  } else {
    output.xs += "".concat(property, " : ").concat(value, ";");
  }
  return output;
};
var _default = exports.default = AtrcControlBorderRadiusCss;
//# sourceMappingURL=css.js.map