import { Component, Host, h, Prop, State, Event, EventEmitter, Watch } from '@stencil/core';
import { ILocalization } from './localization-interface';
import { IPermissionDefinition, IPermissions, IRolePermission, IUserPermission } from './permissions-interface';
import { IRoleGroup } from './role-group-interface';
import { IRole } from './role-interface';
import { ISearchedUser } from './searched-user-interface';

@Component({
  tag: 'dnn-permissions-grid',
  styleUrl: 'dnn-permissions-grid.scss',
  shadow: true,
})
export class DnnPermissionsGrid {

  /** The list of permissions. */
  @Prop({mutable: true}) permissions!: IPermissions;

  /** The list of role groups. */
  @Prop() roleGroups!: IRoleGroup[];

  /** The list of possible roles. */
  @Prop() roles!: IRole[];

  /** Optionally allows localizing the component strings. */
  @Prop() resx: ILocalization;

  /** The list of users to show under the search users field when a search is performed. */
  @Prop() foundUsers: ISearchedUser[] = [];

  /** Fires when searching for users to add to the permissions. Emits the search query. */
  @Event() userSearchQueryChanged: EventEmitter<string>;
  
  /** Fires when any permissions have changed, can be used for instance to have linked permissions. */
  @Event() permissionsChanged: EventEmitter<IPermissions>;

  @State() selectedRoleGroupId = -1;
  @State() userQuery: string;
  @State() pickedUser: ISearchedUser;
  @State() localResx: ILocalization;
  @State() focused = false;
  
  
  @Watch("foundUsers")
  handleFoundUsersChanged(newValue: ISearchedUser[]){
    if (newValue?.length > 0){
      setTimeout(() => {
        this.userCollapsible.expanded = true;
      }, 100);
    }
  }
  
  @Watch("resx")
  resxChanged(){
    this.mergeResx();
  }
  
  componentWillLoad() {
    document.addEventListener("click", this.dismissUserResults.bind(this));
    this.mergeResx();
  }
  
  disconnectedCallback() {
    document.removeEventListener("click", this.disconnectedCallback.bind(this));
  }
  
  private roleDropDown: HTMLSelectElement;
  private userCollapsible: HTMLDnnCollapsibleElement;
  private rolesDropdown: HTMLSelectElement;
  private defaultResx: ILocalization = {
    Add: "Add",
    AllRoles: "All Roles",
    FilterByGroup: "Filter By Group",
    GlobalRoles: "Global Roles",
    Role: "Role",
    RolePermissions: "Role Permissions",
    SelectRole: "Select Role",
    User: "User",
    UserPermissions: "User Permissions",
  };

  private mergeResx(): void {
    this.localResx = {...this.defaultResx, ...this.resx};
  }

  private dismissUserResults(e: MouseEvent){
    const dropdownRect = this.roleDropDown.getBoundingClientRect();
    if (
      e.pageX > dropdownRect.right ||
      e.pageX < dropdownRect.left ||
      e.pageY > dropdownRect.bottom ||
      e.pageY < dropdownRect.top){
        this.userCollapsible.expanded = false;
      }
  } 

  private handleRoleGroupChanged(dropdown: HTMLSelectElement): void {
    const index = dropdown.selectedIndex;
    const value = Number.parseInt(dropdown.options[index].value);
    this.selectedRoleGroupId = value;
  }

  private addRole(): void {
    const roleId = Number.parseInt(this.roleDropDown.options[this.roleDropDown.selectedIndex].value);
    const role = this.roles.filter(r => r.RoleId == roleId)[0];
    this.permissions = {
      ...this.permissions,
      rolePermissions: [
        ...this.permissions.rolePermissions,
        {
          default: false,
          locked: false,
          permissions: [],
          roleId: role.RoleId,
          roleName: role.RoleName,
        }
      ]
    }
    this.permissionsChanged.emit(this.permissions);
  }

  private addUser(): void {
    if (this.pickedUser != undefined){
      this.permissions = {
        ...this.permissions,
        userPermissions: [
          ...this.permissions.userPermissions,
          {
            displayName: this.pickedUser.displayName,
            permissions: [],
            userId: this.pickedUser.userId,
          },
        ],
      };
      this.pickedUser = undefined;
      this.userQuery = "";
      this.permissionsChanged.emit(this.permissions);
    }
  }

