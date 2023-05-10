import { Component, h, Element, Prop, Event, EventEmitter, Watch, Host } from "@stencil/core";
import { DnnToggleChangeEventDetail } from "./toggle-interface";


@Component({
    tag: "dnn-toggle",
    styleUrl: "dnn-toggle.scss",
    shadow: true
})
export class DnnToggle {

    @Element() element: HTMLDnnToggleElement;

    /** If 'true' the toggle is checked (on). */
    @Prop({mutable: true}) checked = false;

    /** If 'true' the toggle is not be interacted with. */
    @Prop() disabled = false;

    /** Fires when the toggle changed */
    @Event() checkChanged!: EventEmitter<DnnToggleChangeEventDetail>;

    @Watch("checked")
    checkedChanged(isChecked: boolean){
        this.checkChanged.emit({checked: isChecked});
    }

    render() {
        return (
            <Host>
                <button disabled={this.disabled} class={{'checked': this.checked}}
                    onClick={() => {
                        if (!this.disabled) {
                            this.checked = !this.checked;
                        }
                    }}
                >
                    <div class="handle"></div>
                </button>
            </Host>
        );
    }
}
