import { useState } from 'react'
import './App.css'
import { Dispatch } from './types';
import { useDispatch } from 'react-redux';
import { fetchCharacter } from './redux/actions';
import CharacterCard from './components/CharacterCard';

function App() {
  const [character, setCharacter] = useState('');
  const dispatch: Dispatch = useDispatch();

  return (
    <>
    <div>
      <input 
        type="text"
        onChange={ ( { target }: React.ChangeEvent<HTMLInputElement>,) => setCharacter(target.value)} 
        value={ character }
        placeholder='Character Name'
      />
      <button onClick={ () => dispatch(fetchCharacter(character))}>
        Search
      </button>
    </div>
      <CharacterCard />
    </>
  )
}

export default App
