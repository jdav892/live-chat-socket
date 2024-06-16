const webSocket = new WebSocket('ws://localhost:8080/');

webSocket.onmessage = (event) => {
            console.log(event)
            document.getElementById('messages').innerText +=
            'Message from server: ' + event.data + "<br>";
        };

webSocket.addEventListener("open", () => {
                console.log("Established Connection");
            });

function sendMessage(event){
    var inputMessage = document.getElementById('message')
    webSocket.send(inputMessage.value)
    inputMessage.value = ""
    event.preventDefault();
}
document.getElementById('messages').addEventListener('submit', sendMessage)