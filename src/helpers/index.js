/**
 * To convert camelcase string to snake case - for creating query string for API
 *
 * @param {String} key | String with camel case
 *
 * @returns {String} | string with snake case
 */
function camelToUnderscore(key) {
  let result = key.replace(/([A-Z])/g, " $1");
  return result.split(" ").join("_").toLowerCase();
}

/**
 * To convert snake case string to camel case - for creating query object for filters
 *
 * @param {String} key | String with snake case
 *
 * @returns {String} | string with camel case
 */
function UnderscoreToCamel(obj) {
  let newObj = {};
  for (let d in obj) {
    if (obj.hasOwnProperty(d)) {
      newObj[
        d.replace(/(\_\w)/g, function (k) {
          return k[1].toUpperCase();
        })
      ] = obj[d];
    }
  }
  return newObj;
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

/**
 * @returns {Object} | Query object for filter
 * To get query string from window object, it will convert to object for filter
 */
export function getQueryParams() {
  let result = {};
  let params = (window.location.search.split("?")[1] || "").split("&");
  for (let param in params) {
    if (params.hasOwnProperty(param)) {
      let paramParts = params[param].split("=");
      if (paramParts[0]) {
        result[paramParts[0]] = decodeURIComponent(paramParts[1] || "");
      }
    }
  }
  return UnderscoreToCamel(result);
}
