declare global {
  interface Window {
    dnn: {
      getVar: (key: string, defaultValue: string) => string;
    };
  }
}
export declare class DnnServicesFramework {
  private _moduleId;
  /**
   * Initializes the serivces framework
   */
  constructor(moduleId: number);
  getServiceRoot: (moduleName: string) => string;
  getTabId: () => number;
  getModuleId: () => number;
  getAntiForgeryValue: () => string;
  getModuleHeaders: () => Headers;
}
