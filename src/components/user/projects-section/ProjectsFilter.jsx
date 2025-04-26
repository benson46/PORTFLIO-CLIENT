import { useState } from 'react';
import { motion } from 'framer-motion';

const filters = ["All", "Web", "Mobile", "Full Stack"];

export const ProjectsFilter = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleFilter(filter)}
          className={`px-5 py-2 rounded-full transition-colors ${
            activeFilter === filter
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
};