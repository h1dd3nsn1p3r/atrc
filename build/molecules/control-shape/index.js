/*Attributes Structure
Type Object
{
    type = '',
    svgFrm = '',
    svgDefd = '',
    svgCust = '',
    svgCl = '',
    imgFrm ='',
    imgId ='',
    imgUrl ='',
    imgSz ='',
    flipV = '',
    flipH = '',
    zT = '',

    w = '',
    smW = '',
    mdW = '',
    lgW = '',
    xlW = '',
    xxlW = '',
    h = '',
    smH = '',
    mdH= '',
    lgH = '',
    xlH = '',
    xxlH = ''
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useState, useEffect, useMemo } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcSelect from '../../atoms/select';
import AtrcToggle from '../../atoms/toggle';
import AtrcControlUnit from '../../atoms/control-unit';
import AtrcTextarea from '../../atoms/textarea';
import AtrcPanelTools from '../panel-tools';
import AtrcPanelRow from '../panel-row';
import AtrcControlDropdownHtml from '../control-dropdown-html';
import AtrcControlDropdownColor from '../control-dropdown-color';
import AtrcControlResponsiveWidthHeight from '../control-responsive-width-height';
import { AtrcIconPreview } from '../control-dropdown-html';
import AtrcControlImg from '../control-img';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';
import { map } from 'lodash';

/*Local Components */
const AtrcMaskPosition = ({
  value,
  onChange
}) => {
  const {
    posX = '',
    posY = ''
  } = value;
  const [selectedX, setSelectedX] = useState('');
  const [selectedY, setSelectedY] = useState('');

  /*Run only once on mount*/
  useEffect(() => {
    if (!['', 'left', 'center', 'right'].includes(posX)) {
      setSelectedX('cust');
    } else {
      setSelectedX(posX);
    }
    if (!['', 'top', 'center', 'bottom'].includes(posX)) {
      setSelectedY('cust');
    } else {
      setSelectedY(posY);
    }
  }, []);
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  /*Run on change selectedTransform*/
  useEffect(() => {
    const valueCloned = Object.assign({}, value);
    if ('cust' !== selectedX) {
      valueCloned.posX = selectedX;
    } else {
      valueCloned.posX = null;
    }
    if ('cust' !== selectedY) {
      valueCloned.posY = selectedY;
    } else {
      valueCloned.posY = null;
    }
    onChange(valueCloned);
  }, [selectedX, selectedY]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Mask position', 'atrc-prefix-atrc'))), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Position X', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: selectedX,
    options: [{
      label: __('Default', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('Left', 'atrc-prefix-atrc'),
      value: 'left'
    }, {
      label: __('Center', 'atrc-prefix-atrc'),
      value: 'center'
    }, {
      label: __('Right', 'atrc-prefix-atrc'),
      value: 'right'
    }, {
      label: __('Custom', 'atrc-prefix-atrc'),
      value: 'cust'
    }],
    onChange: newVal => setSelectedX(newVal)
  })), 'cust' === selectedX ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Custom value', 'atrc-prefix-atrc'),
    value: posX,
    onChange: newVal => setAttr(newVal, 'posX')
  })) : null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Position Y', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: selectedY,
    options: [{
      label: __('Default', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('Top', 'atrc-prefix-atrc'),
      value: 'top'
    }, {
      label: __('Center', 'atrc-prefix-atrc'),
      value: 'center'
    }, {
      label: __('Bottom', 'atrc-prefix-atrc'),
      value: 'bottom'
    }, {
      label: __('Custom', 'atrc-prefix-atrc'),
      value: 'cust'
    }],
    onChange: newVal => setSelectedY(newVal)
  })), 'cust' === selectedY ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlUnit, {
    label: __('Custom Y', 'atrc-prefix-atrc'),
    value: posY,
    onChange: newVal => setAttr(newVal, 'posY')
  })) : null);
};
const SelectedShape = (value, options) => {
  const selectedShape = options.filter(function (item) {
    return item.value === value;
  });
  if (selectedShape.length) {
    return selectedShape[0];
  }
  return null;
};
const SvgShapeDefined = ({
  value,
  onChange,
  options
}) => {
  const selectedShape = SelectedShape(value, options);
  const icon = selectedShape && selectedShape.svg;
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlDropdownHtml, {
    className: classnames('at-flx-grw-1'),
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcLabel, null, __('Choose svg', 'atrc-prefix-atrc')), /*#__PURE__*/React.createElement(AtrcIconPreview, {
      icon: icon
    })),
    value: value,
    onChange: onChange,
    options: options
  }));
};
const SvgShape = ({
  frm,
  def,
  cust,
  color,
  definedOptions,
  onChange,
  allowColor
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Source', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: frm,
    options: [{
      label: __('Defined', 'atrc-prefix-atrc'),
      value: 'def'
    }, {
      label: __('Custom', 'atrc-prefix-atrc'),
      value: 'cust'
    }],
    onChange: newVal => onChange(newVal, 'svgFrm')
  })), 'def' === frm ? /*#__PURE__*/React.createElement(SvgShapeDefined, {
    value: def,
    onChange: newVal => onChange(newVal, 'svgDefd'),
    options: definedOptions
  }) : /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcTextarea, {
    value: cust,
    help: __('To ensure proper functionality of the options, make sure to add the `at-svg` class to the SVG element.', 'atrc-prefix-atrc'),
    onChange: newVal => onChange(newVal, 'svgCust')
  })), allowColor ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlDropdownColor, {
    label: __('Color', 'atrc-prefix-atrc'),
    value: color,
    onChange: newVal => onChange(newVal, 'svgCl')
  })) : null);
};
const ImgShp = ({
  frm,
  id,
  sz,
  url,
  onChange
}) => {
  return /*#__PURE__*/React.createElement(AtrcControlImg, {
    label: __('Image', 'atrc-prefix-atrc'),
    value: {
      frm,
      id,
      sz,
      url
    },
    allowDimensions: false,
    allowDetails: false,
    onChange: onChange
  });
};
const ShapeSettings = props => {
  const {
    shapeType = '',
    shapeOptionsLabel,
    value,
    onChange = () => {}
  } = props;
  const {
    flipV = false,
    flipH = false,
    zT = false,
    sz = '',
    posX = '',
    posY = '',
    w,
    smW,
    mdW,
    lgW,
    xlW,
    xxlW,
    h,
    smH,
    mdH,
    lgH,
    xlH,
    xxlH
  } = value;
  const setAttr = (newVal, type) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[type] = newVal;
    onChange(valueCloned);
  };
  const setWidthHeight = newVal => {
    let valueCloned = Object.assign({}, value);
    delete valueCloned.w;
    delete valueCloned.smW;
    delete valueCloned.mdW;
    delete valueCloned.lgW;
    delete valueCloned.xlW;
    delete valueCloned.xxlW;
    delete valueCloned.h;
    delete valueCloned.smH;
    delete valueCloned.mdH;
    delete valueCloned.lgH;
    delete valueCloned.xlH;
    delete valueCloned.xxlH;
    valueCloned = {
      ...valueCloned,
      ...newVal
    };
    onChange(valueCloned);
  };
  const AllTabs = useMemo(() => {
    return [{
      name: 'flipV',
      title: __('Flip vertically', 'atrc-prefix-atrc'),
      hasValue: flipV,
      onDeselect: () => setAttr(false, 'flipV')
    }, {
      name: 'flipH',
      title: __('Flip horizontally', 'atrc-prefix-atrc'),
      hasValue: flipH,
      onDeselect: () => setAttr(false, 'flipH')
    }, {
      name: 'zT',
      title: __('Bring front', 'atrc-prefix-atrc'),
      hasValue: zT,
      onDeselect: () => setAttr(false, 'zT')
    }];
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, 'imgShp' === shapeType ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AtrcMaskPosition, {
    label: __('Mask position', 'atrc-prefix-atrc'),
    value: {
      posX,
      posY
    },
    onChange: newVal => {
      let valueCloned = Object.assign({}, value);
      valueCloned = {
        ...valueCloned,
        ...newVal
      };
      onChange(valueCloned);
    }
  }), /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Mask size', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: sz,
    options: [{
      label: __('Default', 'atrc-prefix-atrc'),
      value: ''
    }, {
      label: __('Auto', 'atrc-prefix-atrc'),
      value: 'auto'
    }, {
      label: __('Contain', 'atrc-prefix-atrc'),
      value: 'contain'
    }, {
      label: __('Cover', 'atrc-prefix-atrc'),
      value: 'cover'
    }, {
      label: __('Custom', 'atrc-prefix-atrc'),
      value: 'cust'
    }],
    onChange: newVal => setAttr(newVal, 'sz')
  })), 'cust' === sz ? /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcControlResponsiveWidthHeight, {
    label: __('Custom mask size', 'atrc-prefix-atrc'),
    value: {
      w,
      smW,
      mdW,
      lgW,
      xlW,
      xxlW,
      h,
      smH,
      mdH,
      lgH,
      xlH,
      xxlH
    },
    onChange: setWidthHeight,
    className: classnames('at-flx-grw-1')
  })) : null) : /*#__PURE__*/React.createElement(AtrcControlResponsiveWidthHeight, {
    label: __('Size', 'atrc-prefix-atrc'),
    value: {
      w,
      smW,
      mdW,
      lgW,
      xlW,
      xxlW,
      h,
      smH,
      mdH,
      lgH,
      xlH,
      xxlH
    },
    onChange: setWidthHeight
  }), /*#__PURE__*/React.createElement(AtrcPanelTools, {
    className: classnames(AtrcPrefix('shp-opt')),
    label: shapeOptionsLabel,
    resetAll: () => onChange({}),
    tools: AllTabs
  }, activeItems => map(activeItems, function (item, iDx) {
    if ('flipV' === item) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        className: classnames('at-m'),
        key: iDx
      }, /*#__PURE__*/React.createElement(AtrcToggle, {
        label: __('Flip vertically', 'atrc-prefix-atrc'),
        checked: flipV,
        onChange: () => setAttr(!flipV, 'flipV')
      }));
    }
    if ('flipH' === item) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        className: classnames('at-m'),
        key: iDx
      }, /*#__PURE__*/React.createElement(AtrcToggle, {
        label: __('Flip horizontally', 'atrc-prefix-atrc'),
        checked: flipH,
        onChange: () => setAttr(!flipH, 'flipH')
      }));
    }
    if ('zT' === item) {
      return /*#__PURE__*/React.createElement(AtrcPanelRow, {
        className: classnames('at-m'),
        key: iDx
      }, /*#__PURE__*/React.createElement(AtrcToggle, {
        label: __('Bring front', 'atrc-prefix-atrc'),
        checked: zT,
        onChange: () => setAttr(!zT, 'zT')
      }));
    }
    return null;
  })));
};
const AtrcControlShape = props => {
  const {
    value = {},
    definedOptions = [],
    variant = '',
    className = '',
    onChange = () => {},
    shapeOptionsLabel = __('Shape options', 'atrc-prefix-atrc'),
    shapeType = '',
    allowColor = true
  } = props;
  const {
    type = 'svg',
    svgFrm = 'def',
    svgDefd = '',
    svgCust = '',
    svgCl = '',
    flipV = false,
    flipH = false,
    zT = false,
    sz = '',
    posX = '',
    posY = '',
    imgFrm = '',
    imgId = '',
    imgUrl = '',
    imgSz = '',
    w = '',
    smW = '',
    mdW = '',
    lgW = '',
    xlW = '',
    xxlW = '',
    h = '',
    smH = '',
    mdH = '',
    lgH = '',
    xlH = '',
    xxlH = ''
  } = value;
  const setAttr = (newVal, tp) => {
    const valueCloned = Object.assign({}, value);
    valueCloned[tp] = newVal;
    onChange(valueCloned);
  };
  const setImageAttr = newVal => {
    const valueCloned = Object.assign({}, value);
    delete valueCloned.imgFrm;
    delete valueCloned.imgId;
    delete valueCloned.imgUrl;
    delete valueCloned.imgSz;
    if (newVal && newVal.frm) {
      valueCloned.imgFrm = newVal.frm;
    }
    if (newVal && newVal.id) {
      valueCloned.imgId = newVal.id;
    }
    if (newVal && newVal.size) {
      valueCloned.imgSz = newVal.size;
    }
    if (newVal && newVal.url) {
      valueCloned.imgUrl = newVal.url;
    }
    onChange(valueCloned);
  };
  const setShapeSettings = newVal => {
    let valueCloned = Object.assign({}, value);
    delete valueCloned.flipV;
    delete valueCloned.flipH;
    delete valueCloned.zT;
    delete valueCloned.w;
    delete valueCloned.smW;
    delete valueCloned.mdW;
    delete valueCloned.lgW;
    delete valueCloned.xlW;
    delete valueCloned.xxlW;
    delete valueCloned.h;
    delete valueCloned.smH;
    delete valueCloned.mdH;
    delete valueCloned.lgH;
    delete valueCloned.xlH;
    delete valueCloned.xxlH;
    valueCloned = {
      ...valueCloned,
      ...newVal
    };
    onChange(valueCloned);
  };
  return /*#__PURE__*/React.createElement(AtrcWrap, {
    className: classnames(AtrcPrefix('ctrl-shp'), className, variant ? AtrcPrefix('ctrl-shp') + '-' + variant : '')
  }, /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classnames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcSelect, {
    label: __('Type', 'atrc-prefix-atrc'),
    wrapProps: {
      className: 'at-flx-grw-1'
    },
    value: type,
    options: [{
      label: __('Svg', 'atrc-prefix-atrc'),
      value: 'svg'
    }, {
      label: __('Image', 'atrc-prefix-atrc'),
      value: 'img'
    }],
    onChange: newVal => setAttr(newVal, 'type')
  })), 'svg' === type ? /*#__PURE__*/React.createElement(SvgShape, {
    frm: svgFrm,
    def: svgDefd,
    cust: svgCust,
    color: svgCl,
    onChange: setAttr,
    definedOptions: definedOptions,
    allowColor: allowColor
  }) : /*#__PURE__*/React.createElement(ImgShp, {
    frm: imgFrm,
    id: imgId,
    url: imgUrl,
    sz: imgSz,
    onChange: setImageAttr
  }), svgDefd || svgCust || imgId || imgUrl ? /*#__PURE__*/React.createElement(ShapeSettings, {
    shapeOptionsLabel: shapeOptionsLabel,
    shapeType: shapeType,
    value: {
      sz,
      posX,
      posY,
      flipV,
      flipH,
      zT,
      w,
      smW,
      mdW,
      lgW,
      xlW,
      xxlW,
      h,
      smH,
      mdH,
      lgH,
      xlH,
      xxlH
    },
    onChange: setShapeSettings
  }) : null);
};
export default AtrcControlShape;
//# sourceMappingURL=index.js.map