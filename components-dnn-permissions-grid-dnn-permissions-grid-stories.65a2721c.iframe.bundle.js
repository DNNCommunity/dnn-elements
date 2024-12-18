"use strict";(self.webpackChunk_dnncommunity_dnn_elements=self.webpackChunk_dnncommunity_dnn_elements||[]).push([[3301],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o1:()=>actions});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject}},"./src/components/dnn-permissions-grid/dnn-permissions-grid.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PermissionsGrid:()=>PermissionsGrid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dnn_permissions_grid_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const dnn_permissions_grid_stories={title:"Elements/Permissions Grid",component:"dnn-permissions-grid",tags:["autodocs"],parameters:{docs:{description:{component:"# dnn-permissions-grid\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property                   | Attribute | Description                                                                        | Type              | Default     |\n| -------------------------- | --------- | ---------------------------------------------------------------------------------- | ----------------- | ----------- |\n| `foundUsers`               | --        | The list of users to show under the search users field when a search is performed. | `ISearchedUser[]` | `[]`        |\n| `permissions` _(required)_ | --        | The list of permissions.                                                           | `IPermissions`    | `undefined` |\n| `resx`                     | --        | Optionally allows localizing the component strings.                                | `ILocalization`   | `undefined` |\n| `roleGroups` _(required)_  | --        | The list of role groups.                                                           | `IRoleGroup[]`    | `undefined` |\n| `roles` _(required)_       | --        | The list of possible roles.                                                        | `IRole[]`         | `undefined` |\n\n\n## Events\n\n| Event                    | Description                                                                                   | Type                        |\n| ------------------------ | --------------------------------------------------------------------------------------------- | --------------------------- |\n| `permissionsChanged`     | Fires when any permissions have changed, can be used for instance to have linked permissions. | `CustomEvent<IPermissions>` |\n| `userSearchQueryChanged` | Fires when searching for users to add to the permissions. Emits the search query.             | `CustomEvent<string>`       |\n\n\n## Dependencies\n\n### Depends on\n\n- [dnn-checkbox](../dnn-checkbox)\n- [dnn-button](../dnn-button)\n- [dnn-searchbox](../dnn-searchbox)\n- [dnn-collapsible](../dnn-collapsible)\n\n### Graph\n```mermaid\ngraph TD;\n  dnn-permissions-grid --\x3e dnn-checkbox\n  dnn-permissions-grid --\x3e dnn-button\n  dnn-permissions-grid --\x3e dnn-searchbox\n  dnn-permissions-grid --\x3e dnn-collapsible\n  dnn-button --\x3e dnn-modal\n  dnn-button --\x3e dnn-button\n  style dnn-permissions-grid fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n"}}}},users=((0,dist.o1)("userSearchQueryChanged","permissionsChanged"),[{userId:1,displayName:"Georgena Menico"},{userId:2,displayName:"Ibbie Swindin"},{userId:3,displayName:"Wynn Mc Queen"},{userId:4,displayName:"Emmett Buckthought"},{userId:5,displayName:"Claudianus Aizikov"},{userId:6,displayName:"Burlie D'eathe"},{userId:7,displayName:"Fabio Hysom"},{userId:8,displayName:"Raeann Finker"},{userId:9,displayName:"Kevin Craigmyle"},{userId:10,displayName:"Beaufort MacCoughen"},{userId:11,displayName:"Marcus Ropars"},{userId:12,displayName:"Barnebas Mallinar"},{userId:13,displayName:"Cally McGerr"},{userId:14,displayName:"Claiborn Tather"},{userId:15,displayName:"Adrianna Borsi"},{userId:16,displayName:"Bill De Vuyst"},{userId:17,displayName:"Ervin Kinane"},{userId:18,displayName:"Pam Friel"},{userId:19,displayName:"Garry Twiddle"},{userId:20,displayName:"Loni Mabey"},{userId:21,displayName:"Gerard McGarrie"},{userId:22,displayName:"Claudina McCathy"},{userId:23,displayName:"Bryanty Amorts"},{userId:24,displayName:"Orren Siaskowski"},{userId:25,displayName:"Daisie Barr"},{userId:26,displayName:"Elsbeth Senett"},{userId:27,displayName:"Celestine Cawley"},{userId:28,displayName:"Desmond Cuphus"},{userId:29,displayName:"Ignaz Lewisham"},{userId:30,displayName:"Paola Odams"},{userId:31,displayName:"Nicolais Ducker"},{userId:32,displayName:"Camile McNab"},{userId:33,displayName:"Binni Acreman"},{userId:34,displayName:"Zonda O' Lone"},{userId:35,displayName:"Theressa McCawley"},{userId:36,displayName:"Mareah Heakins"},{userId:37,displayName:"Pasquale Bagworth"},{userId:38,displayName:"Veronike Capey"},{userId:39,displayName:"Jed Kubczak"},{userId:40,displayName:"Stephanus Ricciardelli"},{userId:41,displayName:"Carey Coldman"},{userId:42,displayName:"Shirlee Belliss"},{userId:43,displayName:"Kai Capponeer"},{userId:44,displayName:"Lockwood Pilling"},{userId:45,displayName:"Olga Puleque"},{userId:46,displayName:"Cleon Piccard"},{userId:47,displayName:"Al Rousel"},{userId:48,displayName:"Ida Coltart"},{userId:49,displayName:"Pennie Housley"},{userId:50,displayName:"Lind Ikringill"}]),handleUserSearchChanged=e=>{const query=e.detail,results=users.filter((u=>u.displayName.includes(query)));document.querySelector("dnn-permissions-grid").foundUsers=results},PermissionsGrid=(args=>lit.qy`
        <dnn-permissions-grid
            .permissions=${args.permissions}
            .roles=${args.roles}
            .roleGroups=${args.roleGroups}
            @userSearchQueryChanged="${handleUserSearchChanged}"
        />
    `).bind({});PermissionsGrid.args={permissions:{permissionDefinitions:[{permissionId:8,permissionName:"Browse Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!1},{permissionId:5,permissionName:"View Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!1},{permissionId:6,permissionName:"Write to Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!1}],rolePermissions:[{roleId:0,roleName:"Administrators",permissions:[{permissionId:8,permissionName:"Browse Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0},{permissionId:5,permissionName:"View Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0},{permissionId:6,permissionName:"Write to Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0}],locked:!0,default:!0},{roleId:-1,roleName:"All Users",permissions:[{permissionId:8,permissionName:"Browse Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0},{permissionId:5,permissionName:"View Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0}],locked:!1,default:!0},{roleId:1,roleName:"Registered Users",permissions:[],locked:!1,default:!0}],userPermissions:[{userId:2,displayName:"Daniel Valadas",permissions:[{permissionId:8,permissionName:"Browse Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0},{permissionId:5,permissionName:"View Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0},{permissionId:6,permissionName:"Write to Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0}]}]},roles:[{IsSystemRole:!0,RoleId:0,RoleGroupId:-1,RoleName:"Administrators"},{IsSystemRole:!0,RoleId:1,RoleGroupId:-1,RoleName:"Registered Users"},{IsSystemRole:!0,RoleId:5,RoleGroupId:-1,RoleName:"Translator (fr-FR)"},{IsSystemRole:!0,RoleId:-3,RoleGroupId:-1,RoleName:"Unauthenticated Users"},{IsSystemRole:!1,RoleId:10,RoleGroupId:1,RoleName:"Test Role"},{IsSystemRole:!1,RoleId:11,RoleGroupId:2,RoleName:"Another test role"}],roleGroups:[{id:0,name:"Test group",rolesCount:0,description:"This is a a test role group"},{id:1,name:"Another test group",rolesCount:0,description:"Another test role."}]};const __namedExportsOrder=["PermissionsGrid"];PermissionsGrid.parameters={...PermissionsGrid.parameters,docs:{...PermissionsGrid.parameters?.docs,source:{originalSource:'(args: {\n  permissions: IPermissions;\n  roles: IRole[];\n  roleGroups: IRoleGroup[];\n}) => html`\n        <dnn-permissions-grid\n            .permissions=${args.permissions}\n            .roles=${args.roles}\n            .roleGroups=${args.roleGroups}\n            @userSearchQueryChanged="${handleUserSearchChanged}"\n        />\n    `',...PermissionsGrid.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-dnn-permissions-grid-dnn-permissions-grid-stories.65a2721c.iframe.bundle.js.map