import React from "react";
import LazyImage from "./LazyImage";
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
          <LazyImage
            src={mission.links && mission.links.mission_patch_small}
            alt={`image-${mission.flight_number}`}
          />
        </div>
        <a>
          {mission.mission_name} #{mission.flight_number}
        </a>
        <div>Mission Ids:</div>

        {mission.mission_id &&
        Array.isArray(mission.mission_id) &&
        mission.mission_id.length ? (
          <ul>
            {mission.mission_id.map((item, key) => (
              <li key={`mission-id-${key}`}>{item}</li>
            ))}
          </ul>
        ) : (
          <span>N/A</span>
        )}

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
