# dnn-modal backgroundDismiss obsolete

**dnn-modal** `backgroundDismiss` is obsolete, use preventBackgroundDismiss instead. 
Per html specifications any boolean attribute should have a false default values, this was not the case for this property and it was replaced with the opposite `preventBackgroundDismiss` property instead (so it has the same default UX without breaking html specs).

Example before:
```html
<dnn-modal backgroundDimiss={false}>
    <p>Something</p>
</dnn-modal>
```

Example after:
```html
<dnn-modal preventBackgroundDimiss>
    <p>Something</p>
</dnn-modal>
```