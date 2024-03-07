import { Component, h, Element, Prop, Event, EventEmitter, Watch, Host, AttachInternals } from "@stencil/core";
import { DnnToggleChangeEventDetail } from "./toggle-interface";


@Component({
    tag: "dnn-toggle",
    styleUrl: "dnn-toggle.scss",
    shadow: true,
    formAssociated: true,
})
export class DnnToggle {

    @Element() element: HTMLDnnToggleElement;

    /** If 'true' the toggle is checked (on). */
    @Prop({mutable: true}) checked = false;

    /** If 'true' the toggle is not be interacted with. */
    @Prop() disabled = false;

    /** The field name to use in forms. */
    @Prop() name: string;

    /** The value to post when used in forms. */
    @Prop() value: string = "on";

    /** Fires when the toggle changed */
    @Event() checkChanged!: EventEmitter<DnnToggleChangeEventDetail>;

    @AttachInternals() internals: ElementInternals;

    @Watch("checked")
    checkedChanged(newValue: boolean){
        this.checkChanged.emit({checked: newValue});
        this.setFormValue();
    }

    componentWillLoad() {
        this.originalChecked = this.checked;
        this.setFormValue();
    }

    private originalChecked: boolean;

    formResetCallback() {
        this.internals.setValidity({});
        this.checked = this.originalChecked;
    }

    private setFormValue(){
        if (this.name){
            if (this.checked){
                var data = new FormData();
                data.append(this.name, this.value);
                this.internals.setFormValue(data);
            }
            else {
                this.internals.setFormValue("");
            }
        }
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
