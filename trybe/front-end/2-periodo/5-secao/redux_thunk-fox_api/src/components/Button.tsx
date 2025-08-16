import type { Dispatch } from "../types.ts";
import { useDispatch } from "react-redux";
import { fetchAPI } from '../redux/actions/'


function Button() {
  const dispatch: Dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(fetchAPI())}>
      Find a fox!
    </button>
  );
}

export default Button;
