```
Sure, I can help refactor this code. Here’s a version of your code with some enhancements:
```

import WindowBar from './windowBar.mjs'

const space = document.getElementById('space')
const bar = document.getElementById('bar')
bar.style.zIndex = 1000

const openedApps = document.getElementById('openedApps')
const openbtns = []

const apps = ['memory', 'chatt', 'nasa']

let z = 0
const windows = []
const pos = { left: 90, top: 10 }

apps.forEach(app => {
  const appElement = document.getElementById(`${app}App`)
  appElement.addEventListener('click', e => {
    e.preventDefault()
    createWindow(app)
  })
})

function resetZindex () {
  z = 0
  windows.sort((a, b) => a.getZindex() < b.getZindex())
  windows.forEach(win => {
    win.setZindex(z)
    z++
  })
}

function createWindow (app) {
  const win = new WindowBar(app)
  windows.push(win)
  z += 1
  win.setZindex(z)

  win.getDiv().addEventListener('mousedown', () => {
    z += 1
    if (z === 900) {
      resetZindex()
    }
    win.setZindex(z)
  })
  space.appendChild(win.getDiv())

  win.getDiv().style.left = `${pos.left}px`
  win.getDiv().style.top = `${pos.top}px`
  pos.left += 10
  pos.top += 10
  win.getDiv().focus()

  addTaskbarBtn(win, `${app}App`)
}

function addTaskbarBtn (win, app) {
  const appBtn = document.createElement('button')
  appBtn.classList.add(app)
  appBtn.addEventListener('click', () => {
    if (win.getDiv().classList.contains('hidden')) {
      win.getDiv().classList.remove('hidden')
    }
    win.getDiv().focus()
    z += 1
    if (z === 900) {
      resetZindex()
    }
    win.setZindex(z)
  })
  openedApps.appendChild(appBtn)
  openbtns.push(appBtn)
}

document.addEventListener('closewindow', function (e) {
  if (windows.includes(e.detail.win)) {
    const index = windows.indexOf(e.detail.win)
    openedApps.removeChild(openbtns[index])
    space.removeChild(windows[index].getDiv())
    windows.splice(index, 1)
    openbtns.splice(index, 1)
  }
})

const dateDiv = document.createElement('div')
dateDiv.classList.add('dateDiv')
dateDiv.style.zIndex = 1
dateDiv.style.position = 'absolute'
dateDiv.style.top = '0px'
dateDiv.style.right = '0px'
dateDiv.style.padding = '5px'
dateDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
dateDiv.style.color = 'white'
dateDiv.style.fontSize = '1.5em'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function updateClock() {
  const date = new Date()
  const day = date.getDay()
  const month = date.getMonth()
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  dateDiv.innerHTML = `${days[day]} ${months[month]} ${year} ${hours}:${minutes}:${seconds}`
}

updateClock()
setInterval(updateClock, 1000)

space.appendChild(dateDiv)
