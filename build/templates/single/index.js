function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import { AtrcHeaderTitleButton } from '../headers';
import { AtrcWireFrameContentSidebar, AtrcWireFrameHeaderContentFooter } from '../wireframe';
import AtrcNav from './../../molecules/nav';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcSingle = props => {
  const {
    className = '',
    variant = '',
    label,
    right = null,
    ...defaultProps
  } = props;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({
    className: classnames(AtrcPrefix('mt-40'), className)
  }, defaultProps), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('m-0'), 'at-row')
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-col-1"
  }, /*#__PURE__*/React.createElement(AtrcNav, {
    variant: "vrt",
    navs: [{
      to: 'menu1',
      children: __('Menu 1', 'atrc-prefix-atrc')
    }, {
      to: 'menu2',
      children: __('Menu 2', 'atrc-prefix-atrc')
    }]
  })), /*#__PURE__*/React.createElement(AtrcWrap, {
    className: "at-col-11"
  }, /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('bg-white'))
  }, /*#__PURE__*/React.createElement(AtrcHeaderTitleButton, {
    title: 'Single',
    btnProps: {
      children: 'Save'
    }
  }), /*#__PURE__*/React.createElement(AtrcWireFrameContentSidebar, {
    renderSidebar: /*#__PURE__*/React.createElement(React.Fragment, null, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."),
    renderContent: /*#__PURE__*/React.createElement(React.Fragment, null, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."),
    contentProps: {
      contentCol: 'at-col-9'
    },
    sidebarProps: {
      sidebarCol: 'at-col-3'
    },
    wrapProps: {
      className: AtrcPrefix('p-15')
    }
  }), /*#__PURE__*/React.createElement(AtrcWireFrameHeaderContentFooter, {
    renderContent: /*#__PURE__*/React.createElement(React.Fragment, null, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."),
    contentProps: {
      contentCol: 'at-col-9'
    },
    wrapProps: {
      className: AtrcPrefix('p-15')
    }
  })))));
};
export default AtrcSingle;
//# sourceMappingURL=index.js.map