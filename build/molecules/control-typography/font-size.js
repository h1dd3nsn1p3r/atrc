/*Attributes Structure
Type Object
{
    "fntSz":"",
    "smFntSz":"",
    "smFntSz":"",
    "lgFntSz":"",
    "xlFntSz":"",
    "xxlFntSz":"",
}
* */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/* Library */
import classNames from 'classnames';

/*Inbuilt*/
import AtrcPanelRow from '../panel-row';
import AtrcDropdownDevice from '../dropdown-device';
import AtrcControlFontSizePicker from '../control-font-size-picker';
import { FontSizeList } from './options';
import AtrcAvailableDevices from '../../utils/available-devices';
import { AtrcMappingDeviceKey, AtrcMappingDeviceKeyValues } from './../../utils/object-values-with-devices';

/*Local Components*/
var RenderTab = function RenderTab(_ref) {
  var device = _ref.device,
    value = _ref.value,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(AtrcControlFontSizePicker, {
    fontSizes: FontSizeList(),
    fallbackFontSize: 18,
    value: AtrcMappingDeviceKeyValues(value, device, 'fntSz'),
    onChange: function onChange(newVal) {
      return _onChange(newVal, AtrcMappingDeviceKey(device, 'fntSz'));
    }
  });
};
var FontSize = function FontSize(_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange;
  return /*#__PURE__*/React.createElement(AtrcPanelRow, {
    className: classNames('at-m')
  }, /*#__PURE__*/React.createElement(AtrcDropdownDevice, {
    label: __('Font size', 'atrc-prefix-atrc'),
    tabs: AtrcAvailableDevices()
  }, function (tab) {
    return /*#__PURE__*/React.createElement(RenderTab, {
      device: tab.name,
      value: value,
      onChange: onChange
    });
  }));
};
export default FontSize;
//# sourceMappingURL=font-size.js.map