"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _classnames = _interopRequireDefault(require("classnames"));
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _label = _interopRequireDefault(require("../../atoms/label"));
var _panelRow = _interopRequireDefault(require("../panel-row"));
var _controlUnitDevice = _interopRequireDefault(require("../control-unit-device"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["value", "onChange", "label", "variant", "className"];
/*Attributes Structure
Type Object
{
    "w":"",
    "smW":"",
    "mdW":"",
    "lgW":"",
    "xlW":"",
    "xxlW":"",
    "h":"",
    "smH":"",
    "mdH":"",
    "lgH":"",
    "xlH":"",
    "xxlH":""
}
* */
/*WordPress*/
/*Library*/
/*Inbuilt*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var AtrcControlResponsiveWH = function AtrcControlResponsiveWH(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    defaultProps = _objectWithoutProperties(props, _excluded);
  var setWidth = function setWidth(newVal) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.w;
    delete valueCloned.smW;
    delete valueCloned.mdW;
    delete valueCloned.lgW;
    delete valueCloned.xlW;
    delete valueCloned.xxlW;
    if (newVal.xs) {
      valueCloned.w = newVal.xs;
    }
    if (newVal.sm) {
      valueCloned.smW = newVal.sm;
    }
    if (newVal.md) {
      valueCloned.mdW = newVal.md;
    }
    if (newVal.lg) {
      valueCloned.lgW = newVal.lg;
    }
    if (newVal.xl) {
      valueCloned.xlW = newVal.xl;
    }
    if (newVal.xxl) {
      valueCloned.xxlW = newVal.xxl;
    }
    onChange(valueCloned);
  };
  var setHeight = function setHeight(newVal) {
    var valueCloned = Object.assign({}, value);
    delete valueCloned.h;
    delete valueCloned.smH;
    delete valueCloned.mdH;
    delete valueCloned.lgH;
    delete valueCloned.xlH;
    delete valueCloned.xxlH;
    if (newVal.xs) {
      valueCloned.h = newVal.xs;
    }
    if (newVal.sm) {
      valueCloned.smH = newVal.sm;
    }
    if (newVal.md) {
      valueCloned.mdH = newVal.md;
    }
    if (newVal.lg) {
      valueCloned.lgH = newVal.lg;
    }
    if (newVal.xl) {
      valueCloned.xlH = newVal.xl;
    }
    if (newVal.xxl) {
      valueCloned.xxlH = newVal.xxl;
    }
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('ctrl-resp-w-h'), className, variant ? (0, _prefixVars.default)('ctrl-resp-w-h') + '-' + variant : '')
  }, defaultProps), label ? /*#__PURE__*/React.createElement(_label.default, null, label) : null, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_controlUnitDevice.default, {
    label: (0, _i18n.__)('Width', 'atrc-prefix-atrc'),
    className: (0, _classnames.default)('at-flx-grw-1'),
    value: {
      xs: value && value.w,
      sm: value && value.smW,
      md: value && value.mdW,
      lg: value && value.lgW,
      xl: value && value.xlW,
      xxl: value && value.xxlW
    },
    onChange: setWidth
  })), /*#__PURE__*/React.createElement(_panelRow.default, {
    className: (0, _classnames.default)('at-m')
  }, /*#__PURE__*/React.createElement(_controlUnitDevice.default, {
    label: (0, _i18n.__)('Height', 'atrc-prefix-atrc'),
    className: (0, _classnames.default)('at-flx-grw-1'),
    value: {
      xs: value && value.h,
      sm: value && value.smH,
      md: value && value.mdH,
      lg: value && value.lgH,
      xl: value && value.xlH,
      xxl: value && value.xxlH
    },
    onChange: setHeight
  }))));
};
var _default = exports.default = AtrcControlResponsiveWH;
//# sourceMappingURL=index.js.map