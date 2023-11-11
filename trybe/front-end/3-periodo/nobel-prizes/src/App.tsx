import { Component } from 'react'
import './App.css'
import Header from './components/Header'
import NobelPrize from './components/NobelPrize';
import { NobelPrizeType } from './types';

interface State {
  nobelPrizes: NobelPrizeType[];
}

class App extends Component {
  state: State = {
    nobelPrizes: [],
  };

  componentDidMount() {
    fetch('https://api.nobelprize.org/2.1/nobelPrizes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ nobelPrizes: data.prizes });
      })
      .catch((error) => {
        console.error('Error fetching Nobel Prize data:', error);
      });
  }
  
  render(){
    const { nobelPrizes } = this.state;

    return (
      <>
      <div className='App'>
        <Header />
        {nobelPrizes ? (
          nobelPrizes.map((prize, index) => (
            <NobelPrize key={ index } prizeInfo={ prize } />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      </>
    );

  }
}

export default App;

