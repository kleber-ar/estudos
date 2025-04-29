import Title from "./Title";
import PlanetCard from "./PlanetCard";
import planets from "../data/planets";

function SolarSystem() {
  return (
    <div data-testid="solar-system" className="solar-system">
      <Title headline="Planetas" />
      <div className="line"></div>
      <div className="planet-list">
        {planets.map((planet) => (
          <PlanetCard
            key={planet.name}
            planetImage={planet.image}
            planetName={planet.name}
          />
        ))}
      </div>
    </div>
  );
}

export default SolarSystem;
