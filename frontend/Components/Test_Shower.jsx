import React from "react";
import { TrendingUp, Users, Clock, Award } from "lucide-react";
import Test_Container from "./Test_Container";

const Test_Shower = () => {
  const stats = [
    {
      icon: TrendingUp,
      label: "Total Tests",
      value: "24",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      label: "Total Participants",
      value: "1,234",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Clock,
      label: "Avg. Completion Time",
      value: "12 min",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Award,
      label: "Average Score",
      value: "78%",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="w-full max-w-7xl m-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 px-4">
          Check how your tests are performing
        </h1>
        <div className="bg-white w-full rounded-2xl shadow-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className={`${stat.bgColor} p-4 rounded-full`}>
                    <Icon className={`${stat.color} w-8 h-8`} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">
                      {stat.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl m-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 px-4">
          Check how your tests are performing
        </h1>
        <Test_Container />
      </div>
    </div>
  );
};

export default Test_Shower;
