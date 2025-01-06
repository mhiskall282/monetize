import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Users, Download, DollarSign, TrendingUp } from 'lucide-react';
import Card from '../ui/Card';

const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4500 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 5500 },
];

const categoryData = [
  { name: 'Computer Vision', value: 400 },
  { name: 'NLP', value: 300 },
  { name: 'Robotics', value: 300 },
  { name: 'Generative AI', value: 200 },
];

const COLORS = ['#FFD700', '#0088FE', '#00C49F', '#FF8042'];

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '15,342',
      icon: <Users className="w-6 h-6 text-gold" />,
      change: '+12%'
    },
    {
      title: 'Total Downloads',
      value: '45,233',
      icon: <Download className="w-6 h-6 text-gold" />,
      change: '+25%'
    },
    {
      title: 'Revenue',
      value: '$234,567',
      icon: <DollarSign className="w-6 h-6 text-gold" />,
      change: '+18%'
    },
    {
      title: 'Growth Rate',
      value: '24.5%',
      icon: <TrendingUp className="w-6 h-6 text-gold" />,
      change: '+5%'
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-black/5 rounded-lg">{stat.icon}</div>
              <span className="text-sm text-green-500">{stat.change}</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Monthly Sales</h3>
          <LineChart width={500} height={300} data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#FFD700" />
          </LineChart>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Model Categories</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={categoryData}
              cx={200}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Models</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Model Name</th>
                <th className="text-left py-3">Author</th>
                <th className="text-left py-3">Category</th>
                <th className="text-left py-3">Price</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((_, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3">AI Model {index + 1}</td>
                  <td className="py-3">John Doe</td>
                  <td className="py-3">Computer Vision</td>
                  <td className="py-3">$999</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}