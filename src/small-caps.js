import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { SmallCapsEditing } from './small-caps-editing';
import { SmallCapsUi } from './small-caps-ui';

/**
 * SmallCaps plugin
 */
export default class SmallCaps extends Plugin {
	/**
     * @inheritDoc
     */
	static get pluginName() {
		return 'SmallCaps';
	}

	/**
     * @inheritDoc
     */
	static get requires() {
		return [ SmallCapsEditing, SmallCapsUi ];
	}
}
