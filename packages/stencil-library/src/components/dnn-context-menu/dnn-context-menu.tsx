import { Component, Host, State, Method, h, Element, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'dnn-context-menu',
  styleUrl: 'dnn-context-menu.scss',
  shadow: true,
})
export class DnnContextMenu {
  /** If true, the menu will close when an item is clicked. */
  @Prop() closeOnClick = false;

  /** Opens the menu using a pointer event. */
  @Method()
  async open(event: PointerEvent) {
    await this.handleOpen(event);
  }

  /** Closes the menu. */
  @Method()
  async close(){
    await this.handleClose();
  }

  @Element() el!: HTMLElement;
  
  @State() isOpen = false;
  @State() position = { x: 0, y: 0 };
  @State() positioned = false;

  // Close when clicking outside the menu.
  @Listen('mousedown', { target: 'window', capture: true })
  onWindowMouseDown(ev: MouseEvent) {
    if (!this.isOpen) return;

    const path = ev.composedPath() as EventTarget[];
    const clickedInside = path.includes(this.el);
    if (!clickedInside) this.close();
  }

  // Close on scroll of the window.
  @Listen('scroll', { target: 'window', capture: true })
  onWindowScroll() {
    if (this.isOpen) this.close();
  }

  // Close on window resize.
  @Listen('resize', { target: 'window' })
  onWindowResize() {
    if (this.isOpen) this.close();
  }

  // Close on Escape key.
  @Listen('keydown', { target: 'window' })
  onWindowKeyDown(ev: KeyboardEvent) {
    if (!this.isOpen) return;

    if (ev.key === 'Escape') {
      ev.preventDefault();
      this.close();
      return;
    }
  }

  private async handleOpen(event: PointerEvent){
    // Open first so slot content renders and we can measure it.
    this.isOpen = true;
    // Ensure we start hidden while measuring to avoid flashing
    this.positioned = false;

    // Determine initial origin point (viewport coordinates)
    let originX = 0;
    let originY = 0;
    const usedPointer = event.button === 2;

    if (usedPointer) {
      // Right click was used, so position the menu at the pointer location
      originX = event.clientX;
      originY = event.clientY;
    } else {
      // Keyboard was used, so position the menu relative to the source element.
      const targetRect = (event.target as HTMLElement).getBoundingClientRect();
      originX = targetRect.left;
      originY = targetRect.bottom;
    }

    // Set a provisional position so the menu renders and can be measured.
    this.position = { x: originX, y: originY };

    // Wait a frame to ensure the element is rendered and layouted.
    await new Promise(requestAnimationFrame);

    // Measure the menu
    const menuRect = this.el.getBoundingClientRect();
    const menuWidth = menuRect.width;
    const menuHeight = menuRect.height;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let x = originX;
    let y = originY;

    // If opening to the right would overflow the viewport, open to the left instead.
    if (x + menuWidth > vw) {
      if (usedPointer) {
        x = Math.max(0, originX - menuWidth);
      } else {
        // For keyboard anchoring, align the menu's right edge with the target's right edge.
        const targetRect = (event.target as HTMLElement).getBoundingClientRect();
        x = Math.max(0, targetRect.right - menuWidth);
      }
    }

    // If opening downward would overflow the viewport, open upward instead.
    if (y + menuHeight > vh) {
      if (usedPointer) {
        y = Math.max(0, originY - menuHeight);
      } else {
        const targetRect = (event.target as HTMLElement).getBoundingClientRect();
        y = Math.max(0, targetRect.top - menuHeight);
      }
    }

    // Final clamp to viewport in case of extreme sizes
    x = Math.max(0, Math.min(x, Math.max(0, vw - menuWidth)));
    y = Math.max(0, Math.min(y, Math.max(0, vh - menuHeight)));

    this.position = { x, y };

    // Ensure the browser painted the new position then show with a transition
    await new Promise(requestAnimationFrame);
    this.positioned = true;
  }

  private async handleClose() {
    this.positioned = false;
    // Wait for the opacity transition to finish before hiding the element
    await new Promise(resolve => setTimeout(resolve, 160));
    this.isOpen = false;
  }

  private async handleMenuClick() {
    if (this.closeOnClick) {
      await this.handleClose();
    }
  }

  render() {
    return (
      <Host
        aria-hidden={!this.isOpen}
        role="menu"
        style={{
          display: this.isOpen ? 'flex' : 'none',
          left: `${this.position.x}px`,
          top: `${this.position.y}px`,
          opacity: this.positioned ? '1' : '0',
          transition: 'opacity 160ms ease',
          pointerEvents: this.positioned ? 'auto' : 'none',
        }}
        onclick={() => void this.handleMenuClick()}
      >
        <slot></slot>
      </Host>
    );
  }
}
