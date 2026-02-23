import{b as a}from"./iframe-CDvZgNwq.js";import"./preload-helper-PPVm8Dsz.js";const l=`# dnn-permissions-grid



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute | Description                                                                        | Type                         | Default     |
| -------------------------- | --------- | ---------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| \`foundUsers\`               | --        | The list of users to show under the search users field when a search is performed. | \`ISearchedUser[]\`            | \`[]\`        |
| \`permissions\` _(required)_ | --        | The list of permissions.                                                           | \`IPermissions\`               | \`undefined\` |
| \`resx\`                     | --        | Optionally allows localizing the component strings.                                | \`ILocalization \\| undefined\` | \`undefined\` |
| \`roleGroups\` _(required)_  | --        | The list of role groups.                                                           | \`IRoleGroup[]\`               | \`undefined\` |
| \`roles\` _(required)_       | --        | The list of possible roles.                                                        | \`IRole[]\`                    | \`undefined\` |


## Events

| Event                    | Description                                                                                   | Type                        |
| ------------------------ | --------------------------------------------------------------------------------------------- | --------------------------- |
| \`permissionsChanged\`     | Fires when any permissions have changed, can be used for instance to have linked permissions. | \`CustomEvent<IPermissions>\` |
| \`userSearchQueryChanged\` | Fires when searching for users to add to the permissions. Emits the search query.             | \`CustomEvent<string>\`       |


## Dependencies

### Depends on

- [dnn-checkbox](../dnn-checkbox)
- [dnn-button](../dnn-button)
- [dnn-searchbox](../dnn-searchbox)
- [dnn-collapsible](../dnn-collapsible)

### Graph
\`\`\`mermaid
graph TD;
  dnn-permissions-grid --> dnn-checkbox
  dnn-permissions-grid --> dnn-button
  dnn-permissions-grid --> dnn-searchbox
  dnn-permissions-grid --> dnn-collapsible
  dnn-button --> dnn-modal
  dnn-button --> dnn-button
  style dnn-permissions-grid fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,{actions:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:"Elements/Permissions Grid",component:"dnn-permissions-grid",tags:["autodocs"],parameters:{docs:{description:{component:l}}}};d("userSearchQueryChanged","permissionsChanged");const m={permissionDefinitions:[{permissionId:8,permissionName:"Browse Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!1},{permissionId:5,permissionName:"View Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!1},{permissionId:6,permissionName:"Write to Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!1}],rolePermissions:[{roleId:0,roleName:"Administrators",permissions:[{permissionId:8,permissionName:"Browse Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0},{permissionId:5,permissionName:"View Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0},{permissionId:6,permissionName:"Write to Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0}],locked:!0,default:!0},{roleId:-1,roleName:"All Users",permissions:[{permissionId:8,permissionName:"Browse Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0},{permissionId:5,permissionName:"View Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0}],locked:!1,default:!0},{roleId:1,roleName:"Registered Users",permissions:[],locked:!1,default:!0}],userPermissions:[{userId:2,displayName:"Daniel Valadas",permissions:[{permissionId:8,permissionName:"Browse Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0},{permissionId:5,permissionName:"View Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0},{permissionId:6,permissionName:"Write to Folder",permissionKey:"",permissionCode:"",fullControl:!1,view:!1,allowAccess:!0}]}]},t=[{id:0,name:"Test group",rolesCount:0,description:"This is a a test role group"},{id:1,name:"Another test group",rolesCount:0,description:"Another test role."}],p=[{IsSystemRole:!0,RoleId:0,RoleGroupId:-1,RoleName:"Administrators"},{IsSystemRole:!0,RoleId:1,RoleGroupId:-1,RoleName:"Registered Users"},{IsSystemRole:!0,RoleId:5,RoleGroupId:-1,RoleName:"Translator (fr-FR)"},{IsSystemRole:!0,RoleId:-3,RoleGroupId:-1,RoleName:"Unauthenticated Users"},{IsSystemRole:!1,RoleId:10,RoleGroupId:1,RoleName:"Test Role"},{IsSystemRole:!1,RoleId:11,RoleGroupId:2,RoleName:"Another test role"}],u=[{userId:1,displayName:"Georgena Menico"},{userId:2,displayName:"Ibbie Swindin"},{userId:3,displayName:"Wynn Mc Queen"},{userId:4,displayName:"Emmett Buckthought"},{userId:5,displayName:"Claudianus Aizikov"},{userId:6,displayName:"Burlie D'eathe"},{userId:7,displayName:"Fabio Hysom"},{userId:8,displayName:"Raeann Finker"},{userId:9,displayName:"Kevin Craigmyle"},{userId:10,displayName:"Beaufort MacCoughen"},{userId:11,displayName:"Marcus Ropars"},{userId:12,displayName:"Barnebas Mallinar"},{userId:13,displayName:"Cally McGerr"},{userId:14,displayName:"Claiborn Tather"},{userId:15,displayName:"Adrianna Borsi"},{userId:16,displayName:"Bill De Vuyst"},{userId:17,displayName:"Ervin Kinane"},{userId:18,displayName:"Pam Friel"},{userId:19,displayName:"Garry Twiddle"},{userId:20,displayName:"Loni Mabey"},{userId:21,displayName:"Gerard McGarrie"},{userId:22,displayName:"Claudina McCathy"},{userId:23,displayName:"Bryanty Amorts"},{userId:24,displayName:"Orren Siaskowski"},{userId:25,displayName:"Daisie Barr"},{userId:26,displayName:"Elsbeth Senett"},{userId:27,displayName:"Celestine Cawley"},{userId:28,displayName:"Desmond Cuphus"},{userId:29,displayName:"Ignaz Lewisham"},{userId:30,displayName:"Paola Odams"},{userId:31,displayName:"Nicolais Ducker"},{userId:32,displayName:"Camile McNab"},{userId:33,displayName:"Binni Acreman"},{userId:34,displayName:"Zonda O' Lone"},{userId:35,displayName:"Theressa McCawley"},{userId:36,displayName:"Mareah Heakins"},{userId:37,displayName:"Pasquale Bagworth"},{userId:38,displayName:"Veronike Capey"},{userId:39,displayName:"Jed Kubczak"},{userId:40,displayName:"Stephanus Ricciardelli"},{userId:41,displayName:"Carey Coldman"},{userId:42,displayName:"Shirlee Belliss"},{userId:43,displayName:"Kai Capponeer"},{userId:44,displayName:"Lockwood Pilling"},{userId:45,displayName:"Olga Puleque"},{userId:46,displayName:"Cleon Piccard"},{userId:47,displayName:"Al Rousel"},{userId:48,displayName:"Ida Coltart"},{userId:49,displayName:"Pennie Housley"},{userId:50,displayName:"Lind Ikringill"}],c=e=>{const r=e.detail,i=u.filter(o=>o.displayName.includes(r)),n=document.querySelector("dnn-permissions-grid");n.foundUsers=i},y=e=>a`
        <dnn-permissions-grid
            .permissions=${e.permissions}
            .roles=${e.roles}
            .roleGroups=${e.roleGroups}
            @userSearchQueryChanged="${c}"
        />
    `,s=y.bind({});s.args={permissions:m,roles:p,roleGroups:t};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: {
  permissions: IPermissions;
  roles: IRole[];
  roleGroups: IRoleGroup[];
}) => html\`
        <dnn-permissions-grid
            .permissions=\${args.permissions}
            .roles=\${args.roles}
            .roleGroups=\${args.roleGroups}
            @userSearchQueryChanged="\${handleUserSearchChanged}"
        />
    \``,...s.parameters?.docs?.source}}};const h=["PermissionsGrid"];export{s as PermissionsGrid,h as __namedExportsOrder,f as default};
