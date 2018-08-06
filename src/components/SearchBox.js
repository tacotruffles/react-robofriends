import React from 'react';

const SearchBox = props => {
  const { filter } = props;
  return (
    <div>
      <input
        className="pa3 mt4 mb4 ba b--green bg-lightest-blue"
        type="text"
        placeholder="Search..."
        onChange={filter}
        aria-label="Search Robots"
      />
    </div>
  );
};

export default SearchBox;
