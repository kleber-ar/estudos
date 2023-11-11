import React from 'react';

type RandomNumberProps = {
  max: number;
};

type RandomNumberState = {
  randomNumber: number;
};

class RandomNumber extends React.Component<RandomNumberProps, RandomNumberState> {
  state = {
    randomNumber: 0,
  };

  componentDidMount() {
    const newNumber = this.generateRandomNumber();

    this.setState({ randomNumber: newNumber, });

    document.title = `${newNumber}`;
  }
  
  componentDidUpdate() {
    const { randomNumber } = this.state;

    document.title = `${ randomNumber }`;
  }
  
  componentWillUnmount() {

    document.title = '?' ;
  }

  generateRandomNumber = () => {
    const { max } = this.props;
    return Math.floor(Math.random() * max) + 1;
  };

  handleClick = () => {
    const newNumber = this.generateRandomNumber();

    this.setState({
      randomNumber: newNumber,
    });
  };

  render() {
    const { randomNumber } = this.state;

    return (
      <>
        <h1>{randomNumber}</h1>
        <button onClick={this.handleClick}>Generate</button>
      </>
    );
  }
}

export default RandomNumber;
