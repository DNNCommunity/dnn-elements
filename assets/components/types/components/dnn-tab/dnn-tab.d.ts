/** Represents a single tab and must be used inside a dnn-tabs element. */
export declare class DnnTab {
  /** Defines the tab title. */
  tabTitle: string;
  visible: boolean;
  /** Shows the tab. */
  show(): Promise<void>;
  /** Hides the modal */
  hide(): Promise<void>;
  render(): any;
}
