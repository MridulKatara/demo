import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import SortDropdown from './SortDropdown';

const ProductHeader = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);

  return (
    <div className="product-header">
      <div className="product-header-controls">
        <span>3425 ITEMS</span>

        <button onClick={() => setShowFilter(prev => !prev)} className="filter-toggle">
          {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
        </button>

        <div className="sort-container">
          <button onClick={() => setShowSortOptions(prev => !prev)} className="sort-toggle">
            RECOMMENDED ▼
          </button>
          {showSortOptions && <SortDropdown />}
        </div>
      </div>

      <div className="content-section">
        {showFilter && <FilterSidebar />}
        {/* Product grid goes here */}
      </div>
    </div>
  );
};

export default ProductHeader;
