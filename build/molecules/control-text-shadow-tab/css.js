/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Inbuilt */
import AtrcAvailableTabs from '../../utils/available-tabs';
import { AtrcGetTabValues, AtrcHasTabValues } from '../../utils/object-values-with-allowed-keys-and-tabs';
import { AtrcControlTextShadowAllowedKeys } from '../control-text-shadow';
import AtrcControlTextShadowCss from '../control-text-shadow/css';

/*Local*/
var AtrcControlTextShadowTabCss = function AtrcControlTextShadowTabCss(value) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text-shadow';
  var output = {};
  var tabKey;
  if (!isEmpty(value)) {
    AtrcAvailableTabs.forEach(function (tab) {
      if (AtrcAvailableTabs.includes(tab)) {
        if (AtrcHasTabValues(tab, value, AtrcControlTextShadowAllowedKeys)) {
          var textVal = AtrcGetTabValues(value, tab, AtrcControlTextShadowAllowedKeys);
          var textCss = AtrcControlTextShadowCss(textVal, property);
          if (!isEmpty(textCss)) {
            forEach(textCss, function (item, itemKey) {
              if (tab === 'normal') {
                tabKey = itemKey;
              } else {
                tabKey = itemKey + tab;
              }
              if (!output[tabKey]) {
                output[tabKey] = '';
              }
              output[tabKey] += item;
            });
          }
        }
      }
    });
  }
  return output;
};
export default AtrcControlTextShadowTabCss;
//# sourceMappingURL=css.js.map