# dnn-searchbox debounce property obsolete

**dnn-searchbox** `debounce` property is obsolete and debounce can be adjusted or disabled using `debounceTime` instead.
Per html specifications any boolean attribute should have a false default values, this was not the case for this property and it was removed in favor of a more flexible `deboundeTime` property that defaults to 500ms if unspecified.

Example before:
```html
<dnn-searchbox debounced={false} />
```

Example after:
```html
<dnn-searchbox debounceTime={0} />
```