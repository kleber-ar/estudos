import axios from 'axios';

type Bread = {
  name: string,
  ingredients: string[],
  gluten: boolean,
};

type Flour = {
  brand: string,
  description: string,
  gluten: boolean,
};

const breads: Bread[] = [];
const flours: Flour[] = [];

async function fetchApi<ResponseType>(endpoint: string): Promise<ResponseType> {
  const { data } = await axios.get<ResponseType>(`http://localhost:3001/${endpoint}`);
  return data;
}

fetchApi<Bread[]>('breads');
fetchApi<Flour[]>('flours');

const newBread: Bread = {
  name: "Pão de banana",
  ingredients: ['farinha de aveia sem glúten', 'bananas maduras', 'nozes', 'ovos', 'mel'],
  gluten: false,
};

const newFlour: Flour = {
  brand: "Dona Benta",
  description: "Farinha de trigo enriquecida com ferro e ácido fólico.",
  gluten: true,
};

function addProducts<Type>(products: Type[], newProduct: Type): Type[] {
  return [...products, newProduct];
};

const bread = addProducts<Bread>(breads, newBread);

const flour = addProducts<Flour>(flours, newFlour);