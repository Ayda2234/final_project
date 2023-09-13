document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.querySelector('.chat-messages');

    // Function to add a new message to the chat
    function addMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerText = message;
        chatMessages.appendChild(messageElement);
        
        // Scroll to the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Event listener for sending a message
    sendButton.addEventListener('click', () => {
        const message = messageInput.value;
        if (message.trim() !== '') {
            addMessage(message);
            messageInput.value = '';
        }
    });

    // Event listener for pressing Enter key to send a message
    messageInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const message = messageInput.value;
            if (message.trim() !== '') {
                addMessage(message);
                messageInput.value = '';
            }
        }
    });

    // Initial welcome message
    addMessage('Welcome to the chat!');
});
