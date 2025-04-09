import React, { useState } from 'react';
import styles from '../styles/FilterSort.module.css'; 

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("RECOMMENDED");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelected(option);
    setIsOpen(false);
    // Apply sorting logic here...
  };

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH"
  ];

  return (
    <div className={styles.sortDropdown}>
      <button className={styles.sortButton} onClick={toggleDropdown}>
        {selected}
      </button>
      {isOpen && (
        <div className={styles.sortOptions}>
          {options.map((opt) => (
            <div
              key={opt}
              className={`${styles.sortOption} ${selected === opt ? styles.selected : ''}`}
              onClick={() => selectOption(opt)}
            >
              {opt}
              {selected === opt && <span className={styles.checkIcon}>✔</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
