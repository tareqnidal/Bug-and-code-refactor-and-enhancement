```
Sure, I can help refactor this code. Here’s a version of your code with some enhancements:
```

export default class Nasa {
  #api = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count='
  #count = 1
  #nasaDiv = this.#createDiv('nasaDiv')
  #topDiv = this.#createDiv('topDiv')
  #factContainer = this.#createDiv('factContainer')

  constructor () {
    this.#addEventListeners()
    this.#nasaDiv.append(this.#topDiv, this.#factContainer)
    this.#topDiv.append(this.#createUpdateButton(), this.#createLabel(), this.#createSelect())
    this.#fetchData()
  }

  #createDiv(className) {
    const div = document.createElement('div')
    div.classList.add(className)
    return div
  }

  #addEventListeners() {
    this.#nasaDiv.addEventListener('max', this.#maximize.bind(this))
    this.#nasaDiv.addEventListener('min', this.#minimize.bind(this))
  }

  #maximize() {
    this.#nasaDiv.classList.add('maxNasa')
    this.#nasaDiv.scrollTop = this.#nasaDiv.scrollHeight
  }

  #minimize() {
    this.#nasaDiv.classList.remove('maxNasa')
    this.#nasaDiv.scrollTop = this.#nasaDiv.scrollHeight
  }

  #createUpdateButton() {
    const updateBtn = document.createElement('button')
    updateBtn.classList.add('updateBtn')
    updateBtn.textContent = 'Update'
    updateBtn.addEventListener('click', this.#update.bind(this))
    return updateBtn
  }

  #update() {
    this.#factContainer.innerHTML = ''
    this.#fetchData()
  }

  #createSelect() {
    const select = document.createElement('select')
    select.classList.add('selectCount')
    for (let i = 1; i < 11; i++) {
      const option = document.createElement('option')
      option.textContent = i
      select.appendChild(option)
    }
    select.addEventListener('change', this.#changeCount.bind(this))
    return select
  }

  #changeCount(event) {
    this.#count = event.target.value
  }

  #createLabel() {
    const label = document.createElement('label')
    label.textContent = 'Number of facts: '
    return label
  }

  getDiv() {
    return this.#nasaDiv
  }

  async #fetchData() {
    const response = await fetch(this.#api + this.#count)
    const data = await response.json()
    this.#renderData(data)
  }

  #renderData(data) {
    data.forEach(element => {
      const div = this.#createDiv('nasadiv__item')
      div.append(this.#createMedia(element), this.#createTitle(element), this.#createExplanation(element))
      this.#factContainer.appendChild(div)
    })
  }

  #createMedia(element) {
    const media = document.createElement(element.media_type === 'video' ? 'iframe' : 'img')
    media.src = element.url
    return media
  }

  #createTitle(element) {
    const title = document.createElement('h2')
    title.classList.add('nasadiv__item__h2')
    title.textContent = element.title
    return title
  }

  #createExplanation(element) {
    const explanation = document.createElement('p')
    explanation.classList.add('nasadiv__item__p')
    explanation.textContent = element.explanation
    return explanation
  }
}
