"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _components = require("@wordpress/components");
var _useColors = _interopRequireDefault(require("../../utils/use-colors"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* Library */ /* WordPress */ /* Internal */
/* Local */
var colorsAndGradientKeys = ['colors', 'disableCustomColors', 'gradients', 'disableCustomGradients'];
var TAB_COLOR = {
  name: 'color',
  title: 'Solid',
  value: 'color'
};
var TAB_GRADIENT = {
  name: 'gradient',
  title: 'Gradient',
  value: 'gradient'
};
var TABS_SETTINGS = [TAB_COLOR, TAB_GRADIENT];
function ColorGradientControlInner(_ref) {
  var colors = _ref.colors,
    gradients = _ref.gradients,
    disableCustomColors = _ref.disableCustomColors,
    disableCustomGradients = _ref.disableCustomGradients,
    __experimentalIsRenderedInSidebar = _ref.__experimentalIsRenderedInSidebar,
    className = _ref.className,
    label = _ref.label,
    onColorChange = _ref.onColorChange,
    onGradientChange = _ref.onGradientChange,
    colorValue = _ref.colorValue,
    gradientValue = _ref.gradientValue,
    clearable = _ref.clearable,
    _ref$showTitle = _ref.showTitle,
    showTitle = _ref$showTitle === void 0 ? true : _ref$showTitle,
    enableAlpha = _ref.enableAlpha,
    headingLevel = _ref.headingLevel,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? '' : _ref$variant;
  var canChooseAColor = onColorChange && (!(0, _lodash.isEmpty)(colors) || !disableCustomColors);
  var canChooseAGradient = onGradientChange && (!(0, _lodash.isEmpty)(gradients) || !disableCustomGradients);
  if (!canChooseAColor && !canChooseAGradient) {
    return null;
  }
  var tabPanels = _defineProperty(_defineProperty({}, TAB_COLOR.value, /*#__PURE__*/React.createElement(_components.ColorPalette, {
    value: colorValue,
    onChange: canChooseAGradient ? function (newColor) {
      onColorChange(newColor);
      onGradientChange();
    } : onColorChange,
    colors: colors,
    disableCustomColors: disableCustomColors,
    __experimentalIsRenderedInSidebar: __experimentalIsRenderedInSidebar,
    clearable: clearable,
    enableAlpha: enableAlpha,
    headingLevel: headingLevel
  })), TAB_GRADIENT.value, /*#__PURE__*/React.createElement(_components.GradientPicker, {
    __nextHasNoMargin: true,
    value: gradientValue,
    onChange: canChooseAColor ? function (newGradient) {
      onGradientChange(newGradient);
      onColorChange();
    } : onGradientChange,
    gradients: gradients,
    disableCustomGradients: disableCustomGradients,
    __experimentalIsRenderedInSidebar: __experimentalIsRenderedInSidebar,
    clearable: clearable,
    headingLevel: headingLevel
  }));
  var renderPanelType = function renderPanelType(type) {
    return /*#__PURE__*/React.createElement("div", {
      className: "blk-ed-cl-grd-ctrl__pnl"
    }, tabPanels[type]);
  };
  return /*#__PURE__*/React.createElement(_components.BaseControl, {
    __nextHasNoMarginBottom: true,
    className: (0, _classnames.default)('blk-ed-cl-grd-ctrl', className, variant ? (0, _prefixVars.default)('cl-grd') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement("fieldset", {
    className: "blk-ed-cl-grd-ctrl__fieldset"
  }, /*#__PURE__*/React.createElement(_components.__experimentalVStack, {
    spacing: 1
  }, showTitle && /*#__PURE__*/React.createElement("legend", null, /*#__PURE__*/React.createElement("div", {
    className: "blk-ed-cl-grd-ctrl__cl-ind"
  }, /*#__PURE__*/React.createElement(_components.BaseControl.VisualLabel, null, label))), canChooseAColor && canChooseAGradient && /*#__PURE__*/React.createElement(_components.TabPanel, {
    className: "blk-ed-cl-grd-control__tabs",
    tabs: TABS_SETTINGS,
    initialTabName: gradientValue ? TAB_GRADIENT.value : !!canChooseAColor && TAB_COLOR.value
  }, function (tab) {
    return renderPanelType(tab.value);
  }), !canChooseAGradient && renderPanelType(TAB_COLOR.value), !canChooseAColor && renderPanelType(TAB_GRADIENT.value))));
}
function ColorGradientControlSelect(props) {
  var colorGradientSettings = {};
  var _AtrcUseColors = (0, _useColors.default)(),
    allSolids = _AtrcUseColors.allSolids,
    allGradients = _AtrcUseColors.allGradients;
  colorGradientSettings.colors = allSolids;
  colorGradientSettings.gradients = allGradients;
  colorGradientSettings.disableCustomColors = props.disableCustomColors || false;
  colorGradientSettings.disableCustomGradients = props.disableCustomGradients || false;
  return /*#__PURE__*/React.createElement(ColorGradientControlInner, _objectSpread(_objectSpread({}, colorGradientSettings), props));
}
function AtrcColorGradientControl(props) {
  if (colorsAndGradientKeys.every(function (key) {
    return Object.prototype.hasOwnProperty.call(props, key);
  })) {
    return /*#__PURE__*/React.createElement(ColorGradientControlInner, props);
  }
  return /*#__PURE__*/React.createElement(ColorGradientControlSelect, props);
}
var _default = exports.default = AtrcColorGradientControl;
//# sourceMappingURL=index.js.map