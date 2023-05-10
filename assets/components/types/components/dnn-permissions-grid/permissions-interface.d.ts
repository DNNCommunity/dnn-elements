export interface IPermissions {
  permissionDefinitions: IPermissionDefinition[];
  rolePermissions: IRolePermission[];
  userPermissions: IUserPermission[];
}
export interface IPermissionDefinition {
  allowAccess: boolean;
  fullControl: boolean;
  permissionCode: string;
  permissionId: number;
  permissionKey: string;
  permissionName: string;
  view: boolean;
}
export interface IRolePermission {
  default: boolean;
  locked: boolean;
  permissions: IPermissionDefinition[];
  roleId: number;
  roleName: string;
}
export interface IUserPermission {
  displayName: string;
  permissions: IPermissionDefinition[];
  userId: number;
}
