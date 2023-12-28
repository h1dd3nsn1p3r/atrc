/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useEntityProp } from '@wordpress/core-data';

import { dateI18n, getSettings as getDateSettings } from '@wordpress/date';

import { forwardRef } from '@wordpress/element';

/* Inbuilt */
import { AtrcLink, AtrcWrap } from '../../atoms';

/* Local */
const AtrcPostDate = (props, ref) => {
	const {
		postType,
		postId,
		htmlTag,
		displayType = 'date',
		linkOptions,
		format,
		...defaultProps
	} = props;

	const [date] = useEntityProp('postType', postType, displayType, postId);
	const dateSettings = getDateSettings();

	const [siteFormat = dateSettings.formats.date] = useEntityProp(
		'root',
		'site',
		'date_format'
	);

	const dateLabel =
		displayType === 'date'
			? __('Post date', 'atrc-prefix-atrc')
			: __('Post modified date', 'atrc-prefix-atrc');

	let postDate = date ? (
		<time dateTime={dateI18n('c', date)}>
			{dateI18n(format || siteFormat, date)}
		</time>
	) : (
		dateLabel
	);

	if (linkOptions && linkOptions.on && date) {
		postDate = (
			<AtrcLink
				prefix={false}
				href='#post-date-pseudo-link'
				onClick={(event) => event.preventDefault()}>
				{postDate}
			</AtrcLink>
		);
	}

	return (
		<AtrcWrap
			{...defaultProps}
			ref={ref}
			tag={htmlTag}>
			{postDate}
		</AtrcWrap>
	);
};
export default forwardRef(AtrcPostDate);