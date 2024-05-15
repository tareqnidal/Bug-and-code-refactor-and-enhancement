function makeDraggable (elem) {
    let pos1 = 0
    let pos2 = 0
    let pos3 = 0
    let pos4 = 0
  
  
    const bringToFront = () => {
      elem.style.zIndex = zIndexCounter++
    }
  
  
    // Function for handling mouse down on the entire element
    const onMouseDown = (e) => {
      e = e || window.event
      bringToFront()
    }
  
  
    const dragMouseDown = (e) => {
      e = e || window.event
      e.preventDefault()
      bringToFront() // Also bring to front when title-bar is clicked
  
  
      // Get the initial mouse cursor position
      pos3 = e.clientX
      pos4 = e.clientY
      document.onmouseup = closeDragElement
      document.onmousemove = elementDrag
    }
  
  
    // Bind the onMouseDown function to the entire element
    elem.onmousedown = onMouseDown
  
  
    // Bind the dragMouseDown function to the title bar
    const titleBar = elem.querySelector('.title-bar')
    if (titleBar) {
      titleBar.onmousedown = (e) => {
        dragMouseDown(e)
        e.stopPropagation() // Prevent the onMouseDown event of the parent element
      }
    }
  
  
    const elementDrag = (e) => {
      e = e || window.event
      e.preventDefault()
  
  
      // Calculate the new cursor position
      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY
  
  
      // Set the element's new position
      let newTop = elem.offsetTop - pos2
      let newLeft = elem.offsetLeft - pos1
  
  
      // Boundary check for top and left
      newTop = Math.max(0, Math.min(newTop, window.innerHeight - elem.offsetHeight))
      newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - elem.offsetWidth))
  
  
      elem.style.top = newTop + 'px'
      elem.style.left = newLeft + 'px'
    }
  
  
    const closeDragElement = () => {
      // Stop moving when mouse button is released
      document.onmouseup = null
      document.onmousemove = null
    }
  }
  
  