import { Component, h, Prop, Host, EventEmitter, Event } from "@stencil/core";

/** Reusable DNN UI component to pick a color
 * @copyright Copyright (c) .NET Foundation. All rights reserved.
 * @license MIT
 */

 @Component({
     tag: "dnn-input-number",
     styleUrl: "dnn-input-number.scss",
     shadow: true
 })
 export class DnnInputNumber {

    /** the default value */
    @Prop({ attribute: 'value', mutable: true, reflect: true}) value: number = 0;
    /** the amount to change the value when incrementing or decrementing */
    @Prop() step: number = 1;
    /** the minimum value */
    @Prop() min: number = 0;
    /** the maximum value */
    @Prop() max: number = Number.MAX_SAFE_INTEGER;
    /** determines if the mouse wheel is used to change values */
    @Prop( { attribute: 'use-wheel'}) useWheel: boolean = false;
    /** determines the multiplier to use when using the controls with shift held down */
    @Prop( { attribute: 'shift-multiplier'}) shiftMultiplier: number = 10;
    /** defined the aria label for screen readers using this control */
    @Prop( { attribute: 'aria-label'}) ariaLabel: string = "number value";

    /** fires when the value has changed */
    @Event() change: EventEmitter;

    handleValueKeyPress(e){
        if (e.code === "Tab"){
            return true;
        }
        if (e.code === "ArrowUp"){
            this.incrementValue(e.shiftKey ? this.step * this.shiftMultiplier : this.step);
        }
        if (e.code === "ArrowDown"){
            this.decrementValue(e.shiftKey ? this.step * this.shiftMultiplier : this.step);
        }
        if (!e.key.match(/^[\d-\.,]*$/)) {
            e.preventDefault();
            return false;
        }
        return true;
    }

    handleValueInputChange(e){
        if (isNaN(e.target.value)){
            e.preventDefault();
            return false;
        }
        this.change.emit(this.value);
        return true;
    }

    handleValueChange(e){
        let newValue = parseFloat(e.target.value);
        if (newValue > this.max) { newValue = this.max }
        if (newValue < this.min) { newValue = this.min }
        this.value = newValue;
        this.change.emit(this.value);
    }

    handleMouseWheel(e){
        if (e.deltaY > 0) {this.decrementValue(e.shiftKey ? this.step * this.shiftMultiplier : this.step)}
        if (e.deltaY < 0) {this.incrementValue(e.shiftKey ? this.step * this.shiftMultiplier : this.step)}
        this.change.emit(this.value);
    }

    incrementValue(amount: number){
        let newValue = this.value + amount;
        if (newValue > this.max) { newValue = this.max }
        this.value = newValue;
        this.change.emit(this.value)
    }

    decrementValue(amount: number){
        let newValue = this.value - amount;
        if (newValue < this.min) { newValue = this.min }
        this.value = newValue;
        this.change.emit(this.value);
    }

    render() {
        return (
            <Host>
                <div class="container">
                    <button class="minus"
                        aria-label={`decrement ${this.ariaLabel}`}
                        onClick={(e) => this.decrementValue(e.shiftKey ? this.step * this.shiftMultiplier : this.step)}
                    >
                        -
                    </button>
                    <input type="text" pattern="^[\d-]*$"
                        aria-label={this.ariaLabel}
                        value={this.value}
                        size={this.max.toString().length / 2}
                        onKeyDown={(e) => this.handleValueKeyPress(e)}
                        onInput={(e) => this.handleValueInputChange(e)}
                        onChange={(e) => this.handleValueChange(e)}
                        onWheel={(e) => this.handleMouseWheel(e)}
                    />
                    <button class="plus"
                        onClick={(e) => this.incrementValue(e.shiftKey ? this.step * this.shiftMultiplier : this.step)}
                        aria-label={`increment ${this.ariaLabel}`}
                    >
                        +
                    </button>
                </div>
            </Host>
        );
    }
 }