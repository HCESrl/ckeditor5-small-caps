import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import SmallCapsCommand from './small-caps-command';

const SMALL_CAPS = 'smallCaps';

export class SmallCapsEditing extends Plugin {
	init() {
		const editor = this.editor;

		editor.model.schema.extend( '$text', { allowAttributes: SMALL_CAPS } );

		editor.conversion.attributeToElement( {
			model: SMALL_CAPS,
			view: {
				name: 'span',
				styles: {
					'font-variant': 'small-caps'
				}
			},
			upcastAlso: [
				{
					styles: {
						'font-variant': 'small-caps'
					}
				}
			]
		} );

		editor.commands.add( SMALL_CAPS, new SmallCapsCommand( editor, SMALL_CAPS ) );
	}
}
