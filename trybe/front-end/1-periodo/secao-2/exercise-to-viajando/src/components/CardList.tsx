import Card from "./Card";

function CardList() {
  return (
    <div className="card-list">
      <Card cityInfo={infoRioDeJaneiro} />
      <Card cityInfo={infoCidadeDoCabo} />
      <Card cityInfo={infoAcapulco} />
    </div>
  );
}

const infoRioDeJaneiro = {
  city: "Rio de Janeiro",
  country: "Brasil",
  imageUrl: "/src/assets/rio.webp",
  visited: true,
};

const infoCidadeDoCabo = {
  city: "Cidade do Cabo",
  country: "África do Sul",
  imageUrl: "/src/assets/cidade-do-cabo.webp",
  visited: true,
};

const infoAcapulco = {
  city: "Acapulco",
  country: "México",
  imageUrl: "/src/assets/acapulco.webp",
};

export default CardList;
