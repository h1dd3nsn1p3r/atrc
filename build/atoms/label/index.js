var _excluded = ["className", "variant", "children", "htmlFor"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
var AtrcLabel = function AtrcLabel(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$children = props.children,
    children = _props$children === void 0 ? '' : _props$children,
    _props$htmlFor = props.htmlFor,
    htmlFor = _props$htmlFor === void 0 ? '#' : _props$htmlFor,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("label", _extends({
    className: classnames(AtrcPrefix('lbl'), 'at-m', className, variant ? AtrcPrefix('lbl') + '-' + variant : ''),
    htmlFor: htmlFor
  }, defaultProps), children);
};
export default AtrcLabel;
//# sourceMappingURL=index.js.map