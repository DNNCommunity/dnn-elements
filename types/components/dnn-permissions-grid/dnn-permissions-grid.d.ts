import { EventEmitter } from '../../stencil-public-runtime';
import { ILocalization } from './localization-interface';
import { IPermissions } from './permissions-interface';
import { IRoleGroup } from './role-group-interface';
import { IRole } from './role-interface';
import { ISearchedUser } from './searched-user-interface';
export declare class DnnPermissionsGrid {
  /** The list of permissions. */
  permissions: IPermissions;
  /** The list of role groups. */
  roleGroups: IRoleGroup[];
  /** The list of possible roles. */
  roles: IRole[];
  /** Optionally allows localizing the component strings. */
  resx: ILocalization;
  /** The list of users to show under the search users field when a search is performed. */
  foundUsers: ISearchedUser[];
  /** Fires when searching for users to add to the permissions. Emits the search query. */
  userSearchQueryChanged: EventEmitter<string>;
  /** Fires when any permissions have changed, can be used for instance to have linked permissions. */
  permissionsChanged: EventEmitter<IPermissions>;
  selectedRoleGroupId: number;
  userQuery: string;
  pickedUser: ISearchedUser;
  handleFoundUsersChanged(newValue: ISearchedUser[]): void;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  private roleDropDown;
  private userCollapsible;
  private dismissUserResults;
  private handleRoleGroupChanged;
  private addRole;
  private addUser;
  private getRoles;
  private renderRoleCheckBox;
  private renderUserCheckBox;
  private handleRoleChanged;
  private handleUserChanged;
  private removeRole;
  private removeUser;
  private handleQueryChanged;
  private handleSearchUserFieldKeyDown;
  private handleSearchedUserKeyDown;
  private handleUserPicked;
  private getFilteredUsers;
  render(): any;
}
