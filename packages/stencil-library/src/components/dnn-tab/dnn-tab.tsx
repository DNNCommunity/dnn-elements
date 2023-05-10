import { Component, Host, h, Prop, State, Method } from "@stencil/core";

/** Represents a single tab and must be used inside a dnn-tabs element. */
@Component({
    tag: 'dnn-tab',
    styleUrl: 'dnn-tab.scss',
    shadow: true,
})
export class DnnTab {
    /** Defines the tab title. */
    @Prop() tabTitle!: string;

    @State() visible: boolean = false;

    /** Shows the tab. */
    @Method()
    async show(){
        this.visible = true;
    }

    /** Hides the modal */
    @Method()
    async hide(){
        this.visible = false;
    }

    render() {
        return (
            <Host>
                {this.visible &&
                    <slot></slot>
                }
            </Host>
        );
    }
}