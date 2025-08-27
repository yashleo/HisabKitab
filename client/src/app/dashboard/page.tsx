'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState('month');

  const stats = {
    totalExpenses: 25400,
    monthlyExpenses: 5300,
    categoriesCount: 8,
    avgDaily: 176,
    topCategory: 'Food',
    lastExpense: 'Restaurant meal - ₹500'
  };

  const categoryData = [
    { name: 'Food', amount: 8500, percentage: 33, color: 'bg-red-500' },
    { name: 'Transport', amount: 4200, percentage: 17, color: 'bg-blue-500' },
    { name: 'Shopping', amount: 3800, percentage: 15, color: 'bg-green-500' },
    { name: 'Bills', amount: 3200, percentage: 13, color: 'bg-yellow-500' },
    { name: 'Entertainment', amount: 2700, percentage: 11, color: 'bg-purple-500' },
    { name: 'Other', amount: 3000, percentage: 11, color: 'bg-gray-500' },
  ];

  const recentTransactions = [
    { id: 1, description: 'Coffee Shop', amount: 150, category: 'Food', date: '2025-08-27' },
    { id: 2, description: 'Uber Ride', amount: 200, category: 'Transport', date: '2025-08-27' },
    { id: 3, description: 'Grocery Store', amount: 800, category: 'Shopping', date: '2025-08-26' },
    { id: 4, description: 'Movie Tickets', amount: 600, category: 'Entertainment', date: '2025-08-26' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <a href="/home" className="text-blue-600 hover:text-blue-800">Home</a>
              <a href="/expenses" className="text-blue-600 hover:text-blue-800">Expenses</a>
              <button className="text-red-600 hover:text-red-800">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Time Range Selector */}
        <div className="mb-6">
          <div className="flex space-x-2">
            {['week', 'month', 'year'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg capitalize ${
                  timeRange === range
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Expenses - Large Card */}
          <div className="lg:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
            <h2 className="text-lg font-medium mb-2">Total Expenses</h2>
            <p className="text-3xl font-bold">₹{stats.totalExpenses.toLocaleString()}</p>
            <p className="text-blue-100 mt-2">+12% from last month</p>
          </div>

          {/* Monthly Expenses */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-600 mb-2">This Month</h3>
            <p className="text-2xl font-bold text-green-600">₹{stats.monthlyExpenses.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">Target: ₹6,000</p>
          </div>

          {/* Categories Count */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Categories</h3>
            <p className="text-2xl font-bold text-purple-600">{stats.categoriesCount}</p>
            <p className="text-xs text-gray-500 mt-1">Active categories</p>
          </div>

          {/* Category Breakdown - Large Card */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Spending by Category</h3>
            <div className="space-y-3">
              {categoryData.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">₹{category.amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">{category.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Average Daily */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Daily Average</h3>
            <p className="text-2xl font-bold text-orange-600">₹{stats.avgDaily}</p>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </div>

          {/* Top Category */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Top Category</h3>
            <p className="text-xl font-bold text-red-600">{stats.topCategory}</p>
            <p className="text-xs text-gray-500 mt-1">33% of total</p>
          </div>

          {/* Recent Transactions - Large Card */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <p className="text-sm font-medium">{transaction.description}</p>
                    <p className="text-xs text-gray-500">{transaction.category} • {transaction.date}</p>
                  </div>
                  <p className="text-sm font-semibold text-red-600">₹{transaction.amount}</p>
                </div>
              ))}
            </div>
            <a href="/expenses" className="text-blue-600 text-sm hover:text-blue-800 mt-4 inline-block">
              View all transactions →
            </a>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="/expenses"
                className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg text-center transition-colors"
              >
                <div className="text-blue-600 text-2xl mb-2">+</div>
                <p className="text-sm font-medium text-blue-600">Add Expense</p>
              </a>
              <button className="bg-green-50 hover:bg-green-100 p-4 rounded-lg text-center transition-colors">
                <div className="text-green-600 text-2xl mb-2">📊</div>
                <p className="text-sm font-medium text-green-600">View Reports</p>
              </button>
              <button className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg text-center transition-colors">
                <div className="text-purple-600 text-2xl mb-2">🎯</div>
                <p className="text-sm font-medium text-purple-600">Set Budget</p>
              </button>
              <button className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg text-center transition-colors">
                <div className="text-orange-600 text-2xl mb-2">📱</div>
                <p className="text-sm font-medium text-orange-600">Export Data</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
