function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { TextareaControl } from '@wordpress/components';

/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";

/*Local Components*/
const AtrcTextarea = props => {
  const {
    variant = '',
    className = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(TextareaControl, _extends({
    className: classnames(AtrcPrefix('textarea'), className, variant ? AtrcPrefix('textarea') + '-' + variant : '')
  }, defaultProps));
};
export default AtrcTextarea;
//# sourceMappingURL=index.js.map