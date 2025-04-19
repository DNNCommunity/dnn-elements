# dnn-checkbox should not have any content inside itself

In earlier versions of dnn-elements, whatever content was inside dnn-checkbox would be pulled automatically into a label for the checkbox. This solution was not great as it prevented flexibility of having positioning between the label and the box or custom styling, etc. It couls also have been a accessibility problem.

To match the porper accessibility recommendations, this was obsolete and then removed.

Here is how you can fix old code:

## Old
```jsx
<dnn-checkbox
    onChecked={e => console.log(e.detail)}
>
    This is my label
</dnn-checkbox>
```

## New
```jsx
<label>
    <dnn-checkbox onClick={e => console.log(e.detail)} />
    This is my label
</label>
```

You can also have the text before the checkbox if you prefer depending on the desired UI.