/**
 * Creates querystring from object
 *
 * @param {Object} filters | Object containing filters
 *
 * @returns {String} | Query string
 */
export function makeQueryString(filters) {
  let filterString = "";
  Object.keys(filters).forEach(key => {
    if (filters[key] !== null) {
      if (filterString !== "") {
        filterString += "&";
      }
      filterString +=
        `${key}=${encodeURIComponent(filters[key])}`;
    }
  });
  return `?${filterString}`;
}

/**
 * @returns {Object} | Query object for filter
 * To get query string from window object, it will convert to object for filter
 */
export function getQueryParams() {
  const result = {};
  const params = (window.location.search.split("?")[1] || "").split("&");
  Object.keys(params).forEach(param => {
    if (Object.prototype.hasOwnProperty.call(params, param)) {
      const paramParts = params[param].split("=");
      if (paramParts[0]) {
        result[paramParts[0]] = decodeURIComponent(paramParts[1] || "");
      }
    }
  });
  return result;
}
