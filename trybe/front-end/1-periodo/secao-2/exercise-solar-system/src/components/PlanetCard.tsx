type cardProps = {
  planetImage: string;
  planetName: string;
};

function PlanetCard(card: cardProps) {
  const { planetImage, planetName } = card;

  return (
    <div data-testid="planet-card" className="planet-card">
      <img src={planetImage} alt={`Planeta ${planetName}`} />
      <p data-testid="planet-name">{planetName}</p>
    </div>
  );
}

export default PlanetCard;
