function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
import AtrcWrap from '../../atoms/wrap';

/*Local*/
const AtrcFooter = props => {
  const {
    className = '',
    variant = '',
    children = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    tag: "footer",
    className: classnames(AtrcPrefix('footer'), className, variant ? AtrcPrefix('footer') + '-' + variant : '')
  }, defaultProps), children);
};
export default AtrcFooter;
//# sourceMappingURL=index.js.map