export const ADD_PROFESSIONAL_DATA = "ADD_PROFESSIONAL_DATA";

export const addProfessionalData = (payload: {
  resume: string;
  role: string;
  description: string;
}) => ({
  type: ADD_PROFESSIONAL_DATA,
  payload,
});
