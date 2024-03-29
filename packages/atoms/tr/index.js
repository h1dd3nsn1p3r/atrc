/*Library*/
import classnames from 'classnames';

/*Inbuilt*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcTr = (props) => {
	const {
		variant = '',
		className = '',
		children = '',
		isSticky = false,
		isLocked = false,
		isEven = false,
		isOdd = false,
		...defaultProps
	} = props;

	return (
		<tr
			className={classnames(
				AtrcPrefix('tr'),
				className,
				variant ? AtrcPrefix('tr') + '-' + variant : '',
				isSticky ? AtrcPrefix('sticky') : '',
				isLocked ? AtrcPrefix('locked') : '',
				isEven ? AtrcPrefix('even') : '',
				isOdd ? AtrcPrefix('odd') : ''
			)}
			{...defaultProps}>
			{children}
		</tr>
	);
};
export default AtrcTr;
