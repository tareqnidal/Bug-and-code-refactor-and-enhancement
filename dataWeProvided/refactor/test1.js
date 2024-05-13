function setupChatInterface (username, chatContainer) {
    const chatInput = chatContainer.querySelector('.chat-input')
    const emojiPicker = chatContainer.querySelector('.emoji-picker')
    const chatMessages = chatContainer.querySelector('.chat-messages')
  
  
    // Populate chat with historical messages
    chatMessages.innerHTML = globalMessageHistory.map(msg =>
      `<p><b>${msg.username || 'Anonymous'}:</b> ${msg.data}</p>`
    ).join('')
  
  
    // Function to handle sending messages
    const sendMessage = () => {
      const message = chatInput.value
      if (message.trim() !== '') {
        socket.send(JSON.stringify({
          type: 'message',
          data: message,
          username: username || 'Anonymous',
          channel: 'my, not so secret, channel',
          key: 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
        }))
        chatInput.value = ''
        emojiPicker.value = '' // Reset emoji picker to default state
      }
    }
  
  
    // Attach event listeners
    chatInput.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) { // Enter key
        e.preventDefault()
        sendMessage()
      }
    })
  
  
    // Event listener for emoji selection
    emojiPicker.addEventListener('change', () => {
      chatInput.value += emojiPicker.value
      emojiPicker.value = ''
    })
  }
  