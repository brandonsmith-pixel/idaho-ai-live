"use client";

import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

export default function ROICalculator() {
  const [employees, setEmployees] = useState(10);
  const [hourlyWage, setHourlyWage] = useState(25);
  const [hoursWasted, setHoursWasted] = useState(10);

  const weeklyWaste = employees * hoursWasted * hourlyWage;
  const monthlyWaste = weeklyWaste * 4.33;
  const yearlyWaste = weeklyWaste * 52;
  const aiSavings = yearlyWaste * 0.8; // 80% efficiency gain
  const roi = ((aiSavings - 50000) / 50000 * 100).toFixed(0); // Assuming $50k investment

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-2xl shadow-xl">
      <div className="flex items-center space-x-3 mb-6">
        <Calculator className="w-8 h-8 text-blue-700" />
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          Calculate Your AI ROI
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Number of Employees
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-center mt-2 text-2xl font-bold text-blue-700">{employees}</div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Average Hourly Wage
          </label>
          <input
            type="range"
            min="15"
            max="100"
            value={hourlyWage}
            onChange={(e) => setHourlyWage(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-center mt-2 text-2xl font-bold text-blue-700">${hourlyWage}</div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Hours Wasted per Week
          </label>
          <input
            type="range"
            min="1"
            max="40"
            value={hoursWasted}
            onChange={(e) => setHoursWasted(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-center mt-2 text-2xl font-bold text-blue-700">{hoursWasted}h</div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Your Current Waste</h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-600">Weekly</p>
            <p className="text-2xl font-bold text-red-600">${weeklyWaste.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Monthly</p>
            <p className="text-2xl font-bold text-red-600">${monthlyWaste.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Yearly</p>
            <p className="text-2xl font-bold text-red-600">${yearlyWaste.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-500">
        <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
          With Idaho AI Automation
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">Annual Savings</p>
            <p className="text-3xl font-bold text-green-600">${aiSavings.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">First Year ROI</p>
            <p className="text-3xl font-bold text-blue-700">{roi}%</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition inline-flex items-center">
          <DollarSign className="w-5 h-5 mr-2" />
          Get Your Custom ROI Report
        </button>
        <p className="text-sm text-gray-600 mt-3">
          Free analysis • No obligations • Results in 24 hours
        </p>
      </div>
    </div>
  );
}