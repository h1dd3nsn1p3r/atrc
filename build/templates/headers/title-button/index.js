function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* Library */
import classnames from 'classnames';
import { isEmpty } from 'lodash';

/* Inbuilt */
import AtrcWrap from '../../../atoms/wrap';
import AtrcButton from '../../../atoms/button';
import AtrcResetButtonIcon from '../../../atoms/reset-button-icon';
import AtrcWord from '../../../atoms/word';
import AtrcHr from '../../../atoms/hr';

/* Local */
const TitleButton = props => {
  const {
    title,
    btnProps = {},
    resetBtnProps = {},
    className = '',
    allowHeader = '',
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw', 'at-p', className ? className : '')
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWord, {
    tag: "h5",
    className: classnames('at-m')
  }, title), /*#__PURE__*/React.createElement(AtrcWrap, null, /*#__PURE__*/React.createElement(AtrcButton, _extends({
    variant: "primary"
  }, btnProps)), !isEmpty(resetBtnProps) && /*#__PURE__*/React.createElement(AtrcResetButtonIcon, _extends({}, resetBtnProps, {
    value: true
  })))), /*#__PURE__*/React.createElement(AtrcHr, {
    className: classnames('at-m')
  }));
};
export default TitleButton;
//# sourceMappingURL=index.js.map