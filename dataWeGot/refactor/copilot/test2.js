```
Sure, I can help refactor this code. Here’s a version of your code that’s a bit more modular and maintainable:
```
class DraggableElement {
  constructor(elem) {
    this.elem = elem;
    this.pos1 = 0;
    this.pos2 = 0;
    this.pos3 = 0;
    this.pos4 = 0;
    this.init();
  }

  init() {
    this.elem.onmousedown = this.onMouseDown.bind(this);
    const titleBar = this.elem.querySelector('.title-bar');
    if (titleBar) {
      titleBar.onmousedown = (e) => {
        this.dragMouseDown(e);
        e.stopPropagation(); // Prevent the onMouseDown event of the parent element
      };
    }
  }

  bringToFront() {
    this.elem.style.zIndex = zIndexCounter++;
  }

  onMouseDown(e) {
    e = e || window.event;
    this.bringToFront();
  }

  dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    this.bringToFront(); // Also bring to front when title-bar is clicked

    // Get the initial mouse cursor position
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    document.onmouseup = this.closeDragElement.bind(this);
    document.onmousemove = this.elementDrag.bind(this);
  }

  elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    // Calculate the new cursor position
    this.pos1 = this.pos3 - e.clientX;
    this.pos2 = this.pos4 - e.clientY;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;

    // Set the element's new position
    let newTop = this.elem.offsetTop - this.pos2;
    let newLeft = this.elem.offsetLeft - this.pos1;

    // Boundary check for top and left
    newTop = Math.max(0, Math.min(newTop, window.innerHeight - this.elem.offsetHeight));
    newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - this.elem.offsetWidth));

    this.elem.style.top = newTop + 'px';
    this.elem.style.left = newLeft + 'px';
  }

  closeDragElement() {
    // Stop moving when mouse button is released
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


``` 
// Usage
const draggableElem = new DraggableElement(elem);

This refactoring maintains the original functionality but organizes the code into a class,
 which makes it easier to manage state and behavior. It also makes the code more reusable,
  as you can now easily create multiple draggable elements if needed.
   The init method is called when a new DraggableElement is created,
    which sets up the necessary event listeners. The bringToFront, onMouseDown, dragMouseDown, elementDrag,
     and closeDragElement methods are now methods on the DraggableElement class,
      which keeps related code together and makes it clear what object the methods are acting upon.
       The positions are also stored as properties of the DraggableElement instance,
        which could be useful if you need to access them elsewhere in the class.
         Finally, the init method is extracted to make the constructor more readable and to separate concerns.
          The bind method is used to ensure that this inside the methods refers to the DraggableElement instance.
           This is necessary because the methods are used as event handlers, and inside an event handler,
            this normally refers to the element the event was fired on. By using bind,
             we ensure that this always refers to the DraggableElement instance,
              regardless of how the method is called. This makes the code more predictable and easier to reason about.

```