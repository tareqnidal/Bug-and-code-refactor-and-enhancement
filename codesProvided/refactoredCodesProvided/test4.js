function initializeChat (chatWindow) {
    const usernameInput = chatWindow.querySelector('#username-input')
    const usernameSubmit = chatWindow.querySelector('#username-submit')
    const usernameContainer = chatWindow.querySelector('.username-container')
    const chatContainer = chatWindow.querySelector('.chat-container')
  
  
    usernameSubmit.addEventListener('click', () => {
      const username = usernameInput.value.trim()
      if (username) {
        localStorage.setItem('username', username)
        usernameContainer.style.display = 'none'
        chatContainer.style.display = 'block'
        setupChatInterface(username, chatContainer)
      } else {
        alert('Please enter a username.')
      }
    })
  }
  
  