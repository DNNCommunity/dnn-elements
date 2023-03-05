'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const debounce = require('./debounce-1de79bc7.js');

class DnnServicesFramework {
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

exports.Debounce = debounce.Debounce;
exports.DnnServicesFramework = DnnServicesFramework;

//# sourceMappingURL=index.cjs.js.map