import { Component, Host, h, Prop, Element, State, Method, Event, EventEmitter } from '@stencil/core';
import { getMovementFromEvent } from "../../utilities/mouseUtilities";

/**
 * @slot default - The split divider control you want to use.
 * @slot left - The content of the left pane.
 * @slot right - The content of the right pane.
 */
@Component({
  tag: 'dnn-vertical-splitview',
  styleUrl: 'dnn-vertical-splitview.scss',
  shadow: true,
})
export class DnnVerticalSplitview {

  /** The width of the splitter area. */
  @Prop() splitterWidth = 16;

  /** The percentage position of the splitter in the container. */
  @Prop() splitWidthPercentage = 30;

  /** Sets the width percentage of the divider */
  @Method()
  async setSplitWidthPercentage(newWidth: number) {
    const panes = this.element.shadowRoot.querySelectorAll(".pane");
    requestAnimationFrame(() => {
      panes.forEach(pane => pane.classList.add("transition"));
      requestAnimationFrame(() => {
        const fullWidth = this.element.getBoundingClientRect().width;
        let newLeft = fullWidth * newWidth / 100;
        if (newLeft < 0){
          newLeft = 0;
        }
        if (newLeft > fullWidth){
          newLeft = fullWidth;
        }
        this.leftWidth = newLeft;
        this.rightWidth = fullWidth - newLeft;
        setTimeout(() => {
          panes.forEach(pane => pane.classList.remove("transition"));
        }, 300);
      });
    });
  }

  /** Gets the current divider position percentage. */
  @Method()
  async getSplitWidthPercentage(){
    const fullWidth = this.element.getBoundingClientRect().width;
    return this.leftWidth / fullWidth;
  }

  /** Fires when the width of the divider changes. */
  @Event() widthChanged: EventEmitter<number>;

  @State() leftWidth = 0;
  @State() rightWidth = 0;

  @Element() element : HTMLDnnVerticalSplitviewElement;
  
  componentDidLoad() {
    requestAnimationFrame(() => {
      const fullWidth = this.element.getBoundingClientRect().width;
      this.leftWidth = fullWidth * this.splitWidthPercentage / 100;
      this.rightWidth = fullWidth - this.leftWidth;
      this.widthChanged.emit(this.splitWidthPercentage);
    });
  }
  
  private previousTouch: Touch;

  private handleMouseDown(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    const handleDrag = (ev: MouseEvent | TouchEvent) => {
      let {movementX} = getMovementFromEvent(ev, this.previousTouch);
      let fullWidth = this.element.getBoundingClientRect().width;
      let newLeft = this.leftWidth + movementX;
      if (newLeft < 0){
        newLeft = 0;
      }
      if (newLeft > fullWidth){
        newLeft = fullWidth;
      }
      this.leftWidth = newLeft;
      this.rightWidth = fullWidth - newLeft;
    }
    const handleDragFinished = () => {
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("touchmove", handleDrag);
      const fullWidth = this.element.getBoundingClientRect().width;
      const newPercentage = this.leftWidth / fullWidth * 100;
      this.widthChanged.emit(newPercentage);
    };
    document.addEventListener("mouseup", handleDragFinished);
    document.addEventListener("touchend", handleDragFinished);
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("touchmove", handleDrag);
  }

  private handleKeyDown(e: KeyboardEvent): void {
    let movementX = 0;
    switch (e.key) {
      case "ArrowLeft":
        movementX = -10;
        break;
      case "ArrowRight":
        movementX = 10;
        break;
      default:
        return;
    }
    if (e.shiftKey){
      movementX = movementX * 10;
    }
    const fullWidth = this.element.getBoundingClientRect().width;
    let newLeft = this.leftWidth + movementX;
    if (newLeft < 0){
      newLeft = 0;
    }
    if (newLeft > fullWidth){
      newLeft = fullWidth;
    }
    this.leftWidth = newLeft;
    this.rightWidth = fullWidth - this.leftWidth;
  }

  render() {
    return (
      <Host>
          <div class="left pane" style={{
            width: `${this.leftWidth}px`,
            height:"100%",
            }}>
            <slot name="left"></slot>
          </div>
          <button
            onMouseDown={e => this.handleMouseDown(e)}
            onTouchStart={e => this.handleMouseDown(e)}
            onKeyDown={e => this.handleKeyDown(e)}
            style={{minWidth: `${this.splitterWidth.toString()}px`}}
          >
            <slot></slot>
          </button>
          <div
            class="right pane"
            style={{
              width: `${this.rightWidth}px`,
            }}>
            <slot name="right"></slot>
          </div>
      </Host>
    );
  }
}
