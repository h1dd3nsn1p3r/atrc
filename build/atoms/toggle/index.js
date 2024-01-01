var _excluded = ["variant", "className", "label", "onChange", "checked"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*WordPress*/
import { ToggleControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
var AtrcToggle = function AtrcToggle(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$checked = props.checked,
    checked = _props$checked === void 0 ? false : _props$checked,
    defaultProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(ToggleControl, _extends({
    className: classnames(AtrcPrefix('tog'), className, variant ? AtrcPrefix('tog') + '-' + variant : ''),
    label: label,
    checked: checked,
    onChange: onChange
  }, defaultProps));
};
export default AtrcToggle;
//# sourceMappingURL=index.js.map