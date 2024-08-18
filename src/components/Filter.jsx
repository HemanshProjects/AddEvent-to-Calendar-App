import React from 'react';
import { useEvents } from '../context.js/EventContext';

const Filter = () => {
  const { setFilter } = useEvents();

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="filter-container">
      <label htmlFor="category-filter" className="block mb-2 text-lg font-medium text-gray-900">
        Filter by Category
      </label>
      <select
        id="category-filter"
        onChange={handleFilterChange}
        className="block w-full p-2 border border-gray-300 rounded"
      >
        <option value="All">All</option>
        <option value="Work">Office</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
    </div>
  );
};

export default Filter;
