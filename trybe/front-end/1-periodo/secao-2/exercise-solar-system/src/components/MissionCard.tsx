type cardProps = {
  name: string;
  year: string;
  country: string;
  destination: string;
};

function MissionCard(mission: cardProps) {
  const { name, year, country, destination } = mission;

  return (
    <div data-testid="mission-card" className="mission-card">
      <div>
        <p data-testid="mission-name">{name}</p>
      </div>
      <div>
        <div>🗓️</div>
        <p data-testid="mission-year">{year}</p>
        <div>🗺️</div>
        <p data-testid="mission-country">{country}</p>
        <div>🏳️</div>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    </div>
  );
}

export default MissionCard;
