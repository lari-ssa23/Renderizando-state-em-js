//componente de classe
import React, { Component } from "react";

export default class Aboutme extends Component {
  state = {
    me: [
      {
        nome: "Larissa",
        idade: 22,
        comida: "Strogonoff de frango",
        musica: ["Samba in paris", "YoYo", "Pequenas alegrias da vida adulta"]
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>Nome: {this.state.me[0].nome}</h1>
        <h2>Idade: {this.state.me[0].idade}</h2>
        <h3>Comida: {this.state.me[0].comida}</h3>
        <ul>
          <li>{this.state.me[0].musica[0]}</li>
          <li>{this.state.me[0].musica[1]}</li>
          <li>{this.state.me[0].musica[2]}</li>
        </ul>
      </div>
    );
  }
}