  private getRoles(){
    const filteredRoles = this.roles.filter(role => 
      !this.permissions.rolePermissions.some(rp => rp.roleId == role.RoleId))
    if (this.selectedRoleGroupId == -2){
      // All Roles
      return filteredRoles;
    }

    if (this.selectedRoleGroupId == -1){
      // Global Roles
      return filteredRoles.filter(role => role.IsSystemRole);
    }
    
    return filteredRoles.filter(role => role.RoleGroupId == this.selectedRoleGroupId);
  }

  private renderRoleCheckBox(rolePermission: IRolePermission, permissionDefinition: IPermissionDefinition) {
    const item = rolePermission.permissions.filter(permission => permission.permissionId == permissionDefinition.permissionId)[0];
    if (rolePermission.locked){
      return(
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
      )
    }

    const checked = item == undefined ? "intermediate" : item.allowAccess ? "checked" : "unchecked";
    return(
      <label>
        <span class="hidden">{permissionDefinition.permissionName}</span>
        <dnn-checkbox
          use-intermediate
          checked={checked}
          onCheckedchange={e => this.handleRoleChanged(e.detail, rolePermission, permissionDefinition)}
        >
          <div slot="intermediateicon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
          </div>
          <div slot="uncheckedicon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/></svg>
          </div>
        </dnn-checkbox>
      </label>
    )
  }

  private renderUserCheckBox(userPermission: IUserPermission, permissionDefinition: IPermissionDefinition) {
    const item = userPermission.permissions.filter(permission => permission.permissionId == permissionDefinition.permissionId)[0];

    const checked = item == undefined ? "intermediate" : item.allowAccess ? "checked" : "unchecked";
    return(
      <label>
        <span class="hidden">{permissionDefinition.permissionName}</span>
        <dnn-checkbox
          use-intermediate
          checked={checked}
          onCheckedchange={e => this.handleUserChanged(e.detail, userPermission, permissionDefinition)}
        >
          <div slot="intermediateicon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
          </div>
          <div slot="uncheckedicon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/></svg>
          </div>
        </dnn-checkbox>
      </label>
    )
  }
  
  private handleRoleChanged(
    checked: "checked" | "unchecked" | "intermediate",
    rolePermission: IRolePermission,
    permissionDefinition: IPermissionDefinition
  ): void {
    switch (checked) {
      case "unchecked":
        this.permissions = {
          ...this.permissions,
          rolePermissions: [
            ...this.permissions.rolePermissions.map(r => {
              if (r.roleId != rolePermission.roleId){
                return r;
              }

              const newRolePermission = Object.assign({}, r);
              newRolePermission.permissions = [
                ...newRolePermission.permissions.filter(p => p.permissionId != permissionDefinition.permissionId),
                {
                  allowAccess: false,
                  fullControl: false,
                  permissionCode: permissionDefinition.permissionCode,
                  permissionId: permissionDefinition.permissionId,
                  permissionKey: permissionDefinition.permissionKey,
                  permissionName: permissionDefinition.permissionName,
                  view: false,
                },
              ];
              return newRolePermission;
            }),
          ],
        };
        break;
      case "checked":
        this.permissions = {
          ...this.permissions,
          rolePermissions: [
            ...this.permissions.rolePermissions.map(r => {
              if (r.roleId != rolePermission.roleId){
                return r;
              }

              const newRolePermission = Object.assign({}, r);
              newRolePermission.permissions = [
                ...newRolePermission.permissions.filter(p => p.permissionId != permissionDefinition.permissionId),
                {
                  allowAccess: true,
                  fullControl: false,
                  permissionCode: permissionDefinition.permissionCode,
                  permissionId: permissionDefinition.permissionId,
                  permissionKey: permissionDefinition.permissionKey,
                  permissionName: permissionDefinition.permissionName,
                  view: false,
                },
              ];
              return newRolePermission;
            }),
          ],
        };
        break;
        case "intermediate":
        this.permissions = {
          ...this.permissions,
          rolePermissions: [
            ...this.permissions.rolePermissions.map(r => {
              if (r.roleId != rolePermission.roleId){
                return r;
              }

              const newRolePermission = Object.assign({}, r);
              newRolePermission.permissions = [
                ...newRolePermission.permissions.filter(p => p.permissionId != permissionDefinition.permissionId),
              ];
              return newRolePermission;
            }),
          ],
        };
        break;
      default:
        break;
    }
    this.permissionsChanged.emit(this.permissions);
  }

