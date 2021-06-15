const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this.onMessageHandler;
  },

  onMessageHandler(message) {
    console.log(message.data);
  }
}

export default WebSocketInitiator;