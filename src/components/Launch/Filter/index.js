import React from "react";
import PropTypes from "prop-types";
import { YEARS } from "../../../constants";

const Filter = ({ filters, setFilters }) => (
  <div className="filter">
    <div className="filterWrapper">
      <h3>Filters</h3>
      <div className="filterLabel">Launch Year</div>
      <hr />
      <div className="filters">
        {YEARS
          .map((item, i) => (
            <button
              type="button"
              onClick={() => {
                setFilters({ ...filters, ...{ launch_year: item } });
              }}
              aria-label={(item).toString()}
              className={`filterItem ${parseInt(filters.launch_year) === item ? "selected" : ""
                }`}
              key={`year-${i}`}>
              {item}
            </button>
          ))}
      </div>
    </div>
    <div className="filterWrapper">
      <div className="filterLabel">Successful Launch</div>
      <hr />
      <div className="filters">
        <button
          type="button"
          className={`filterItem ${filters.launch_success === "true" || filters.launch_success === true
            ? "selected"
            : ""
            }`}
          aria-label="launch-true"
          onClick={() => {
            setFilters({ ...filters, ...{ launch_success: true } });
          }}>
          True
          </button>
        <button
          type="button"
          className={`filterItem ${filters.launch_success === false ||
            filters.launch_success === "false"
            ? "selected"
            : ""
            }`}
          aria-label="launch-false"
          onClick={() => {
            setFilters({ ...filters, ...{ launch_success: false } });
          }}>
          False
          </button>
      </div>
    </div>
    <div className="filterWrapper">
      <div className="filterLabel">Successful Landing</div>
      <hr />
      <div className="filters">
        <button
          type="button"
          className={`filterItem ${filters.land_success === "true" || filters.land_success === true
            ? "selected"
            : ""
            }`}
          aria-label="land-true"
          onClick={() => {
            setFilters({ ...filters, ...{ land_success: true } });
          }}>
          True
          </button>
        <button
          type="button"
          className={`filterItem ${filters.land_success === false || filters.land_success === "false"
            ? "selected"
            : ""
            }`}
          aria-label="land-false"
          onClick={() => {
            setFilters({ ...filters, ...{ land_success: false } });
          }}>
          False
          </button>
      </div>
      <div className="filterReset">
        <button
          type="button"
          className="filterItem"
          aria-label="reset"
          onClick={() => {
            setFilters({ limit: 100 });
          }}>
          Reset
          </button>
      </div>
    </div>
  </div>
);

Filter.propTypes = {
  filters: PropTypes.shape({
    launch_year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    land_success: PropTypes.PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    launch_success: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }),
  setFilters: PropTypes.func,
};

export default Filter;
