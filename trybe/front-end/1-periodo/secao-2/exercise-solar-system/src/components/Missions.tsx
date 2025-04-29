import Title from "./Title";
import MissionCard from "./MissionCard";
import missions from "../data/missions";

function Missions() {
  return (
    <div data-testid="missions" className="missions">
      <Title headline="MISSÕES" />
      <div className="mission-list">
        {missions.map((mission) => (
          <MissionCard
            key={mission.name}
            name={mission.name}
            year={mission.year}
            country={mission.country}
            destination={mission.destination}
          />
        ))}
      </div>
    </div>
  );
}

export default Missions;