  private handleUserChanged(
    checked: "checked" | "unchecked" | "intermediate",
    userPermission: IUserPermission,
    permissionDefinition: IPermissionDefinition
  ): void {
    switch (checked) {
      case "unchecked":
        this.permissions = {
          ...this.permissions,
          userPermissions: [
            ...this.permissions.userPermissions.map(u => {
              if (u.userId != userPermission.userId){
                return u;
              }

              const newUserPermission = Object.assign({}, u);
              newUserPermission.permissions = [
                ...newUserPermission.permissions.filter(p => p.permissionId != permissionDefinition.permissionId),
                {
                  allowAccess: false,
                  fullControl: false,
                  permissionCode: permissionDefinition.permissionCode,
                  permissionId: permissionDefinition.permissionId,
                  permissionKey: permissionDefinition.permissionKey,
                  permissionName: permissionDefinition.permissionName,
                  view: false,
                },
              ];
              return newUserPermission;
            }),
          ],
        };
        break;
      case "checked":
        this.permissions = {
          ...this.permissions,
          userPermissions: [
            ...this.permissions.userPermissions.map(u => {
              if (u.userId != userPermission.userId){
                return u;
              }

              const newUserPermission = Object.assign({}, u);
              newUserPermission.permissions = [
                ...newUserPermission.permissions.filter(p => p.permissionId != permissionDefinition.permissionId),
                {
                  allowAccess: true,
                  fullControl: false,
                  permissionCode: permissionDefinition.permissionCode,
                  permissionId: permissionDefinition.permissionId,
                  permissionKey: permissionDefinition.permissionKey,
                  permissionName: permissionDefinition.permissionName,
                  view: false,
                },
              ];
              return newUserPermission;
            }),
          ],
        };
        break;
        case "intermediate":
        this.permissions = {
          ...this.permissions,
          userPermissions: [
            ...this.permissions.userPermissions.map(u => {
              if (u.userId != userPermission.userId){
                return u;
              }

              const newUserPermission = Object.assign({}, u);
              newUserPermission.permissions = [
                ...newUserPermission.permissions.filter(p => p.permissionId != permissionDefinition.permissionId),
              ];
              return newUserPermission;
            }),
          ],
        };
        break;
      default:
        break;
    }
    this.permissionsChanged.emit(this.permissions);
  }

  private removeRole(rolePermission: IRolePermission): void {
    this.permissions = {
      ...this.permissions,
      rolePermissions: [
        ...this.permissions.rolePermissions.filter(rp => rp.roleId != rolePermission.roleId),
      ],
    };
    this.permissionsChanged.emit();
  }

  private removeUser(userPermission: IUserPermission): void {
    this.permissions = {
      ...this.permissions,
      userPermissions: [
        ...this.permissions.userPermissions.filter(up => up.userId != userPermission.userId),
      ]
    };
    this.permissionsChanged.emit(this.permissions);
  }

  private handleQueryChanged(query: string): void {
    this.userQuery = query;
    if (query == undefined || query.length == 0){
      this.userCollapsible.expanded = false;
      this.pickedUser = undefined;
      this.foundUsers = [];
      return;
    }
    this.userSearchQueryChanged.emit(query);
  }

  private handleSearchUserFieldKeyDown(e: KeyboardEvent): void {
    if (e.key != "ArrowDown"){
      return;
    }

    e.preventDefault();
    const firstButton = this.userCollapsible.querySelector("button");
    if (firstButton != undefined){
      firstButton.focus();
    }
  }

  private handleSearchedUserKeyDown(e: KeyboardEvent): void {
    const button = e.target as HTMLButtonElement;
    
    switch(e.key) {
      case "ArrowDown":
        e.preventDefault();
        const nextButton = button.nextElementSibling as HTMLButtonElement;
        nextButton?.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        const previousButton = button.previousElementSibling as HTMLButtonElement;
        previousButton?.focus();
      break;
      default:
        break;
    }
  }

  private handleUserPicked(searchedUser: ISearchedUser): void {
    this.userQuery = searchedUser.displayName;
    this.pickedUser = searchedUser;
  }

  private getFilteredUsers() {
    return this.foundUsers.filter(fu => !this.permissions.userPermissions.some(up => up.userId == fu.userId))
  }
  
