/*! For license information please see components-dnn-treeview-item-dnn-treeview-item-stories.9ceb6380.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_dnncommunity_dnn_elements=self.webpackChunk_dnncommunity_dnn_elements||[]).push([[145],{"./src/components/dnn-treeview-item/dnn-treeview-item.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TreeviewItem:()=>TreeviewItem,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dnn_treeview_item_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),if_defined=__webpack_require__("../../node_modules/lit-html/directives/if-defined.js");const dnn_treeview_item_stories={title:"Elements/Treeview Item",component:"dnn-treeview-item",tags:["autodocs"],parameters:{docs:{description:{component:'# dnn-treeview-item\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property   | Attribute  | Description                              | Type      | Default |\n| ---------- | ---------- | ---------------------------------------- | --------- | ------- |\n| `expanded` | `expanded` | Defines if the current node is expanded. | `boolean` | `false` |\n\n\n## Events\n\n| Event           | Description                           | Type                |\n| --------------- | ------------------------------------- | ------------------- |\n| `userCollapsed` | Fires when the user collapses a node. | `CustomEvent<void>` |\n| `userExpanded`  | Fires when the user expands a node.   | `CustomEvent<void>` |\n\n\n## Slots\n\n| Slot         | Description                         |\n| ------------ | ----------------------------------- |\n|              | The content of this node.           |\n| `"children"` | The content nested under this node. |\n\n\n## Dependencies\n\n### Depends on\n\n- [dnn-collapsible](../dnn-collapsible)\n\n### Graph\n```mermaid\ngraph TD;\n  dnn-treeview-item --\x3e dnn-collapsible\n  style dnn-treeview-item fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n'}}},argTypes:{expanded:{control:"boolean"}}},TreeviewItem=(args=>lit.dy`
        <dnn-treeview-item
            ?expanded=${(0,if_defined.o)(args.expanded)}
        >
            <span>Root Item</span>
            <dnn-treeview-item slot="children">
                <span>Child 1</span>
            </dnn-treeview-item>
            <dnn-treeview-item slot="children">
                <span>Child 2</span>
            </dnn-treeview-item>
            <dnn-treeview-item slot="children">
                <span>Child 3</span>
            </dnn-treeview-item>
        </dnn-treeview-item>
    `).bind({});TreeviewItem.args={expanded:!1},TreeviewItem.parameters={...TreeviewItem.parameters,docs:{...TreeviewItem.parameters?.docs,source:{originalSource:'(args: {\n  expanded: boolean;\n}) => html`\n        <dnn-treeview-item\n            ?expanded=${ifDefined(args.expanded)}\n        >\n            <span>Root Item</span>\n            <dnn-treeview-item slot="children">\n                <span>Child 1</span>\n            </dnn-treeview-item>\n            <dnn-treeview-item slot="children">\n                <span>Child 2</span>\n            </dnn-treeview-item>\n            <dnn-treeview-item slot="children">\n                <span>Child 3</span>\n            </dnn-treeview-item>\n        </dnn-treeview-item>\n    `',...TreeviewItem.parameters?.docs?.source}}};const __namedExportsOrder=["TreeviewItem"]},"../../node_modules/lit-html/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>l});var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/lit-html.js"),l=l=>null!=l?l:_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Ld}}]);