import React from "react";






class TellAFriendBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSendClick = this.handleSendClick.bind(this);
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSendClick() {
    const { message } = this.state;

    navigator.clipboard.writeText(message).then(() => {

      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
      this.setState({ message: "" });
    }).catch(error => {
      console.error('Error al copiar al portapapeles: ', error);
    });
  }

  render() {
    const { message } = this.state;

    return (
      <div>
        <h2>Tell a Friend</h2>
        <textarea
          value={message}
          onChange={this.handleMessageChange}
          placeholder="Escribe aquí..."
          rows={4}
          style={{ width: "80%", maxWidth: "100%", minHeight: "80px", color: "black" }}
          className="rounded-lg my-4 p-2"
        />
        <br />
        <button onClick={this.handleSendClick} >
          Copiar y Enviar por Whatsapp
        </button>
      </div>
    );
  }
}

export default TellAFriendBox;