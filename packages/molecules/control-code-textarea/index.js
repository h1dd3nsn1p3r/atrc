/*Value Structure
Type string
**/

/*WordPress*/
import { __, sprintf } from '@wordpress/i18n';

import {
	useEffect,
	useState,
	useMemo,
	useRef,
	useCallback,
	Fragment,
} from '@wordpress/element';

import { debounce } from '@wordpress/compose';

/*Library*/
import { map, random } from 'lodash';

import classnames from 'classnames';

import deepmerge from 'deepmerge';

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';

import AtrcPanelTools from '../panel-tools';
import AtrcNotice from '../notice';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';
import AtrcUniqueID from './../../utils/unique-id';

/*Local*/
const CodeEditor = ({ editorValue, onChange, editorSettings }) => {
	const [value, setValue] = useState(editorValue);
	const [codeMirror, setCodeMirror] = useState(null);

	const instanceId = AtrcUniqueID() + random(0, 9);

	const debouncedOnChange = useRef(
		debounce(
			(val) => {
				onChange(val);
			},
			500,
			{ leading: true }
		)
	);

	const onChangeHandler = useCallback((editor) => {
		const val = editor.getValue ? editor.getValue() : editor;
		setValue(val);
		debouncedOnChange.current(val);
	}, []);

	/*Initialize CodeMirror*/
	useEffect(() => {
		if (typeof wp !== 'undefined' && wp.codeEditor) {
			const { defaultSettings, initialize } = wp.codeEditor;

			if (initialize) {
				const codeM = initialize(
					instanceId,
					deepmerge(defaultSettings, editorSettings)
				);
				setCodeMirror(codeM);
				codeM.codemirror.on('change', onChangeHandler);
			}

			return () => {
				debouncedOnChange?.current?.cancel();
				codeMirror?.codemirror.off('change', onChangeHandler);
			};
		}
	}, []);

	return (
		<textarea
			className={classnames(AtrcPrefix('control-code-textarea'))}
			id={instanceId}
			value={value}
			onChange={onChangeHandler}
		/>
	);
};

const AtrcControlCodeTextarea = (props) => {
	const {
		value = '',
		label = '',
		onChange = () => {},
		variant = '',
		className = '',
		notice = true,
	} = props;

	const CodeTabs = useMemo(() => {
		return [
			{
				name: 'code',
				title: label,
				hasValue: !!value,
				onDeselect: () => onChange(''),
			},
		];
	}, []);

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-code-txt-area'),
				className,
				variant ? AtrcPrefix('ctrl-code-txt-area') + '-' + variant : ''
			)}
			label={label}
			resetAll={() => onChange('')}
			tools={CodeTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<Fragment key={iDx}>
						<CodeEditor
							editorValue={value}
							onChange={onChange}
							editorSettings={{
								indentUnit: 2,
								tabSize: 2,
								mode: 'css',
							}}
						/>
						{notice && (
							<AtrcNotice
								isDismissible={false}
								autoDismiss={false}
								status='info'>
								<AtrcWrap
									dangerouslySetInnerHTML={{
										__html: sprintf(
											// translators: %1$s: placeholder for code block, %2$s: placeholder for code with {{abBlock}}, %3$s: placeholder for code with ab-unique-class
											__(
												'You can use the unique selector of the block using %1$s. eg: %2$s will be replaced with %3$s.',
												'atrc-prefix-atrc'
											),
											'<br /><code>{{abBlock}}</code>',
											'<br /><code>{{abBlock}}{color:yellow}</code><br />',
											'<br /><code>.ab-unique-class{color:yellow}</code>'
										),
									}}
								/>
							</AtrcNotice>
						)}
					</Fragment>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlCodeTextarea;
