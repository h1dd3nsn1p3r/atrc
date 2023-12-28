/* WordPress*/
import { useSelect } from '@wordpress/data';

import { store as coreStore } from '@wordpress/core-data';

/*Inbuilt*/
import { AtrcControlSelectTerm } from './../';
import { AtrcLabel } from '../../atoms';

/* Local*/
/**
 * Hook that returns the taxonomies associated with a specific post type.
 *
 * @param {Object} props
 * @return {Object[]} An array of the associated taxonomies.
 */
export const AtrcUseTaxonomies = (props = {}) => {
	const { postType = '' } = props;

	const taxonomies = useSelect(
		(select) => {
			const { getTaxonomies } = select(coreStore);
			const queryArgs = {};
			if (postType) {
				queryArgs.type = postType;
			}
			const filteredTaxonomies = getTaxonomies(queryArgs);
			return filteredTaxonomies;
		},
		[postType]
	);
	return taxonomies;
};

/*AtrcControlSelectTaxonomyWiseTerms*/
function AtrcControlSelectTaxonomyWiseTerms(props) {
	const { label, value, onChange, postType = '', ...defaultProps } = props;
	const taxonomies = AtrcUseTaxonomies({ postType });
	if (!taxonomies || taxonomies.length === 0) {
		return null;
	}

	return (
		<>
			{label ? <AtrcLabel>{label}</AtrcLabel> : null}
			{taxonomies.map((taxonomy) => {
				const termIds = value?.[taxonomy.slug] || [];
				const handleChange = (newTermIds) => {
					onChange({
						...value,
						[taxonomy.slug]: newTermIds,
					});
				};

				return (
					<AtrcControlSelectTerm
						key={taxonomy.slug}
						wrapProps={{
							className: 'at-flx-grw-1',
						}}
						label={taxonomy.name}
						value={termIds}
						onChange={handleChange}
						tax={taxonomy.slug}
						{...defaultProps}
					/>
				);
			})}
		</>
	);
}

export default AtrcControlSelectTaxonomyWiseTerms;
