import { Dispatch } from '../types';
import randomNumber from '../utils/randomNumber';

export const GET_IMAGE = 'GET_IMAGE';
export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const GET_NAME = 'GET_NAME';
export const FAILED_REQUEST = 'FAILED_REQUEST';

function getImage(json: { sprites: { front_default: string } }) {
  return { type: GET_IMAGE, payload: json.sprites.front_default };
}

function getName(json: { name: string }) {
  return { type: GET_NAME, payload: json.name };
}

function requestPokemon() {
  return { type: REQUEST_IMAGE };
}

function failedRequest(error: string) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchPokemon() {
  return (dispatch: Dispatch) => {
    dispatch(requestPokemon());
    return fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}/`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(getImage(json));
        dispatch(getName(json));
      })
      .catch((error) => dispatch(failedRequest(error)));
  };
}
