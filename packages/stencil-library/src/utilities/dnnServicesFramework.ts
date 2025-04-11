declare global {
    interface Window {
        dnn: {
            //** Gets dnn variables from the page context *
            getVar: (key: string, defaultValue: string) => string;
        }
    }
}

export class DnnServicesFramework{
    
    private _moduleId: number;

    /**
     * Initializes the serivces framework
     */
    constructor(moduleId: number) {
        this._moduleId = moduleId;
    }

    getServiceRoot = (moduleName: string) =>
    {
        var serviceRoot = window.top!.dnn.getVar("sf_siteRoot", "/");
        serviceRoot += "API/" + moduleName + "/";
        return serviceRoot;
    }

    getTabId = () => {
        var tabId = window.top!.dnn.getVar("sf_tabId", "-1");
        return parseInt(tabId);
    }

    getModuleId = () => {
        return this._moduleId;
    }

    getAntiForgeryValue = () => {
        const el = document.querySelector("input[name=__RequestVerificationToken]") as HTMLInputElement;
        if (el != null){
            return el.value;
        }
        else{
            return null;
        }
    }

    getModuleHeaders = () => {
        var headers = new Headers();
        if (this.getTabId() > -1){
            headers.append("ModuleId", this._moduleId.toString());
            headers.append("TabId", this.getTabId().toString());
        }
        const afValue = this.getAntiForgeryValue();
        if (afValue != null){
            headers.append("RequestVerificationToken", afValue);
        }
        return headers;
    }
}