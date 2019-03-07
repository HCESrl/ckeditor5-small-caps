import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import smallCapsIcon from '../theme/smallcaps.svg';

const SMALL_CAPS = 'smallCaps';

/**
 * SmallCaps ui plugin
 */
export class SmallCapsUi extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'smallCaps', locale => {
			const command = editor.commands.get( SMALL_CAPS );
			const view = new ButtonView( locale );

			view.set( {
				label: 'Small caps',
				icon: smallCapsIcon,
				tooltip: true,
				class: 'small-caps',
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			this.listenTo( view, 'execute', () => editor.execute( SMALL_CAPS ) );

			return view;
		} );
	}
}
