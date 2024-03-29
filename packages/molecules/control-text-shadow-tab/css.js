/*Library*/
import { forEach, isEmpty } from 'lodash';

/* Inbuilt */
import AtrcAvailableTabs from '../../utils/available-tabs';
import {
	AtrcGetTabValues,
	AtrcHasTabValues,
} from '../../utils/object-values-with-allowed-keys-and-tabs';

import { AtrcControlTextShadowAllowedKeys } from '../control-text-shadow';
import AtrcControlTextShadowCss from '../control-text-shadow/css';

/*Local*/
const AtrcControlTextShadowTabCss = (value, property = 'text-shadow') => {
	const output = {};
	let tabKey;

	if (!isEmpty(value)) {
		AtrcAvailableTabs.forEach((tab) => {
			if (AtrcAvailableTabs.includes(tab)) {
				if (AtrcHasTabValues(tab, value, AtrcControlTextShadowAllowedKeys)) {
					const textVal = AtrcGetTabValues(
						value,
						tab,
						AtrcControlTextShadowAllowedKeys
					);

					const textCss = AtrcControlTextShadowCss(textVal, property);

					if (!isEmpty(textCss)) {
						forEach(textCss, (item, itemKey) => {
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
