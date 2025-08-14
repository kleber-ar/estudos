export type Signals = 'red' | 'yellow' | 'green';

export type TrafficSignalState = {
  color: Signals;
};

export type CarsState = {
  redCar: boolean;
  blueCar: boolean;
  yellowCar: boolean;
};

export type ReduxState = { // lembre de alterar com os nomes do seu combineReducers
  trafficSignalReducer: TrafficSignalState;
  carsReducer: CarsState;
};

export type Cars = 'redCar' | 'blueCar' | 'yellowCar';

export type ActionType = {
  type:string,
  payload:{ car: Cars }
};
