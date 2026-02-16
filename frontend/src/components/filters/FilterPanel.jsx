import { useContext } from "react";
import { FiltersContext } from "../../context/FiltersContext";

function FilterPanel() {
  const { filters, setFilters } = useContext(FiltersContext);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="filters">
      <h3>Filters</h3>

      <label>
        <input
          type="checkbox"
          name="remote"
          checked={filters.remote}
          onChange={handleChange}
        />
        Remote
      </label>

      <label>
        <input
          type="checkbox"
          name="fullTime"
          checked={filters.fullTime}
          onChange={handleChange}
        />
        Full Time
      </label>

      <label>
        <input
          type="checkbox"
          name="internship"
          checked={filters.internship}
          onChange={handleChange}
        />
        Internship
      </label>
    </div>
  );
}

export default FilterPanel;
