# dnn-modal backdropDismiss obsolete

**dnn-modal** `backdropDismiss` is obsolete, use preventBackdropDismiss instead. 
Per html specifications any boolean attribute should have a false default values, this was not the case for this property and it was replaced with the opposite `preventBackdropDismiss` property instead (so it has the same default UX without breaking html specs).

Example before:
```html
<dnn-modal backdropDismiss={false}>
    <p>Something</p>
</dnn-modal>
```

Example after:
```html
<dnn-modal preventBackdropDismiss>
    <p>Something</p>
</dnn-modal>
```