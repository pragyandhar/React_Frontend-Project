import React from 'react'

// SearchBar component that handles user input for searching memes
const SearchBar = ({ searchQuery, onSearch }) => {
  
  // Function to handle input changes
  const handleInputChange = (e) => {
    onSearch(e.target.value)
  }

  // Function to handle search button click
  const handleSearchClick = () => {
    // Search is already handled by input onChange
    // This function can be used for additional actions if needed
  }

  return (
    <div className="flex justify-center items-center mb-8">
      {/* Search input container */}
      <div className="flex w-full max-w-3xl">
        {/* Input field */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search for memes (e.g., Two Buttons, Distracted Boyfriend, Running Away Balloon)"
          className="flex-1 px-6 py-4 text-lg rounded-l-xl border-2 border-gray-300 focus:outline-none focus:border-gray-400 bg-white/80 backdrop-blur-sm"
        />
        
        {/* Search button */}
        <button
          onClick={handleSearchClick}
          className="px-8 py-4 bg-gray-800 text-white rounded-r-xl hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
        >
          {/* Search icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SearchBar
