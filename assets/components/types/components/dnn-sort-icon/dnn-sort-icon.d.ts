import { EventEmitter } from '../../stencil-public-runtime';
export declare class DnnSortIcon {
  /** Defines the current sort direction */
  sortDirection: "asc" | "desc" | "none";
  /** Emitted when the sort is changed. */
  sortChanged: EventEmitter<"asc" | "desc" | "none">;
  private changeSort;
  render(): any;
}
