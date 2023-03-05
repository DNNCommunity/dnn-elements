export function getMovementFromEvent(event, previousTouch) {
  let movementX = 0;
  let movementY = 0;
  if (event instanceof MouseEvent) {
    movementX = event.movementX;
    movementY = event.movementY;
  }
  if (typeof TouchEvent !== "undefined") {
    if (event instanceof TouchEvent) {
      let touch = event.touches[0];
      if (previousTouch != undefined) {
        movementX = touch.pageX - this.previousTouch.pageX;
        movementY = touch.pageY - this.previousTouch.pageY;
      }
      previousTouch = touch;
    }
  }
  return { movementX, movementY };
}
//# sourceMappingURL=mouseUtilities.js.map
