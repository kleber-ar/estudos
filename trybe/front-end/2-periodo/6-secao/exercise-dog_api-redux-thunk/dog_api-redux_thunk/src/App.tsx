import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Dispatch, ReduxState } from './types'
import { fetchDogImage } from './redux/actions';

function App() {
  const rootState = useSelector((state: ReduxState) => state)
  const dispatch: Dispatch = useDispatch();

  if (rootState.isFetching) return <p>Carregando...</p>;

  return (
    <>
    <div>
      <button onClick={ () => { dispatch(fetchDogImage()) } }>
        Random Doguinho
      </button>
    </div>
    {
      rootState.imageURL &&
        <img src={ rootState.imageURL } alt="AUAU!!" />
    }
    </>
  )
}

export default App
