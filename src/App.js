import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Esteban",
    };
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default App;
