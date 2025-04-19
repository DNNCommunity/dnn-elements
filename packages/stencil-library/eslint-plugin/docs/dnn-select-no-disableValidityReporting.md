# dnn-select disableValidityReporting obsolete

**dnn-select** `disableValidityReporting` is obsolete. All dnn-elements form components (inputs, buttons, etc.) now operate with a parent form and have their own validity reporting logic that replaces the browser defaults. So there is no longer any logical need to disable the browser default from consumers.

Example before:
```html
<dnn-select required disableValidityReporting>
    <option value={}>-- Select an option --</option>
    <option value={0}>A</option>
    <option value={1}>B</option>
</dnn-select>
```

Example after:
```html
<dnn-select required>
    <option value={}>-- Select an option --</option>
    <option value={0}>A</option>
    <option value={1}>B</option>
</dnn-select>
```