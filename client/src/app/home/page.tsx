'use client';

import { useState } from 'react';

export default function HomePage() {
  const [expenses] = useState([
    { id: 1, amount: 500, category: 'Food', date: '2025-08-27', description: 'Lunch at restaurant' },
    { id: 2, amount: 1200, category: 'Transport', date: '2025-08-26', description: 'Uber ride' },
    { id: 3, amount: 300, category: 'Shopping', date: '2025-08-25', description: 'Groceries' },
    { id: 4, amount: 800, category: 'Entertainment', date: '2025-08-24', description: 'Movie tickets' },
    { id: 5, amount: 2500, category: 'Bills', date: '2025-08-23', description: 'Electricity bill' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">HisabKitab</h1>
            <div className="flex items-center space-x-4">
              <a href="/dashboard" className="text-blue-600 hover:text-blue-800">Dashboard</a>
              <a href="/expenses" className="text-blue-600 hover:text-blue-800">Expenses</a>
              <button className="text-red-600 hover:text-red-800">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Grid - Calendar/Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-green-600">₹5,300</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Expenses</p>
                  <p className="text-lg font-semibold">₹25,400</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Categories</p>
                  <p className="text-lg font-semibold">8</p>
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div className="mt-6 bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Info</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Track your daily expenses</p>
                <p>• Categorize spending</p>
                <p>• View detailed reports</p>
                <p>• Set budget goals</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Recent Expenses</h2>
                <a 
                  href="/expenses"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <span className="mr-2">+</span>
                  Add Expense
                </a>
              </div>
              
              <div className="p-6">
                <div className="grid gap-4">
                  {expenses.map((expense) => (
                    <div key={expense.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900">{expense.description}</h3>
                          <p className="text-sm text-gray-600">{expense.category}</p>
                          <p className="text-sm text-gray-500">{expense.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-red-600">₹{expense.amount}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
