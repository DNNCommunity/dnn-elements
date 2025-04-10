import { Component, Host, h, State } from "@stencil/core";

@Component({
    tag: 'dnn-tabs',
    styleUrl: 'dnn-tabs.scss',
    shadow: true,
})
export class DnnTabs {
    private component!: HTMLElement;

    @State() tabTitles: string[] = [];
    @State() selectedTabTitle: string = "";

    componentDidLoad(){
        requestAnimationFrame(() => {
            this.updateTitles();
            this.showFirstTab();
        });
    }

    private getTabs() {
        return this.component.shadowRoot!.querySelector("slot")!.assignedElements() as HTMLDnnTabElement[];
    }

    private updateTitles(){
        const tabs = this.getTabs();
        tabs.forEach(tab => this.tabTitles = [...this.tabTitles, tab.tabTitle]);
    }

    private showFirstTab(){
        const tab = this.getTabs()[0];
        tab.show();
        this.selectedTabTitle = tab.tabTitle;
    }

    private showTab(tabTitle: string) {
        const tabs = this.getTabs();
        tabs.forEach(tab => {
            if (tab.tabTitle == tabTitle){
                tab.show();
                return;
            }

            tab.hide();
        });
        this.selectedTabTitle = tabTitle;
    }

    render() {
        return (
            <Host ref={el => this.component = el!}>
                <div class="tabTitles">
                    {this.tabTitles.map(tabTitle =>
                        <button
                            class={this.selectedTabTitle == tabTitle ? "visible": ""}
                            onClick={() => this.showTab(tabTitle)}
                        >
                            {tabTitle}
                        </button>
                    )}
                </div>
                <div class="currentTab">
                    <slot></slot>
                </div>
            </Host>
        );
    }
}