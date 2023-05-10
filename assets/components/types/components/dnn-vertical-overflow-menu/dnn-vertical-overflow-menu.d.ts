/**
 * A component that shows a vertical list of items as they fit. When they don't all fit, it puts the ones that don't fit into a dropdown menu.
 * @slot() - The items to show in the menu.
 */
export declare class DnnVerticalOverflowMenu {
  element: HTMLDnnVerticalOverflowMenuElement;
  showDropdownButton: boolean;
  showDropdownMenu: boolean;
  private menu;
  private dropdown;
  private resizeObserver;
  private button;
  private previousMenuWidth;
  componentDidRender(): void;
  private moveItemsToDropDownIfNecessery;
  private moveItemsToMenuIfPossible;
  private getFullWidth;
  private toggleOverflowMenu;
  render(): any;
}
