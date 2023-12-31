"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18n = require("@wordpress/i18n");
var _coreData = require("@wordpress/core-data");
var _element = require("@wordpress/element");
var _wrap = _interopRequireDefault(require("../../atoms/wrap"));
var _notice = _interopRequireDefault(require("./../../molecules/notice"));
var _isScalar = _interopRequireDefault(require("../../utils/is-scalar"));
var _excluded = ["postType", "postId", "htmlTag", "metaKey"];
/*WordPress*/
/* Inbuilt */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Local */
var AtrcPostMeta = function AtrcPostMeta(props, ref) {
  var postType = props.postType,
    postId = props.postId,
    htmlTag = props.htmlTag,
    metaKey = props.metaKey,
    defaultProps = _objectWithoutProperties(props, _excluded);

  // eslint-disable-next-line @wordpress/no-unused-vars-before-return, no-unused-vars
  var _useEntityProp = (0, _coreData.useEntityProp)('postType', postType, 'meta', postId),
    _useEntityProp2 = _slicedToArray(_useEntityProp, 2),
    meta = _useEntityProp2[0],
    updateMeta = _useEntityProp2[1];
  var metaValue = (meta === null || meta === void 0 ? void 0 : meta[metaKey]) || null;
  if (null === metaValue) {
    return /*#__PURE__*/React.createElement(_wrap.default, _extends({}, defaultProps, {
      ref: ref
    }), /*#__PURE__*/React.createElement(_notice.default, {
      isDismissible: false,
      autoDismiss: false
    }, (0, _i18n.__)('Meta value not found for the provided meta key and it should be accessible through the REST API.', 'atrc-prefix-atrc')));
  }
  if (!(0, _isScalar.default)(metaValue)) {
    return /*#__PURE__*/React.createElement(_wrap.default, _extends({}, defaultProps, {
      ref: ref
    }), /*#__PURE__*/React.createElement(_notice.default, {
      isDismissible: false,
      autoDismiss: false
    }, (0, _i18n.__)('Supported values are limited to strings, numbers, or scalar values only.', 'atrc-prefix-atrc')));
  }
  return /*#__PURE__*/React.createElement(_wrap.default, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag
  }), metaValue);
};
var _default = exports.default = (0, _element.forwardRef)(AtrcPostMeta);
//# sourceMappingURL=index.js.map