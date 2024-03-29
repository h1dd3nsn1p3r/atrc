var _excluded = ["variant", "className", "prefix", "srcset"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
var AtrcImg = function AtrcImg(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? '' : _props$prefix,
    _props$srcset = props.srcset,
    srcset = _props$srcset === void 0 ? '' : _props$srcset,
    defaultProps = _objectWithoutProperties(props, _excluded);
  if (!defaultProps.src) {
    return null;
  }
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/alt-text
    React.createElement("img", _extends({
      className: classnames('at-img', className, variant ? AtrcPrefix('img') + '-' + variant : ''),
      srcSet: srcset
    }, defaultProps))
  );
};
export default AtrcImg;
//# sourceMappingURL=index.js.map