/* WordPress */
import { __ } from '@wordpress/i18n';

/* Atrc */
import AtrcTooltip from '../tooltip';

import AtrcButton from '../../atoms/button';
import AtrcIcon from '../../atoms/icon';

import { BsPlusSquare } from 'react-icons/bs';

const AtrcRepeaterGroupAdd = (props) => {
	const {
		addGroup,
		tooltipText = __('Add repeater fields', 'atrc-prefix-atrc'),
		label = __('Add repeater fields', 'atrc-prefix-atrc'),
	} = props;

	return (
		<AtrcButton
			variant='add'
			onClick={addGroup}
			className='at-m'>
			<AtrcTooltip
				className='at-flx at-al-itm-ctr at-gap'
				text={tooltipText}>
				<AtrcIcon
					type='bootstrap'
					icon={BsPlusSquare}
				/>
				{label}
			</AtrcTooltip>
		</AtrcButton>
	);
};

export default AtrcRepeaterGroupAdd;
