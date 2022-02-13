# dnn-vertical-splitview
This allows splitting a UI into vertical adjustable panels, the splitter itself is not part of this component.
- The content for the left part should be injected in the `left` slot.
- The content for the right part should be injected in the `right` slot.
- The content for the actual splitter should go in the default slot and other UI elements can be injected as long as you handle their behaviour, by default only the drag behavior is implemented in the component.

## Usage example
```html
<dnn-vertical-splitview id="split-view-demo" style="border: 1px solid lightgray; height: 400px;">
      <div style="height: 100%;
        display: flex;
        align-items: center;
        box-shadow: inset 8px 0 8px -8px grey;"
      >
        <button
          id="vertical-splitview-button"
          style="margin: 0;
          padding: 0;
          width: 24px;
          height: 24px;
          border: 1px solid lightgray;
          border-radius: 50%;
          background-color: white;
          box-shadow: 2px 2px 4px rgb(0 0 0 / 20%);
          position: relative;
          left: -8px;"
        >
          &lt;&gt;
        </button>
      </div>
      <div slot="left">
        <p>Laboris velit ullamco reprehenderit incididunt culpa id do voluptate non. Do et officia ad ullamco et. Aliqua dolor nostrud velit ex duis adipisicing sit consectetur ea id nostrud sit labore. Voluptate culpa ut anim pariatur.</p>
        <p>Officia tempor anim nulla irure elit excepteur velit ea mollit non minim ad duis. Mollit in et sint adipisicing in tempor et fugiat. Laborum id pariatur ut deserunt anim esse ullamco officia dolor labore proident esse. Reprehenderit adipisicing eu irure officia labore sint velit. Anim consequat incididunt tempor excepteur dolor consequat eiusmod dolore adipisicing consectetur. Incididunt aliqua eiusmod sint proident nisi nostrud minim quis mollit tempor.</p>
        <p>Anim aute duis excepteur ipsum mollit. Ea officia elit amet qui labore reprehenderit pariatur laboris amet exercitation eu et. Ad Lorem aute exercitation amet. Est excepteur occaecat id consequat consequat.</p>
      </div>
      <div slot="right">
        <p>Deserunt occaecat incididunt ipsum consectetur ullamco nulla qui sunt nostrud. Laborum incididunt enim culpa exercitation nisi dolore duis do sit deserunt cillum ullamco. Et incididunt nisi consectetur et cillum proident consectetur dolor cupidatat mollit magna. Ut Lorem incididunt sit consequat culpa mollit do officia. Amet eu proident non enim eu id mollit et occaecat. Ut dolor consectetur Lorem minim Lorem culpa quis nostrud elit reprehenderit labore sint. Officia dolore dolore ullamco tempor cupidatat est amet.</p>
        <p>Consequat cillum ex elit pariatur laborum ullamco qui est nisi tempor ullamco. Dolor proident ipsum cupidatat culpa quis est amet exercitation veniam proident nulla consequat quis anim. Lorem exercitation incididunt aliqua sit nisi.</p>
        <p>Consectetur elit tempor Lorem nostrud non cillum aliquip. Culpa culpa eu est est id deserunt exercitation elit occaecat enim in velit. Reprehenderit nostrud reprehenderit ex cillum pariatur enim. Amet minim elit quis excepteur exercitation eiusmod amet labore. Officia culpa exercitation do eu in ad id qui eiusmod aliqua id ex. Aliqua ullamco fugiat ex magna ex dolore fugiat consectetur mollit consequat consequat nulla et. Ea eu Lorem non officia pariatur nostrud.</p>
      </div>
    </dnn-vertical-splitview>
    <script type="text/javascript">
      (() => {
        const splitView = document.querySelector("#split-view-demo");
        const button = document.querySelector("#vertical-splitview-button");
        splitView.addEventListener("widthChanged", e =>{
          if (e.detail != 0){
            localStorage.setItem("splitLastValue", e.detail);
          }
        });
        button.addEventListener("click", async () => {
          const currentWidth = await splitView.getSplitWidthPercentage();
          const lastWidth = localStorage.getItem("splitLastValue");
          if (currentWidth > 0){
            splitView.setSplitWidthPercentage(0);
            return;
          }
          splitView.setSplitWidthPercentage(localStorage.getItem("splitLastValue"));
        })
      })();
    </script>
```

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description                                               | Type     | Default |
| ---------------------- | ------------------------ | --------------------------------------------------------- | -------- | ------- |
| `splitWidthPercentage` | `split-width-percentage` | The percentage position of the splitter in the container. | `number` | `30`    |
| `splitterWidth`        | `splitter-width`         | The width of the splitter area.                           | `number` | `16`    |


## Events

| Event          | Description                                  | Type                  |
| -------------- | -------------------------------------------- | --------------------- |
| `widthChanged` | Fires when the width of the divider changes. | `CustomEvent<number>` |


## Methods

### `getSplitWidthPercentage() => Promise<number>`

Gets the current divider position percentage.

#### Returns

Type: `Promise<number>`



### `setSplitWidthPercentage(newWidth: number) => Promise<void>`

Sets the width percentage of the divider

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
