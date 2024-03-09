"use strict";(self.webpackChunk_dnncommunity_dnn_elements=self.webpackChunk_dnncommunity_dnn_elements||[]).push([[21],{"./src/components/dnn-vertical-overflow-menu/dnn-vertical-overflow-menu.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{VerticalOverflowMenu:()=>VerticalOverflowMenu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dnn_vertical_overflow_menu_stories});var lit=__webpack_require__("../../node_modules/lit/index.js");const dnn_vertical_overflow_menu_stories={title:"Elements/Vertical Overflow Menu",component:"dnn-vertical-overflow-menu",tags:["autodocs"],parameters:{docs:{description:{component:"# dnn-vertical-overflow-menu\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Overview\n\nA component that shows a vertical list of items as they fit. When they don't all fit, it puts the ones that don't fit into a dropdown menu.\n\n## Slots\n\n| Slot   | Description                    |\n| ------ | ------------------------------ |\n| `\"()\"` | The items to show in the menu. |\n\n\n## CSS Custom Properties\n\n| Name                 | Description                                       |\n| -------------------- | ------------------------------------------------- |\n| `--background-color` | Defines the menu background color.                |\n| `--foreground-color` | A color that contrasts with the background color. |\n\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n"}}},argTypes:{backgroundColor:{control:"color"},foregroundColor:{control:"color"}}},VerticalOverflowMenu=((args,context)=>lit.qy`
  <!-- vertical thingy -->
  <section>
    <dnn-vertical-splitview
      id="split-view-demo"
      style="border: 1px solid lightgray; height: 400px; --right-pane-background-color: lightgray;"
    >
      <div style="height: 100%;
        display: flex;
        align-items: center;
        box-shadow: inset 8px 0 8px -8px grey;
        position: absolute;
        top:0;"
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
          left: -12px;"
        >
          &lt;&gt;
        </button>
      </div>
      <div slot="left" style="padding: 1em;">
        <!-- this is another side -->
        <a name="dnn-vertical-overflow-menu"></a>
        <section>
      
          <style type="text/css">
            dnn-vertical-overflow-menu button{
              display: flex;
              align-items: center;
            }
            dnn-vertical-overflow-menu a{
              display: flex;
              align-items: center;
            }
          </style>
      
          <dnn-vertical-overflow-menu>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"/></svg>
              <span>Create a new item</span>
            </button>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
              <span>Copy an item</span>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><circle cx="6" cy="18" fill="none" r="2"/><circle cx="12" cy="12" fill="none" r=".5"/><circle cx="6" cy="6" fill="none" r="2"/><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"/></svg>
              <span>Cut an item</span>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/></svg>
              <span>Paste an item</span>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>
              <span>Save the item</span>
            </a>
          </dnn-vertical-overflow-menu>
      
          
          <div style="height: 200px;"></div>
        </section>


      </div>
      <div slot="right" style="padding: 1em;">
        <!-- this is one side -->

      </div>
    </dnn-vertical-splitview>
    <script type="text/javascript">
      (() => {
        const splitView = document.querySelector("#split-view-demo");
        const button = document.querySelector("#vertical-splitview-button");

        splitView.addEventListener("widthChanged", e => {
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
  </section>
    `).bind({});VerticalOverflowMenu.parameters={...VerticalOverflowMenu.parameters,docs:{...VerticalOverflowMenu.parameters?.docs,source:{originalSource:'(args: {}, context) => html`\n  \x3c!-- vertical thingy --\x3e\n  <section>\n    <dnn-vertical-splitview\n      id="split-view-demo"\n      style="border: 1px solid lightgray; height: 400px; --right-pane-background-color: lightgray;"\n    >\n      <div style="height: 100%;\n        display: flex;\n        align-items: center;\n        box-shadow: inset 8px 0 8px -8px grey;\n        position: absolute;\n        top:0;"\n      >\n        <button\n          id="vertical-splitview-button"\n          style="margin: 0;\n          padding: 0;\n          width: 24px;\n          height: 24px;\n          border: 1px solid lightgray;\n          border-radius: 50%;\n          background-color: white;\n          box-shadow: 2px 2px 4px rgb(0 0 0 / 20%);\n          position: relative;\n          left: -12px;"\n        >\n          &lt;&gt;\n        </button>\n      </div>\n      <div slot="left" style="padding: 1em;">\n        \x3c!-- this is another side --\x3e\n        <a name="dnn-vertical-overflow-menu"></a>\n        <section>\n      \n          <style type="text/css">\n            dnn-vertical-overflow-menu button{\n              display: flex;\n              align-items: center;\n            }\n            dnn-vertical-overflow-menu a{\n              display: flex;\n              align-items: center;\n            }\n          </style>\n      \n          <dnn-vertical-overflow-menu>\n            <button>\n              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"/></svg>\n              <span>Create a new item</span>\n            </button>\n            <a href="#">\n              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>\n              <span>Copy an item</span>\n            </a>\n            <a href="#">\n              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><circle cx="6" cy="18" fill="none" r="2"/><circle cx="12" cy="12" fill="none" r=".5"/><circle cx="6" cy="6" fill="none" r="2"/><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"/></svg>\n              <span>Cut an item</span>\n            </a>\n            <a href="#">\n              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/></svg>\n              <span>Paste an item</span>\n            </a>\n            <a href="#">\n              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>\n              <span>Save the item</span>\n            </a>\n          </dnn-vertical-overflow-menu>\n      \n          \n          <div style="height: 200px;"></div>\n        </section>\n\n\n      </div>\n      <div slot="right" style="padding: 1em;">\n        \x3c!-- this is one side --\x3e\n\n      </div>\n    </dnn-vertical-splitview>\n    <script type="text/javascript">\n      (() => {\n        const splitView = document.querySelector("#split-view-demo");\n        const button = document.querySelector("#vertical-splitview-button");\n\n        splitView.addEventListener("widthChanged", e => {\n          if (e.detail != 0){\n            localStorage.setItem("splitLastValue", e.detail);\n          }\n        });\n        button.addEventListener("click", async () => {\n          const currentWidth = await splitView.getSplitWidthPercentage();\n          const lastWidth = localStorage.getItem("splitLastValue");\n          if (currentWidth > 0){\n            splitView.setSplitWidthPercentage(0);\n            return;\n          }\n          splitView.setSplitWidthPercentage(localStorage.getItem("splitLastValue"));\n        })\n      })();\n    <\/script>\n  </section>\n    `',...VerticalOverflowMenu.parameters?.docs?.source}}};const __namedExportsOrder=["VerticalOverflowMenu"]}}]);
//# sourceMappingURL=components-dnn-vertical-overflow-menu-dnn-vertical-overflow-menu-stories.636b1152.iframe.bundle.js.map