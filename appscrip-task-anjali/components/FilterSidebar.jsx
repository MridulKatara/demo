import { useState } from "react";
import styles from "../styles/FilterSort.module.css";

const filterOptions = {
  "IDEAL FOR": ["Men", "Women", "Baby & Kids"],
  "OCCASION": [],
  "WORK": [],
  "FABRIC": [],
  "SEGMENT": [],
  "SUITABLE FOR": [],
  "RAW MATERIALS": [],
  "PATTERN": [],
};

const FilterSidebar = () => {
  const [activeSection, setActiveSection] = useState("IDEAL FOR");
  const [selectedOptions, setSelectedOptions] = useState({
    "IDEAL FOR": [],
  });

  const handleToggle = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  const handleCheckboxChange = (section, option) => {
    const isSelected = selectedOptions[section]?.includes(option);
    const updated = isSelected
      ? selectedOptions[section].filter((opt) => opt !== option)
      : [...(selectedOptions[section] || []), option];

    setSelectedOptions({ ...selectedOptions, [section]: updated });
  };

  const handleUnselectAll = (section) => {
    setSelectedOptions({ ...selectedOptions, [section]: [] });
  };

  return (
    <aside className={styles.sidebar}>
      {Object.keys(filterOptions).map((section) => (
        <div key={section} className={styles.filterSection}>
          <div
            className={styles.sectionHeader}
            onClick={() => handleToggle(section)}
          >
            <input type="checkbox" readOnly />
            <span>{section}</span>
            <span className={styles.arrow}>{activeSection === section ? "▲" : "▼"}</span>
          </div>

          {activeSection === section && (
            <div className={styles.options}>
              {filterOptions[section].length > 0 ? (
                <>
                  <p className={styles.option}>All</p>
                  <p
                    className={styles.unselect}
                    onClick={() => handleUnselectAll(section)}
                  >
                    Unselect all
                  </p>
                  {filterOptions[section].map((option) => (
                    <label key={option} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={selectedOptions[section]?.includes(option)}
                        onChange={() => handleCheckboxChange(section, option)}
                      />
                      {option}
                    </label>
                  ))}
                </>
              ) : (
                <p className={styles.option}>All</p>
              )}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;
