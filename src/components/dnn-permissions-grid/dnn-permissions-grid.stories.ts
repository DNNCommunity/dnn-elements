import { html } from "lit-html";
import { Meta } from "@storybook/web-components";
import { IPermissions } from "./permissions-interface";
import readme from "./readme.md";
import { IRoleGroup } from "./role-group-interface";
import { IRole } from "./role-interface";

export default {
    title: "Elements/Permissions Grid",
    component: "dnn-permissions-grid",
    parameters: {
        notes: readme,
        actions: {
            handles: ["userSearchQueryChanged", "permissionsChanged"]
        }
    }
} as Meta;

const permissions: IPermissions = {
    permissionDefinitions: [
        {
            permissionId: 8,
            permissionName: "Browse Folder",
            permissionKey: null,
            permissionCode: null,
            fullControl: false,
            view: false,
            allowAccess: false
        },
        {
            permissionId: 5,
            permissionName: "View Folder",
            permissionKey: null,
            permissionCode: null,
            fullControl: false,
            view: false,
            allowAccess: false
        },
        {
            permissionId: 6,
            permissionName: "Write to Folder",
            permissionKey: null,
            permissionCode: null,
            fullControl: false,
            view: false,
            allowAccess: false
        }
    ],
    rolePermissions: [
        {
            roleId: 0,
            roleName: "Administrators",
            permissions: [
                {
                    permissionId: 8,
                    permissionName: "Browse Folder",
                    permissionKey: null,
                    permissionCode: null,
                    fullControl: false,
                    view: false,
                    allowAccess: true
                },
                {
                    permissionId: 5,
                    permissionName: "View Folder",
                    permissionKey: null,
                    permissionCode: null,
                    fullControl: false,
                    view: false,
                    allowAccess: true
                },
                {
                    permissionId: 6,
                    permissionName: "Write to Folder",
                    permissionKey: null,
                    permissionCode: null,
                    fullControl: false,
                    view: false,
                    allowAccess: true
                }
            ],
            locked: true,
            default: true
        },
        {
            roleId: -1,
            roleName: "All Users",
            permissions: [
                {
                    permissionId: 8,
                    permissionName: "Browse Folder",
                    permissionKey: null,
                    permissionCode: null,
                    fullControl: false,
                    view: false,
                    allowAccess: true
                },
                {
                    permissionId: 5,
                    permissionName: "View Folder",
                    permissionKey: null,
                    permissionCode: null,
                    fullControl: false,
                    view: false,
                    allowAccess: true
                }
            ],
            locked: false,
            default: true
        },
        {
            roleId: 1,
            roleName: "Registered Users",
            permissions: [],
            locked: false,
            default: true
        }
    ],
    userPermissions: [
        {
            userId: 2,
            displayName: "Daniel Valadas",
            permissions: [
                {
                    permissionId: 8,
                    permissionName: "Browse Folder",
                    permissionKey: null,
                    permissionCode: null,
                    fullControl: false,
                    view: false,
                    allowAccess: true
                },
                {
                    permissionId: 5,
                    permissionName: "View Folder",
                    permissionKey: null,
                    permissionCode: null,
                    fullControl: false,
                    view: false,
                    allowAccess: true
                },
                {
                    permissionId: 6,
                    permissionName: "Write to Folder",
                    permissionKey: null,
                    permissionCode: null,
                    fullControl: false,
                    view: false,
                    allowAccess: true
                }
            ]
        }
    ]
  };

  const roleGroups: IRoleGroup[] = [
    {
        "id": 0,
        "name": "Test group",
        "rolesCount": 0,
        "description": "This is a a test role group"
    },
    {
      "id": 1,
      "name": "Another test group",
      "rolesCount": 0,
      "description": "Another test role."
    }
];
const roles: IRole[] = [
  {
    IsSystemRole: true,
    RoleId: 0,
    RoleGroupId: -1,
    RoleName: "Administrators",
  },
  {
    IsSystemRole: true,
    RoleId: 1,
    RoleGroupId: -1,
    RoleName: "Registered Users",
  },
  {
    IsSystemRole: true,
    RoleId: 5,
    RoleGroupId: -1,
    RoleName: "Translator (fr-FR)",
  },
  {
    IsSystemRole: true,
    RoleId: -3,
    RoleGroupId: -1,
    RoleName: "Unauthenticated Users",
  },
  {
    IsSystemRole: false,
    RoleId: 10,
    RoleGroupId: 1,
    RoleName: "Test Role",
  },
  {
    IsSystemRole: false,
    RoleId: 11,
    RoleGroupId: 2,
    RoleName: "Another test role",
  },
];

