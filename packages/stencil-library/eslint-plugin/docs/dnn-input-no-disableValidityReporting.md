# dnn-input disableValidityReporting obsolete

**dnn-input** `disableValidityReporting` is obsolete. All dnn-elements form components (inputs, buttons, etc.) now operate with a parent form and have their own validity reporting logic that replaces the browser defaults. So there is no longer any logical need to disable the browser default from consumers.

Example before:
```html
<dnn-input type="text" required disableValidityReporting />
```

Example after:
```html
<dnn-input type="text" required />
```