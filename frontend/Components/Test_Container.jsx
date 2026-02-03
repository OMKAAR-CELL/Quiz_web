"use client"
import React, { useState } from 'react'
import TestBoxCreator from './TestBoxCreator'

const Test_Container = () => {
  const [showCount, setShowCount] = useState(4)
  
  // Mock data - replace with your actual test data
  const allTests = Array(20).fill(null).map((_, index) => ({
    testName: "Mathematics Test",
    totalattempts: "120",
    rating: "4.5",
    difficultyranking: "Medium",
    id: index
  }))

  const displayedTests = allTests.slice(0, showCount)

  const handleSeeMore = () => {
    setShowCount(16)
  }

  const handleSeeAll = () => {
    // Option A: Navigate using window.location
    window.location.href = '/all-tests'
    
    // Option B: Or call a parent component function
    // props.onSeeAll()
  }

  return (
    <div className="bg-white w-full rounded-2xl shadow-2xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedTests.map((test, index) => (
          <TestBoxCreator 
            key={test.id}
            testName={test.testName}
            totalattempts={test.totalattempts}
            rating={test.rating}
            difficultyranking={test.difficultyranking}
          />
        ))}
      </div>
      
      {/* Button Container */}
      <div className="flex justify-center gap-4 mt-8">
        {showCount === 4 && allTests.length > 4 && (
          <button 
            onClick={handleSeeMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            See More
          </button>
        )}
        
        {showCount === 16 && allTests.length > 16 && (
          <button 
            onClick={handleSeeAll}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            See All
          </button>
        )}
      </div>
    </div>
  )
}

export default Test_Container