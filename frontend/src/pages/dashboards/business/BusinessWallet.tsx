import React, { useState } from 'react';

// Mock transaction data
const transactions = [
  { id: 1, date: '2025-03-01', description: 'Deposit', amount: 100000, type: 'credit' },
  { id: 2, date: '2025-03-08', description: 'Purchase - Tomatoes', amount: -50000, type: 'debit' },
  { id: 3, date: '2025-03-10', description: 'Deposit', amount: 200000, type: 'credit' },
  { id: 4, date: '2025-03-19', description: 'Purchase - Potatoes', amount: -30000, type: 'debit' },
  { id: 5, date: '2025-03-23', description: 'Deposit', amount: 150000, type: 'credit' },
];

export function BusinessWallet() {
  const [balance, setBalance] = useState(370000); // Mock balance
  const [showAddFundsModal, setShowAddFundsModal] = useState(false);
  const [amountToAdd, setAmountToAdd] = useState('');

  // Handle adding funds
  const handleAddFunds = () => {
    if (amountToAdd && !isNaN(Number(amountToAdd))) {
      const amount = parseFloat(amountToAdd);
      setBalance(balance + amount);
      setShowAddFundsModal(false);
      setAmountToAdd('');
      alert(`Successfully added RWF ${amount.toLocaleString()} to your wallet.`);
    } else {
      alert('Please enter a valid amount.');
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Wallet</h1>
        <button
          onClick={() => setShowAddFundsModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Add Funds
        </button>
      </div>

      {/* Wallet Balance */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Wallet Balance</h2>
        <p className="text-3xl font-bold text-gray-900">RWF {balance.toLocaleString()}</p>
      </div>

      {/* Transaction History */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount (RWF)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        transaction.type === 'credit'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {transaction.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Funds Modal */}
      {showAddFundsModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">Add Funds</h2>
            <input
              type="number"
              placeholder="Enter amount (RWF)"
              value={amountToAdd}
              onChange={(e) => setAmountToAdd(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 mb-4"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowAddFundsModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddFunds}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Add Funds
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}