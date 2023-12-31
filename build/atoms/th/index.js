"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _prefixVars = _interopRequireDefault(require("../../prefix-vars"));
var _excluded = ["colSpan", "isSorting", "isSortActive", "onMouseEnter", "onMouseLeave", "className", "variant", "children"];
/*Library*/
/*Inbuilt*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Local Components*/
var AtrcTh = function AtrcTh(props) {
  var _props$colSpan = props.colSpan,
    colSpan = _props$colSpan === void 0 ? 1 : _props$colSpan,
    _props$isSorting = props.isSorting,
    isSorting = _props$isSorting === void 0 ? false : _props$isSorting,
    _props$isSortActive = props.isSortActive,
    isSortActive = _props$isSortActive === void 0 ? false : _props$isSortActive,
    _props$onMouseEnter = props.onMouseEnter,
    onMouseEnter = _props$onMouseEnter === void 0 ? function () {} : _props$onMouseEnter,
    _props$onMouseLeave = props.onMouseLeave,
    onMouseLeave = _props$onMouseLeave === void 0 ? function () {} : _props$onMouseLeave,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("th", _extends({
    className: (0, _classnames.default)((0, _prefixVars.default)('th'), className, isSorting ? (0, _prefixVars.default)('sorting') : '', isSortActive ? (0, _prefixVars.default)('sorting-active') : '', variant ? (0, _prefixVars.default)('th') + '-' + variant : ''),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    colSpan: colSpan
  }, defaultProps), children);
};
var _default = exports.default = AtrcTh;
//# sourceMappingURL=index.js.map