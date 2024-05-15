```
Sure, I can help refactor this code. Here’s a version of your code with some enhancements:
```

export default class TopBar {
  #element = this.#createElement('div', 'topBar')
  elementbar = this.#createElement('div', 'elementbar')
  #window = null

  #zindex = 0
  #max = false
  #windowPlacesMinimaized = { left: 0, top: 0 }

  #close = this.#createButton('close')
  #maximize = this.#createButton('maximize')
  #minimize = this.#createButton('minimize')
  #hide = this.#createButton('hide')

  #closeWindow = null

  #maxWindow = new Event('max')
  #minWindow = new Event('min')
  #windowContainer = null

  #closeSocket = new Event('closeSocket')

  constructor (window) {
    this.#window = window

    this.#closeWindow = new CustomEvent('closewindow', {
      detail: { win: this.#window },
      bubbles: true
    })

    const operationDiv = this.#createElement('div', 'operationDiv')
    operationDiv.append(this.#close, this.#maximize, this.#minimize, this.#hide)

    this.#element.append(this.elementbar, operationDiv)
  }

  #createElement (tagName, className) {
    const element = document.createElement(tagName)
    element.classList.add(className)
    return element
  }

  #createButton (className) {
    const button = this.#createElement('button', className)
    button.tabIndex = -1 // removing the ability to come across the button with tab
    return button
  }

  getDiv () {
    return this.#element
  }

  addListeners () {
    this.#close.addEventListener('click', this.#closeWindowHandler.bind(this))
    this.#maximize.addEventListener('click', this.maximize.bind(this))
    this.#minimize.addEventListener('click', this.minimize.bind(this))
    this.#hide.addEventListener('click', this.hide.bind(this))

    this.#element.parentNode.addEventListener('keyup', this.#keyUpHandler.bind(this))
  }

  #closeWindowHandler () {
    this.#close.dispatchEvent(this.#closeWindow)
    this.#windowContainer.childNodes[0].dispatchEvent(this.#closeSocket)
    this.#element.parentNode.remove()
  }

  #keyUpHandler (e) {
    switch (e.key) {
      case 'Escape':
        this.#closeWindowHandler()
        break
      case 'PageUp':
        this.maximize()
        break
      case 'PageDown':
        this.minimize()
        break
      case 'End':
        this.hide()
        break
      default:
    }
  }

  replaceElementBar () {
    this.elementbar = this.#createElement('div', 'elementbar')
    this.#element.replaceChild(this.elementbar, this.#element.childNodes[0])
  }

  maximize () {
    this.#windowContainer.childNodes[0].dispatchEvent(this.#maxWindow)
    this.#max = true
    this.#window.getDiv().classList.add('maxed')
    this.#window.removeListeners()

    this.#windowPlacesMinimaized.left = this.#window.getDiv().offsetLeft
    this.#windowPlacesMinimaized.top = this.#window.getDiv().offsetTop

    const sp = document.getElementById('space')

    this.#window.getDiv().style.top = '0px'
    this.#window.getDiv().style.left = '90px'
    this.#window.getDiv().style.height = `${sp.offsetHeight}px`
    this.#window.getDiv().style.width = `${sp.offsetWidth - 105}px`

    this.#maximize.style.display = 'none'
    this.#minimize.style.display = 'block'
  }
}
