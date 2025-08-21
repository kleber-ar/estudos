import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NobelPrize from "./components/NobelPrize";

class App extends Component {
  state = {
    nobelPrizes: [],
  };

  componentDidMount() {
    fetch("https://api.nobelprize.org/2.1/nobelPrizes")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ nobelPrizes: data.nobelPrizes });
      });
  }

  render() {
    const { nobelPrizes } = this.state;

    return (
      <div className="App">
        <Header />
        {nobelPrizes.map((prize, index) => (
          <NobelPrize key={index} prizeInfo={prize} />
        ))}
      </div>
    );
  }
}

export default App;
