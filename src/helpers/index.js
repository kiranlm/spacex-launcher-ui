/**
 * To convert camelcase string to snake case - for creating query string for API
 *
 * @param {String} key | String with camel case
 *
 * @returns {String} | string with snake case
 */
function camelToUnderscore(key) {
  var result = key.replace(/([A-Z])/g, " $1");
  return result.split(" ").join("_").toLowerCase();
}

/**
 * Creates querystring from object
 *
 * @param {Object} filters | Object containing filters
 *
 * @returns {String} | Query string
 */
export function makeQueryString(filters) {
  let filterString = "";
  for (let key in filters) {
    if (filters[key] !== null) {
      if (filterString != "") {
        filterString += "&";
      }
      filterString +=
        camelToUnderscore(key) + "=" + encodeURIComponent(filters[key]);
    }
  }
  return filterString;
}