const users = [
{"userId":1,"displayName":"Georgena Menico"},
{"userId":2,"displayName":"Ibbie Swindin"},
{"userId":3,"displayName":"Wynn Mc Queen"},
{"userId":4,"displayName":"Emmett Buckthought"},
{"userId":5,"displayName":"Claudianus Aizikov"},
{"userId":6,"displayName":"Burlie D'eathe"},
{"userId":7,"displayName":"Fabio Hysom"},
{"userId":8,"displayName":"Raeann Finker"},
{"userId":9,"displayName":"Kevin Craigmyle"},
{"userId":10,"displayName":"Beaufort MacCoughen"},
{"userId":11,"displayName":"Marcus Ropars"},
{"userId":12,"displayName":"Barnebas Mallinar"},
{"userId":13,"displayName":"Cally McGerr"},
{"userId":14,"displayName":"Claiborn Tather"},
{"userId":15,"displayName":"Adrianna Borsi"},
{"userId":16,"displayName":"Bill De Vuyst"},
{"userId":17,"displayName":"Ervin Kinane"},
{"userId":18,"displayName":"Pam Friel"},
{"userId":19,"displayName":"Garry Twiddle"},
{"userId":20,"displayName":"Loni Mabey"},
{"userId":21,"displayName":"Gerard McGarrie"},
{"userId":22,"displayName":"Claudina McCathy"},
{"userId":23,"displayName":"Bryanty Amorts"},
{"userId":24,"displayName":"Orren Siaskowski"},
{"userId":25,"displayName":"Daisie Barr"},
{"userId":26,"displayName":"Elsbeth Senett"},
{"userId":27,"displayName":"Celestine Cawley"},
{"userId":28,"displayName":"Desmond Cuphus"},
{"userId":29,"displayName":"Ignaz Lewisham"},
{"userId":30,"displayName":"Paola Odams"},
{"userId":31,"displayName":"Nicolais Ducker"},
{"userId":32,"displayName":"Camile McNab"},
{"userId":33,"displayName":"Binni Acreman"},
{"userId":34,"displayName":"Zonda O' Lone"},
{"userId":35,"displayName":"Theressa McCawley"},
{"userId":36,"displayName":"Mareah Heakins"},
{"userId":37,"displayName":"Pasquale Bagworth"},
{"userId":38,"displayName":"Veronike Capey"},
{"userId":39,"displayName":"Jed Kubczak"},
{"userId":40,"displayName":"Stephanus Ricciardelli"},
{"userId":41,"displayName":"Carey Coldman"},
{"userId":42,"displayName":"Shirlee Belliss"},
{"userId":43,"displayName":"Kai Capponeer"},
{"userId":44,"displayName":"Lockwood Pilling"},
{"userId":45,"displayName":"Olga Puleque"},
{"userId":46,"displayName":"Cleon Piccard"},
{"userId":47,"displayName":"Al Rousel"},
{"userId":48,"displayName":"Ida Coltart"},
{"userId":49,"displayName":"Pennie Housley"},
{"userId":50,"displayName":"Lind Ikringill"}];

const handleUserSearchChanged = (e: CustomEvent<string> ) => {
    const query = e.detail;
    const results = users.filter(u => u.displayName.includes(query));
    const grid = document.querySelector("dnn-permissions-grid");
    grid.foundUsers = results;
};

const Template = (args: {
    permissions: IPermissions
    roles: IRole[],
    roleGroups: IRoleGroup[],
    }) =>
    html`
        <dnn-permissions-grid
            .permissions=${args.permissions}
            .roles=${args.roles}
            .roleGroups=${args.roleGroups}
            @userSearchQueryChanged="${handleUserSearchChanged}"
        />
    `;

export const PermissionsGrid = Template.bind({});
PermissionsGrid.args = {
    permissions,
    roles,
    roleGroups,
};