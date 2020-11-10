import React, { useEffect, useRef, useState } from "react";
import loadable from "@loadable/component";
import { useSelector, useDispatch } from "react-redux";
import { getQueryParams, makeQueryString } from "../../helpers";
import { history } from "../Main";
import Loading from "./Loading";
import { getSpacexAction } from "../../redux/actions";

const Footer = loadable(() => import("./Footer"), { ssr: true });
const Mission = loadable(() => import("./Mission"), { ssr: true });
const Filter = loadable(() => import("./Filter"), { ssr: true });

const Launch = () => {
  // Query params from url
  const queryParams = getQueryParams();
  const initialFilters = {
    limit: null,
    launch_year: null,
    launch_success: null,
    land_success: null,
    ...queryParams,
  };

  // redux data, initiallt we will use server data from window and remove it from window
  const { spacexData = window.__SPACEX_DATA__,loading } = useSelector((state) => state);
  delete window.__SPACEX_DATA__;
  // filter state
  const [filters, setFilters] = useState(initialFilters);

  const dispatch = useDispatch();


  useEffect(() => {
    // If no data, then call API
    if (!spacexData) {
      const query = makeQueryString({ ...filters, ...{ limit: 100 } });
      dispatch(getSpacexAction(query))
    }
  }, []); //eslint-disable-line
  // On changing filter, trigger API call
  const useEffectExceptOnMount = (effect, dependencies) => {
    const mounted = useRef(false);
    useEffect(() => {
      if (!mounted.current) {
        mounted.current = true;
      } else {
        const unmount = effect();
        return () => unmount && unmount();
      }
    }, dependencies); //eslint-disable-line

    // Reset on unmount for the next mount.
    useEffect(() => () => (mounted.current = false), []);
  };
  useEffectExceptOnMount(() => {
    // Call only if filters are not null
    if (
      filters.limit !== null ||
      filters.land_success !== null ||
      filters.launch_success !== null ||
      filters.launch_year !== null
    ) {
      const query = makeQueryString(filters);
      history.push({
        pathname: "/",
        search: query,
      });
      dispatch(getSpacexAction(query))
    }
  }, [filters]);

  return (
    <>
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
    <Footer />
    </>
  );
};

export default Launch;
