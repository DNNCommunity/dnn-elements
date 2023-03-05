export class DnnServicesFramework {
  /**
   * Initializes the serivces framework
   */
  constructor(moduleId) {
    this.getServiceRoot = (moduleName) => {
      var serviceRoot = window.top.dnn.getVar("sf_siteRoot", "/");
      serviceRoot += "API/" + moduleName + "/";
      return serviceRoot;
    };
    this.getTabId = () => {
      var tabId = window.top.dnn.getVar("sf_tabId", "-1");
      return parseInt(tabId);
    };
    this.getModuleId = () => {
      return this._moduleId;
    };
    this.getAntiForgeryValue = () => {
      const el = document.querySelector("input[name=__RequestVerificationToken]");
      if (el != null) {
        return el.value;
      }
      else {
        return null;
      }
    };
    this.getModuleHeaders = () => {
      var headers = new Headers();
      if (this.getTabId() > -1) {
        headers.append("ModuleId", this._moduleId.toString());
        headers.append("TabId", this.getTabId().toString());
      }
      const afValue = this.getAntiForgeryValue();
      if (afValue != null) {
        headers.append("RequestVerificationToken", afValue);
      }
      return headers;
    };
    this._moduleId = moduleId;
  }
}
//# sourceMappingURL=dnnServicesFramework.js.map
