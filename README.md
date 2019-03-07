## CKEditor 5 small caps feature ##

This package implements small caps feature support for CKEditor 5.

#### Installation ####

```bash
npm install --save ckeditor5-small-caps
```

```javascript
import SmallCaps from 'ckeditor5-small-caps/src/small-caps';

ClassicEditor.builtinPlugins = [
  ...,
  SmallCaps
];

ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      ...
      'smallCaps'
    ]
  },
};
```