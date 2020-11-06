import React from "react";

const Filter = ({ filters, setFilters }) => {
  console.log(filters);
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
                className={`filterItem ${
                  filters.launchYear === 2006 + i ? "selected" : ""
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
            className={`filterItem ${filters.launchSuccess ? "selected" : ""}`}
            onClick={() => {
              setFilters({ ...filters, ...{ launchSuccess: true } });
            }}>
            True
          </button>
          <button
            className={`filterItem ${
              filters.launchSuccess === false ? "selected" : ""
            }`}
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
            className={`filterItem ${filters.landSuccess ? "selected" : ""}`}
            onClick={() => {
              setFilters({ ...filters, ...{ landSuccess: true } });
            }}>
            True
          </button>
          <button
            className={`filterItem ${
              filters.landSuccess === false ? "selected" : ""
            }`}
            onClick={() => {
              setFilters({ ...filters, ...{ landSuccess: false } });
            }}>
            False
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
