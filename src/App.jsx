import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MemeCard from './components/MemeCard'

const App = () => {
  // State to store all memes fetched from API
  const [allMemes, setAllMemes] = useState([])
  
  // State to store filtered memes based on search
  const [filteredMemes, setFilteredMemes] = useState([])
  
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('')
  
  // State to track loading status
  const [isLoading, setIsLoading] = useState(true)
  
  // State to track error status
  const [error, setError] = useState(null)

  // useEffect hook to fetch memes when component mounts
  useEffect(() => {
    fetchMemes()
  }, [])

  // Function to fetch memes from API
  const fetchMemes = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      // API endpoint to get all memes
      const response = await fetch('https://api.imgflip.com/get_memes')
      const data = await response.json()
      
      // Check if API request was successful
      if (data.success) {
        setAllMemes(data.data.memes)
        setFilteredMemes(data.data.memes)
      } else {
        setError('Failed to fetch memes')
      }
    } catch (err) {
      setError('Error fetching memes: ' + err.message)
    } finally {
      setIsLoading(false)
    }
  }

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query)
    
    if (query.trim() === '') {
      // If search is empty, show all memes
      setFilteredMemes(allMemes)
    } else {
      // Filter memes based on search query
      const filtered = allMemes.filter(meme =>
        meme.name.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredMemes(filtered)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
          Meme Search
        </h1>
        
        {/* Search Bar Component */}
        <SearchBar 
          searchQuery={searchQuery}
          onSearch={handleSearch}
        />
        
        {/* Loading State */}
        {isLoading && (
          <div className="text-center text-gray-600 text-xl mt-8">
            Loading memes...
          </div>
        )}
        
        {/* Error State */}
        {error && (
          <div className="text-center text-red-600 text-xl mt-8">
            {error}
          </div>
        )}
        
        {/* Meme Cards Grid */}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
            {filteredMemes.length > 0 ? (
              filteredMemes.map(meme => (
                <MemeCard key={meme.id} meme={meme} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-600 text-xl">
                No memes found for "{searchQuery}"
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
