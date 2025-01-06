import React from 'react';
import AdminDashboard from '../components/admin/AdminDashboard';

export default function Admin() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24">
      <div className="max-w-7xl mx-auto">
        <AdminDashboard />
      </div>
    </div>
  );
}