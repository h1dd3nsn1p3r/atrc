/* WordPress */
import { __ } from '@wordpress/i18n';

/* Inbuilt */
import { AtrcControlSelectButton } from '../..';
import { FourColumnsOptions } from '../options';

/* Local */
const FourColumnsLayout = (props) => {
	const { value, onChange = () => {} } = props;

	return (
		<AtrcControlSelectButton
			label={__('Four columns layout', 'atrc-prefix-atrc')}
			value={value}
			options={FourColumnsOptions}
			onChange={onChange}
			allowReset={false}
		/>
	);
};

export default FourColumnsLayout;