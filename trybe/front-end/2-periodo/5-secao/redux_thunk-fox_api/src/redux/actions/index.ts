import type { Dispatch } from '../../types.ts'


export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (image: string) => ({
  type: GET_PICTURE,
  payload: image,
});

export function fetchAPI() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://randomfox.ca/floof/');
      const data = await response.json();
      dispatch(getPicture(data.image));
    } catch (error) {
      console.error(error)
    }
  };
}
