/*WordPress*/
import { TabPanel } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local Component*/
const AtrcTabPanel = (props) => {
	const { children, className = '', variant = '', ...defaultProps } = props;

	return (
		<TabPanel
			className={classnames(
				AtrcPrefix('tab-pnl'),
				className,
				variant ? AtrcPrefix('tab-pnl') + '-' + variant : ''
			)}
			{...defaultProps}>
			{(tab) => children(tab)}
		</TabPanel>
	);
};
export default AtrcTabPanel;
