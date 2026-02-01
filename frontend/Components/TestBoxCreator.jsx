import React from 'react'
import { Users, Star, TrendingUp } from 'lucide-react'

const TestBoxCreator = ({ testName, totalattempts, rating, difficultyranking }) => {
  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-700'
      case 'medium':
        return 'bg-amber-100 text-amber-700'
      case 'hard':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className='bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:border-green-200 transition-all duration-300 cursor-pointer'>
      {/* Header */}
      <div className='mb-4'>
        <h3 className='text-lg font-bold text-gray-800 mb-2'>{testName}</h3>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(difficultyranking)}`}>
          {difficultyranking}
        </span>
      </div>

      {/* Stats */}
      <div className='space-y-3'>
        {/* Attempts */}
        <div className='flex items-center gap-3'>
          <div className='bg-blue-50 p-2 rounded-lg'>
            <Users className='w-5 h-5 text-blue-600' />
          </div>
          <div>
            <p className='text-xs text-gray-500'>Total Attempts</p>
            <p className='text-sm font-semibold text-gray-800'>{totalattempts}</p>
          </div>
        </div>

        {/* Rating */}
        <div className='flex items-center gap-3'>
          <div className='bg-amber-50 p-2 rounded-lg'>
            <Star className='w-5 h-5 text-amber-600 fill-amber-600' />
          </div>
          <div>
            <p className='text-xs text-gray-500'>Rating</p>
            <p className='text-sm font-semibold text-gray-800'>{rating}/5.0</p>
          </div>
        </div>

        {/* Performance */}
        <div className='flex items-center gap-3'>
          <div className='bg-green-50 p-2 rounded-lg'>
            <TrendingUp className='w-5 h-5 text-green-600' />
          </div>
          <div>
            <p className='text-xs text-gray-500'>Performance</p>
            <p className='text-sm font-semibold text-gray-800'>Trending</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='mt-5 pt-4 border-t border-gray-100'>
        <button className='w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200'>
          View Details
        </button>
      </div>
    </div>
  )
}

export default TestBoxCreator