### Most basic usage

```html
<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('#target');
    const menu = document.querySelector('#menu');

    // Open on right-click or using the keyboard key for context menus.
    target.addEventListener('contextmenu', e => {
        e.preventDefault();
        menu.open(e);
  });
});
</script>

<button id="target">Open context menu</button>

<dnn-context-menu
    id="menu"
    close-on-click
>
  <div role="menuitem" tabindex="-1">Action 1</div>
  <div role="menuitem" tabindex="-1">Action 2</div>
  <div role="menuitem" tabindex="-1">Action 3</div>
</dnn-context-menu>
```

Notes:
- Use `menu.open(event)` to open the menu from a pointer event.
- Use `menu.close()` to programatically close the menu if needed.
