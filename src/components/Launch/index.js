import React, { useEffect, useState } from "react";
import { getSpacexData } from "../../services/api";
import { getQueryParams, makeQueryString } from "../../helpers";
import Filter from "../Filter";
import { history } from "../Main";
import Mission from "../Mission";
import Loading from "../Loading";

const Launch = () => {
  // Query params from url
  const queryParams = getQueryParams();
  let initialFilters = {
    limit: 100,
    launchYear: null,
    launchSuccess: null,
    landSuccess: null,
    ...queryParams,
  };
  // if (Object.keys(queryParams).length) {
  //   initialFilters = { ...initialFilters, ...queryParams };
  // }
  // states
  const [spacexData, setSpacexData] = useState([]); // API data holds in this state
  const [loading, setLoading] = useState(false); // loading indication
  // Filters
  const [filters, setFilters] = useState(initialFilters);
  useEffect(() => {
    // window.launchData will contain initial data from server as stringified format
    // If data then it takes else get from API call
    if (window.launchData) {
      try {
        const spacexDataFromServer = JSON.parse(window.launchData);
        setSpacexData(spacexDataFromServer);
      } catch (e) {
        console.log("Error", e);
      }
    } else {
      const query = makeQueryString(filters);
      setLoading(true);
      getSpacexData(query)
        .then((data) => {
          setSpacexData(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);
  // On changing filter, trigger API call
  useEffect(() => {
    // Call only if filters are not null
    if (filters.landSuccess || filters.launchSuccess || filters.launchYear) {
      const query = makeQueryString(filters);
      history.push({
        pathname: "/",
        search: query,
      });
      setLoading(true);
      getSpacexData(query)
        .then((data) => {
          setSpacexData(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [filters]);

  return (
    <div className="mainContainer">
      {loading && <Loading />}
      <div className="filterContainer">
        <Filter filters={filters} setFilters={setFilters} />
      </div>
      <div className="launchContainer">
        <div className="missionContainer">
          {spacexData && spacexData.length
            ? spacexData.map((item, key) => (
                <Mission key={`mission-${key}`} mission={item} />
              ))
            : !loading && <h3 className="noDataMessage">Not enough data !</h3>}
        </div>
      </div>
    </div>
  );
};

export default Launch;
