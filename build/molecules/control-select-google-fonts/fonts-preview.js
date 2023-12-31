/*WordPress*/
import { useEffect } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

/*Library*/
import { createUseStyles } from 'react-jss';

/*Local*/
const useStyles = createUseStyles({
  root: {
    fontFamily: ({
      font
    }) => font,
    fontWeight: ({
      weight
    }) => weight
  }
});
export default function AtrcControlSelectGoogleFontsPreview({
  font,
  weight
}) {
  const classes = useStyles({
    font,
    weight
  });
  useEffect(() => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css?family=${font}:${weight}`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, [font, weight]);
  const weights = weight.split(',');
  return /*#__PURE__*/React.createElement(React.Fragment, null, weights.map(wt => /*#__PURE__*/React.createElement("div", {
    className: classes.root,
    key: wt,
    style: {
      fontWeight: wt
    }
  }, sprintf(__('This text is styled with a Google font `%s` and weight `%s`.', 'atrc-prefix-atrc'), font, wt || __('default', 'atrc-prefix-atrc')))));
}
//# sourceMappingURL=fonts-preview.js.map