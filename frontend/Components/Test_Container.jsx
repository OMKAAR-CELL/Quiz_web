import React from 'react'
import TestBoxCreator from './TestBoxCreator'

const Test_Container = () => {

  return (
    <div className="bg-white w-full rounded-2xl shadow-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TestBoxCreator testName="Mathematics Test" totalattempts="120" rating="4.5" difficultyranking="Medium"/>
        </div>
    </div>
  )
}

export default Test_Container