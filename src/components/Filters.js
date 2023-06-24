import React from 'react';

const Filters = ({
  searchTerm,
  handleSearchTermChange,
  selectedGenre,
  handleGenreFilter,
  handleSearch
}) => {
  return (
    <div className="filters">
      <input
        className="boxSearch"
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Buscar por título ou gênero"
      />
    </div>
  );
};

export default Filters;
