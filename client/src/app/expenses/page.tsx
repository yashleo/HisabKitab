'use client';

import { useState } from 'react';

interface Expense {
  id: number;
  amount: number;
  category: string;
  date: string;
  location: string;
  description: string;
}

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, amount: 500, category: 'Food', date: '2025-08-27', location: 'Restaurant XYZ', description: 'Lunch at restaurant' },
    { id: 2, amount: 1200, category: 'Transport', date: '2025-08-26', location: 'City Center', description: 'Uber ride' },
    { id: 3, amount: 300, category: 'Shopping', date: '2025-08-25', location: 'Supermarket', description: 'Groceries' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    date: '',
    location: '',
    description: ''
  });

  const categories = ['Food', 'Transport', 'Shopping', 'Entertainment', 'Bills', 'Healthcare', 'Education', 'Other'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const expenseData = {
      ...formData,
      amount: parseFloat(formData.amount),
      id: editingExpense ? editingExpense.id : Date.now()
    };

    if (editingExpense) {
      setExpenses(expenses.map(exp => exp.id === editingExpense.id ? expenseData as Expense : exp));
    } else {
      setExpenses([...expenses, expenseData as Expense]);
    }

    // Reset form
    setFormData({ amount: '', category: '', date: '', location: '', description: '' });
    setShowForm(false);
    setEditingExpense(null);
  };

  const handleEdit = (expense: Expense) => {
    setEditingExpense(expense);
    setFormData({
      amount: expense.amount.toString(),
      category: expense.category,
      date: expense.date,
      location: expense.location,
      description: expense.description
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const handleCancel = () => {
    setFormData({ amount: '', category: '', date: '', location: '', description: '' });
    setShowForm(false);
    setEditingExpense(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">Expense Management</h1>
            <div className="flex items-center space-x-4">
              <a href="/home" className="text-blue-600 hover:text-blue-800">Home</a>
              <a href="/dashboard" className="text-blue-600 hover:text-blue-800">Dashboard</a>
              <button className="text-red-600 hover:text-red-800">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex justify-between items-center">
                    <span className="text-sm">{category}</span>
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                      {expenses.filter(exp => exp.category === category).length}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Expenses</h2>
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <span className="mr-2">+</span>
                  {showForm ? 'Cancel' : 'Add Expense'}
                </button>
              </div>

              {/* Add/Edit Form */}
              {showForm && (
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-lg font-medium mb-4">
                    {editingExpense ? 'Edit Expense' : 'Add New Expense'}
                  </h3>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Amount</label>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      >
                        <option value="">Select Category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div className="md:col-span-2 flex space-x-4">
                      <button
                        type="submit"
                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                      >
                        {editingExpense ? 'Update' : 'Add'} Expense
                      </button>
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Expenses List */}
              <div className="p-6">
                <div className="grid gap-4">
                  {expenses.map((expense) => (
                    <div key={expense.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{expense.description}</h3>
                          <div className="mt-1 text-sm text-gray-600">
                            <p>Category: {expense.category}</p>
                            <p>Location: {expense.location}</p>
                            <p>Date: {expense.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-lg font-semibold text-red-600">₹{expense.amount}</p>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEdit(expense)}
                              className="text-blue-600 hover:text-blue-800 text-sm"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(expense.id)}
                              className="text-red-600 hover:text-red-800 text-sm"
                            >
                              Delete
                            </button>
                          </div>
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
