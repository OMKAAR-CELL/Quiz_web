import React from "react";

const MainBox = () => {
  const title = "Create your Test Now!!";
  const subtitle = "Design engaging assessments with multiple choice questions, timers, and instant results";
  const ActionButtonText = "Create Now";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="flex-1 p-10 md:p-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {subtitle}
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              {ActionButtonText}
            </button>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                ⏱️ Timed Tests
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                ✓ Auto-Grading
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                📊 Analytics
              </span>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1 p-10 md:p-16 flex items-center justify-center">
            <img
              src="hero.png"
              alt="Test creation illustration showing clipboard with test, alarm clock, books, and graduation cap"
              className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBox;