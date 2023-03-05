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
