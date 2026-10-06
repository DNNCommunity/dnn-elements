# dnn-input input mode casing

`dnn-input` should use the standard HTML attribute casing, `inputmode`.

`DnnInput` should use the standard DOM property casing, `inputMode`.

This rule autofixes JSX that uses the wrong casing for the selected surface.

Example before:
```tsx
<dnn-input inputMode="numeric"></dnn-input>
<DnnInput inputmode="numeric" />
```

Example after:
```tsx
<dnn-input inputmode="numeric"></dnn-input>
<DnnInput inputMode="numeric" />
```