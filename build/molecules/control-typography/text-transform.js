"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _controlSelectButton = _interopRequireDefault(require("../control-select-button"));
var _options = require("./options");
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*WordPress*/

/*Inbuilt*/

/*Library*/

/*Local Components*/
var TextTransform = function TextTransform(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_controlSelectButton.default, {
    label: (0, _i18n.__)('Text transform', 'atrc-prefix-atrc'),
    value: value && value.txtTf,
    options: _options.TextTransformList,
    onChange: function onChange(newVal) {
      return _onChange(newVal, 'txtTf');
    },
    allowReset: true
  }));
};
var _default = exports.default = TextTransform;
//# sourceMappingURL=text-transform.js.map