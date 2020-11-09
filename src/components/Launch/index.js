import React, { useEffect, useRef, useState } from "react";
import loadable from "@loadable/component";
import { getSpacexData } from "../../services/api";
import { getQueryParams, makeQueryString } from "../../helpers";
import { history } from "../Main";
import Loading from "../Loading";

const Mission = loadable(() => import("../Mission"), { ssr: true });
const Filter = loadable(() => import("../Filter"), { ssr: true });

const Launch = () => {
  // Query params from url
  const queryParams = getQueryParams();
  let initialFilters = {
    limit: null,
    launchYear: null,
    launchSuccess: null,
    landSuccess: null,
    ...queryParams,
  };

  // states
  const [spacexData, setSpacexData] = useState([]); // API data holds in this state
  const [loading, setLoading] = useState(false); // loading indication
  // Filters
  const [filters, setFilters] = useState(initialFilters);
  useEffect(() => {
    // window.__SPACEX_DATA__ will contain initial data from server as stringified format
    // If data then it takes else get from API call
    if (window.__SPACEX_DATA__) {
      setSpacexData(window.__SPACEX_DATA__);
    } else {
      const query = makeQueryString({ ...filters, ...{ limit: 100 } });
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
  const useEffectExceptOnMount = (effect, dependencies) => {
    const mounted = useRef(false);
    useEffect(() => {
      if (mounted.current) {
        const unmount = effect();
        return () => unmount && unmount();
      } else {
        mounted.current = true;
      }
    }, dependencies);

    // Reset on unmount for the next mount.
    useEffect(() => {
      return () => (mounted.current = false);
    }, []);
  };
  useEffectExceptOnMount(() => {
    // Call only if filters are not null
    if (
      filters.limit !== null ||
      filters.landSuccess !== null ||
      filters.launchSuccess !== null ||
      filters.launchYear !== null
    ) {
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
      <div className="missionContainer">
        {spacexData && spacexData.length
          ? spacexData.map((item, key) => (
              <Mission key={`mission-${key}`} mission={item} />
            ))
          : !loading && <h3 className="noDataMessage">Not enough data !</h3>}
      </div>
    </div>
  );
};

export default Launch;
