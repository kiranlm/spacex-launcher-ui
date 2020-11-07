import React from "react";

const Filter = ({ filters, setFilters }) => {
  return (
    <div className="filter">
      <div className="filterWrapper">
        <div className="filterLabel">Launch Year</div>
        <hr />
        <div className="filters">
          {Array(15)
            .fill()
            .map((_, i) => (
              <button
                onClick={() => {
                  setFilters({ ...filters, ...{ launchYear: 2006 + i } });
                }}
                aria-label={2006 + i}
                className={`filterItem ${
                  parseInt(filters.launchYear) === 2006 + i ? "selected" : ""
                }`}
                key={`year-${i}`}>
                {2006 + i}
              </button>
            ))}
        </div>
      </div>
      <div className="filterWrapper">
        <div className="filterLabel">Successful Launch</div>
        <hr />
        <div className="filters">
          <button
            className={`filterItem ${
              filters.launchSuccess === "true" || filters.launchSuccess === true
                ? "selected"
                : ""
            }`}
            aria-label="True"
            onClick={() => {
              setFilters({ ...filters, ...{ launchSuccess: true } });
            }}>
            True
          </button>
          <button
            className={`filterItem ${
              filters.launchSuccess === false ||
              filters.launchSuccess === "false"
                ? "selected"
                : ""
            }`}
            aria-label="False"
            onClick={() => {
              setFilters({ ...filters, ...{ launchSuccess: false } });
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
            className={`filterItem ${
              filters.landSuccess === "true" || filters.landSuccess === true
                ? "selected"
                : ""
            }`}
            aria-label="True"
            onClick={() => {
              setFilters({ ...filters, ...{ landSuccess: true } });
            }}>
            True
          </button>
          <button
            className={`filterItem ${
              filters.landSuccess === false || filters.landSuccess === "false"
                ? "selected"
                : ""
            }`}
            aria-label="False"
            onClick={() => {
              setFilters({ ...filters, ...{ landSuccess: false } });
            }}>
            False
          </button>
        </div>
        <div className="filterReset">
          <button
            className="filterItem"
            aria-label="Reset"
            onClick={() => {
              setFilters({ limit: 100 });
            }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