  render() {
    const filteredRoles = this.getRoles();
    return (
      <Host
        tabIndex={this.focused ? -1 : 0}
        onFocus={() => this.rolesDropdown.focus()}
        onBlur={() => this.rolesDropdown.blur()}
      >
        <div class="add-role-row">
          <div class="dropdown">
            <label>{this.localResx.FilterByGroup} :</label>
            <select
              ref={el => this.rolesDropdown = el}
              onChange={e => this.handleRoleGroupChanged(e.target as HTMLSelectElement)}
              onFocus={() => this.focused = true}
              onBlur={() => this.focused = false}
            >
              <option
                value={-2}
                selected={this.selectedRoleGroupId == -2}
              >
                {this.localResx.AllRoles}
              </option>
              <option
                value={-1}
                selected={this.selectedRoleGroupId == -1}
              >
                {this.localResx.GlobalRoles}
              </option>
              {this.roleGroups.map(roleGroup =>
                <option
                  value={roleGroup.id}
                  selected={this.selectedRoleGroupId == roleGroup.id}
                >
                  {roleGroup.name}
                </option>
              )}
            </select>
          </div>
            {filteredRoles && filteredRoles.length > 0 && [
              <div class="dropdown">
                <label>{this.localResx.SelectRole} :</label>
                <select ref={el => this.roleDropDown = el}>
                  {this.getRoles().map(role =>
                    <option value={role.RoleId}
                    >
                      {role.RoleName}
                    </option>
                  )}
                </select>
              </div>,
              <dnn-button
              appearance="primary"
              onClick={() => this.addRole()}
              >
                {this.localResx.Add}
              </dnn-button>
            ]
          }
        </div>
        <table class="roles-table">
          <caption>{this.localResx.RolePermissions}</caption>
          <thead>
            <tr>
              <th>{this.localResx.Role}</th>
              {this.permissions.permissionDefinitions.map(permissionDefinition =>
                <th>{permissionDefinition.permissionName}</th>
              )}
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {this.permissions.rolePermissions.map(rolePermission =>
              <tr>
                <th>{rolePermission.roleName}</th>
                {this.permissions.permissionDefinitions.map(permissionDefinition =>
                  <td>
                    {this.renderRoleCheckBox(rolePermission, permissionDefinition)}
                  </td>
                )}
                <td>
                  {!rolePermission.default &&
                    <button
                      onClick={() => this.removeRole(rolePermission)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                    </button>
                  }
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div class="search-user">
          <div class="search-control">
            <dnn-searchbox
              placeholder={this.localResx.User}
              debounced
              onQueryChanged={e => this.handleQueryChanged(e.detail)}
              onKeyDown={e => this.handleSearchUserFieldKeyDown(e)}
              query={this.userQuery}
            />
            <dnn-collapsible ref={el => this.userCollapsible = el}>
              <div class="dropdown">
                {this.getFilteredUsers().map(searchedUser =>
                  <button
                    onKeyDown={e => this.handleSearchedUserKeyDown(e)}
                    onClick={() => this.handleUserPicked(searchedUser)}
                  >
                    {searchedUser.displayName}
                  </button>
                )}
              </div>
            </dnn-collapsible>
          </div>
          {this.pickedUser &&
            <dnn-button
              onClick={() => this.addUser()}
            >
              {this.localResx.Add}
            </dnn-button>
          }
        </div>
        {this.permissions.userPermissions && this.permissions.userPermissions.length > 0 &&
          <table class="users-table">
            <caption>{this.localResx.UserPermissions}</caption>
            <thead>
              <tr>
                <th>{this.localResx.User}</th>
                {this.permissions.permissionDefinitions.map(permissionDefinition =>
                  <th>{permissionDefinition.permissionName}</th>
                )}
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {this.permissions.userPermissions.map(userPermission =>
                <tr>
                  <th>{userPermission.displayName}</th>
                  {this.permissions.permissionDefinitions.map(permissionDefinition =>
                    <td>
                      {this.renderUserCheckBox(userPermission, permissionDefinition)}
                    </td>
                  )}
                  <td>
                    <button
                      onClick={() => this.removeUser(userPermission)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                    </button>
                </td>
                </tr>
              )}
            </tbody>
          </table>
        }
      </Host>
    );
  }
}