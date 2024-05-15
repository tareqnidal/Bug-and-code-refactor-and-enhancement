```
To enhance and refactor the provided code while maintaining its original functionality,
 we can improve readability, encapsulation, and organization. Here's the enhanced version:
```

import WindowBar from './windowBar.mjs';

class WindowManager {
  constructor() {
    this.space = document.getElementById('space');
    this.openedApps = document.getElementById('openedApps');
    this.windows = [];
    this.openbtns = [];
    this.z = 0;
    this.position = { left: 90, top: 10 };

    this.initializeClock();
    this.setupEventListeners();
  }

  initializeClock() {
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('dateDiv');
    dateDiv.style.zIndex = 1;
    dateDiv.style.position = 'absolute';
    dateDiv.style.top = '0px';
    dateDiv.style.right = '0px';
    dateDiv.style.padding = '5px';
    dateDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    dateDiv.style.color = 'white';
    dateDiv.style.fontSize = '1.5em';
    this.space.appendChild(dateDiv);

    this.updateClock(dateDiv);
    setInterval(() => this.updateClock(dateDiv), 1000);
  }

  updateClock(dateDiv) {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    dateDiv.innerHTML = `${days[day]} ${months[month]} ${year} ${hours}:${minutes}:${seconds}`;
  }

  setupEventListeners() {
    const memory = document.getElementById('memoryApp');
    const chatt = document.getElementById('chattApp');
    const nasa = document.getElementById('nasaApp');

    const addButtonClickListener = (element, app) => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        this.createWindow(app);
      });
    };

    addButtonClickListener(memory, 'memory');
    addButtonClickListener(chatt, 'chatt');
    addButtonClickListener(nasa, 'nasa');

    document.addEventListener('closewindow', (e) => {
      const winIndex = this.windows.indexOf(e.detail.win);
      if (winIndex !== -1) {
        this.openedApps.removeChild(this.openbtns[winIndex]);
        this.space.removeChild(this.windows[winIndex].getDiv());
        this.windows.splice(winIndex, 1);
        this.openbtns.splice(winIndex, 1);
      }
    });
  }

  resetZIndex() {
    this.z = 0;
    this.windows.sort((a, b) => a.getZindex() < b.getZindex());
    for (let i = 0; i < this.windows.length; i++) {
      this.windows[i].setZindex(this.z);
      this.z++;
    }
  }

  createWindow(app) {
    const win = new WindowBar(app);
    this.windows.push(win);
    this.z++;
    win.setZindex(this.z);

    win.getDiv().addEventListener('mousedown', () => {
      this.z++;
      if (this.z === 900) {
        this.resetZindex();
      }
      win.setZindex(this.z);
    });

    this.space.appendChild(win.getDiv());
    win.getDiv().style.left = this.position.left + 'px';
    win.getDiv().style.top = this.position.top + 'px';
    this.position.left += 10;
    this.position.top += 10;
    win.getDiv().focus();

    this.addTaskbarBtn(win, app);
  }

  addTaskbarBtn(win, app) {
    const appBtn = document.createElement('button');
    appBtn.classList.add(app);
    appBtn.addEventListener('click', () => {
      if (win.getDiv().classList.contains('hidden')) {
        win.getDiv().classList.remove('hidden');
      }
      win.getDiv().focus();
      this.z++;
      if (this.z === 900) {
        this.resetZindex();
      }
      win.setZindex(this.z);
    });

    this.openedApps.appendChild(appBtn);
    this.openbtns.push(appBtn);
  }
}

new WindowManager();

```
Enhancements:

Encapsulated the window management logic within a WindowManager class for better organization and encapsulation.
Modularized event listener setup and clock initialization for improved readability.
Utilized arrow functions for event listeners to maintain context and reduce code redundancy.
Improved code readability by using template literals for string concatenation.
Made minor adjustments for consistency and readability, such as removing unnecessary comments and simplifying variable names.

```