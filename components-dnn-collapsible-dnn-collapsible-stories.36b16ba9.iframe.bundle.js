/*! For license information please see components-dnn-collapsible-dnn-collapsible-stories.36b16ba9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_dnncommunity_dnn_elements=self.webpackChunk_dnncommunity_dnn_elements||[]).push([[4583],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o1:()=>actions});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject}},"./src/components/dnn-collapsible/dnn-collapsible.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Collapsible:()=>Collapsible,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dnn_collapsible_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),if_defined=__webpack_require__("../../node_modules/lit-html/directives/if-defined.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const dnn_collapsible_stories={title:"Elements/Collapsible",component:"dnn-collapsible",tags:["autodocs"],parameters:{docs:{description:{component:'# dnn-collapsible\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Usage\n\n### HTML\n\n```html\n<div class="collapse-row">\n    <style type="text/css">\n        .collapse-row{\n            border: 1px solid grey;\n        }\n        .collapse-row .collapse-title{\n            display:flex;\n            align-items: center;\n            background-color: whitesmoke;\n        }\n        .collapse-row .collapse-title>*{\n            margin: 10px;\n        }\n    </style>\n    <div class="collapse-title">\n        <dnn-chevron id="dnn-chevron1" expanded="false"></dnn-chevron>\n    <strong>Collapsible Panel</strong>\n    </div>\n    <dnn-collapsible id="dnn-collapsible1" expanded="false" transition-duration="300">\n        <div id="collapsible-slot-content" style="padding: 15px;">\n            <h2>Details</h2>\n            <p>\n                Spicy jalapeno bacon ipsum dolor amet bresaola kielbasa doner ham hock biltong, swine shoulder leberkas cupim. Sausage capicola buffalo, tongue jerky frankfurter biltong pork swine landjaeger. Porchetta alcatra burgdoggen beef ribs short ribs corned beef, biltong flank bresaola kielbasa. Ham hock beef kielbasa, cupim cow beef ribs doner. T-bone cow shoulder chuck pastrami. Alcatra pig filet mignon shank. Pancetta shankle meatloaf sausage meatball cupim.\n            </p>\n        </div>\n    </dnn-collapsible>\n</div>\n```\n\n\n### JSX-TSX\n\n```tsx\n<div class="collapse-row">\n    <style type="text/css">\n        .collapse-row{\n            border: 1px solid grey;\n        }\n        .collapse-row .collapse-title{\n            display:flex;\n            align-items: center;\n            background-color: whitesmoke;\n        }\n        .collapse-row .collapse-title>*{\n            margin: 10px;\n        }\n    </style>\n    <div class="collapse-title">\n        <dnn-chevron id="dnn-chevron1" expanded="false"></dnn-chevron>\n    <strong>Collapsible Panel</strong>\n    </div>\n    <dnn-collapsible id="dnn-collapsible1" expanded="false" transitionDuration="300">\n        <div id="collapsible-slot-content" style="padding: 15px;">\n            <h2>Details</h2>\n            <p>\n                Spicy jalapeno bacon ipsum dolor amet bresaola kielbasa doner ham hock biltong, swine shoulder leberkas cupim. Sausage capicola buffalo, tongue jerky frankfurter biltong pork swine landjaeger. Porchetta alcatra burgdoggen beef ribs short ribs corned beef, biltong flank bresaola kielbasa. Ham hock beef kielbasa, cupim cow beef ribs doner. T-bone cow shoulder chuck pastrami. Alcatra pig filet mignon shank. Pancetta shankle meatloaf sausage meatball cupim.\n            </p>\n        </div>\n    </dnn-collapsible>\n</div>\n```\n\n\n\n## Properties\n\n| Property             | Attribute             | Description                                          | Type      | Default |\n| -------------------- | --------------------- | ---------------------------------------------------- | --------- | ------- |\n| `expanded`           | `expanded`            | Defines if the panel is expanded or not.             | `boolean` | `false` |\n| `transitionDuration` | `transition-duration` | Defines the transition time in ms, defaults to 150ms | `number`  | `150`   |\n\n\n## Events\n\n| Event                         | Description                                       | Type                |\n| ----------------------------- | ------------------------------------------------- | ------------------- |\n| `dnnCollapsibleHeightChanged` | Fires whenever the collapsible height has changed | `CustomEvent<void>` |\n\n\n## Methods\n\n### `updateSize() => Promise<void>`\n\nUpdates the component height, use to update after a slot content changes.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Dependencies\n\n### Used by\n\n - [dnn-permissions-grid](../dnn-permissions-grid)\n - [dnn-treeview-item](../dnn-treeview-item)\n\n### Graph\n```mermaid\ngraph TD;\n  dnn-permissions-grid --\x3e dnn-collapsible\n  dnn-treeview-item --\x3e dnn-collapsible\n  style dnn-collapsible fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n'}}},argTypes:{expanded:{type:"boolean"},transitionDuration:{type:"number",control:"number"}}},Collapsible=((0,dist.o1)("dnnCollapsibleHeightChanged"),(args=>{document.querySelector("#dnn-chevron1");return lit.qy`
        <div class="collapse-row">
            <style type="text/css">
                .collapse-row{
                    border: 1px solid grey;
                }
                .collapse-row .collapse-title{
                    display:flex;
                    align-items: center;
                    background-color: whitesmoke;
                }
                .collapse-row .collapse-title>*{
                    margin: 10px;
                }
            </style>
            <div class="collapse-title">
                <dnn-chevron @changed=${e=>{const collapsibleOne=document.querySelector("#dnn-collapsible1");console.log(collapsibleOne),collapsibleOne.expanded=e.detail}} expanded=${args.expanded} id="dnn-chevron1"></dnn-chevron>
                <strong>Collapsible Panel</strong>
            </div>
            <dnn-collapsible ?expanded=${(0,if_defined.J)(args.expanded)} id="dnn-collapsible1" transition-duration="300">
                <div id="collapsible-slot-content" style="padding: 15px;">
                    <h2>Details</h2>
                    <p>
                        Spicy jalapeno bacon ipsum dolor amet bresaola kielbasa doner ham hock biltong, swine shoulder leberkas cupim. Sausage capicola buffalo, tongue jerky frankfurter biltong pork swine landjaeger. Porchetta alcatra burgdoggen beef ribs short ribs corned beef, biltong flank bresaola kielbasa. Ham hock beef kielbasa, cupim cow beef ribs doner. T-bone cow shoulder chuck pastrami. Alcatra pig filet mignon shank. Pancetta shankle meatloaf sausage meatball cupim.
                    </p>
                </div>
            </div>
            </dnn-collapsible>
        </div>
    `}).bind({}));Collapsible.args={expanded:!1,transitionDuration:150};const __namedExportsOrder=["Collapsible"];Collapsible.parameters={...Collapsible.parameters,docs:{...Collapsible.parameters?.docs,source:{originalSource:'(args: {\n  expanded: boolean;\n  transitionDuration: number;\n}) => {\n  const chevronOne = document.querySelector(\'#dnn-chevron1\');\n  const clickHandler = (e: MouseEvent) => {\n    const collapsibleOne = document.querySelector(\'#dnn-collapsible1\');\n    console.log(collapsibleOne);\n    (collapsibleOne as any).expanded = e.detail;\n  };\n  return html`\n        <div class="collapse-row">\n            <style type="text/css">\n                .collapse-row{\n                    border: 1px solid grey;\n                }\n                .collapse-row .collapse-title{\n                    display:flex;\n                    align-items: center;\n                    background-color: whitesmoke;\n                }\n                .collapse-row .collapse-title>*{\n                    margin: 10px;\n                }\n            </style>\n            <div class="collapse-title">\n                <dnn-chevron @changed=${clickHandler} expanded=${args.expanded} id="dnn-chevron1"></dnn-chevron>\n                <strong>Collapsible Panel</strong>\n            </div>\n            <dnn-collapsible ?expanded=${ifDefined(args.expanded)} id="dnn-collapsible1" transition-duration="300">\n                <div id="collapsible-slot-content" style="padding: 15px;">\n                    <h2>Details</h2>\n                    <p>\n                        Spicy jalapeno bacon ipsum dolor amet bresaola kielbasa doner ham hock biltong, swine shoulder leberkas cupim. Sausage capicola buffalo, tongue jerky frankfurter biltong pork swine landjaeger. Porchetta alcatra burgdoggen beef ribs short ribs corned beef, biltong flank bresaola kielbasa. Ham hock beef kielbasa, cupim cow beef ribs doner. T-bone cow shoulder chuck pastrami. Alcatra pig filet mignon shank. Pancetta shankle meatloaf sausage meatball cupim.\n                    </p>\n                </div>\n            </div>\n            </dnn-collapsible>\n        </div>\n    `;\n}',...Collapsible.parameters?.docs?.source}}}},"../../node_modules/lit-html/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>to});var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/lit-html.js");const to=t=>t??_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.s6}}]);
//# sourceMappingURL=components-dnn-collapsible-dnn-collapsible-stories.36b16ba9.iframe.bundle.js.map