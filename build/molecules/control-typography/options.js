/*WordPress*/
import { __ } from '@wordpress/i18n';
import { formatCapitalize, formatLowercase, formatUppercase, reset } from '@wordpress/icons';

/**
 * Font Type List
 *
 * @type {Array}
 */
const FontTypeList = [{
  label: __('Default', 'atrc-prefix-atrc'),
  value: ''
}, {
  label: __('System', 'atrc-prefix-atrc'),
  value: 'system'
}, {
  label: __('Google', 'atrc-prefix-atrc'),
  value: 'google'
}];

/**
 * System Font List
 *
 * @type {Array}
 */
const SystemFontTypeList = [{
  label: __('Arial', 'atrc-prefix-atrc'),
  value: 'Arial'
}, {
  label: __('Tahoma', 'atrc-prefix-atrc'),
  value: 'Tahoma'
}, {
  label: __('Verdana', 'atrc-prefix-atrc'),
  value: 'Verdana'
}, {
  label: __('Helvetica', 'atrc-prefix-atrc'),
  value: 'Helvetica'
}, {
  label: __('Times New Roman', 'atrc-prefix-atrc'),
  value: 'Times New Roman'
}, {
  label: __('Trebuchet MS', 'atrc-prefix-atrc'),
  value: 'Trebuchet MS'
}, {
  label: __('Georgia', 'atrc-prefix-atrc'),
  value: 'Georgia'
}];

/**
 * Font Weight List
 *
 * @type {Array}
 */
const FontWeightList = [{
  label: __('Default', 'atrc-prefix-atrc'),
  value: ''
}, {
  label: __('Normal', 'atrc-prefix-atrc'),
  value: 'normal'
}, {
  label: __('Bold', 'atrc-prefix-atrc'),
  value: 'bold'
}, {
  label: __('100', 'atrc-prefix-atrc'),
  value: '100'
}, {
  label: __('200', 'atrc-prefix-atrc'),
  value: '200'
}, {
  label: __('300', 'atrc-prefix-atrc'),
  value: '300'
}, {
  label: __('400', 'atrc-prefix-atrc'),
  value: '400'
}, {
  label: __('500', 'atrc-prefix-atrc'),
  value: '500'
}, {
  label: __('600', 'atrc-prefix-atrc'),
  value: '600'
}, {
  label: __('700', 'atrc-prefix-atrc'),
  value: '700'
}, {
  label: __('800', 'atrc-prefix-atrc'),
  value: '800'
}, {
  label: __('900', 'atrc-prefix-atrc'),
  value: '900'
}];

/**
 * Text Transform List
 *
 * @type {Array}
 */

const TextTransformList = [{
  label: __('none', 'atrc-prefix-atrc'),
  value: 'none',
  icon: reset
}, {
  label: __('Uppercase', 'atrc-prefix-atrc'),
  value: 'uppercase',
  icon: formatUppercase
}, {
  label: __('Lowercase', 'atrc-prefix-atrc'),
  value: 'lowercase',
  icon: formatLowercase
}, {
  label: __('Capitalize', 'atrc-prefix-atrc'),
  value: 'capitalize',
  icon: formatCapitalize
}];

/**
 * Font Style List
 *
 * @type {Array}
 */
const FontStyleList = [{
  label: __('Default', 'atrc-prefix-atrc'),
  value: ''
}, {
  label: __('Normal', 'atrc-prefix-atrc'),
  value: 'normal'
}, {
  label: __('Italic', 'atrc-prefix-atrc'),
  value: 'italic'
}, {
  label: __('Oblique', 'atrc-prefix-atrc'),
  value: 'oblique'
}];

/**
 * Text Decoration List
 *
 * @type {Array}
 */
const TextDecorationList = [{
  label: __('Default', 'atrc-prefix-atrc'),
  value: ''
}, {
  label: __('Underline', 'atrc-prefix-atrc'),
  value: 'underline'
}, {
  label: __('Overline', 'atrc-prefix-atrc'),
  value: 'overline'
}, {
  label: __('Line Through', 'atrc-prefix-atrc'),
  value: 'line-through'
}, {
  label: __('None', 'atrc-prefix-atrc'),
  value: 'none'
}];
const FontSizeList = [{
  name: __('XS', 'atrc-prefix-atrc'),
  slug: 'xs',
  size: '14px'
}, {
  name: __('Small', 'atrc-prefix-atrc'),
  slug: 'small',
  size: '16px'
}, {
  name: __('Normal', 'atrc-prefix-atrc'),
  slug: 'Normal',
  size: '18px'
}, {
  name: __('Medium', 'atrc-prefix-atrc'),
  slug: 'medium',
  size: '24px'
}, {
  name: __('Large', 'atrc-prefix-atrc'),
  slug: 'large',
  size: '28px'
}];

/*Export Everything*/
export { FontTypeList, SystemFontTypeList, FontWeightList, TextTransformList, FontStyleList, TextDecorationList, FontSizeList };
//# sourceMappingURL=options.js.map