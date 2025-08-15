export const ADD_PERSONAL_DATA = "ADD_PERSONAL_DATA";

export const addPersonalData = (payload: {
  name: string;
  email: string;
  cpf: string;
  address: string;
  city: string;
  uf: string;
}) => ({
  type: ADD_PERSONAL_DATA,
  payload,
});
