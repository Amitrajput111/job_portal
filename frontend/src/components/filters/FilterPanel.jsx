import { useContext } from "react";
import { FiltersContext } from "../../context/FiltersContext";
import "./FilterPanel.css";

function FilterPanel() {
  const { filters, setFilters } = useContext(FiltersContext);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const clearFilters = () => {
    setFilters({
      remote: false,
      fullTime: false,
      internship: false,
    });
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h3>Filters</h3>
        <button className="clear-btn" onClick={clearFilters}>Clear</button>
      </div>

      <div className="filter-section">
        <h4>Job Type</h4>
        <label className="filter-option">
          <input
            type="checkbox"
            name="fullTime"
            checked={filters.fullTime}
            onChange={handleChange}
          />
          <span>Full-time</span>
        </label>

        <label className="filter-option">
          <input
            type="checkbox"
            name="internship"
            checked={filters.internship}
            onChange={handleChange}
          />
          <span>Internship</span>
        </label>
      </div>

      <div className="filter-section">
        <h4>Work Mode</h4>
        <label className="filter-option">
          <input
            type="checkbox"
            name="remote"
            checked={filters.remote}
            onChange={handleChange}
          />
          <span>Remote</span>
        </label>
      </div>
    </div>
  );
}

export default FilterPanel;
