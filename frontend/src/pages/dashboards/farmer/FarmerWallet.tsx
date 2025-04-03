import React, { useState } from 'react';
import { Button, Card, Typography } from "@material-tailwind/react";
export function FarmerWallet() {
  const [balance, setBalance] = useState(1250000); // Example balance in RWF
  const [transactions, setTransactions] = useState([
    {
      id: 'TXN-001',
      date: '2024-03-15',
      description: 'Payment from Kigali Fresh Mart',
      amount: 250000,
      type: 'credit',
    },
    {
      id: 'TXN-002',
      date: '2024-03-14',
      description: 'Purchase of farm supplies',
      amount: -150000,
      type: 'debit',
    },
    {
      id: 'TXN-003',
      date: '2024-03-13',
      description: 'Payment from City Supermarket',
      amount: 450000,
      type: 'credit',
    },
  ]);

  const handleWithdraw = () => {
    alert('Withdraw functionality coming soon!');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Wallet</h1>
        <button
          onClick={handleWithdraw}
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Withdraw Funds
        </button>
      </div>

      {/* Balance Section */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center">
        <h2 className="text-lg font-medium text-gray-700">Current Balance</h2>
        <p className="text-3xl font-bold text-emerald-600">
          RWF {balance.toLocaleString()}
        </p>
      </div>

      {/* Transactions Section */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Transactions</h2>
        <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
          {transactions.map((txn) => (
            <div
              key={txn.id}
              className="flex justify-between items-center px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{txn.description}</p>
                <p className="text-sm text-gray-500">
                  {new Date(txn.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <p
                className={`text-sm font-medium ${
                  txn.type === 'credit' ? 'text-emerald-600' : 'text-rose-600'
                }`}
              >
                {txn.type === 'credit' ? '+' : '-'}RWF {Math.abs(txn.amount).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Placeholder for Future Features */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <p className="text-gray-500">More wallet features coming soon...</p>
      </div>
    </div>
  );
}