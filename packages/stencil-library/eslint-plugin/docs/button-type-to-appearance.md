# dnn-button type obsolete

**dnn-button** `type` property will be reused in the future to indicate the form type of button such as `submit` or `reset` or `button`. It has been marked as deprecated but will still work **in only this minor version**.  Replace your current usage with the `appearance` prop. For this version only `formButtonType` will be used to indicate the type of form button this is. In the next minor release, `formButtonType` will be dreprecated in favor of the new meaning of `type`.

Example before:
```html
<dnn-button type="primary">Submit</dnn-button>
```

Example after:
```html
<dnn-button appearance="primary" formButtonType="submit">Submit</dnn-button>
```