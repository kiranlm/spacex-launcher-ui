// Base url
import fetch from "node-fetch"

const url = "https://api.spacexdata.com/v3/launches";

/**
 * SpaceX detail API call using fetch
 *
 * @param {String} query | query containing filter details
 *
 * @returns {Promise} | returns API response as promise
 */
export function getSpacexData(query) {
  return fetch(
    `${url}${query.trim() !== "" ? query : ""}`
  ).then((response) => response.json());
}
