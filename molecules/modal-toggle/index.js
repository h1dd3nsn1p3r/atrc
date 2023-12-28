/*WordPress*/
import { useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import { AtrcWrap } from '../../atoms';
import { AtrcModal } from '../index';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local Components*/
const AtrcModalToggle = (props) => {
	const {
		className = '',
		variant = '',
		renderToggle = '',
		renderContent = '',
		modalProps = {},
		...defaultProps
	} = props;

	const [isOpen, setIsOpen] = useState(false);

	function toggle(tgl = null) {
		if (tgl !== null) {
			setIsOpen(tgl);
		} else {
			setIsOpen(!isOpen);
		}
	}

	function close() {
		setIsOpen(false);
	}

	const args = { isOpen, onToggle: toggle, onClose: close };

	return (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('ctrl-modal-icon-picker'),
				className,
				variant ? AtrcPrefix('ctrl-modal-icon-picker') + '-' + variant : ''
			)}
			{...defaultProps}>
			<AtrcWrap variant='render-tog'>{renderToggle(args)}</AtrcWrap>
			{isOpen ? (
				<AtrcModal
					variant='icon-picker'
					{...modalProps}
					onRequestClose={close}>
					{renderContent(args)}
				</AtrcModal>
			) : null}
		</AtrcWrap>
	);
};
export default AtrcModalToggle;
