export type ReduxState = {
  redCar: boolean;
  blueCar: boolean;
  yellowCar: boolean;
};

export type Cars = 'redCar' | 'blueCar' | 'yellowCar';

export type ActionType = {
  type:string,
  payload:{ car: Cars }
};
