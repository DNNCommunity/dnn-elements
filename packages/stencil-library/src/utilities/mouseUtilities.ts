export function getMovementFromEvent(
    event: MouseEvent | TouchEvent,
    previousTouch?: Touch
) {
    let movementX = 0;
    let movementY = 0;
    let currentTouch = previousTouch;
    if (event instanceof MouseEvent) {
      movementX = event.movementX;
      movementY = event.movementY;
    }
    if (typeof TouchEvent !== "undefined"){
      if (event instanceof TouchEvent) {
        let touch = event.touches[0];
        if (previousTouch != undefined) {
          movementX = touch.pageX - previousTouch.pageX;
          movementY = touch.pageY - previousTouch.pageY;
        }
        currentTouch = touch;
      }
    }
    return { movementX, movementY, previousTouch: currentTouch };
  }