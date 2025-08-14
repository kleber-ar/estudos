import { useDispatch, useSelector } from "react-redux";
import blueCarImg from "./images/carBlue.png";
import redCarImg from "./images/carRed.png";
import yellowCarImg from "./images/carYellow.png";
import { ReduxState } from "./types";
import { moveCar } from "./redux/actions";

function Cars() {
  const { redCar, blueCar, yellowCar } = useSelector(
    (state: ReduxState) => state
  ); // Use um hook para buscar os dados do do estado global

  // Você deve usar um hook para criar o dispatch também 👀;
  const dispatch = useDispatch();

  return (
    <main className="cars-container">
      <h1>Clique nos carros para movê-los!</h1>
      <section className="road">
        <button
          className={`car-button car-${redCar ? "right" : "left"}`}
          onClick={() => dispatch(moveCar("redCar"))}
          type="button"
        >
          <img src={redCarImg} alt="red car" />
        </button>
      </section>
      <section className="road">
        <button
          className={`car-button car-${blueCar ? "right" : "left"}`}
          onClick={() => dispatch(moveCar("blueCar"))}
          type="button"
        >
          <img src={blueCarImg} alt="blue car" />
        </button>
      </section>
      <section className="road">
        <button
          className={`car-button car-${yellowCar ? "right" : "left"}`}
          onClick={() => dispatch(moveCar("yellowCar"))}
          type="button"
        >
          <img src={yellowCarImg} alt="yellow car" />
        </button>
      </section>
    </main>
  );
}

export default Cars;
