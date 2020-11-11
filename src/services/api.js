// Base url
import fetch from "node-fetch"
import { API_URL } from "../constants";

/**
 * SpaceX detail API call using fetch
 *
 * @param {String} query | query containing filter details
 *
 * @returns {Promise} | returns API response as promise
 */
export function getSpacexData(query) {
  return fetch(
    `${API_URL}${query.trim() !== "" ? query : ""}`
  ).then((response) => response.json());
}
