const socket = new WebSocket('ws://localhost:8080');
const messageList = document.querySelector(".message-list");
const messageInput = document.getElementById("message-input");
const leaveChat = document.getElementById("leave");
const user = localStorage.getItem("name")

socket.onopen = () => {
    addMessage(`${user} entrou no chat.`, true);
    console.log("Conexão aberta");
};

socket.onclose = () => {
    addMessage(`${user} saiu do chat.`, true);
    console.log("Conexão fechada");
}

document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('message-input');
    input.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            
            let messageText = messageInput.value.trim();
            if (messageText !== "") {
                messageText = `${user}: ${messageText}`;
                addMessage(messageText);
                messageInput.value = "";
            }
        }
    });
})

socket.onmessage = (event) => {
    const newMessage = document.createElement("li");
    newMessage.classList.add("text");
    event.data.text().then((text) => {
        newMessage.textContent = text;
        if (text.includes("entrou") || text.includes("saiu")) {
            newMessage.style.color = "yellow";
        }
    });
    messageList.appendChild(newMessage);
};

function addMessage(messageText, withColor = false) {
    const newMessage = document.createElement("li");
    newMessage.classList.add("text");
    newMessage.textContent = messageText;
    if (withColor) {
        newMessage.style.color = "yellow";
    }
    socket.send(messageText);
    messageList.appendChild(newMessage);
}