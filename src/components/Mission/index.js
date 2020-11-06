import React from "react";
/**
 *
 * @param {Object} props | contains mission details
 */
const Mission = (props) => {
  // Individial mission details
  const { mission } = props;
  return (
    <div className="mission">
      <div className="misionDetails">
        <div className="imageContainer">
          <img src={mission.links && mission.links.mission_patch_small} />
        </div>
        <a>
          {mission.mission_name} #{mission.flight_number}
        </a>
        <div>Mission Ids:</div>
        <ul>
          {mission.mission_id &&
          Array.isArray(mission.mission_id) &&
          mission.mission_id.length ? (
            mission.mission_id.map((item, key) => (
              <li key={`mission-id-${key}`}>{item}</li>
            ))
          ) : (
            <span>N/A</span>
          )}
        </ul>
        <div>
          Launch Year: <span>{mission.launch_year}</span>
        </div>
        <div>
          Successful Launch:{" "}
          <span>{Boolean(mission.launch_success).toString()}</span>
        </div>
        <div>
          Successful Landing:{" "}
          <span>
            {Boolean(
              mission.rocket &&
                mission.rocket.first_stage &&
                mission.rocket.first_stage.cores &&
                Array.isArray(mission.rocket.first_stage.cores) &&
                mission.rocket.first_stage.cores.find(
                  (item) => item.land_success
                )
            ).toString()}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Mission;
