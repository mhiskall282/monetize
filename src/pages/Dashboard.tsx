import React from 'react';
import UserStats from '../components/dashboard/UserStats';
import UserModels from '../components/dashboard/UserModels';
import ModelAnalytics from '../components/models/ModelAnalytics';
import ModelComparison from '../components/models/ModelComparison';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>

        <UserStats />
        <UserModels />
        <ModelAnalytics modelId="1" />
        <ModelComparison />
      </div>
    </div>
  );
}