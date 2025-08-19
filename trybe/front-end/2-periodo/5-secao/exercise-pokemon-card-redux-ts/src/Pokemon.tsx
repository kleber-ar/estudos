import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Logo from './assets/pokemon-logo.png';
import NextPokemon from './assets/next.png';
import { fetchPokemon } from './actions';
import { Dispatch, ReduxState } from './types';

function Pokemon() {
  const { name, src, isFetching } = useSelector((state: ReduxState) => ({
    name: state.reducer.name,
    src: state.reducer.imagePath,
    isFetching: state.reducer.isFetching,
  }));

  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  return (
    isFetching ? <span className="loading">Loading...</span>
      : (
        <div className="poke-container">
          <img className="logo" src={ Logo } alt="logo" />
          <div className="pokemon">
            <span data-testid="pokemon-name">{ name }</span>
            <img className="img-container" src={ src } alt="pokemon" />
            <button
              onClick={ () => dispatch(fetchPokemon()) }
              type="button"
              className="button"
            >
              <img className="next-pokemon" src={ NextPokemon } alt="next-pokemon" />
            </button>
          </div>
        </div>
      )
  );
}

export default Pokemon;
