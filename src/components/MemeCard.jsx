import React from 'react'

// MemeCard component to display individual meme information
const MemeCard = ({ meme }) => {
  
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
      {/* Meme Image */}
      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={meme.url}
          alt={meme.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Meme Information */}
      <div className="p-4">
        {/* Meme Name */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {meme.name}
        </h3>
        
        {/* Meme Dimensions */}
        <p className="text-sm text-gray-500">
          {meme.width} x {meme.height}
        </p>
        
        {/* Box Count Info */}
        {meme.box_count && (
          <p className="text-xs text-gray-400 mt-1">
            {meme.box_count} text box{meme.box_count !== 1 ? 'es' : ''}
          </p>
        )}
      </div>
    </div>
  )
}

export default MemeCard
