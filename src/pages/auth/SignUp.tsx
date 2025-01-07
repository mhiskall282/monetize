import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate user registration
    localStorage.setItem('user', JSON.stringify({ email: formData.email }));
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6">
      <div className="max-w-md mx-auto">
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Input
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <Input
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />
            <Button type="submit" variant="primary" className="w-full">
              Sign Up
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}