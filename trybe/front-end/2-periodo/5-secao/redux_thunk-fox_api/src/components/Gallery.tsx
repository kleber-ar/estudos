import { useSelector } from "react-redux";
import type { ReduxState } from "../types";


function Gallery() {
  const rootState = useSelector((state: ReduxState) => state);

  const defaultCat =
    'https://content-assets.betrybe.com/prod/eb34a38d-a37f-43ca-9def-1575752cf6b2-cat-img-thunk.gif';

  return (
    <div className="gallery-container">
      {rootState.isLoading && <div>Loading...</div>}
      {rootState.useDefaultImg && <img src={defaultCat} alt="default fox" />}
      {!rootState.isLoading && !rootState.useDefaultImg && (
        <img src={rootState.imgURL} alt="random fox" />
      )}
    </div>
  );
}

export default Gallery;
