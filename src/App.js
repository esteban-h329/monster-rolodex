import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Esteban", lastName: "Montoya" },
      company: "ZTM",
    };
  }

  render() {
    return (
      <div className="App">
        <p>
          Hi, I am {this.state.name.firstName} {this.state.name.lastName} and I
          work at {this.state.company}
        </p>
        <button
          onClick={() => {
            this.setState(() => {
              return {
                name: { firstName: "Emmanuel", lastName: "Hernández" },
              };
            });
          }}
        >
          Change the name
        </button>
      </div>
    );
  }
}

export default App;
