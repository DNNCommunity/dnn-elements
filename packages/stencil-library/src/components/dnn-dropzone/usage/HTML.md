### Most basic usage

```html
<dnn-dropzone id="dz"></dnn-dropzone>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const dz = document.getElementById('dz');
    dz.addEventListener('filesSelected', e => console.log('files', e.detail));
  });
</script>
```

Notes:
- `dnn-dropzone` emits `filesSelected` with the selected FileList.
