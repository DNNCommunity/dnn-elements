### Most basic usage (JSX / TSX)

```tsx
// In a Stencil / React / Preact environment you can call the component methods
// by querying the element reference and calling `open` with a PointerEvent.

private handleOpenMenu(e) {
    e.preventDefault();
    const menu = document.querySelector('#menu') as any;
    menu.open(e as PointerEvent);
}

render() {
  return (
      <button
          id="target"
          closeOnClick
          onContextMenu={e => this.handleOpenMenu }
      >
        <span>Open menu</span>
        <dnn-context-menu id="menu" close-on-click>
            <div>Option 1</div>
            <div>Option 2</div>
        </dnn-context-menu>
    </button>
  );
}
```

Notes:
- In frameworks you can also keep a ref to the element instead of querySelector.
- `close-on-click` is a convenience boolean that will call `close()` when an item is clicked. You can instead call close() yourself if you need programatic control over closing.
