### JSX / TSX usage

```tsx
render() {
  return (
    <dnn-dropzone onFilesSelected={e => console.log(e.detail)} />
  );
}
```

Notes:
- Use a framework ref to call methods on the element if needed.
