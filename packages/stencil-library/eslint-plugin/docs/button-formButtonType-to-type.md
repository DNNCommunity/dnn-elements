# dnn-button formButtonType obsolete

**dnn-button** `type` was previously (v0.23 and earlier) to defined the button look. We needed to use `type`. In v0.24 we implemented full support for form integrated components which meant we needed to use this property to represent the type of button (submit, reset, etc.) in a form usage context. A new `appearance` property was recreate to replace the old meaning of type and a new temporary `formButtonType` property was put in place to represent the form button type. In `v0.24` `formButtonType` is now deprecated in favor of the new meaning of the `type` property.

Example before:
```html
<dnn-button type="primary" formButtonType="submit">Submit</dnn-button>
```

Example after:
```html
<dnn-button appearance="primary" type="submit">Submit</dnn-button>
```