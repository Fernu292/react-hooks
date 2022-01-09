import React from 'react';

const Search = ({search, searchInput, handleSearch}) => {
    return (
        <div>
            <input
                type='text'
                value={search}
                onChange={handleSearch}
                ref={searchInput}
            />
        </div>
    );
}

export default Search;