function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/*WordPress*/
import { __ } from '@wordpress/i18n';
import { useEntityProp } from '@wordpress/core-data';
import { forwardRef } from '@wordpress/element';

/* Inbuilt */
import AtrcWrap from '../../atoms/wrap';

/* Local */
const AtrcPostExcerpt = (props, ref) => {
  const {
    postType,
    postId,
    htmlTag,
    excerptLength = 55,
    wordCountType = 'w',
    ...defaultProps
  } = props;
  const [rawExcerpt,
  // eslint-disable-next-line no-unused-vars
  setExcerpt] = useEntityProp('postType', postType, 'excerpt', postId);

  /**
   * The excerpt length setting needs to be applied to both
   * the raw and the rendered excerpt depending on which is being used.
   */
  const rawOrRenderedExcerpt = rawExcerpt.trim();
  let trimmedExcerpt = '';
  if (wordCountType === 'w') {
    trimmedExcerpt = rawOrRenderedExcerpt.split(' ', excerptLength).join(' ');
  } else if (wordCountType === 'ce') {
    /*
     * 1. Split the excerpt at the character limit,
     * then join the substrings back into one string.
     * 2. Count the number of spaces in the excerpt
     * by comparing the lengths of the string with and without spaces.
     * 3. Add the number to the length of the visible excerpt,
     * so that the spaces are excluded from the word count.
     */
    const excerptWithSpaces = rawOrRenderedExcerpt.split('', excerptLength).join('');
    const numberOfSpaces = excerptWithSpaces.length - excerptWithSpaces.replaceAll(' ', '').length;
    trimmedExcerpt = rawOrRenderedExcerpt.split('', excerptLength + numberOfSpaces).join('');
  } else if (wordCountType === 'ci') {
    trimmedExcerpt = rawOrRenderedExcerpt.split('', excerptLength).join('');
  }
  const isTrimmed = trimmedExcerpt !== rawOrRenderedExcerpt;
  const excerptContent = !isTrimmed ? rawOrRenderedExcerpt || __('No excerpt found', 'atrc-prefix-atrc') : trimmedExcerpt;
  return /*#__PURE__*/React.createElement(AtrcWrap, _extends({}, defaultProps, {
    ref: ref,
    tag: htmlTag
  }), excerptContent);
};
export default forwardRef(AtrcPostExcerpt);
//# sourceMappingURL=index.js.map